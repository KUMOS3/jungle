<template>
  <div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="col-8" style="text-align:left">
        <h5 id="D2" class="my-5">
        </h5>
        <h1 class="my-5">
          Profile: Jungler {{ this.$store.state.userInfo.nickname }}
          <span class="fa-lg spin" style="color: #2F959A"><font-awesome-icon :icon="['fab', 'pagelines']" spin/></span>
        </h1>


          <div v-if="this.$store.state.userToken" class="D2">
            {{ this.$store.state.userInfo }}
            <p>ID:  {{ this.$store.state.userInfo.username }}</p>
            <p>nickname:  {{ this.$store.state.userInfo.nickname }}</p>
            <p>date_joined:  {{ this.$store.state.userInfo.date_joined }}</p>
            <p>birth_year:  {{ this.$store.state.userInfo.birth_year }}</p>
            <p>favorite_movie:  {{ this.$store.state.userInfo.favorite_movie }}</p>
            <p>like_movies:  {{ this.$store.state.userInfo.like_movies }}</p>
            <p>dislike_movies:  {{ this.$store.state.userInfo.dislike_movies }}</p>
            <p>wish_movies:  {{ this.$store.state.userInfo.wish_movies }}</p>     

            <ul v-if="this.$store.state.userToken" class="D2 list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Movies that you liked : {{ this.$store.state.userInfo.like_movies }}
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li class="D2 list-group-item d-flex justify-content-between align-items-center">
                Movies that you disliked : {{ this.$store.state.userInfo.dislike_movies }}
                <span class="badge bg-primary rounded-pill">2</span>
              </li>
              <li class="D2 list-group-item d-flex justify-content-between align-items-center">
                Movies that you wished : {{ this.$store.state.userInfo.wish_movies }}
                <span class="badge bg-primary rounded-pill">1</span>
              </li>
            </ul>
          </div>


        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Profile',
  data: function () {
    return {
      userid: '',
    }
  },
  methods: {
    getUserInfo: function () {
      this.userid = this.$store.getters.decodedToken.user_id
      this.$store.dispatch('getUserInfo', this.userid)
    },
    ...mapMutations([
      'CHANGE_COLOR'
    ])
  },
  created: function () {
    this.CHANGE_COLOR('day')
    document.body.style.backgroundImage = "linear-gradient( #0C2F4D 80%,  #092742 100% )"
    this.getUserInfo()
  }
}
</script>

<style>
h1 {
  font-size: 80px;  
}

body {
  font-size: 25px;
}
</style>