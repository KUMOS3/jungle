<template>
  <div>
    <!-- 영화 포스터 -->
    <button @click="showDetail">{{ movieTitle }}</button>
    <MovieDetail @close-detail="closeDetail" v-show="modalStatus" :movie="movie"/>
  </div>
</template>

<script>
import MovieDetail from '@/components/MovieDetail'
import { mapGetters } from 'vuex'

export default {
  name: 'MovieListItem',
  components:{
    MovieDetail,
  },
  data: function () {
    return {
      modalStatus: false,
    }
  },
  props: {
    movie: Object
  },
  methods: {
    showDetail: function () {
      this.modalStatus = true
    },
    closeDetail: function () {
      this.modalStatus = false
    }
  },
  computed:{
    movieTitle: function () {
      return this.movie.title
    },
    ...mapGetters([
      // 'moviePosterPath',
    ]),
  },
}
</script>

<style>

</style>