<template>
  <div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="col-8 my-5" style="text-align:left">
        <h2> Profile of </h2>
        <h1 class="mb-5"> Jungler {{ this.$store.state.userInfo.nickname }}
          <span class="spi" style="color: #2F959A"><font-awesome-icon class="big-icon" :icon="['fab', 'pagelines']" spin/></span>
        </h1>


        <div v-if="this.$store.state.userToken" class="D2 py-5 px-4 border-light" style="font-size: 20px;">
          <span class="shine">ID:  </span><span>{{ this.$store.state.userInfo.username }}</span>
          <br>
          <span class="shine">Jungler's Name:  </span><span>{{ this.$store.state.userInfo.nickname }}</span>
          <br>
          <span class="shine">The day you walked into JUNGLE :  </span>
          <span>{{ this.$store.state.userInfo.date_joined | onlyDate }}</span>
          <br>
          <span class="shine">This JUGNLER was born in :  </span><span>{{ this.$store.state.userInfo.birth_year }}</span>
          <br>
          <span class="shine">Favorite movie:  </span><span>{{ this.$store.state.userInfo.favorite_movie }}</span>

          <div class="d-flex">
          <div v-if="this.$store.state.userToken" class="D2 mx-auto my-5 row">
            <div class="col collect-list">
              <div class="my-3 d-flex justify-content-between">
                <span class="shine-list">Liked Movies</span>
                <span class="badge bg-primary rounded-pill">{{ this.$store.state.userInfo.like_movies.length }}</span>
              </div>
              <!-- 추후 multiple="true" 속성으로 원하는 영화들만 좋아요 삭제 등등 가능 -->
              <select class="form-select py-4">
                <option class="shine-list" disabled value="">Liked Movies</option>
                <option v-for="(movie, idx) in this.$store.state.userInfo.like_movies" :key="idx">
                  {{ movie.title }}
                </option>
              </select>
              <button class="shine-list btn-primary row mt-3 mb-1 mx-auto">GO</button>
            </div>
            <div class="col collect-list">
              <div class="my-3 d-flex justify-content-between">
                <span class="shine-list">Disliked Movies</span>
                <span class="badge bg-primary rounded-pill">{{ this.$store.state.userInfo.dislike_movies.length }}</span>
              </div>
              <!-- 추후 multiple="true" 속성으로 원하는 영화들만 좋아요 삭제 등등 가능 -->
              <select class="form-select py-4">
                <option class="shine-list" disabled value="">Disliked Movies</option>
                <option v-for="(movie, idx) in this.$store.state.userInfo.dislike_movies" :key="idx">
                  {{ movie.title }}
                </option>
              </select>
              <button class="shine-list btn-primary row mt-3 mb-1 mx-auto">GO</button>
            </div>
            <div class="col collect-list">
              <div class="my-3 d-flex justify-content-between">
                <span class="shine-list">Wish List</span>
                <span class="badge bg-primary rounded-pill">{{ this.$store.state.userInfo.wish_movies.length }}</span>
              </div>
              <!-- 추후 multiple="true" 속성으로 원하는 영화들만 좋아요 삭제 등등 가능 -->
              <select class="form-select py-4">
                <option class="shine-list" disabled value="">Wish List</option>
                <option v-for="(movie, idx) in this.$store.state.userInfo.wish_movies" :key="idx">
                  {{ movie.title }}
                </option>
              </select>
              <button class="shine-list btn-primary row mt-3 mb-1 mx-auto">GO</button>
            </div>
          </div>
          </div>


          {{ this.$store.state.userInfo }}
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'UserInfo',
  methods: {
    getUserInfo: function () {
      this.userid = this.$store.getters.decodedToken.user_id
      this.$store.dispatch('getUserInfo', this.userid)
    },
    ...mapMutations([
      'CHANGE_COLOR'
    ])
  },
  filters: {
    onlyDate: function (datetime) {
      return datetime.slice(0, 10)
    },
  },
  created: function () {
    this.CHANGE_COLOR('day')
    document.body.style.backgroundImage = "linear-gradient( #0C2F4D 80%,  #092742 100% )"
    this.getUserInfo()
  }
}
</script>

<style scoped>
h2 {
  font-size:35px;
}

.big-icon {
  font-size: 60px;
  transition: 0.1s;
}
.big-icon:active {
  transform: scale(0.1);
  opacity: 0.5;
}
.shine {
  font-family: 'Reggae One', cursive;
  font-weight: 500;
  line-height: 2.5;
  color: inherit;
  text-shadow: 0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5),
    0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2);
}
.shine-list {
  font-family: 'Reggae One', cursive;
  font-weight: 500;
  line-height: 1.5;
  color: inherit;
  text-shadow: 0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5),
    0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2);
}
.collect-list {
    position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #fff;
  text-decoration: none;
  background-color: #250d49;
  border: 0 solid rgba(0, 0, 0, 0.125);
}
</style>