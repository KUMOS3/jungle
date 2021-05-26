<template>
  <div class="container" style="width: 70%;">
    <div v-if="test">
      check
    </div>
    {{this.$store.state.userInfo}}
  <div class="home d-flex justify-content-around">
    <div v-if="this.$store.state.userToken" class="row">
      <MovieListItem
        v-for="(movie, idx) in this.showingMovies"
        :key="idx"
        :movie="movie"
      />
      <!-- @achieve="achieve" -->
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'
import axios from 'axios'
import MovieListItem from '@/components/MovieListItem'
import _ from 'lodash'
import Vue from 'vue'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

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
      busy: false,
      isAchieved: {
        "1": false,
        "2": false,
        "3": false,
      },
      test: false
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
    },
  },
  created: function () {
    this.getFirstMovies()
    .then(
      this.showingMovies = this.$store.state.movies.slice(0,10)
    )
    this.watchScroll()
    this.userid = this.$store.getters.decodedToken.user_id
    this.$store.dispatch('getUserInfo', this.userid)
  },
  computed: {
    userinfoLike () {
      return this.$store.state.userInfo.like_movies
    },
    ...mapGetters([
      'movies',
    ])
  },
  watch: {
    userinfoLike: function () {
      this.userid = this.$store.getters.decodedToken.user_id
      let achievementid = null

      if (this.isAchieved['1'] == false && this.$store.state.userInfo.like_movies.length == 1) {
        achievementid=1
      } else if (this.isAchieved['2'] == false && this.$store.state.userInfo.dislike_movies.length == 1) {
        achievementid=2
      } else if (this.isAchieved['3'] == false && this.$store.state.userInfo.wish_movies.length == 1) {
        achievementid=3
      }
      if (this.isAchieved[`${achievementid}`] == false) {
        axios({
          method: 'post',
          url: `${SERVER_URL}/accounts/${achievementid}/achievement/`,
          data: this.userid,
          headers: {
            Authorization: `JWT ${this.$store.state.userToken}`
          }
        })
          .then((res) => {
            this.isAchieved[`${res.data.id}`] = true
            console.log('성공')
            this.test = true
            // alert(`축하합니다. <${res.data.name}>칭호를 획득하셨습니다!`)
            this.$store.dispatch('getUserInfo', this.userid)
          }) 
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>
