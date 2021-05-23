<template>
  <div class="row">
    <div class="form-group col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4">
      <label class="form-label mt-4 mb-5"><h1>Login</h1></label>
      <div class="form-floating mb-3">
        <input v-model="credential.username" type="text" class="form-control" id="floatingInput" placeholder="Username">
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input @keyup.enter="getJWT" v-model="credential.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <button @click="getJWT" type="submit" class="btn btn-primary my-3">Submit</button>
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
  }
}
</script>

<style>

</style>