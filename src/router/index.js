import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Home from "@/views/Home";
import Animes from "@/views/Animes";
import { withAuth, withAnonymous } from "@/router/guards";
import Profile from "@/views/Profile";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  redirect: "/home"
}, {
  ...withAuth,
  path: "/profile",
  component: Profile
}, {
  ...withAnonymous,
  path: "/signin",
  email: "Login",
  component: Login,
  props: { mode: "/signin" }
}, {
  ...withAnonymous,
  path: "/register",
  email: "Register",
  component: Login,
  props: { mode: "/register" }
}, {
  path: "/home",
  email: "Home",
  component: Home
}, {
  path: "/animes",
  email: "Animes",
  component: Animes
}];

export default new VueRouter({ routes, mode: "history" });
