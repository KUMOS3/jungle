<template>
  <div>
    <div class="row justify-content-center" style="height:100vh">
      <div class="col-sm-10 col-md-8 col-lg-6 row flex-column align-items-center">
        <label class="form-label mt-4 mb-5"><h1>Create Review</h1></label>
        <div class="row">

        <div v-if="selectedTab === tabs[0]" class="shine-list">
            <div v-if="keywords.length">
              <ul class="list">
                  <li v-for="(item, index) in keywords" :key="index"
                      v-on:click="onClickKeyword(item.keyword)">
                      <span class="number"></span>
                  </li>
              </ul>
            </div>
            <div v-else>
                No Recommendations
            </div>
        </div>


          <div class="form-group col-6 ">
            <label for="inputMovie" class="form-label mt-4 shine-list">Select Movie</label>
            <input v-model="reviewInfo.movie" class="form-control form-control-lg Reggae" type="text" placeholder="Movie Title" id="inputMovie">
          </div>
          <div class="form-group col-6 ">
            <label for="exampleSelect1" class="form-label mt-4">Movie Rate</label>
            <select v-model="reviewInfo.movie_rate" class="form-select" id="exampleSelect1">
              <option class="shine-list" disabled value="">How you like this Movie?</option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </div>
        </div>
        <div class="form-group col-6 ">
          <label for="inputTitle" class="form-label mt-4 shine-list">Review Title</label>
          <input v-model="reviewInfo.title" class="form-control form-control-lg Reggae" type="text" placeholder="Review Title" id="inputTitle">
        </div>
        <div class="form-group">
          <label for="Textarea" class="form-label mt-4 shine-list">Content</label>
          <textarea v-model="reviewInfo.content" class="form-control" id="Textarea" rows="3" spellcheck="false"></textarea>
        </div>
        <button @click="createReview" @keyup.enter="createReview" class="btn btn-light btn-lg mt-4 col-6 shine-list">Submit</button>
      </div>
    </div>
    

    <!-- <button @click="goCreate" class="btn btn-lg btn-dark mt-5 mb-2" type="button">
      Go to Review list
    </button> -->
  </div>
</template>

<script>
export default {
  name: 'CreateReview',
  data: function () {
  return {
      reviewInfo: {
        title: null,
        content: null,
        movie: null,
        movie_rate: '',
        user: this.$store.getters.decodedToken.user_id,
      },

      // 검색 기능
      query: '',
      submitted: false,
      tabs: ['추천 검색어', '최근 검색어'],
      selectedTab: '',
      keywords: [],
      searchResult: [],
    }
  },
  methods: {
    createReview: function () {
    // console.log(this.$store)
    // 공백입력 받지않음
    this.$store.dispatch('createReview', this.reviewInfo)
    this.reviewTitle = ''
    this.reviewContent = ''
    this.$emit('click-btn')
    },
    goCreate: function () {
      this.$emit('go-create')
    },
    fetchKeyword() {
        this.$store.state.moives.list().then(data => {
            this.keywords = data
        })
    },
    onClickKeyword(keyword){
    this.query = keyword
    this.search()
    },
  },
  created: function () {
    this.selectedTab = this.tabs[0]
    this.fetchKeyword()
  }
}
  </script>

  <style scoped>
  .shine-list {
  font-family: 'Reggae One', cursive;
  font-weight: 500;
  line-height: 1.5;
  color: inherit;
  text-shadow: 0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5),
    0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2);
  }

  .Reggae {
  font-family: 'Reggae One', cursive;
  font-weight: 500;
  line-height: 1.5;
  color: inherit;
  }
  </style>