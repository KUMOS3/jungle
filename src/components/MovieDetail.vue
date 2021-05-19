<template>
  <div>
    <!-- Modal -->
    <div class="modal show" style="display:block" tabindex="1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">title= {{ movie.title }}</h5>
            <button @click="closeDetail" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>overview= {{ movie.overview }}</p>
            <p>release_date= {{ movie.release_date }}</p>
            <p>poster_path= {{ movie.poster_path }}</p>
            <p>vote_count= {{ movie.vote_count }}</p>
            <p>vote_average= {{ movie.vote_average }}</p>
            <p>popularity= {{ movie.popularity }}</p>

          </div>
          <div class="modal-footer">
            <button @click="closeDetail" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'MovieDetail',
  props: {
    movie: Object
  },
  methods: {
    closeDetail: function () {
      this.$emit('close-detail')
    }
  },
  computed:{
  ...mapGetters([
    // 'movieTitle',
    // 'movieContent'
    // 'movieOverview'
  ])
}
}
</script>

<style>

</style>