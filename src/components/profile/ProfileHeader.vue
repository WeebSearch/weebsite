<template>
  <div class="bg-wrapper">
    <div class="columns items">
      <div class="column is-one-fifths avatar-container">
        <figure class="image">
          <img :src="user.avatar" alt="" class="is-rounded avatar">
        </figure>
      </div>
      <div class="column is-four-fifths">
        <div class="content header-text">
          <div>
            <p class="name title">{{ user.name }}</p>
            <p class="name-tag subtitle">@Xetera</p>
          </div>
          <div class="level user-tags">
            <div class="level-left">
              <div class="level-item">
                <!--<div class="button is-inverted">Member</div>-->
                <div class="tag is-active is-size-6-desktop">Member</div>
              </div>
              <div class="level-item">
                <div class="tag is-white is-size-6-desktop">Bot</div>
              </div>
              <div class="level-item">
                <div class="tag is-size-6-desktop is-info donator">Donator</div>
              </div>
              <div class="level-item">
                <span class="tag is-danger is-size-6-desktop">Alpha Tester</span>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button
                  @click="follow"
                  class="button follow is-outlined is-primary is-size-6-desktop is-size-7-mobile"
                >
                  {{ user.following ? "Following" : "Follow" }}
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileHeader",
    computed: {
      user() {
        return {
          name: "Xetera",
          following: false,
          avatar: "https://cdn.discordapp.com/avatars/140862798832861184/a_aff9dd814944fb8723635d74efd61f18.gif?size=256"
        };
      }
    },
    methods: {
      follow() {
        this.$toast.open({
          duration: 3000,
          type: "is-success",
          position: "is-top",
          message: `Now following ${this.user.name}`
        });
      }
    }
  };
</script>

<style scoped>
  .bg-wrapper {
    display: flex;
    justify-content: center;
  }

  .name {
    margin-bottom: .6em !important;
  }

  .name-tag {
    color: darkgrey;
  }

  .items {
    width: 65%;
    padding: 1rem 0;
    height: 80%;
  }

  .avatar-container {
    display: flex;
    justify-content: center;
  }

  .avatar {
    width: auto;
    max-height: 150px;
  }

  .header-text {
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .donator {
    animation-duration: 10s !important;
    animation-iteration-count: infinite !important;
    animation-name: rainbow !important;
    animation-timing-function: ease-in-out;
  }

  .user-tags {
    align-items: center;
    display: flex;
  }

  @keyframes color_change {
    from {
      background-color: #8ea9ff;
    }
    to {
      background-color: #ff9882;
    }
  }
</style>
