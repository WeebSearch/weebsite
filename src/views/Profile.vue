<template>
  <div class="columns columns-base">
    <div class="column base">
      <Header class="header"/>
      <Feed class="feed"/>
    </div>
  </div>
</template>

<script>
  import Header from "../components/profile/ProfileHeader";
  import Feed from "../components/profile/Feed";

  export default {
    name: "Profile",
    components: { Feed, Header }
  };
</script>

<style scoped lang="scss">
  .columns-base {
    width: 100%;
    flex-direction: column;
    padding: 0;
  }

  .base {
    width: 100%;
    flex-direction: column;
    padding: 0;
  }

  .header {
    margin: 1.5rem auto;
  }

  .feed {
    margin: 1rem 0;
  }

  .wrapper {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
</style>
