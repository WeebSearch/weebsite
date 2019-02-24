<template>
  <div class="bg-wrapper">
    <div class="columns main-wrapper">
      <div class="columns">
        <div class="column">
          <b-tabs position="is-centered">
            <b-tab-item class="is-active">
              <template slot="header">
                <span>Info</span>
              </template>
            </b-tab-item>
            <b-tab-item>
              <template slot="header">
                <span>Followers <b-tag>250</b-tag></span>
              </template>
            </b-tab-item>
            <b-tab-item class="is-active">
              <template slot="header">
                <span>Following <b-tag>25</b-tag></span>
              </template>
            </b-tab-item>
          </b-tabs>
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
        <div class="main column is-three-fifth">
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
        <div class="column is-one-fifth">
          <div class="box is-radiusless">
            <div class="content">
              <div class="subtitle">Social</div>
              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <b-icon icon="discord" pack="fab" class="discord"></b-icon>
                  </div>
                  <div class="level-item">
                    <span class="is-size-6-desktop">Xetera#0001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BTabs from "buefy/src/components/tabs/Tabs";
  import BTabItem from "buefy/src/components/tabs/TabItem";
  import BTag from "buefy/src/components/tag/Tag";

  export default {
    name: "Feed",
    components: { BTag, BTabItem, BTabs }
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

  @media screen and (max-width: 768px) {
    li:not(.is-active) > a > span:not(.icon) {
      visibility: hidden;
      position: absolute;
    }

    nav.tabs li:not(.is-active) {
      -webkit-box-flex: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      -ms-flex-negative: 1;
      flex-shrink: 1;
    }

    .tabs .icon {
      margin-left: 0.5em;
    }
  }

  .tabs li {
    transition: flex-grow 1s ease;
  }
</style>
