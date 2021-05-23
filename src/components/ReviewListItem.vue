<template>
  <div>
    <!-- 리뷰 카드 -->
    <button @click="showDetail">{{ reviewTitle }}</button>
    <ReviewDetail
      @close-detail="closeDetail"
      @call-like="likeReview"
      v-show="modalStatus"
      :review="review"
      :likeStatus="likeStatus"
      />
    
    <!-- 좋아요 기능 -->
    <div @click="likeReview">
      <button v-if="likeStatus"><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /></button>
      <button v-else><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#dbdad9" /></button>
    </div>

  </div>
</template>

<script>
import ReviewDetail from '@/components/ReviewDetail'
import { mapGetters } from 'vuex'
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
  },
  computed:{
    reviewTitle: function () {
      return this.review.title
    },
    ...mapGetters([
    ]),
  },
  created: function () {
    this.getLike()
  }
}
</script>

<style>

</style>