<template>
  <div class="media-card box is-radiusless">
    <div class="card-base" v-if="!loaded">
      <div class="image-container">
        <div class="gradient placeholder-image"></div>
        <div class="tags-container">
          <div class="gradient placeholder-tag"></div>
          <div class="gradient placeholder-tag"></div>
          <div class="gradient placeholder-tag"></div>
        </div>
      </div>
      <div class="text-container">
        <div class="gradient placeholder-text"></div>
        <div class="gradient placeholder-text"></div>
      </div>
    </div>
    <div class="card-base" v-if="loaded">
      <div class="image-conatiner">

      </div>

    </div>
    <!--<img @load="onLoad" :src="img" alt="">-->
  </div>
</template>

<script>

  export default {
    props: {
      img: String
    },
    data: () => ({
      loaded: false
    }),
    methods: {
      onLoad() {
        this.loaded = true;
      },
      simuateLoad() {
      }
    },
    mounted() {
      const TIMEOUT = 1000;
      setTimeout(() => this.loaded = true, TIMEOUT);
    }
  };
</script>

<style scoped lang="scss">
  @import "../variables";

  .media-card {
    display: inline-flex;
  }

  .card-base {
    width: 100%;
    display: grid;
    grid-template-rows: 4fr 1fr;
    position: relative;
  }

  .tags-container {
    position: absolute;
    margin: 10px;
    height: 50%;
    width: 32px;
    grid-gap: .5rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    top: 0;
    left: 0;
  }

  .placeholder-tag {
    position: relative;
    background-color: $placeholder-alt;
  }

  .text-container {
    padding: 1rem;
    display: grid;
    grid-gap: .5rem;
  }

  .placeholder-text {
    background-color: $placeholder;

    &:last-child {
      width: 80%;
    }
  }

  .image-container {
    position: relative;
    width: 100%;
  }

  .placeholder-image {
    height: 100%;
    padding: 20px;
    background: $placeholder;
  }

  @-webkit-keyframes gradient-slide {
    0% {
      background-position: 0% 56%
    }
    50% {
      background-position: 100% 45%
    }
    100% {
      background-position: 0% 56%
    }
  }

  @-moz-keyframes gradient-slide {
    0% {
      background-position: 0% 56%
    }
    50% {
      background-position: 100% 45%
    }
    100% {
      background-position: 0% 56%
    }
  }

  @-o-keyframes gradient-slide {
    0% {
      background-position: 0% 56%
    }
    50% {
      background-position: 100% 45%
    }
    100% {
      background-position: 0% 56%
    }
  }

  @keyframes gradient-slide {
    0% {
      background-position: 0% 56%
    }
    50% {
      background-position: 100% 45%
    }
    100% {
      background-position: 0% 56%
    }
  }

  .gradient {
    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%);
    background-size: 1000px 640px;

    position: relative;

  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0
    }
    100% {
      background-position: 468px 0
    }
  }
</style>
