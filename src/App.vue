<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
  .container {
    position: releative;
    font-family: "Comic Sans", "Comic Sans MS", "Chalkboard", "ChalkboardSE-Regular", sans-serif;
    /* font-family: Jazz LET, fantasy; */
  }
  .header {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    font-family: Bradley Hand, cursive;
    background-color: #e6b8af;
    text-align: center;
    line-height: 60px;
    /*These for lines are to fix header in the top*/
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    /*border: 1px solid;*/
  }

  .nav-open {
  float: left;
  padding-left: 15px;
  text-align: left;
  cursor: pointer;
}
.nav-open-game {
  position:absolute;
  z-index:100;
  font-size: 28px;
  font-weight: 700;
  color: #e6b8af;
  font-family: Bradley Hand, cursive;
  background-color: #fff;
  text-align: center;
  float: left;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #A43F49;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  font-size: 20px;
  text-align: center;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.profile-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  width: 40%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px
}

  .main {
    background-color: white;
    color: #333;
    text-align: center;
    /*These for lines are to fix main in the middle*/
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    bottom: 60px;
    /*border: 1px solid;*/
  }
  .footer {
    /* background-color: #B3C0D1; */
    color: #333;
    text-align: center;
    height:60px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .el-button {
    display: inline-block !important;
    padding: 12px 20px!important;
    background-color: #E6B8AF!important;
    color: #a43f49!important;
    font-family: "Comic Sans", "Comic Sans MS", "Chalkboard", "ChalkboardSE-Regular", sans-serif !important;
    font-size: 13px!important;
    font-weight: 800!important;
    letter-spacing: 0.5px!important;
    text-transform: uppercase!important;
    transition: all 0.5s!important;
    border-color:  #fff!important;
    border-radius: 20px !important;
  }
  .el-message-box {
    font-family: "Comic Sans", "Comic Sans MS", "Chalkboard", "ChalkboardSE-Regular", sans-serif;
    /* font-family: Jazz LET, fantasy; */
    margin: auto auto;
    width: 300px !important;
  }

  .h4 {
    font-size: 26px;
    font-weight: 700;
    color: #3B5257 !important;
    letter-spacing: 0.25px;
  }
  .el-progress-bar__inner{
    background-color: #E6B8AF!important;
  }
  .el-tabs__item.is-active {
    color: #a43f49 !important;
  }
  .el-tabs__item {
    color: #E6B8AF !important;
  }
  p {
    margin: 2%;
    padding: 3%;
    color: #3B5257;
  }
</style>
