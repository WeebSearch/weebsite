import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from "./firebase";
import { applyTimeout } from "@/utils/utils";

Vue.use(Vuex);

const actions = {
  isUserAuthed({ state }) {
    const MAX_TIMEOUT = 5000;
    const fetchUserStatus = new Promise(res => {
      if (state.authChecked) {
        return res(state.user);
      }
      // data has not yet loaded here, waiting for firebase
      this.subscribe((e) => {
        if (e.type === "checkAuth") {
          return res(Boolean(state.user));
        }
      });
    });

    return applyTimeout(fetchUserStatus, MAX_TIMEOUT).catch(() => false);
  },
  async signIn({ state, commit }, { email, password }) {
    await auth.setPersistence('session');
    await auth.signInWithEmailAndPassword(email, password);
    commit('setUser');
    return state.user;
  },
  async logout({ state, commit }) {
    await auth.signOut();
    commit('setUser');
  }
};

const store = new Vuex.Store({
  state: {
    user: undefined,
    authChecked: false
  },
  mutations: {
    setUser: state => {
      state.user = auth.currentUser;
    },
    checkAuth: state => {
      state.authChecked = true;
    }
  },
  actions
});

auth.onAuthStateChanged(user => {
  store.commit('setUser');
  store.commit('checkAuth');
});

export default store;
