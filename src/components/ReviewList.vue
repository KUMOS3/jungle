<template>
  <div class="home">
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
  components: {
    ReviewListItem
  },
  created: function () {
    this.$store.dispatch('getReviews')
  },
  computed: {
    ...mapGetters([
      'reviews',
    ])
  }
}
</script>
