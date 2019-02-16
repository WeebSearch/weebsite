<template>
  <div id="app">
    <Navbar/>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";

  export default {
    name: 'app',
    components: {
      Navbar
    }
  }
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
    height: 100vh;
    width: 100vw;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  @import "~bulma/bulma";
  @import "~buefy/src/scss/buefy";
</style>
