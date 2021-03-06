export default new Vuex.Store({
  modules: {
    countries: {
      namespaced: true,

      state: {
        // the data from all three JSON files merged...
        merged: []
      },

      actions: {
        async findByName() {
          // find the country by name and retun it here for editing
        },

        async load() {
          // here we will fetch all three JSON files and merge them on country name...
          // can just use native fetch()
        }
      }
    }
  }
});
