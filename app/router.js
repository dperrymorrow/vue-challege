export default new VueRouter({
  routes: [
    {
      name: "root",
      path: "/",
      component: httpVueLoader("/components/country-index.vue")
    },
    {
      name: "countryEdit",
      component: httpVueLoader("/components/country-edit.vue"),
      path: "/country/:name",
      props: true
    }
  ]
});
