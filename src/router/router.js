import Vue from "vue";
import Router from "vue-router";
import MapViewMain from "@/views/Main/MapView/MapViewMain";
import IndexContent from "@/views/Main/IndexContent";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: IndexContent },
    { path: "/map", component: MapViewMain }
  ]
});
