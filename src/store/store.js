import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    asideOpen: true
  },
  mutations: {
    changeAsideOpen(state) {
      state.asideOpen = !state.asideOpen;
    }
  },
  actions: {}
});
