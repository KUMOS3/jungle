<template>
  <div class="p-2" id="close">
    <!-- Modal -->
    <div class="modal show" style="display:block" tabindex="1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-between">
            <h5 class="modal-title fs-2">{{ review.movie.title }}</h5>
            <button @click="closeDetail" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <h2 class="mb-3 fs-2"></h2>
            <h5>user: {{ review.user }}</h5><h5 class="text-muted">My Rate: {{ review.movie_rate }}.0</h5>

          <div class="d-flex justify-content-between mt-5 mb-2">
            <h2 class="mb-3 fs-2">{{ review.title }}</h2> 
          </div>
          <h4 class="mb-3">{{ review.content }} commentInfo.contentcommentInfo.contentcommentInfo.contentcommentInfo.contentcommentInfo.content</h4>
          
          <div class="d-flex justify-content-between">
            <!-- like -->
            <div @click="callLike" class="review-like-btn d-flex align-items-center">
              <button v-if="likeStatus"><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /></button>
              <button v-else><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#dbdad9" /></button>
              <p v-if="this.$store.state.userToken" class="me-2">{{ this.$store.state.userInfo.like_Reviews }}</p>
              <h5>{{ review.review_like_users }} users like this review</h5>
            </div>
            <h5 class="card-text"><small class="text-muted">Created at {{ getTime }}</small></h5>          
          </div>
          <!-- 댓글 -->
          <div class="d-flex justify-content-between mt-5">
            <h3>Comments</h3>
            <h5 v-if="this.review.comments">{{ CommentsCount }} comments</h5>
            <h5 v-else>There is no comments</h5>
          </div>
          <div class="input-group mb-5 mt-3">
            <input type="text" class="form-control" v-model="commentInfo.content" @keyup.enter="createComment" placeholder="How do you feel? :)" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @keyup.enter="createComment" @click="createComment">Button</button>
          </div>
          <div v-for="(comment, id) in review.comments" :key=id>
            <h5 class="me-3 mt-3 text-light bg-dark p-1 rounded text-center" style="width: 8vw">user: {{ comment.id }}</h5><h5> {{ comment.content }}</h5>
          </div>
          </div>
          <div class="modal-footer mb-5">
            <button @click="deleteReview" type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
            <button @click="closeDetail" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'ReviewDetail',
  data: function () {
    return {
      commentInfo : {
        review: this.review.id,
        content: '',
        user: this.$store.getters.decodedToken.user_id,
      },
      comments: this.review.comments,
      modalHold: false,
    }
  },
  props: {
    review: Object,
    movie: Object,
    likeStatus: Boolean,
  },
  methods: {
    closeDetail: function () {
      this.$emit('close-detail')
    },
    callLike: function () {
      this.$emit('call-like')
    },
    createComment: function () {
      axios({
        method: 'post',
        url: `${SERVER_URL}/community/reviews/${this.commentInfo.review}/comments/`,
        data: this.commentInfo,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then((res) => {
          this.comments.push(res.data)
          this.commentInfo.content = ''
          this.$store.dispatch('getReviews')
        }) 
        .catch((err) => {
          console.log(err)
        })
    },
    deleteReview: function () {
      axios({
        method: 'delete',
        url: `${SERVER_URL}/community/reviews/${this.review.id}/delete/`,
        data: this.review,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then(() => {
          this.$store.state.reviews = this.$store.state.reviews.filter((r)=>{
            return r.id !== this.review.id
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // holdScroll: function () {
    //   if (modalHold == true) {
    //     let modal = document.getElementById('close')
    //   }
    // },
  },
  // created: {

  // },
  computed:{
    CommentsCount: function () {
      return this.review.comments.length
    },
    moviePosterURL: function () {
      return `https://image.tmdb.org/t/p/w500/${this.$store.state.movie.poster_path}`
    },
    movieReleaseDate: function () {
      let movieReleaseDate = ''
      for (var date in this.$store.state.movies) {
        if (this.$store.state.movies[date].id == this.review.movie) {
          movieReleaseDate += this.$store.state.movies[date].release_date
        }
      }
      return movieReleaseDate
    },
    movieTitle: function () {
      let movieItem = ''
      for (var movie in this.$store.state.movies) {
        if (this.$store.state.movies[movie].id == this.review.movie) {
          movieItem += this.$store.state.movies[movie].title
        }
      }
      return movieItem
    },
    getTime: function () {
      const time = this.review.created_at.slice(0, 16).split('T')
      return time[0] + ' ' + time[1]
    }
  },
}
</script>

<style>
  .modal {
    margin-top: 5vh;
    text-align: start;
  }
  #close {
    pointer-events: none;
  }
</style>