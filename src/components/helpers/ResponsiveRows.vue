<template>
  <div class="columns" :style="{ 'padding-top': paddingTop }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['paddingTop'],
  };
</script>

<style scoped lang="scss">
  @import "../../variables";

  .columns {
    width: 100%;
    @media(min-width: $tablet) {
      width: 80%;
      max-width: 1400px;
    }
  }
</style>
