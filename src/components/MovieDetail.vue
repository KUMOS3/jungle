<template>
  <div>
    <!-- Modal -->
    <div class="modal show" style="display:block" tabindex="1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">title= {{ movie.title }}</h5>
            <button @click="closeDetail" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>movie_id= {{ movie.id }}</p>
            <iframe v-if="previewURL" :src="previewURL" frameborder="0"></iframe>
            <p>overview= {{ movie.overview }}</p>
            <p>release_date= {{ movie.release_date }}</p>
            <p>poster_path= {{ movie.poster_path }}</p>
            <p>vote_count= {{ movie.vote_count }}</p>
            <p>vote_average= {{ movie.vote_average }}</p>
            <p>popularity= {{ movie.popularity }}</p>
            <p>movie_like_users= {{ movie.movie_like_users }}</p>
            <hr>
            <!-- 예고편 -->


            <hr>
            <p>{{ this.$store.state.userInfo }}</p>
            <!-- like -->
            <div @click="callLike">
              <button v-if="likeStatus"><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /></button>
              <button v-else><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#dbdad9" /></button>
              <p v-if="this.$store.state.userInfo">Movies that you liked : {{ this.$store.state.userInfo.like_movies }}</p>
            </div>

            <!-- dislike -->
            <div @click="callDislike">
              <button v-if="dislikeStatus"><font-awesome-icon :icon="['fas', 'tint']" style="color:#4c6ef5" /></button>
              <button v-else><font-awesome-icon :icon="['fas', 'tint']" style="color:#adb5bd" /></button>
              <p v-if="this.$store.state.userInfo">Movies that you disliked : {{ this.$store.state.userInfo.dislike_movies }}</p>
            </div>

            <!-- wish -->
            <div @click="callWish">
              <button v-if="wishStatus"><font-awesome-icon :icon="['fas', 'gem']" style="color:#be4bdb" /></button>
              <button v-else><font-awesome-icon :icon="['fas', 'gem']" style="color:#dbdad9" /></button>
              <p v-if="this.$store.state.userInfo">Movies that you wished : {{ this.$store.state.userInfo.wish_movies }}</p>
            </div>

          </div>
          <div class="modal-footer">
            <button @click="closeDetail" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
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
  ...mapGetters([
    // 'movieTitle',
    // 'movieContent'
    // 'movieOverview'
    ])
  },
}
</script>

<style>

</style>