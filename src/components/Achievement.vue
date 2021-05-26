<template>
  <div v-if="this.$store.state.userToken" >
    <div class="d-flex justify-content-center">
      <div class="row">
        <div class="col-10 mx-auto">
          <h1 class="m-5"> {{ this.$store.state.userInfo.nickname }}'s Titles'
            <span class="spi" style="color: #2F959A"><font-awesome-icon class="big-icon" :icon="['fab', 'pagelines']" spin/></span>
          </h1>
          <h2 class="my-2 me-4 text-end">You got {{userAchievements.length}} titles </h2>
          <div class="d-flex">
            <div class="row">
              <div v-for="ach in this.achievements" :key="ach.id" class="col-xs-6 col-sm-4 col-lg-3" style="height:40vh">
                <div class="border-light m-3 text-center p-2">
                  <h5>{{ ach.name }}</h5>
                  <!-- ?!?!?!?!?  false?!?!?!
                  <p>{{ ach == userAchievements[0]  }}</p> -->
                  <div v-if="ach.achieved_users.includes(userid) ">
                    <div class="mt-4"><font-awesome-icon :icon="['fas', 'gem']" class="xxlg-icon" style="color:#be4bdb" /></div>
                    <p class="mt-3">{{ ach.content }}</p>
                  </div>
                  <div v-else>
                    <div class="mt-4"><font-awesome-icon :icon="['fas', 'gem']" class="xxlg-icon" style="color:#adb5bd"/></div>
                    <p class="mt-3"> ????</p>
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
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Achievement',
  data: function () {
    return {
      achievements: []
    }
  },
  methods: {
    getAchievement: function () {
      if (this.$store.state.userToken) {
        axios({
          method: 'get',
          url: `${SERVER_URL}/accounts/achievement/`,
          headers: {
            Authorization: `JWT ${this.$store.state.userToken}`
          },
        })
          .then((res) => {
            this.achievements = res.data
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  },
  computed: {
    userAchievements () {
      return this.$store.state.userInfo.achievements
    },
    userid () {
      return this.$store.state.userInfo.id
    }
  },
  created: function () {
    this.getAchievement()
  }
}
</script>

<style>


h2 {
  font-size: 20px;
}

.xxlg-icon {
  font-size: 55px;
}

.shine {
  font-family: 'Reggae One', cursive;
  font-weight: 500;
  line-height: 2.5;
  color: inherit;
  text-shadow: 0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5),
    0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2);
}
</style>