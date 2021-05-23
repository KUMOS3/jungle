<template>
  <div>
    <div style="height:100vh">
      <p>{{ this.$store.state.userInfo }}</p>
      <h5 id="D2" v-if="this.$store.state.userInfo" class="my-5">Welcome to Jungle, {{ this.$store.state.userInfo.nickname }}!</h5>
      <h5 id="D2" v-else class="my-5">Welcome to Jungle!</h5>
      <MovieList/>
    </div>
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
</script>

<style>

</style>