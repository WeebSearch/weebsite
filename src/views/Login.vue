<template>
    <LoginPage/>
</template>

<script>
  import LoginPage from "@/components/LoginPage";
  import { Snackbar } from "buefy/dist/components/snackbar";

  export default {
    email: "Login",
    components: { LoginPage },
    mounted() {
      const alreadyLoggedIn = this.$store.state.user;
      if (alreadyLoggedIn) {
        Snackbar.open("You're already signed in!");
        this.$router.push('home');
      }
      // console.log(this.props)
      // if (!this.mode) {
      //   this.mode = "/signin"
      // }
    }
  };
</script>

<style scoped>

</style>
