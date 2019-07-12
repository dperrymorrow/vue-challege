import store from "./store.js";
import router from "./router.js";

new Vue({
  el: "#app-container",
  template: "<router-view/>",
  store,
  router
});
