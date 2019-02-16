<template>
  <div class="base">
    <div class="columns wrapper">
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
          <h2 class="login-title is-size-3">Sign in</h2>
          <b-field class="login-label" label="Email">
            <b-input placeholder="hifumi@eaglejump.com" v-model="name"></b-input>
          </b-field>
          <b-field class="login-label" label="Password">
            <b-input type="password" placeholder="••••••••" v-model="password"></b-input>
          </b-field>
          <div class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <b-checkbox v-model="checkbox" size="is-small">Remember me</b-checkbox>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <router-link to="/passwordreset" class="is-size-7">Forgot my password</router-link>
              </div>
            </div>
          </div>
          <button class="login-button button is-primary is-fullwidth"
                  :disabled="!canLogin()">
            Sign in
          </button>
        </div>
        <div class="box is-radiusless">
          <b-field label="Sign in with">
            <button class="button is-fullwidth is-info">
              <b-icon icon-pack="fab" icon="fa-google"></b-icon>
              Google
            </button>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import wallpaper from "@/assets/weebsearch_login.jpg";
  import BInput from "buefy/src/components/input/Input";
  import google from "@/assets/google.png";
  import BIcon from "buefy/src/components/icon/Icon";
  import BCheckbox from "buefy/src/components/checkbox/Checkbox";

  export default {
    name: "Login",
    components: { BCheckbox, BIcon, BInput },
    data: () => ({
      name: "",
      password: "",
      wallpaper,
      google
    }),
    methods: {
      canLogin() {
        return this.name && this.password;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../variables.scss";

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
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .login-title {
    text-align: center;
  }
</style>
