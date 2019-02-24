<template>
  <div class="bg-wrapper">
    <div class="columns main-wrapper">
      <div class="columns">
        <div class="column">
          <div class="tabs">
            <ul>
              <li class="level-item is-active">
                <a href="#">Info</a>
              </li>
              <li class="level-item">
                <a href="#">Followers <p class="follower-count">250</p></a>
              </li>
              <li class="level-item">
                <a href="#">Following <p class="follower-count">14</p></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="columns items">
        <div class="column is-one-fifth">
          <div class="panel">
            <div class="panel-heading is-radiusless">
              <div class="subtitle">Contributions</div>
            </div>
          </div>
        </div>
        <div class="main column is-four-fifth">
          <div class="description content card">
            <div class="card-header">
              <div class="card-header-title">
                About
              </div>
            </div>
            <div class="card-content">
              <p>I guess I make stuff sometimes</p>
            </div>
          </div>
          <div>
            <div class="box green is-radiusless">
              <div class="subtitle">Feed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Feed"
  };
</script>

<style scoped>
  .follower-count {
    margin-left: 5px;
    color: #9098b4;
  }
  .columns {
    margin: 0;
  }

  .main-wrapper {
    flex-direction: column;
    display: flex;
    width: 65%;
  }

  .bg-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: white;
    height: 100%;
  }

  .tab {
    border-bottom: 2px solid #ddd;
  }
</style>
