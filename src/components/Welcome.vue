<template>
  <div class="container">
    <div class="header">Petadise</div>
    <div class="main">
      <el-carousel indicator-position="outside" height="220px">
        <el-carousel-item>
          <img src="./../assets/front1.png">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./../assets/front2.png">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./../assets/front3.png">
        </el-carousel-item>
      </el-carousel>
      <div class="entries-block">
        <div class="entry-block">
          <i class="icon el-icon-place" @click="petGameButton"></i>
          <p class="text">Pet Game</p>
        </div>
        <div class="entry-block">
          <i class="icon el-icon-location" @click="shelterLocationButton"></i>
          <p class="text">Shelter Location</p>
        </div>
        <div class="entry-block">
          <i class="icon el-icon-document" @click="petArchiveButton"></i>
          <p class="text">Pet Archive</p>
        </div>
      </div>
      <h1>
        The Best Pet Matcher
      </h1>
      <p>
        Need help with a recommendation on your best-matched pet? Our guides have got you covered. All you need to do is play a game, and you will receive our tailored match rate report for you.
      </p>
      <img src="./../assets/front-dog.png">
      <h1>
        Adoption Preparation
      </h1>
      <p>
        Have no experience in raising a pet? No worries. We will get you well trained in an interesting digital game. Play fun, and learn fun.
      </p>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      // username: this.$route.params.username || 'Anonymous',
      // uniqueId: this.$route.params.uniqueId,
      // isNewUser: this.$route.params.isNewUser
      username: 'fake',
      uniqueId: '',
      isNewUser: true
    }
  },
  methods: {
    petGameButton: function () {
      console.log(this.isNewUser);
      if (this.isNewUser) {
        this.$router.replace({name: 'Questionnaire', params: {username: this.username, uniqueId: this.uniqueId, isNewUser: this.isNewUser}})
      } else {
        this.$router.replace({name: 'GameMain', params: {petIndex: 0, uniqueId: this.uniqueId}})
      }
    },
    petArchiveButton: function () {
      this.$router.replace({name: 'PetArchive'})
    },
    shelterLocationButton: function () {
      this.$router.replace({name: 'ShelterLocation'})
    }
  },
  mounted: function () {
    this.axios.post('/users/unique-id')
      .then(res => {
        this.uniqueId = res.data.uniqueId
      }).catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
  .welcome-block {
    /*border: 1px solid;*/
    /*margin-top: 50px;*/
    height: 100px;
  }
  .entries-block {
    /*border: 1px solid;*/
    /*margin-top: 50px;*/
    height: 120px;
    display: flex;
  }
  .icon {
    /*border: 1px solid;*/
    font-size: 60px;
  }
  .text {
    margin: 0;
    /*border: 1px solid;*/
  }
  .entry-block {
    /*border: 1px solid;*/
    flex: 1;
  }

  .el-carousel__item:nth-child() {
    background-color: #99a9bf;
    height: 100%;
  }

  .el-carousel {
    height: 250px;
  }
  /*.footer {*/
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*height: 60px;*/
    /*!*border: 1px solid;*!*/
  /*}*/

</style>
