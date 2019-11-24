<template>
    <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list
        :hotCities="hotCities"
        :cities="cities"
        :letter="letter"
      ></city-list>
      <city-alphabet
        :cities="cities"
        @change="handleLetterChange"
      ></city-alphabet>
    </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import axios from 'axios'
    export default {
        name: "City",
        components:{
          CityList,
          CityHeader,
          CitySearch,
          CityAlphabet
        },
        data () {
          return {
            hotCities:[],
            cities:{},
            letter:''
          }
        },
        methods:{
            getdata(){
              axios.get("/mock/city.json").then(this.getlist)
            },
            getlist(res){
              res=res.data
              console.log(res)
              this.cities=res.data.cities
              this.hotCities=res.data.hotCities
            },
          handleLetterChange (letter) {
              this.letter=letter
          }
        },
        mounted() {
            this.getdata()
        }
    }
</script>

<style lang="stylus" scoped>

</style>
