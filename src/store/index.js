import Vuex from 'vuex';
import fetchAllBeers from '../data/data';

export default Vuex.createStore({
  state() {
    return {
      homePageData: [],
    };
  },

  actions: {
    fetchHomePageData({ commit }) {
      return fetchAllBeers()
        .then((data) => {
          commit('setHomePageData', data.beers);
        });
    },
  },

  mutations: {
    setHomePageData(state, data) {
      state.homePageData = data;
    },
  },

});
