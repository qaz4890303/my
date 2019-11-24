import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let diftecity="mk6666666666"
try{
  if (localStorage.city){
    diftecity=localStorage.city
  }
} catch (e) {

}


export default new Vuex.Store({
  state: {
    city:diftecity
  },
  actions: {
    changcity (ctx,city) {
      ctx.commit('changcity',city)
    }
  },
  mutations: {
    changcity (state,city) {
      state.city = city
      try {
        localStorage.city = city
      }catch (e) {

      }

    }
  },
});
