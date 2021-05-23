<template>
  <div>
    <!-- 영화 포스터 -->
    <a @click="showDetail"><img :src="moviePosterURL" alt=""></a>
    <MovieDetail
      @close-detail="closeDetail" 
      @call-like="likeMovie" 
      @call-dislike="dislikeMovie" 
      @call-wish="wishMovie"
      v-show="modalStatus" :movie="movie" 
      :likeStatus="likeStatus"
      :dislikeStatus="dislikeStatus"
      :wishStatus="wishStatus"
    />

    <!-- 좋아요 기능 -->
    <div @click="likeMovie">
      <button v-if="likeStatus"><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /></button>
      <button v-else><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#dbdad9" /></button>
      <!-- <p>Movie information that you liked : {{ this.likedMovie }}</p> -->
    </div>

    <!-- 별로에요 기능 -->
    <div @click="dislikeMovie">
      <button v-if="dislikeStatus"><font-awesome-icon :icon="['fas', 'tint']" style="color:#4c6ef5" /></button>
      <button v-else><font-awesome-icon :icon="['fas', 'tint']" style="color:#adb5bd" /></button>
    </div>
    <!-- 찜 기능 -->
    <div @click="wishMovie">
      <button v-if="wishStatus"><font-awesome-icon :icon="['fas', 'gem']" style="color:#be4bdb" /></button>
      <button v-else><font-awesome-icon :icon="['fas', 'gem']" style="color:#adb5bd" /></button>
    </div>

  </div>
</template>

<script>
import MovieDetail from '@/components/MovieDetail'
import { mapGetters } from 'vuex'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'MovieListItem',
  components:{
    MovieDetail,
  },
  data: function () {
    return {
      modalStatus: false,
      likeStatus: null,
      likedMovie: null,
      dislikeStatus: null,
      dislikedMovie: null,
      wishStatus: null,
      wishedMovie: null,
    }
  },
  props: {
    movie: Object
  },
  methods: {
    showDetail: function () {
      this.modalStatus = true
    },
    closeDetail: function () {
      this.modalStatus = false
    },
    getLike: function () {
      axios({
        method: 'get',
        url: `${SERVER_URL}/api/v1/${this.movie.id}/like/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },
      })
        .then((res) => {
          this.likeStatus = res.data.liked
          this.userid = this.$store.getters.decodedToken.user_id
          this.$store.dispatch('getUserInfo', this.userid)
          // this.likeStatus = res.data.
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getDislike: function () {
      axios({
        method: 'get',
        url: `${SERVER_URL}/api/v1/${this.movie.id}/dislike/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },
      })
        .then((res) => {
          this.dislikeStatus = res.data.disliked
          this.userid = this.$store.getters.decodedToken.user_id
          this.$store.dispatch('getUserInfo', this.userid)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getWish: function () {
      axios({
        method: 'get',
        url: `${SERVER_URL}/api/v1/${this.movie.id}/wish/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },
      })
        .then((res) => {
          this.wishStatus = res.data.wished
          this.userid = this.$store.getters.decodedToken.user_id
          this.$store.dispatch('getUserInfo', this.userid)

        })
        .catch((err) => {
          console.log(err)
        })
    },
    likeMovie: function () {
      axios({
        method: 'post',
        url: `${SERVER_URL}/api/v1/${this.movie.id}/like/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },
      })
        .then((res) => {
          this.likedMovie = res.data
          if (this.likeStatus==false && this.dislikeStatus==true) {
            this.dislikeStatus=!this.dislikeStatus
          }
          this.likeStatus = !this.likeStatus

          this.userid = this.$store.getters.decodedToken.user_id
          this.$store.dispatch('getUserInfo', this.userid)

        })
        .catch((err) => {
          console.log(err)
        })
    },
    dislikeMovie: function () {
      axios({
        method: 'post',
        url: `${SERVER_URL}/api/v1/${this.movie.id}/dislike/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },
      })
        .then((res) => {
          this.dislikedMovie = res.data
          if (this.dislikeStatus==false && this.likeStatus==true) {
            this.likeStatus=!this.likeStatus
          }
          
          this.dislikeStatus = !this.dislikeStatus

          this.userid = this.$store.getters.decodedToken.user_id
          this.$store.dispatch('getUserInfo', this.userid)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    wishMovie: function () {
      axios({
        method: 'post',
        url: `${SERVER_URL}/api/v1/${this.movie.id}/wish/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },
      })
        .then((res) => {
          this.wishedMovie = res.data
          this.wishStatus = !this.wishStatus
          this.userid = this.$store.getters.decodedToken.user_id
          this.$store.dispatch('getUserInfo', this.userid)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed:{
    moviePosterURL: function () {
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
    },
    ...mapGetters([
      // 'moviePosterPath',
    ]),
  },
  created: function () {
    this.getLike(),
    this.getDislike(),
    this.getWish()
  }
}
</script>

<style>

</style>