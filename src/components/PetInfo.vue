<template>
  <div class="container">
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
      <img src="../assets/img_avatar.png" class="profile-image" alt="Avatar">
      <a href="#" @click="quitButton">Back to Home</a>
      <a style="color:#434343">Logout</a>
      <a href="#" @click="about">About</a>
    </div>
    <div class="header">
      <div class="nav-open" @click="openNav">&#9776;</div>
      {{petName}}
    </div>
    <div class="main">
      <!--<div class="picture-out">-->
        <!--<div class="picture-in"></div>-->
      <!--</div>-->
      <!--<div class="pet-name">-->
        <!--<p>{{petName}}</p>-->
      <!--</div>-->
      <div class="info">
        <p>{{description}}</p>
      </div>
      <div class="location">
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
  data () {
    return {
      petName: this.$route.params.petName,
      report: this.$route.params.report,
      description: ''
    }
  },
  methods: {
    backButton: function() {
      this.$router.replace({name: 'MatchRateReport', params: {report: this.report}})
    },
    quitButton: function () {
      this.$router.replace({name: 'Welcome', params: {username: this.username, uniqueId: this.uniqueId, isNewUser: this.isNewUser}});
    },
    openNav: function() {
      document.getElementById("mySidenav").style.width = "200px";
    },
    closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
    },
    about: function() {
      window.location.href = "https://mailchi.mp/a38976523c45/petadise"
    }
  },
  mounted () {
    this.axios.post('/pet-info/description', {petName: this.petName})
      .then(res => {
        this.description = res.data.description
      }).catch(e => {
        console.log(e)
      })
  }
}
</script>

<style scoped>
  /*.picture-out {*/
    /*!*height: 150px;*!*/
    /*border: 1px solid;*/
  /*}*/
  /*.picture-in {*/
    /*height: 100px;*/
    /*width: 100px;*/
    /*border-radius: 50%;*/
    /*border: 1px solid;*/
    /*margin: 0 auto;*/
    /*background: url('../assets/dog-food-image-example.jpg') no-repeat center;*/

  /*}*/
  /*.pet-name {*/
    /*!*border: 1px solid;*!*/
  /*}*/
  .info {
    height: auto;
    /*border: 1px solid;*/
  }
  .location {
    /*border: 1px solid;*/
    height: 300px;
    width: 90%;
    margin: 20px;
    background: url('../assets/location.png') no-repeat center;
  }
  .button-block {
    border: 1px solid;
    font-size: 60px;
    /*line-height:100px;*/
  }
  .backButton {
    border: 1px solid;
    color: white;
    border-radius: 50%;
  }
  /*.footer {*/
    /*height: 100px;*/
  /*}*/
</style>
