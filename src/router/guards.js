import store from "@/store";
import { Snackbar } from "buefy/dist/components/snackbar";

const isLoggedIn = () => store.dispatch('isUserAuthed');

export const withAuth = {
  beforeEnter: async (to, from, next) => {
    if (!await isLoggedIn()) {
      Snackbar.open({
        message: "You must sign in first.",
        type: "is-danger",
        duration: 3000,
      });
      return next('/signin');
    }

    return next();
  }
};

export const withAnonymous = {
  beforeEnter: async (to, from, next) => {
    if (await isLoggedIn()) {
      Snackbar.open({
        message: "You're already signed in.",
        type: "is-primary",
        duration: 3000
      });
      return next(from.path);
    }

    return next();
  }
};
