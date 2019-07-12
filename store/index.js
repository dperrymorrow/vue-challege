export default new Vuex.Store({
  modules: {
    countries: {
      namespaced: true,

      state: {
        merged: []
      },

      actions: {
        async load({ commit }) {
          const res = await window.fetch("/data/countries-city.json");
          const byCity = await res.json();

          // here we will fetch the other two JSON files and merge them...

          commit("setMerged", byCity);
        }
      },

      mutations: {
        setMerged: (state, merged) => (state.merged = merged)
      }
    }
  }
});
