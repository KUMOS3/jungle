<template>
  <div>
    <!-- Modal -->
    <div class="modal show" style="display:block" tabindex="1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content px-5">
          <div class="modal-header">
            <h1 class="fs-2 ps-2">{{ movie.original_title }}</h1>
            <button @click="closeDetail" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <!-- movieDetail mordal -->
          <div class="card mb-3">
            <h3 class="card-header">{{ movie.title }}</h3>
            <div class="card-body">
              <h5 class="card-title">Trailer</h5>
              <p class="card-subtitle text-muted">preview video in youtube</p>
            </div>
              <iframe v-if="previewURL" :src="previewURL" frameborder="0" width="fit-content" height="400px"></iframe>
  
            <div class="card-body">
            </div>
            <ul class="list-group list-group-flush">
              <!-- <li class="list-group-item"><h5 class="card-text">Genre : {{ movie }}</h5></li> -->
              <li class="list-group-item"><h5>Rate : {{ movie.vote_average }}</h5></li>
              <li class="list-group-item"><h5>Vote : {{ movie.vote_count }}</h5></li>
              <li class="list-group-item"><h5>Popularity : {{ movie.popularity }}</h5></li>
              <li class="list-group-item"><h5>Release date: {{ movie.release_date }}</h5></li>
            </ul>
            <div class="card-body">
              
            </div>
            <div class="card-footer text-muted">
              <a href="#" class="card-link">Review link</a>
              <a href="#" class="card-link">My profile</a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Overview</h2>
              <p class="card-text">{{ movie.overview }}</p>

            </div>
          </div>
            <hr>
            <!-- <p v-if="this.$store.state.userToken">Movies that you liked : {{ this.$store.state.userInfo.like_movies }}</p>
            <p v-if="this.$store.state.userToken">Movies that you disliked : {{ this.$store.state.userInfo.dislike_movies }}</p>
            <p v-if="this.$store.state.userToken">Movies that you wished : {{ this.$store.state.userInfo.wish_movies }}</p> -->
            <hr>


            <div class="d-flex justify-content-center">
              <div @click="callLike"  :class="{ 'border-primary': likeStatus }" class="col-4 card py-2 movie-btn align-items-center" style="max-width: 20rem;">
                <div v-if="likeStatus" ><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /></div>
                <div v-else><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#dbdad9" /></div>
                <span>좋아요</span>
                <!-- <p>Movie information that you liked : {{ this.likedMovie }}</p> -->
              </div>
              <!-- 별로에요 기능 -->
              <div @click="callDislike" :class="{ 'border-secondary': dislikeStatus }" class="col-4 card py-2 movie-btn align-items-center">
                <div v-if="dislikeStatus"><font-awesome-icon :icon="['fas', 'tint']" style="color:#4c6ef5" /></div>
                <div v-else><font-awesome-icon :icon="['fas', 'tint']" style="color:#adb5bd" /></div>
                <span>별로에요</span>
              </div>
            </div>
            <!-- 찜 기능 -->
            <div class="d-flex justify-content-center" >
              <div @click="callWish" :class="{ 'border-success': wishStatus }" class="col-8 card mb-1 py-2 movie-btn align-items-center">
                <div v-if="wishStatus"><font-awesome-icon :icon="['fas', 'gem']" style="color:#be4bdb" /></div>
                <div v-else><font-awesome-icon :icon="['fas', 'gem']" style="color:#adb5bd" /></div>
                <span> 찜하기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button @click="closeDetail" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
// const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
// const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  name: 'MovieDetail',
  props: {
    movie: Object,
    likeStatus: Boolean,
    dislikeStatus: Boolean,
    wishStatus: Boolean,
    previewURL: String,
  },
  methods: {
    closeDetail: function () {
      this.$emit('close-detail')
    },
    callLike: function () {
      this.$emit('call-like')
    },
    callDislike: function () {
      this.$emit('call-dislike')
    },
    callWish: function () {
      this.$emit('call-wish')
    },
  },
  computed:{
    movieGenres: function () {
      let genrelist = []
      let genrestr = ''
      for (var genre in this.movie.genres) {
        genrelist.push(this.movie.genres[genre].name)
      }
      for (let i in genrelist) {
        genrestr += genrelist[i] + ' ' + '|' + ' '
      }
      return genrestr
    },
    movieLikeUsers: function () {
      let userList = ''
      for (var user in this.movie.movie_like_users) {
        userList += user
      }
      return userList
    },
    ...mapGetters([
    // 'movieTitle',
    // 'movieContent'
    // 'movieOverview'
    ])
  },
}
</script>

<style>
.svg-inline--fa {
  font-size: 25px;
}
</style>