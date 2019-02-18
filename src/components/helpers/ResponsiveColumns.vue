<template>
  <div class="base" >
    <div class="columns" :style="{ 'padding-top': `${paddingTop}%` }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['paddingTop'],
    // data() {
    //   return {
    //     paddingTop: this.paddingTop
    //   };
    // }
  };
</script>
<style scoped lang="scss">
  @import "../../variables";

  .base {
    display: flex;
    width: 100%;
    align-items: center;
    @media(min-width: $tablet) {
      width: 75%;
    }
  }

  .columns {
    flex-direction: row;
    width: 100%;
  }

</style>
