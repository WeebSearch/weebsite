<template>
  <div class="columns">
    <div class="column section">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: "ResponsiveColumn"
	}
</script>

<style scoped lang="scss">
  @import "../../variables";
  .columns {
    width: 100%;
    @media(min-width: $tablet) {
      width: 65%;
    }
  }

</style>
