<template>
  <div class="container">
    <div class="header">
      Shelters Near By You
    </div>
    <div class="main">
      <div class="location"></div>
    </div>
    <div class="footer">
      <el-button type="primary" @click="backButton">BACK</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    backButton: function () {
      this.$router.replace({name: 'Welcome'})
    }
  }
}
</script>

<style scoped>
  .location {
    /*border: 1px solid;*/
    height: 300px;
    width: 90%;
    margin: 20px;
    background: url('../assets/location.png') no-repeat center;
  }
</style>
