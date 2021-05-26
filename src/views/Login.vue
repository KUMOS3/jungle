<template>
  <div class="row" style="height:100vh">

    <!-- alert icon -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </symbol>
    </svg>


    <div class="alert alert-dismissible alert-primary Reggae" :style="{ display : signupState }">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
      <strong>Well done!</strong> You are ready to be a JUNGLER! 
    </div>

    <!-- <h1>JUNGLE</h1>     -->
    <div class="d-flex flex-column justify-content-center aligm-items-center form-group col-sm-8 col-md-6 col-lg-4 offset-md-2 offset-md-3 offset-lg-4">
    <!-- <div class="d-flex flex-column justify-content-center col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4 align-items-center"> -->
      <label class="form-label mt-4 mb-5"><h1>Login</h1></label>
      <div class="form-floating mb-3">
        <input v-model="credential.username" type="text" class="form-control" id="floatingInput" placeholder="Username">
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input @keyup.enter="getJWT" v-model="credential.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <button @click="getJWT" type="submit" class="btn btn-lg btn-light my-3">Submit</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

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
    },
    ...mapMutations([
      'CHANGE_COLOR'
    ])
  },
  created: function () {
    this.CHANGE_COLOR('day')
    document.body.style.backgroundImage = "linear-gradient( #0C2F4D 80%,  #092742 100% )"
    if (this.$store.getters.decodedToken)
      this.$router.push({name: 'Home'})
  },
  mounted () {
    window.scrollTo(0, 0)
    document.documentElement.style.overflowY = 'scroll';
    document.body.scroll = "yes";
  }
}
</script>

<style>

</style>