<template>
  <div class="wrapper">
    <div id="app">
      <Navbar/>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
    <transition name="fade">
      <div class="cover" v-if="!authChecked">
        <Loader/>
      </div>
    </transition>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import Loader from "@/components/Loader";

  export default {
    name: 'app',
    computed: {
      authChecked() {
        return this.$store.state.authChecked;
      }
    },
    components: {
      Loader,
      Navbar
    }
  };
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/all";
  @import url('https://fonts.googleapis.com/css?family=Overpass');
  @import "global";

  .cover {
    background-color: $background-color;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .wrapper {
    height: 100%;
  }

  .narrow-content {
    width: 65%;
  }

  .padded-top {
    padding-top: 1rem;
  }

  .view {
    height: calc(100% - 52px) !important;
    display: flex;
    justify-content: center;
  }

  body, html {
    min-height: 100vh;
    background-color: $background-color;
  }

  * {
    font-family: Overpass, Roboto, Arial, sans-serif;
  }

  #app {
    width: 100vw;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  @import "~bulma/bulma";
  @import "~buefy/src/scss/buefy";
</style>
