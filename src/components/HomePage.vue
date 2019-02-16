<template>
  <ResponsiveColumn>
    <div class="column">
      <div class="content">
        <h1 class="is-size-1 has-text-centered">Weebsearch</h1>
        <SearchBar :placeholders="placeholders"/>
      </div>
      <div class="previews">
        <div class="card-container" v-for="image in images">
          <MediaCard
            class="media-card"
            img="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"

          />
        </div>
      </div>
    </div>
  </ResponsiveColumn>
</template>

<script>
  import BInput from "buefy/src/components/input/Input";
  import MediaCard from "@/components/MediaCard";
  import SearchBar from "@/components/SearchBar";
  import ResponsiveColumn from "@/components/helpers/ResponsiveColumn";

  import placeholders from "@/data/search-placeholders.json";


  export default {
    name: "HomePage",
    components: { ResponsiveColumn, SearchBar, MediaCard, BInput },
    data: () => ({
      images: [1, 2, 34, 2, 3, 2, 42, 4, 24, 1, 4, 1, 4],
      placeholders
    })
  }
</script>

<style scoped>
  .card-container {
    display: flex;
    justify-content: center;
  }

  .media-card {
    padding: 0;
    width: 100%;
    min-height: 350px;
  }

  .base {
    width: 80%
  }

  .previews {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(8, 1fr);
    grid-gap: 2rem;
  }

</style>
