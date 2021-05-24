<template>
  <div>
    <h1>MyProfile</h1>
    <div v-if="this.$store.state.userToken">
      <p>{{ this.$store.state.userInfo }}</p>
      <p>username:  {{ this.$store.state.userInfo.username }}</p>
      <p>nickname:  {{ this.$store.state.userInfo.nickname }}</p>
      <p>date_joined:  {{ this.$store.state.userInfo.date_joined }}</p>
      <p>birth_year:  {{ this.$store.state.userInfo.birth_year }}</p>
      <p>favorite_movie:  {{ this.$store.state.userInfo.favorite_movie }}</p>
      <p>like_movies:  {{ this.$store.state.userInfo.like_movies }}</p>
      <p>dislike_movies:  {{ this.$store.state.userInfo.dislike_movies }}</p>
      <p>wish_movies:  {{ this.$store.state.userInfo.wish_movies }}</p>
      
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

</style>