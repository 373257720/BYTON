<template>
  <div id="one">
    {{msg}}
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'one',
    data () {
      return {
        msg: '我是第一个页面'
      }
    }
  }
</script>
<style>
  #one {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
