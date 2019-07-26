import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "./registerServiceWorker";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "normalize-css/normalize.css";
import BaiduMap from "vue-baidu-map";
import "element-ui/lib/theme-chalk/display.css";
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(BaiduMap, {});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
