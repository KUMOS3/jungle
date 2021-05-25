<template>
  <div class="about" style="height:100vh">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'About',
  methods: {
    ...mapMutations([
      'CHANGE_COLOR'
    ])
  },
  created: function () {
    this.CHANGE_COLOR('day')
    document.body.style.backgroundImage = "linear-gradient( #0C2F4D 80%,  #092742 100% )"
  }
}
</script>

<style>
</style>
