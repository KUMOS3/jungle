<template>
  <div>
    <h1>MyProfile</h1>
    <div v-if="this.$store.state.userInfo">
      <p>{{ this.$store.state.userInfo }}</p>
      <p>username:  {{ this.$store.state.userInfo.username }}</p>
      <p>nickname:  {{ this.$store.state.userInfo.nickname }}</p>
      <p>date_joined:  {{ this.$store.state.userInfo.date_joined }}</p>
      <p>birth_year:  {{ this.$store.state.userInfo.birth_year }}</p>
      <p>favorite_movie:  {{ this.$store.state.userInfo.favorite_movie }}</p>
    </div>
    

  </div>
</template>

<script>
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
    }
  },
  created: function () {
    this.getUserInfo()
  }
}
</script>

<style>

</style>