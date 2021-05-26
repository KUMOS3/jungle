<template>
  <div>
      <!-- 토글시키는 버튼, nav바 테마에서 차용 -->
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <button v-if="!showAchievement" id="reviewBtn" data-bs-toggle="tab" href="#Achievement" @click="goAchievement" class="btn big-btn btn-dark mt-5 mb-2" type="button">
            <p class="shineBtn">Go to <br> JUNGLER's <br> Title list</p>
          </button>
        </li>
        <li class="nav-item">
          <button v-if="showAchievement" data-bs-toggle="tab" href="#UserInfo" @click="goAchievement" class="btn big-btn btn-dark mt-5 mb-2" type="button">
            <p class="shineBtn">Read Profile</p>
          </button>
        </li>
      </ul>

    <!-- 실제로 토글되어 보여주는 컴포넌트 -->
    <div id="myTabContent" class="tab-content">
      <div class="tab-pane fade active show" id="UserInfo">
        <UserInfo/>
      </div>
      <div class="tab-pane fade" id="Achievement">
        <!-- <h1 class="fs-1">A</h1>
        <h1 class="fs-1 mb-5">A</h1> -->
        <div style="height: 20vh;"></div>
        <Achievement/>
      </div>  
    </div>
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo'
import Achievement from '@/components/Achievement'
import { mapMutations } from 'vuex'

export default {
  name: 'Profile',
  components: {
    UserInfo,
    Achievement
  },
  data: function () {
    return {
      userid: '',
      showAchievement: false
    }
  },
  methods: {
    goAchievement: function () {
      this.showAchievement = !this.showAchievement
    },
    ...mapMutations([
      'CHANGE_COLOR'
    ])
  },
}
</script>

<style scoped>
.big-btn {
  position: fixed;
  bottom: 5px;
  right: 15px;
  width: 25vh;
  height: 15vh;
  font-size: 1.2rem;
}

h1 {
  font-size: 20px;  
}

body {
  font-size: 25px;
}

.shineBtn {
  font-family: 'Reggae One', cursive;
  font-weight: 500;
  line-height: 1.5;
  color: inherit;
  text-shadow: 0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5),
    0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2);
}

</style>