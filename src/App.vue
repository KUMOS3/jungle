<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">JUNGLE.</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse show" id="navbarColor02" style="">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/campfire">Campfire</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            
              <li v-if="this.$store.getters.decodedToken" class="nav-item">
                <router-link class="nav-link" to="/profile">Profile</router-link>
              </li>
              <li v-if="this.$store.getters.decodedToken" class="nav-item">
                <router-link class="nav-link" @click.native="deleteJWT" to="#">Logout</router-link>
              </li>
              <li v-else class="nav-item">
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

    <p v-if="this.$store.state.userInfo">Welcome to Jungle, {{ this.$store.state.userInfo.nickname }}!</p>
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
  color: #FFF;
}
</style>
