<template>
    <div>
      <div class="title">热门推荐</div>
      <ul>
        <router-link tag="li" :to="'/detail/'+item.id"  class="item border-bottom" v-for="item of list" :key="item.id">
          <img class="item-img" :src="item.imgUrl" alt="">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">项目</button>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        props:{
          list:Array
        }
    }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .title
    margin-top:.2rem
    line-height:.8rem
    text-indent: .2rem
    background-color:#eee
  .item
    overflow :hidden
    display :flex
    height 1.9rem
    .item-img
      padding:.1rem
      width:1.7rem
      height:1.7rem
    .item-info
      padding:.1rem
      flex:1
      min-width:0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
      .item-button
        line-height: .44rem
        margin-top: .33rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff

</style>
