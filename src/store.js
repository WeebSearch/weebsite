import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from "./firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined
  },
  mutations: {
    setUser: (state) => state.user = auth.currentUser
  },
  actions: {
    async signIn({ state, commit }, { email, password }) {
      await auth.setPersistence('session');
      await auth.signInWithEmailAndPassword(email, password);
      commit('setUser');
      return state.user;
    },
    async logout({ state, commit }) {
      await auth.signOut();
      commit('setUser');
    },
    synchronizeAuth({ state, commit }, user) {
      console.log(auth.currentUser);
      commit('setUser');
    }
  }
});
