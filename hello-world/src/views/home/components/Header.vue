<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">内容</div>
    <router-link tag="div" to="/city" class="header-right">
      {{this.$store.state.city}}
      <span class="iconfont">&#xe64a;</span>
    </router-link>
  </div>



</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .header
    display: flex
    line-height:0.86rem
    background-color: $bgColor
    color:#fff
    .header-left
      float:left
      width:.64rem
      padding:0 .1rem
     .header-input
       flex:1
       background-color #ffffff
       margin:.12rem 0 .2rem 0
       border-radius:.1rem
       height:.64rem
       line-height:.64rem
       color:#ccc
    .header-right
      float:right
      padding:0 .1rem
</style>
