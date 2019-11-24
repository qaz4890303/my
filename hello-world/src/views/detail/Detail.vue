<template>
    <div>
      <detail-header></detail-header>
      <detail-banner
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
      ></detail-banner>
      <detail-list :list="list"></detail-list>
    </div>
</template>

<script>
  import DetailHeader from './components/Header'
  import DetailBanner from './components/Banner'
  import DetailList from  './components/List'
  import axios from 'axios'
    export default {
        name: "Detail",
        components:{
          DetailHeader,
          DetailBanner,
          DetailList
        },
      data () {
        return {
          sightName: '',
          bannerImg: '',
          gallaryImgs: [],
          list: []
        }
      },
       methods:{
          getdetail () {
            axios.get("/mock/detail.json").then(this.getdata)
          },
         getdata (res) {
           res = res.data
           if (res.ret && res.data) {
             const data = res.data
             this.sightName = data.sightName
             this.bannerImg = data.bannerImg
             this.gallaryImgs = data.gallaryImgs
             this.list = data.categoryList
           }
         }
       },
      mounted () {
          this.getdetail()
      }
    }
</script>

<style lang="stylus" scoped>

</style>
