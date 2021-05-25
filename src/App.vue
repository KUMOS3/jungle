<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg" :class="color">
      <div class="container-fluid">
        <router-link class="nav-link active" style="font-size:XX-large" to="/">JUNGLE.</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse show" id="navbarColor02" style="">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/campfire">Campfire</router-link>
            </li>
            
              <li v-if="this.$store.state.userToken" class="nav-item">
                <router-link class="nav-link" to="/profile">Profile</router-link>
              </li>
              <li v-if="this.$store.state.userToken" class="nav-item">
                <router-link class="nav-link" @click.native="deleteJWT" to="#">Logout</router-link>
              </li>
              <li v-if="!this.$store.state.userToken" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Signup'}">Signup</router-link>
              </li>
              <li v-if="!this.$store.state.userToken" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Login'}">Login</router-link>
              </li>
          
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <router-view/>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  methods: {
    deleteJWT: function () {
      this.$store.dispatch('deleteJWT')
      this.$router.push({name: 'Home'})
    }
  },
  created: function () {
    if (!this.$store.getters.decodedToken)
      this.$router.push({name: 'Login'})
  },
  computed: {
    ...mapGetters([
      'color'
    ])
  }
}
</script>

<style>
#app {
  font-family: Noto Sans KR, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #FFF;
}
</style>
