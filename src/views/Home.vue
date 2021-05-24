<template>
  <div>
        <h5 id="D2" v-if="this.$store.state.userToken" class="my-5">Welcome to Jungle, {{ this.$store.state.userInfo.nickname }}!</h5>
        <div v-else class="d-flex justify-content-center align-items-center">
          <div class="col-8" style="text-align:left">
            <h5 id="D2" class="my-5">Welcome to Jungle!
              <span class="fa-lg spin" style="color: #2F959A"><font-awesome-icon :icon="['fab', 'pagelines']" spin/></span>
            </h5>
            <h1>Let's Jungling!</h1>
            <div class="d-grid gap-2 my-5" style="height:100vh">
              <button class="btn btn-lg btn-light mt-5 mb-2" type="button">
                <router-link class="nav-link" :to="{ name: 'Login'}">Login</router-link>
              </button>
              <p class="text-light">Don't have an JUNGLE ID? Create one now</p>
            </div>
          </div>
        </div>
      <MovieList/>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    MovieList,
  },
  methods: {
    ...mapMutations([
      'CHANGE_COLOR'
    ])
  },
  created: function () {
    this.CHANGE_COLOR('day')
    document.body.style.backgroundImage = "linear-gradient( #0C2F4D 80%,  #092742 100% )"
  }
}

// var done = false;
// var spin = document.getElementsByClassName('')

// setTimeout(function() {
//   done = true;
// }, 2546);


// $('.fa-spin').on('animationiteration', function(event) {
//   if (done) {
//     $(event.target).removeClass('fa-spin');
//   }
// });
</script>

<style scoped>
h1 {
  font-size: 120px;  
}

h5 {
  font-size: 60px;
}

.btn-lg {
  width: 50vh;
  height: 10vh;
  font-size: 30px;
}

.text-light {
  font-size: 20px;
}
</style>