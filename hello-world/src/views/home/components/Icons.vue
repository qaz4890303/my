<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="item" v-for="item of page" :key="item.id">
          <div class="item-box"><img class="item-img" :src="item.imgUrl" alt=""></div>
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name:"HomeIcons",
    data () {
      return {
        swiperOption: {
          autoplay: false
        }
      }
    },
    props:{
      list:Array
    },
    computed: {
      pages () {
        const pages = []
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .icons
    margin-top:.1rem
    overflow: hidden
    height:0
    padding-bottom:50%
    .item
      width 25%
      height:0
      float:left;
      padding-bottom:25%
      text-align:center
      position:relative
      .item-box
        position:absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        .item-img
          display: block
          margin: 0 auto
          height: 100%
          border-radius:.2rem
      p
        position:absolute
        left:0
        right:0
        bottom:0
        height: .44rem
        line-height: .44rem
</style>
