<template>
  <div class="container" style="width: 70%;">
    {{this.$store.state.userInfo}}
  <div class="home d-flex justify-content-around">
    <div v-if="this.$store.state.userToken" class="row">
      <MovieListItem
        v-for="(movie, idx) in this.showingMovies"
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
import _ from 'lodash'
import Vue from 'vue'

Vue.prototype.$_ = _


export default {
  name: 'MovieList',
  components: {
    MovieListItem
  },
  data: function () {
    return {
      showingMovies: [],
      movieCount: 10,
      previeousCount: 10,
      busy: false
    }
  },
  methods: {
    getFirstMovies: function () {
      var _this = this
      return new Promise(function (resolve) {
        _this.$store.dispatch('getMovies')
        resolve()
      })
    },
    watchScroll: function () {
      document.addEventListener('scroll', () => {
        // key를 각각 적으면 value값을 넣어주는 문법
        const {scrollTop, clientHeight, scrollHeight} = document.documentElement
        // console.log(clientHeight, scrollHeight-scrollTop)
        if (scrollHeight - scrollTop <= clientHeight + 400) {
          console.log('바닥')
        }

        if (scrollHeight - scrollTop <= clientHeight + 400 && this.busy) {
          this.getMoreMovie()
        }
        if (this.previeousCount + 10 <= this.movieCount) {
          this.busy = false
        }
      })
      document.addEventListener('scroll', 
          this.$_.throttle(this.getMoreMovie(),15))
    },
    getMoreMovie: function () {
      this.busy = true
      this.showingMovies = this.$store.state.movies.slice(this.movieCount,this.movieCount+10)
      this.movieCount += 10
      console.log('영화가져옴')
    }
  },
  created: function () {
    this.getFirstMovies()
    .then(
      this.showingMovies = this.$store.state.movies.slice(0,10)
    )
    this.watchScroll()
  },
  watch: {
    firstAction: function () {
      this.$store.state.userInfo
    }
  },
  computed: {
    ...mapGetters([
      'movies',
    ])
  }
}
</script>
