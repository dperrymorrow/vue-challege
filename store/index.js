export default new Vuex.Store({
  modules: {
    countries: {
      namespaced: true,

      state: {
        // the data from all three JSON files merged...
        merged: []
      },

      actions: {
        async load() {
          // here we will fetch all three JSON files and merge them on country them...
          // can just use native fetch()
        }
      }
    }
  }
});
