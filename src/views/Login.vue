<template>
  <div>
    <p>ID</p>
      <input type="text" v-model="credential.username">
    <p>PW</p>
      <input @keyup.enter="getJWT" type="password" v-model="credential.password">
    <br>
      <button @click="getJWT">login</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      credential: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    getJWT: function () {
      this.$store.dispatch('getJWT', this.credential)
      this.$router.push({name: 'Home'})
    }
  },
  created: function () {
    if (this.$store.getters.decodedToken)
      this.$router.push({name: 'Home'})
  }
}
</script>

<style>

</style>