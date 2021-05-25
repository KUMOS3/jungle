<template>
  <div class="about">
    <div class="d-flex justify-content-center align-items-center">

      <div class="col-8 mt-2" style="text-align:left">
        <!-- 인용구 -->
        <figure class="text-center py-5 my-5">
          <blockquote class="blockquote">
            <p class="mb-0">Forget about your worries and strife.<br>
              What's that? <br>
              That's a song about the good life.
            </p>
          </blockquote>
          <figcaption class="blockquote-footer">
            in <cite title="Source Title">Movie, The Jungle Book</cite>
          </figcaption>
        </figure>
        <figure class="text-center py-5 my-5">
          <blockquote class="blockquote">
            <p class="mb-0">Fantastic dreams of forests and jungles</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Someone famous in <cite title="Source Title">Google Search</cite>
          </figcaption>
        </figure>

        <h5 id="D2" class="my-5">Welcome
          <span class="fa-lg spin" style="color: #2F959A"><font-awesome-icon class="big-icon" :icon="['fab', 'pagelines']" spin/></span>
        </h5>
        <h1 @click="clickIcon">This is an about Jungle, <br> and Movie.
          <span v-if="iconStatus == 1"><font-awesome-icon :icon="['fas', 'fire-alt']" class="big-icon" style="color:#fd7e14" /></span>
          <span v-if="iconStatus == 2"><font-awesome-icon :icon="['fas', 'tint']" class="big-icon" style="color:#4c6ef5" /></span>
          <span v-if="iconStatus == 3"><font-awesome-icon :icon="['fas', 'gem']" class="big-icon" style="color:#be4bdb" /></span>
        </h1>
        <div class="d-grid gap-2 my-5">
          <button class="btn btn-lg btn-light mt-5" type="button">
            <router-link class="nav-link" :to="{ name: 'Login'}">Login</router-link>
          </button>
        </div>
        <p class="text-light">Don't have an JUNGLE ID? Create one now</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'About',
  data: function () {
    return {
      iconStatus: true
    }
  },
  methods: {
    clickIcon: function () {
      // 1이면 2, 2이면 3, 3이면 1
      if (this.iconStatus == 3) {
        this.iconStatus = 1
      } else {
        this.iconStatus ++
      }
    },
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

<style scoped>
h1 {
  font-size: 60px;  
}

h5 {
  font-size: 30px;
}

.btn-lg {
  width: 50vh;
  height: 10vh;
  font-size: 30px;
}

.big-icon {
  font-size: 60px;
  transition: 0.1s;
}
.big-icon:active {
  transform: scale(0.1);
  opacity: 0.5;
}
</style>
