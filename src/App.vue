<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/campfire">Campfire</router-link> |
      <div v-if="this.$store.getters.decodedToken">
        <router-link to="/profile">Profile</router-link> |
        <router-link @click.native="deleteJWT" to="#">Logout</router-link> |
        <p v-if="this.$store.state.userInfo">Welcome to Jungle, {{ this.$store.state.userInfo.nickname }}!</p>
      </div>
      <div v-else>
        <router-link :to="{ name: 'Signup'}">Signup</router-link> |      
        <router-link :to="{ name: 'Login'}">Login</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    deleteJWT: function () {
      this.$store.dispatch('deleteJWT')
      this.$router.push({name: 'Login'})
    }
  },
  created: function () {
    if (!this.$store.getters.decodedToken)
      this.$router.push({name: 'Login'})
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
