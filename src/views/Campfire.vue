<template>
  <div>
      <!-- 토글시키는 버튼, nav바 테마에서 차용 -->
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <button id="reviewBtn" v-if="showCreate" data-bs-toggle="tab" href="#reviewList" @click="goCreate" class="btn big-btn btn-dark mt-5 mb-2" type="button">
            <h5>Go to Review list</h5>
          </button>
        </li>
        <li class="nav-item">
          <button v-if="!showCreate" data-bs-toggle="tab" href="#createReview" @click="goCreate" class="btn big-btn btn-dark mt-5 mb-2" type="button">
            <h5>Write Review</h5>
          </button>
        </li>
      </ul>

    <!-- 실제로 토글되어 보여주는 컴포넌트 -->
    <div id="myTabContent" class="tab-content">
      <div class="tab-pane fade active show" id="reviewList">
        <ReviewList/>
      </div>  
      <div class="tab-pane fade" id="createReview">
        <CreateReview
          @click-btn="clickBtn"
        />
      </div>
    </div>

  </div>
</template>

<script>
import ReviewList from '@/components/ReviewList'
import CreateReview from '@/components/CreateReview'
import { mapMutations } from 'vuex'

export default {
  name: 'Campfire',
  components: {
    ReviewList,
    CreateReview,
  },
  data: function () {
    return {
      showCreate : false
    }
  },
  methods: {
    clickBtn: function () {
      let btn = document.getElementById('reviewBtn')
      btn.click()
    },
    goCreate: function () {
      this.showCreate = !this.showCreate
    },
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
.big-btn {
  position: fixed;
  bottom: 5px;
  right: 15px;
  width: 25vh;
  height: 15vh;
  font-size: 20px;
}
</style>