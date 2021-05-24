<template>
  <div>
    <!-- Modal -->
    <div class="modal show" style="display:block" tabindex="1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">title= {{ review.title }}</h5>
            <button @click="closeDetail" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>{{ review }}</p>
            <p>movie= {{ review.movie }}</p>
            <p>movie_rate= {{ review.movie_rate }}</p>
            <p>user= {{ review.user }}</p>
            <p>created_at= {{ review.created_at }}</p>

            <!-- like -->
            <div @click="callLike">
              <button v-if="likeStatus"><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /></button>
              <button v-else><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#dbdad9" /></button>
              <p v-if="this.$store.state.userToken">Reviews that you liked : {{ this.$store.state.userInfo.like_Reviews }}</p>
            </div>


            <!-- 댓글 -->
            <p>Comments</p>
            {{ comments }}
            <input type="text" v-model="commentInfo.content" @keyup.enter="createComment">
            <button @keyup.enter="createComment" @click="createComment">Add</button>
            <div v-for="(comment, id) in review.comments" :key=id>
              <p>user= {{ comment.user }}</p>
              <p>comments= {{ comment.content }}</p>
            </div>
            <p v-if="this.review.comments">comment_count= {{ CommentsCount }}</p>

          </div>
          <div class="modal-footer">
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
      comments: this.review.comments
    }
  },
  props: {
    review: Object,
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
  },
  // created: {

  // },
  computed:{
    CommentsCount: function () {
      return this.review.comments.length
    }
  // ...mapGetters([
  //   'comments'
  //   'commentsCount'
  // ])
}
}
</script>

<style>

</style>