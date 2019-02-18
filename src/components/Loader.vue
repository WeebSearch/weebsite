<template>
  <div class="wrapper">
    <img :src="loader" alt="loader">
  </div>
</template>

<script>
  import loader from "@/assets/loader.gif";

  export default {
    name: "Loader",
    data() {
      return {
        loader
      };
    }
  };
</script>

<style scoped>
  .wrapper {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
  }

</style>
