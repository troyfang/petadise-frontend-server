<template>
  <div class="container">
    <div class="header">Style Guide</div>
    <div class="main">
      <h1>Our Design Patterns</h1>
      <h4>Carousel</h4>
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
      <h4>Model Window</h4>
      <img src="./../assets/ModelWindow.png" class="responsive">
      <h4>Notifications</h4>
      <img src="./../assets/notifications.png" class="responsive">
      <h1>Our Colors</h1>
      <img src="./../assets/Colors.png" class="responsive">
      <h1>Our Fonts</h1>
      <p class="header-font">The font for header is Bradley Hand, cursive</p>
      <p>The font for paragraphs is Comic Sans MS</p>
      <h1>Our Button</h1>
      <el-button type="primary" size="medium" @click="generateReportButton">Button Example</el-button>
      <br>
      <br>
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
  .header-font{
      font-family: Bradley Hand, cursive;
  }
  .responsive {
    width: 100%;
    height: auto;
  }
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
