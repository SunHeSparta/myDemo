<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
    <span>hi,ni hao!</span>
  </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'hi,ni hao!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
