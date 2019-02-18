<template>
  <p class="control has-icons-left">
    <input type="text" class="search input is-large is-radiusless" :placeholder="getRandomPlaceholder()">
    <span class="icon is-medium is-left">
      <i class="fa fa-search"></i>
    </span>
  </p>
</template>

<script>
  import { random } from "@/utils/utils";

  export default {
    props: {
      placeholders: Array
    },
    methods: {
      getRandomPlaceholder() {
        return `"${random(this.placeholders)}"`;
      }
    }
  };
</script>

<style scoped>

</style>
