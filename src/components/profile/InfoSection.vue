<template>
  <div class="section">
    <div class="content">
      <h1>{{ name }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoSection",
    computed: {
      name() {
        return "Xetera";
      }
    }
  };
</script>

<style scoped>

</style>
