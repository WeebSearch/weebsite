<template>
  <ResponsiveRows class="wrapper">
    <div class="columns profile-container is-8">
      <div class="column is-one-third">
        <SummarySection/>
      </div>
      <div class="column is-two-thirds">
        <InfoSection/>
      </div>
    </div>
  </ResponsiveRows>
</template>

<script>
  import ResponsiveRows from "@/components/helpers/ResponsiveRows";
  import SummarySection from "@/components/profile/SummarySection";
  import InfoSection from "../components/profile/InfoSection";

  export default {
    name: "Profile",
    components: { InfoSection, SummarySection, ResponsiveRows }
  };
</script>

<style scoped lang="scss">
  .wrapper {
    justify-content: center;
  }
</style>
