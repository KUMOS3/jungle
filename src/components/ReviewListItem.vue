<template>
  <div>
    <!-- 영화 포스터 -->
    <button @click="showDetail">{{ reviewTitle }}</button>
    <ReviewDetail @close-detail="closeDetail" v-show="modalStatus" :review="review"/>
    
    <button><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /></button>
    <button><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#dbdad9" /></button>

  </div>
</template>

<script>
import ReviewDetail from '@/components/ReviewDetail'
import { mapGetters } from 'vuex'

export default {
  name: 'ReviewListItem',
  components:{
    ReviewDetail,
  },
  data: function () {
    return {
      modalStatus: false,
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
  },
  computed:{
    reviewTitle: function () {
      return this.review.title
    },
    ...mapGetters([
    ]),
  },
}
</script>

<style>

</style>