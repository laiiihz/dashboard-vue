import Vue from "vue";
import Router from "vue-router";
import MapViewMain from "@/views/Main/MapView/MapViewMain";

Vue.use(Router);

export default new Router({
  routes: [{ path: "/", component: MapViewMain }]
});
