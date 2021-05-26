<template>
  <div class="p-2" id="close">
    <!-- Modal -->
    <div class="modal show" style="display:block" tabindex="1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button @click="closeDetail" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <!-- modal card -->
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-3">
              <img :src="moviePosterURL" style="width: 8vw">
              <!-- {{ moviePosterURL }} -->
              </div>
              <div class="col-md-12">
                <div class="card-body">
                  <!-- <p>{{this.review.user}}</p> -->
                  <h2 class="mb-3">{{ this.review.movie.original_title }}</h2>
                  <p class="card-text black-text"><small class="text-end">Release date:  {{this.review.movie.release_date}}</small></p>
                  <p class="card-text black-text"><small class="text-end">Rate :  {{this.review.movie.vote_average}}</small></p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-5">
            <h2 class="mb-3">{{ review.title }}</h2> 
            <h2>user: {{this.review.user.nickname}}</h2>
          </div>
          <p class="mb-4">{{ review.content }} commentInfo.contentcommentInfo.contentcommentInfo.contentcommentInfo.contentcommentInfo.content</p>    
          <div class="justify-content-between">
          <div @click="callLike" 
            :class="{ 'border-primary': likeStatus }" class="review-like-btn col-1 card py-2" 
            style="max-width: 20rem;"
          >
            <div v-if="likeStatus" class="mx-auto">
              <font-awesome-icon :icon="['fas', 'fire-alt']" class="big-icon" style="color:#fd7e14" />
            </div>
            <div v-else class="mx-auto">
              <div><font-awesome-icon :icon="['fas', 'fire-alt']" class="big-icon" style="color:#dbdad9" /></div>
            </div>
          </div>
          <h6 class="card-subtitle text-muted"><small>Whether you like or dislike this REVIEW, kindle it!</small></h6>
          <h6 class="card-subtitle text-muted"><small class="text-muted">Created at {{ getTime }}</small></h6>          
          </div>
          <!-- 댓글 -->
          <div class="d-flex justify-content-between mt-5">
            <h3>Comments</h3>
            <h5 v-if="this.review.comments">{{ CommentsCount }} comments</h5>
            <h5 v-else>There is no comments</h5>
          </div>
          <div class="input-group mb-5 mt-3">
            <input type="text" class="form-control" v-model="commentInfo.content" @keyup.enter="createComment" placeholder="How do you feel? :)" aria-describedby="button-addon2">
            <button class="btn btn-light" type="button" id="button-addon2" @keyup.enter="createComment" @click="createComment">Submit</button>
          </div>
          <div v-for="(comment, id) in review.comments" :key=id>
            <p class="me-3 mt-3 btn-light p-1 rounded text-center" style="width: 8vw">user: {{ comment.id }}</p><h5> {{ comment.content }}</h5>
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
      return `https://image.tmdb.org/t/p/w500/${this.review.movie.poster_path}`
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

.big-icon {
  transition: 0.1s;
}
.big-icon:active {
  transform: scale(0.1);
  opacity: 0.5;
}

.review-like-btn {
  box-shadow: 0 0 2px rgba(241, 250, 110, 0.9), 0 0 4px rgba(241, 250, 110, 0.4),
  0 0 1rem rgba(241, 250, 110, 0.3), 0 0 4rem rgba(241, 250, 110, 0.1);
}
</style>