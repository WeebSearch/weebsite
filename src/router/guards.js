import store from "@/store";
import { Snackbar } from "buefy/dist/components/snackbar";

const isLoggedIn = () => Boolean(store.state.user);

export const withAuth = {
  beforeEnter: (to, from, next) => {
    if (!isLoggedIn()) {
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
  beforeEnter: (to, from, next) => {
    if (isLoggedIn()) {
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
