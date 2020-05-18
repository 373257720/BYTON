<template>
  <div id="two">
    {{msg}}
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'two',
    data () {
      return {
        msg: '我是第二个页面'
      }
    }
  }
</script>
<style>
  #two {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
