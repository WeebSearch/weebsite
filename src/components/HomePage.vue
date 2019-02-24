<template>
  <ResponsiveRows>
    <div class="column">
      <div class="content">
        <SearchBar :placeholders="placeholders"/>
      </div>
      <div class="previews">
        <div class="card-container" :key="image" v-for="image in images">
          <MediaCard
            class="media-card"
            img="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
          />
        </div>
      </div>
    </div>
  </ResponsiveRows>
</template>

<script>
  import BInput from "buefy/src/components/input/Input";
  import MediaCard from "@/components/MediaCard";
  import SearchBar from "@/components/SearchBar";
  import ResponsiveRows from "@/components/helpers/ResponsiveRows";

  import placeholders from "@/data/search-placeholders.json";

  const PLACEHOLDER_COUNT = 15;

  export default {
    components: { ResponsiveRows, SearchBar, MediaCard },
    data: () => ({
      images: [...Array(PLACEHOLDER_COUNT)],
      placeholders,
      loaded: false
    }),
    methods: {
      simulateLoad() {
        // setTimeout(() => this.loaded = true, 3000);
      }
    }
  };
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
