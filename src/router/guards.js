import store from "@/store";
import { showError, showOk } from "@/utils/ui";

const isLoggedIn = () => store.dispatch('isUserAuthed');

export const withAuth = {
  beforeEnter: async (to, from, next) => {
    if (!await isLoggedIn()) {
      showError("You must sign in first");
      return next('/signin');
    }

    return next();
  }
};

export const withAnonymous = {
  beforeEnter: async (to, from, next) => {
    if (await isLoggedIn()) {
      showOk("You're already signed in");
      return next(from.path);
    }

    return next();
  }
};
