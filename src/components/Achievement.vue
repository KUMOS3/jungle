<template>
  <div>
    <h1>
      {{ this.$store.state.userInfo.nickname }}'s Titles'
      <span class="fa-lg spin" style="color: #2F959A"><font-awesome-icon class="big-icon" :icon="['fab', 'pagelines']" spin/></span>
    </h1>

  </div>
</template>

<script>
export default {
  name: 'Achievement'
}
</script>

<style>
h2 {
  font-size: 20px;
}

.shine {
  font-family: 'Reggae One', cursive;
  font-weight: 500;
  line-height: 2.5;
  color: inherit;
  text-shadow: 0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5),
    0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2);
}
</style>