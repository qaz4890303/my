<template>
      <ul class="list">
        <li class="item"
            v-for="item of letters"
            :key="item"
            @click="handleLetterClick"
        >{{item}}</li>
      </ul>
</template>

<script>
    export default {
        name: "Alphabet",
        props:{
          cities:Object
        },
        computed:{
          letters () {
            const letters=[]
            for (let i in this.cities){
              letters.push(i)
            }
            return letters
          }
        },
      methods:{
        handleLetterClick (e) {
         this.$emit("change", e.target.innerText)
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .list
    position absolute
    top:1.58rem
    right:0
    width:.4rem
    text-align:center
    .item
      height:.4rem
      line-height:.4rem
      color: $bgColor
</style>
