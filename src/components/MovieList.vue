<template>
  <div class="container" style="width: 70%;">
    <button @click="test">test</button>
    {{ this.$store.state.movies[0].genres }}
  <div class="home d-flex justify-content-around">
    <div v-if="this.$store.state.userToken" class="row">
      <MovieListItem
        v-for="(movie, idx) in movies"
        :key="idx"
        :movie="movie"
      />
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'
import MovieListItem from '@/components/MovieListItem'

export default {
  name: 'MovieList',
  components: {
    MovieListItem
  },
  methods: {
    test: function () {
      this.$store.dispatch('getMovies')
    }
  },
  created: function () {
    this.$store.dispatch('getMovies')
  },
  computed: {
    ...mapGetters([
      'movies',
    ])
  }
}
</script>
