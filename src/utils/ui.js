import { Toast } from "buefy/dist/components/toast";
import { Loading } from "buefy/dist/components/loading";

const BASE_POPUP_DURATION = 3000;

export const showError = (message, duration = BASE_POPUP_DURATION) => Toast.open({
  message,
  duration,
  type: "is-danger",
  position: "is-bottom"
});

export const showOk = (message, duration = BASE_POPUP_DURATION) => Toast.open({
  message,
  duration,
  type: "is-primary",
  position: "is-bottom"
});

export const withLoading = async (func) => {
  Loading.open();
  await func();
  Loading.close();
};
