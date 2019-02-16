import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Home from "@/views/Home";
import Animes from "@/views/Animes";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  redirect: "/home"
}, {
  path: "/profile",
  meta: {
    requiresAuth: true
  }
}, {
  path: "/login",
  name: "Login",
  component: Login
}, {
  path: "/home",
  name: "Home",
  component: Home
}, {
  path: "/animes",
  name: "Animes",
  component: Animes
}];

export default new VueRouter({ routes });
