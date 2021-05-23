<template>
  <div style="height:95vh">
    <h5 id="D2" class="my-5">Let's gather around the campfire   <font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /></h5>
    <ReviewList/>
  </div>
</template>

<script>
import ReviewList from '@/components/ReviewList'
import { mapMutations } from 'vuex'

export default {
  name: 'Campfire',
  components: {
    ReviewList,
  },
  methods: {
    ...mapMutations([
      'CHANGE_COLOR'
    ])
  },
  created: function () {
    this.CHANGE_COLOR('night')
    document.body.style.backgroundImage = "linear-gradient( #44009d 80%,  #13002C 100% )"
  }
}
</script>

<style>

</style>