<template>
  <div class="mb-3 col-xs-12 col-sm-6 col-lg-4 px-4 my-5">
    <!-- 영화 포스터 -->
    <div class="card border-light">
      <a @click="showDetail"><img :src="moviePosterURL" class="card-img-top" style="height: 380px" alt=""></a>
      <div class="card-body">
        <div v-if="this.$store.state.userToken">
          <MovieDetail
            @close-detail="closeDetail" 
            @call-like="likeMovie" 
            @call-dislike="dislikeMovie" 
            @call-wish="wishMovie"
            v-show="modalStatus" 
            :movie="movie" 
            :previewURL="previewURL"
            :likeStatus="likeStatus"
            :dislikeStatus="dislikeStatus"
            :wishStatus="wishStatus"
          />
        </div>

        <div class="card d-flex">
          <div class="row justify-content-center">
          <!-- 좋아요 기능 -->
            <div @click="likeMovie"  :class="{ 'border-primary': likeStatus }" class="col-5 card py-2 movie-btn" style="max-width: 20rem;">
              <div v-if="likeStatus"><font-awesome-icon :icon="['fas', 'fire-alt']" class="big-icon" style="color:#fd7e14" /></div>
              <div v-else><font-awesome-icon :icon="['fas', 'fire-alt']" class="big-icon" style="color:#dbdad9" /></div>
              <!-- <p>Movie information that you liked : {{ this.likedMovie }}</p> -->
            </div>
            <div class="col-1"></div>
            <!-- 별로에요 기능 -->
            <div @click="dislikeMovie" :class="{ 'border-secondary': dislikeStatus }" class="col-5 card py-2 movie-btn">
              <div v-if="dislikeStatus"><font-awesome-icon :icon="['fas', 'tint']" class="big-icon" style="color:#4c6ef5" /></div>
              <div v-else><font-awesome-icon :icon="['fas', 'tint']" class="big-icon" style="color:#adb5bd" /></div>
            </div>
          </div>
        </div>
          <!-- 찜 기능 -->
          <div @click="wishMovie" :class="{ 'border-success': wishStatus }" class="card mt-3 mb-1 py-2 movie-btn">
            <div v-if="wishStatus"><font-awesome-icon :icon="['fas', 'gem']" class="big-icon" style="color:#be4bdb" /></div>
            <div v-else><font-awesome-icon :icon="['fas', 'gem']" class="big-icon" style="color:#adb5bd" /></div>
          </div>
      </div>
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
      previewURL: null,
    }
  },
  props: {
    movie: Object
  },
  methods: {
    showDetail: function () {
      this.modalStatus = true
      const url = this.videoKey
      fetch(url)
        .then(res => res.json())
        .then((res) => {
          const previewKey = res.results[0].key
          this.previewURL = `https://www.youtube.com/embed/${previewKey}`
          console.log(this.previewURL)
        })
    },
    closeDetail: function () {
      this.modalStatus = false
    },
    getLike: function () {
      if (this.$store.state.userToken) {
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
      }
    },
    getDislike: function () {
      if (this.$store.state.userToken) {
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
      }
    },
    getWish: function () {
      if (this.$store.state.userToken) {
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
      }
    },
    likeMovie: function () {
      if (this.$store.state.userToken) {
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
      }
    },
    dislikeMovie: function () {
      if (this.$store.state.userToken) {
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
      }
    },
    wishMovie: function () {
      if (this.$store.state.userToken) {
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
    }
  },
  computed:{
    moviePosterURL: function () {
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
    },
    videoId: function () {
      return this.movie.id
    },
    videoKey: function () {
      return `https://api.themoviedb.org/3/movie/${this.videoId}/videos?api_key=3f1c187d77531562ac88a15e481a6b98&language=en-US`
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
.big-icon {
  font-size: 50px;
}

.movie-btn:hover {
  border-color: #ffffff !important;
  box-shadow: 0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4),
    0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1);
}
.big-icon {
  transition: 0.1s;
}
.big-icon:active {
  transform: scale(0.1);
  opacity: 0.5;
}
</style>