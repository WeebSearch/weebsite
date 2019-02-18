<template>
  <div class="top-wrapper">
    <div class="nav-section">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/profile" v-if="isLoggedIn">
            <img :src="image"/>
          </router-link>
          <a
            role="button"
            :class="{ 'is-active': menuOpen }"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            @click="toggleMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start" :class="{ 'is-active': menuOpen }">
            <div class="navbar-item" :key="link" v-for="link in links">
              <router-link :key="link" :to=link.toLowerCase()>
                {{ link }}
              </router-link>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item" v-if="!isLoggedIn">
              <div class="buttons">
                <router-link
                  to="/signin"
                  class="button is-outlined"
                >
                  Sign in
                </router-link>
                <router-link
                  to="/register"
                  class="button is-primary "
                >
                  Register
                </router-link>
              </div>
            </div>
            <div class="navbar-item" v-if="isLoggedIn">
              <button to="/" class="button is-outlined" @click="logout">Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  import image from "@/assets/weebsearch.png";
  const hiddenPaths = ["/signin", "/register"];

  // const handleLoginVisibility = (state) =>

  const isInLogin = route => hiddenPaths.some(hidden => hidden === route.path);

  export default {
    data: () => ({
      menuOpen: false,
      links: ["Home", "Animes", "Profile"],
      image,
    }),
    methods: {
      toggleMenu() {
        return this.menuOpen = !this.menuOpen;
      },
      logout() {
        console.log('ye');
        return this.$store.dispatch('logout');
      }
    },
    computed: {
      isLoggedIn() {
        return Boolean(this.$store.state.user);
      }
    },
    watch: {
      // $route({ path }) {
      //   if (isInLogin(path)) {
      //     return this.loginsVisible = false;
      //   }
      //   this.loginsVisible = true;
      // }
    }
  };
</script>

<style scoped lang="scss">
  @import "../variables";

  .navbar {
    background-color: $background-color-alt !important;
    width: 65%;
  }

  .nav-section {
    background-color: $background-color-alt !important;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  a {
    color: $text-color;

    &:hover {
      color: #000000;
    }
  }
</style>
