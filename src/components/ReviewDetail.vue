<template>
  <div>
    <!-- Modal -->
    <div class="modal show" style="display:block" tabindex="1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">title= {{ review }}</h5>
            <h5 class="modal-title">title= {{ review.title }}</h5>
            <button @click="closeDetail" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>movie= {{ review.movie }}</p>
            <p>movie_rate= {{ review.movie_rate }}</p>
            <p>user= {{ review.user }}</p>
            <p>created_at= {{ review.created_at }}</p>

            <!-- like -->
            <div @click="callLike">
              <button v-if="likeStatus"><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /></button>
              <button v-else><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#dbdad9" /></button>
              <p>Reviews that you liked : {{ this.$store.state.userInfo.like_Reviews }}</p>
            </div>


            <p>Comments</p>
            <div v-for="(comment, id) in review.comments" :key=id>
              <p>user= {{ comment.user }}</p>
              <p>comments= {{ comment.content }}</p>
            </div>
            <!-- <p>comment_count= {{ review.comment_count }}</p> -->

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
  name: 'ReviewDetail',
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
  },
  computed:{
  ...mapGetters([
  ])
}
}
</script>

<style>

</style>