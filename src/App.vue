<template>
  <div id="app">
    <img src="./assets/logo.png">
    <a-button type="primary" @click="getData()">点它</a-button>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  //let data = "";
  let x = document.cookie;
  console.info(x);
  export default {
    data() {
      return {
        data:"hello"
      };
    },
    methods: {
      getData() {
        // get请求
        this.$axios.get("/nflow_manager_war/a/reconcile/hello1").then(res => {
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
