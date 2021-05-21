<template>
  <div class="home">
    <!-- 현재 review create는 title을 입력받아 title만 보여주는 상태입니다. -->
    <div>
      <input type="text" v-model="reviewInfo.movie" placeholder="Movie">
      <input type="text" v-model="reviewInfo.movie_rate" placeholder="Movie rate">
      <input type="text" v-model="reviewInfo.title" placeholder="Title">
      <input type="text" v-model="reviewInfo.content" placeholder="Content">
      <button @click="createReview" @keyup.enter="createReview">Submit</button>
    </div>
    <div v-if="this.$store.state.reviews">
      <ReviewListItem
        v-for="(review, idx) in reviews"
        :key="idx"
        :review="review"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'
import ReviewListItem from '@/components/ReviewListItem'

export default {
  name: 'ReviewList',
  props: {
    review: Object
  },
  data: function () {
  return {
      reviewInfo: {
        title: null,
        content: null,
        movie: null,
        movie_rate: '',
        user: this.$store.getters.decodedToken.user_id,
      }
    }
  },
  components: {
    ReviewListItem
  },
  methods: {
    createReview: function () {
    // console.log(this.$store)
    // 공백입력 받지않음
    this.$store.dispatch('createReview', this.reviewInfo)
    this.reviewTitle = ''
    this.reviewContent = ''
    },
  },
  created: function () {
    this.$store.dispatch('getReviews')
  },
  computed: {
    ...mapGetters([
      'reviews',
      'commentsCount'
    ])
  }
}
</script>
