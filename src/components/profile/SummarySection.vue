<template>
  <div>
    <figure class="image is-square">
      <img :src="image" alt="" class="">
    </figure>
  </div>
</template>

<script>
	export default {
		name: "SummarySection",
    computed: {
      image() {
        return "https://cdn.discordapp.com/avatars/140862798832861184/a_aff9dd814944fb8723635d74efd61f18.gif?size=256";
      }
    }
	};
</script>

<style scoped>

</style>
