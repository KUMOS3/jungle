<template>
  <div>
    <!-- Modal -->
    <div class="modal show" style="display:block" tabindex="1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <p class="fs-2">{{ movie.title }}</p>
            <button @click="closeDetail" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>{{ movie }}</p>
            <p>Genre {{ movieGenres }}</p>
            <iframe v-if="previewURL" :src="previewURL" frameborder="0" width="100%" height="500px"></iframe>
            <p>overview= {{ movie.overview }}</p>
            <p>overview= {{ movie.overview }}</p>
            <p>release_date= {{ movie.release_date }}</p>
            <p>poster_path= {{ movie.poster_path }}</p>
            <p>vote_count= {{ movie.vote_count }}</p>
            <p>vote_average= {{ movie.vote_average }}</p>
            <p>popularity= {{ movie.popularity }}</p>
            <p>movie_like_users= {{ movie.movie_like_users }}</p>
            <hr>
            <!-- 예고편 -->

            <p v-if="this.$store.state.userToken">Movies that you liked : {{ this.$store.state.userInfo.like_movies }}</p>
            <p v-if="this.$store.state.userToken">Movies that you disliked : {{ this.$store.state.userInfo.dislike_movies }}</p>
            <p v-if="this.$store.state.userToken">Movies that you wished : {{ this.$store.state.userInfo.wish_movies }}</p>

            <hr>


            <div class="row justify-content-center">
              <div @click="callLike"  :class="{ 'border-primary': likeStatus }" class="col-5 card py-2 movie-btn" style="max-width: 20rem;">
                <div v-if="likeStatus" ><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /></div>
                <div v-else><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#dbdad9" /></div>
                <span>좋아요</span>
                <!-- <p>Movie information that you liked : {{ this.likedMovie }}</p> -->
              </div>

              <div class="col-1"></div>
              <!-- 별로에요 기능 -->
              <div @click="callDislike" :class="{ 'border-secondary': dislikeStatus }" class="col-5 card py-2 movie-btn">
                <div v-if="dislikeStatus"><font-awesome-icon :icon="['fas', 'tint']" style="color:#4c6ef5" /></div>
                <div v-else><font-awesome-icon :icon="['fas', 'tint']" style="color:#adb5bd" /></div>
                <span>별로에요</span>
              </div>
            </div>
            <!-- 찜 기능 -->
            <div @click="callWish" :class="{ 'border-success': wishStatus }" class="card  mt-3 mb-1 py-2 movie-btn">
              <div v-if="wishStatus"><font-awesome-icon :icon="['fas', 'gem']" style="color:#be4bdb" /></div>
              <div v-else><font-awesome-icon :icon="['fas', 'gem']" style="color:#adb5bd" /></div>
              <span> 찜하기</span>
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
      for (var genre in this.movie.genres) {
        genrelist.push(this.movie.genres[genre].name)

      }
      return genrelist
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