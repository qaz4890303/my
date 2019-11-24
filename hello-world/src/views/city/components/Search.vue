<template>
    <div>
      <div class="search">
        <input class="search-input" type="text" v-model="keyword">
      </div>
      <div ref="search" class="search-content" v-show="keyword">
        <ul>
          <li class="search-item" v-for="item of list" :key="item.id" @click="clickcity(item.name)">{{item.name}}</li>
          <li class="search-item border-bottom" v-show="hasNoData">
            没有找到匹配数据
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Bscroll from "better-scroll"
    export default {
        name: "Search",
        props:{
          cities:Object
        },
        data () {
          return {
            keyword:'',
            timer:null,
            list:[]
          }
        },
      computed:{
        hasNoData () {
          console.log(this.list.length+" 888888888888888888888888888888888")
          return !this.list.length;
        }
      },
      watch:{
          keyword (){
            if (this.timer){
              console.log(this.timer+"+++++++++++++++++++++++++")
              clearTimeout(this.timer)
            }
            if (!this.keyword) {
              this.list = []
              return
            }
            console.log(this.timer+"=============")
            this.timer = setTimeout(() => {
              const result = []
              for (let i in this.cities) {
                this.cities[i].forEach((value) => {
                  if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                    result.push(value)
                  }
                })
              }
              console.log(result)
              this.list = result
            }, 100)
          }
      },
      methods:{
          clickcity (item) {
            this.$store.dispatch("changcity",item)
            this.$router.push("/")
          }
      },
      mounted () {
          this.scroll = new Bscroll(this.$refs.search, { mouseWheel: true, click: true, tap: true })
      }
    }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
