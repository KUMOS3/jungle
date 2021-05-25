<template>
  <div class="mb-3 col-xs-12 col-sm-6 col-lg-4 px-4 my-5">

    <div class="card border-light" style="height: 500px">
      <div @click="showDetail" class="card-header">Movie Title</div>
      <div class="card-body px-3">
        <div class="detail-parent text-border-light p-3 m-3" style="height: 300px">
          <h4 @click="showDetail" class= "card-title mb-4">{{ reviewTitle }}</h4>
          <p @click="showDetail" class="card-text text-start">{{ this.review.content | substring }}</p>
          <div class="like-and-comment">
            <span @click="showDetail" class="fa-lg me-2"><font-awesome-icon :icon="['fas', 'comment']" style="color:#dbdad9" /></span>
            <span @click="showDetail" class="card-text text-start me-3">{{ commentsCount }}</span>
            <span @click="likeReview" class="fa-lg me-2"><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#dbdad9" /></span>
            <span @click="likeReview" class="card-text text-start">{{ this.review.review_like_users.length }}</span>     
          </div>
        </div>
        <div v-if="this.$store.state.userToken">
          <ReviewDetail
            @close-detail="closeDetail"
            @call-like="likeReview"
            v-show="modalStatus"
            :review="review"
            :likeStatus="likeStatus"
            />
        </div>
          <!-- 좋아요 기능 -->
        <div @click="likeReview" :class="{ 'border-primary': likeStatus }" class="review-like-btn card col-5 py-2 mx-auto" style="max-width: 20rem;">
            <div v-if="likeStatus">
              <font-awesome-icon :icon="['fas', 'fire-alt']" class="big-icon" style="color:#fd7e14" />
            </div>
            <div v-else>
              <div><font-awesome-icon :icon="['fas', 'fire-alt']" class="big-icon" style="color:#dbdad9" /></div>
            </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import ReviewDetail from '@/components/ReviewDetail'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'ReviewListItem',
  components:{
    ReviewDetail,
  },
  data: function () {
    return {
      modalStatus: false,
      likeStatus: null,
      // likeReview: null
    }
  },
  props: {
    review: Object
  },
  methods: {
    showDetail: function () {
      this.modalStatus = true
    },
    closeDetail: function () {
      this.modalStatus = false
    },
    
    getLike: function () {
      if (this.$store.state.userToken) {
        axios({
          method: 'get',
          url: `${SERVER_URL}/community/${this.review.id}/like/`,
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
    likeReview: function () {
      axios({
        method: 'post',
        url: `${SERVER_URL}/community/${this.review.id}/like/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },
      })
        .then((res) => {
          this.likedReview = res.data
          this.likeStatus = !this.likeStatus

          this.userid = this.$store.getters.decodedToken.user_id
          this.$store.dispatch('getUserInfo', this.userid)

        })
        .catch((err) => {
          console.log(err)
        })
    },
    getReviewMovie: function () {
      // console.log(this.review)
      // console.log(this.$store.state.movies)
    }
  },
  filters: {
    substring: function (str) {
      var maxLength = 80;
      if (str.length < maxLength) {
        return str;
      }
      return str.substring(0, maxLength) + '...'
    }
  },
  computed:{
    reviewTitle: function () {
      return this.review.title
    },
    commentsCount: function () {
      return this.review.comments.length
    }
  },
  created: function () {
    this.getLike()
    this.getReviewMovie()
  }
}
</script>

<style>

.review-like-btn:hover {
  border-color: #ffffff !important;
  box-shadow: 0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4),
    0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1);
}

.text-border-light {
  border: solid;
  border-color: rgba(0, 0, 0, 0.125);
}

.detail-parent{
  position: relative;
}

.like-and-comment {
  position: absolute;
  bottom: 0px;
}

</style>