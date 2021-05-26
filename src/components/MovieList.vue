<template>
  <div class="container" style="width: 60%;">
    {{this.$store.state.userInfo}}
  <div class="home d-flex justify-content-around">
    <div v-if="this.$store.state.userToken" class="row">
      <MovieListItem
        v-for="(movie, idx) in this.showingMovies"
        :key="idx"
        :movie="movie"
        @achieve="achieve"
      />
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
      isAchieved: {
        "1": false,
        "2": false,
        "3": false,
      }
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
        if (scrollHeight - scrollTop <= clientHeight + 400) {
          this.getMoreMovie()
        }
      })
    },
    getMoreMovie: function () {
      this.showingMovies = this.$store.state.movies.slice(0,this.movieCount+10)
      this.movieCount += 10
    },
    achieve: function () {
      this.userid = this.$store.getters.decodedToken.user_id
      let achievementid = null

      if (this.isAchieved['1'] == false && this.$store.state.userinfo.like_movies.length == 1) {
        achievementid=1
      } else if (this.isAchieved['2'] == false && this.$store.state.userinfo.dislike_movies.length == 1) {
        achievementid=2
      } else if (this.isAchieved['3'] == false && this.$store.state.userinfo.wish_movies.length == 1) {
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
            this.$store.dispatch('getUserInfo')
            console.log(`축하합니다. <${res.data.name}>칭호를 획득하셨습니다!`)
            this.$store.dispatch('getUserInfo', this.userid)
          }) 
          .catch((err) => {
            console.log(err)
          })
      }
    }
  },
  created: function () {
    this.getFirstMovies()
    .then(
      this.showingMovies = this.$store.state.movies.slice(0,10)
    )
    this.watchScroll()
  },
  computed: {
    userinfo () {
      return this.$store.state.userInfo
    },
    ...mapGetters([
      'movies',
    ])
  },
}
</script>
