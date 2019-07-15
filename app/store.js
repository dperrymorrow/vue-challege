export default new Vuex.Store({
  modules: {
    countries: {
      namespaced: true,

      state: {
        // the data from all three JSON files merged...
        merged: [],
        filterTable: []
      },
      mutations: {
        SET_MERGE: (state, payload) => (state.merged = payload),
        SET_FILTER_TABLE: (state, payload) => (state.filterTable = payload)
      },
      actions: {
        findByName({ commit }, data) {
          // find the country by name and retun it here for editing
          const updated = [];
          this.state.countries.merged.forEach(item => {
            item.name === data.country
              ? updated.push(data.data)
              : updated.push(item);
          });
          commit("SET_MERGE", updated);
        },
        filterTable({ commit }, data) {
          commit("SET_FILTER_TABLE", data);
        },
        async load({ commit }) {
          // here we will fetch all three JSON files and merge them on country name...
          // can just use native fetch()
          const cities = await fetch("/data/countries-city.json");
          const citiesJSON = await cities.json();
          const abbr = await fetch("/data/countries-abbreviation.json");
          const abbrJSON = await abbr.json();
          const currency = await fetch("/data/countries-currency.json");
          const currencyJSON = await currency.json();

          const merged = [];
          citiesJSON.forEach((item, i) => {
            merged.push(Object.assign({}, item, abbrJSON[i], currencyJSON[i]));
          });

          // Helps persist State across multi routes
          if (this.state.countries.filterTable.length === 0) {
            commit("SET_FILTER_TABLE", merged);
          }
          if (this.state.countries.merged.length === 0) {
            commit("SET_MERGE", merged);
          }
        }
      }
    }
  }
});
