<template>
  <div id="app" class="background">
    <Interaction/>
    <nav class="sticky navbar navbar-expand-lg" :class="color">
      <div class="container-fluid">
        <router-link class="nav-link active" style="font-size:X-large" to="/">JUNGLE.</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse show" id="navbarColor02" style="">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/campfire">Campfire</router-link>
            </li>
            <li v-if="this.$store.state.userToken" class="nav-item">
              <router-link class="nav-link" to="/profile">| My Page</router-link>
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
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Explore</a>
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
            <button class="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <router-view class="background"/>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Interaction from '@/components/Interaction'
export default {
  name: 'App',
  components: {
    Interaction,
  },
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
  position: relative;
}

.sticky {
  position: sticky;
  top: 0px;
  margin-top: -100px;
  padding-bottom: 8px;
}

nav {
    opacity: .99;
    z-index: 10000;
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

.background {
  background-image: linear-gradient(#0c2f4d 80%, #0f051d 100%);
  opacity: .99;
  z-index: 9000;
  
.border-light {
  border-color: #ffffff !important;
  box-shadow: 0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4),
  0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1);
  
}
</style>
