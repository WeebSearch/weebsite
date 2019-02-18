<template>
  <div class="wrapper">
    <div id="app" v-if="authChecked">
      <Navbar/>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
    <transition name="fade">
      <Loader v-if="!authChecked"/>
    </transition>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  // import BLoading from "buefy/src/components/loading/Loading";
  import Loader from "@/components/Loader";

  export default {
    name: 'app',
    data() {
      return {
        loader
      }
    },
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

  .narrow-content {
    width: 65%;
  }

  .padded-top {
    padding-top: 1rem;
  }

  @import "~bulma/sass/utilities/all";
  @import "variables";
  @import url('https://fonts.googleapis.com/css?family=Overpass');

  .view {
    height: calc(100% - 52px) !important;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  body, body {
    min-height: 100vh;
    background-color: $background-color;
  }

  * {
    font-family: Overpass, Roboto, Arial, sans-serif;
  }

  #app {
    width: 100vw;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  @import "~bulma/bulma";
  @import "~buefy/src/scss/buefy";
</style>
