<template>
  <div class="home">
    <div v-if="this.$store.state.movies">
      <MovieListItem
        v-for="(movie, idx) in movies"
        :key="idx"
        :movie="movie"
      />
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
  created: function () {
    this.$store.dispatch('getMovies')
    console.log(this.movies)
  },
  computed: {
    ...mapGetters([
      'movies',
    ])
  }
}
</script>
