<template>
  <div class="container">
    <div class="header">PETADISE</div>
    <div class="main">
      <div class="tips-block">
        <!--<el-avatar class="avatar" shape="square" :size="100" :src="squareUrl"></el-avatar>-->
        <p>Tips: {{tips}}</p>
      </div>
      <!--<div>-->
        <!--<p>🌸Pick the food for xx!🌸</p>-->
      <!--</div>-->
      <div class="items-block">
        <div v-if="type === 'feed'">
          <div class="item-1 food-1" @click="chooseItem(1)"></div>
          <div class="item-2 food-2" @click="chooseItem(2)"></div>
          <div class="item-3 food-3" @click="chooseItem(3)"></div>
          <div class="item-4 food-4" @click="chooseItem(4)"></div>
        </div>
        <div v-if="type === 'play'">
          <div class="item-1 play-1" @click="chooseItem(1)"></div>
          <div class="item-2 play-2" @click="chooseItem(2)"></div>
          <div class="item-3 play-3" @click="chooseItem(3)"></div>
          <div class="item-4 play-4" @click="chooseItem(4)"></div>
        </div>
        <div v-if="type === 'walk'">
          <div class="item-1 walk-1" @click="chooseItem(1)"></div>
          <div class="item-2 walk-2" @click="chooseItem(2)"></div>
          <div class="item-3 walk-3" @click="chooseItem(3)"></div>
          <div class="item-4 walk-4" @click="chooseItem(4)"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <el-button type="primary" @click="backButton">BACK</el-button>
      <!--<div class="button-block">-->
        <!--<i class="backButton el-icon-back" @click="backButton()"></i>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'item-page',
  sockets: {
    taskAlert: function (data) {
      this.taskBacklogCounter[data.petName][data.type] += 1
      this.taskBacklogCounter[data.petName]['total'] += 1
      this.latestTaskUniqueId[data.petName][data.type] = data.uniqueTaskId
    }
  },
  data () {
    return {
      type: this.$route.params.type,
      taskUniqueId: this.$route.params.taskUniqueId,
      uniqueId: this.$route.params.uniqueId,
      petIndex: this.$route.params.petIndex,
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      happinessValue: JSON.parse(localStorage.getItem('happinessValue')),
      taskBacklogCounter: JSON.parse(localStorage.getItem('taskBacklogCounter')),
      latestTaskUniqueId: JSON.parse(localStorage.getItem('latestTaskUniqueId')),
      petNames: JSON.parse(localStorage.getItem('petNames')),
      petName: '',
      tips: ''
    }
  },
  mounted: function () {
    this.petName = this.petNames[this.petIndex]
    this.getTipsFromBackend()
  },
  methods: {
    getTipsFromBackend: function () {
      const params = {
        petName: this.petName,
        type: this.type,
        taskUniqueId: this.taskUniqueId
      }
      this.axios.post('/interaction/tips', params)
        .then(res => {
          this.tips = res.data.tips
        }).catch(e => {
          console.log(e)
        })
    },
    chooseItem: function (chooseItemNumber) {
      const chooseItemIndex = chooseItemNumber - 1
      const params = {
        uniqueId: this.uniqueId,
        petName: this.petName,
        type: this.type,
        taskUniqueId: this.taskUniqueId,
        chooseItemIndex: chooseItemIndex
      }
      this.axios.post('/interaction/response', params)
        .then(res => {
          const bonusValue = res.data.happinessBonus.value
          const reason = res.data.happinessBonus.reason
          this.returnToGameMainPage(bonusValue, reason)
        }).catch(e => {
          console.log(e)
        })
    },
    returnToGameMainPage: function (bonusValue, reason) {
      this.happinessValue[this.petName] += bonusValue
      let mood = 'normal'
      if (bonusValue >= 3) {
        mood = 'happy'
      }
      if (bonusValue < 0) {
        mood = 'angry'
      }
      localStorage.setItem('happinessValue', JSON.stringify(this.happinessValue))
      localStorage.setItem('taskBacklogCounter', JSON.stringify(this.taskBacklogCounter))
      localStorage.setItem('latestTaskUniqueId', JSON.stringify(this.latestTaskUniqueId))
      this.$router.replace({name: 'GameMain', params: {petIndex: this.petIndex, uniqueId: this.uniqueId, reason: reason, mood: mood}})
    },
    backButton: function () {
      this.returnToGameMainPage(0, '')
    }
  }
}
</script>

<style scoped>
  .header {
     margin: 0px;
  }
  .main {
    top: 0px;
  }
  .avatar {
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .tips-block {
     /*border: 1px solid;*/
    /*These two to make the tips block the same line with the clock block*/
    display: inline-block;
    width: 90%;
    height: 120px;
    text-align: left;
    margin: 10px;
    background: rgb(230, 184, 175);
    /*background: rgba(230, 184, 175, 0.7);*/
    border-radius: 20px !important;
    font-weight: bold;
  }
  .items-block {
    /* border: 1px solid; */
  }
  .food-1 {
    background: url('../assets/finalelemnet/cannedfood.png') no-repeat center;
  }
  .food-2 {
    background: url('../assets/finalelemnet/dryfood.png') no-repeat center;
  }
  .food-3 {
    background: url('../assets/finalelemnet/bone.png') no-repeat center;
  }
  .food-4 {
    background: url('../assets/finalelemnet/fish.png') no-repeat center;
  }
  .play-1 {
    background: url('../assets/finalelemnet/frisbee.png') no-repeat center;
  }
  .play-2 {
    background: url('../assets/finalelemnet/ball.png') no-repeat center;
  }
  .play-3 {
    background: url('../assets/finalelemnet/bear.png') no-repeat center;
  }
  .play-4 {
    background: url('../assets/finalelemnet/bell.png') no-repeat center;
  }
  .walk-1 {
    background: url('../assets/finalelemnet/street.png') no-repeat center;
  }
  .walk-2 {
    background: url('../assets/finalelemnet/pet_hospital.png') no-repeat center;
  }
  .walk-3 {
    background: url('../assets/finalelemnet/park.png') no-repeat center;
  }
  .walk-4 {
    background: url('../assets/finalelemnet/cafe.png') no-repeat center;
  }
  .item-1 {
    /*border: 1px solid;*/
    border-radius: 50%;
    width: 155px;
    height: 155px;
    float: left;
    margin-left: 25px;
    background-color: rgba(230, 184, 175, 0.4);
  }
  .item-2 {
    border-radius: 50%;
    width: 155px;
    height: 155px;
    float: left;
    margin-left: 20px;
    background-color: rgba(230, 184, 175, 0.4);
    /*width: 50%;*/
    /*height: 165px;*/
    /*float: left;*/
  }
  .item-3 {
    border-radius: 50%;
    width: 155px;
    height: 155px;
    float: left;
    clear: left;
    margin-left: 25px;
    margin-top: 10px;
    background-color: rgba(230, 184, 175, 0.4);
    /*width: 50%;*/
    /*height: 165px;*/
    /*float: left;*/
    /*clear: left;*/
  }
  .item-4 {
    border-radius: 50%;
    width: 155px;
    height: 155px;
    float: left;
    margin-left: 20px;
    margin-top: 10px;
    background-color: rgba(230, 184, 175, 0.4);
    /*width: 50%;*/
    /*height: 165px;*/
    /*float: left;*/
  }
  .button-block {
    /* border: 1px solid; */
    margin-top: 30px;
    font-size: 60px;
    /*line-height:100px;*/
  }
  .backButton {
    /* border: 1px solid; */
    color: #E6B8AF;
    border-radius: 50%;
  }
  /*.footer {*/
    /*height:150px;*/
    /*!*border: 1px solid;*!*/
  /*}*/
</style>
