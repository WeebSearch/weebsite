<template>
  <ResponsiveColumns padding-top="6.5">
    <div class="column info is-two-thirds content">
      <div class="box is-radiusless">
        <p class="is-size-4">
          Weebsearch is a service for tracking dialogues of anime characters and episodes.
        </p>
        <ul>
          <li>Search episode transcripts</li>
          <li>Look up character statistics</li>
          <li>List your favorite character's dialogues</li>
        </ul>
      </div>
    </div>
    <div class="column login is-one-third">
      <div class="box is-radiusless">
        <div class="tabs is-marginless">
          <ul>
            <li @click="mode = `/signin`" :class="{ 'is-active': mode === `/signin` }">
              <a href="#signin">Sign in</a>
            </li>
            <li @click="mode = `/register`" :class="{ 'is-active': mode === `/register` }">
              <a href="#register">Register</a>
            </li>
          </ul>
        </div>
        <br>
        <form id="signin">
          <b-field class="login-label" label="Email">
            <b-input type="Email" placeholder="hifumi@eaglejump.com" v-model="email"></b-input>
          </b-field>
          <b-field class="login-label" label="Password">
            <b-input minlength="6" type="password" placeholder="••••••••" v-model="password"></b-input>
          </b-field>
          <div class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <b-checkbox v-model="rememberme" size="is-small">Remember me</b-checkbox>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <router-link to="/passwordreset" class="is-size-7">Forgot my password</router-link>
              </div>
            </div>
          </div>
          <button
            type="submit"
            form="signin"
            @click="signIn"
            class="login-button button is-primary is-fullwidth"
            :disabled="!canLogin()">
            Sign in
          </button>
        </form>
      </div>
      <div class="box is-radiusless">
        <b-field label="Sign in with">
          <button class="button is-fullwidth" disabled>
            <b-icon icon-pack="fa" icon="fa-google"></b-icon>
            Google
          </button>
        </b-field>
      </div>
    </div>
  </ResponsiveColumns>
</template>

<script>
  import BInput from "buefy/src/components/input/Input";
  import BIcon from "buefy/src/components/icon/Icon";
  import BCheckbox from "buefy/src/components/checkbox/Checkbox";
  import google from "@/assets/google.png";
  import ResponsiveColumns from "@/components/helpers/ResponsiveColumns";


  export default {
    components: { ResponsiveColumns, BCheckbox, BIcon, BInput },
    props: {
      mode: String,
    },
    data() {
      return {
        email: "",
        password: "",
        rememberme: false,
        google
      };
    },
    methods: {
      canLogin() {
        return this.email && this.password;
      },
      handleError(e) {
        this.$snackbar.open({
          duration: 3500,
          message: e,
          type: "is-danger",
          actionText: "close"
        });
      },
      signIn(e) {
        e.preventDefault();
        const { email, password } = this;
        const container = document.querySelector('body');
        const loading = this.$loading.open({ container });

        this.$store.dispatch('signIn', { email, password }).then(() => {
          loading.close();
          return this.$router.push('/');
        }, (e) => {
          loading.close();
          return this.handleError(e);
        }).then();
      }
    },
  };
</script>

<style scoped lang="scss">
  @import "../variables.scss";

  .wrapper {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .login-button {
  }

  .login-with {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.75rem;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .info {
    /*margin-right: 1rem;*/
  }

  .base {
  }

  .login-title {
    text-align: center;
  }
</style>
