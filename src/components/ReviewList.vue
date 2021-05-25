<template>
  <div class="container" style="width: 90%;">

    <h1 id="D2" class="my-5">Let's gather around the campfire   <font-awesome-icon class="big-icon" :icon="['fas', 'fire-alt']" style="color:#fd7e14" /></h1>

    <div class="home d-flex justify-content-around">
      <div v-if="this.$store.state.userToken" class="row">
          <ReviewListItem
            v-for="(review, idx) in reviews"
            :key="idx"
            :review="review"
          />
      </div>
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
  components: {
    ReviewListItem
  },
  methods: {
    goCreate: function () {
      this.$emit('go-create')
    },
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

<style>
h1 {
  font-size: 60px;  
}

.big-icon {
  font-size: 50px;
}
</style>