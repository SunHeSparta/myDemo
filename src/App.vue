<template>
  <div id="app">
    <img src="./assets/logo.png">
    <a-button type="primary" @click="getData()">点它</a-button>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  //let data = "";
  export default {
    data() {
      return {
        data:"hello"
      };
    },
    methods: {
      getData() {
        // get请求
        this.$axios.get("http://127.0.0.1:8082/reconcile/hello").then(res => {
          alert("请求成功，response=" + res.data);
          // data = res.data;
          console.log(res.data);
        });
      }
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
