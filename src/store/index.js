import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    country: [],
  },
  getters: {},
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    },
    decrement(state, payload) {
      state.count -= payload.amount;
    },
    SET_COUNTRY(state, actions) {
      state.count = actions;
    },
  },
  actions: {
    async fetchCountry({ commit }) {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        commit("SET_COUNTRY", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
