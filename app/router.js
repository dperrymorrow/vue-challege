export default new VueRouter({
  routes: [
    {
      name: "root",
      path: "/",
      component: httpVueLoader("/components/country-index.vue")
    },

    {
      name: "countryShow",
      component: httpVueLoader("/components/country-show.vue"),
      path: "/country/:name",
      props: true
    }
  ]
});
