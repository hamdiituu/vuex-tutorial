import Vue from 'vue'
import Vuex from 'vuex'
/* modules */
import math from './modules/math';
import metro from './modules/metro';

Vue.use(Vuex)

const state = {
  message: 'Hello Vuex',
  username: 'Hamdi'
};
const getters = {
  welcomeMessage(state) {
    return `${state.message} ${state.username}`;
  }
};
const mutations = {
  setUserName(state, name) {
    state.username = name;
  },
  setMessage(state,message){
    state.message = message;
  }

};
const actions = {
  updateUsername({commit},name){
    commit('setUserName',name);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules :{
    math,
    metro
  }
})
