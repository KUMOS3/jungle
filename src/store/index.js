import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt_decode from "jwt-decode"
import createPersistedState from "vuex-persistedstate"

const SERVER_URL = process.env.VUE_APP_SERVER_URL

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userToken: null,
    // 영화 전체 목록
    movies: null,
    // MovieListItem
    movieItem: null,
    // 팝업창을 띄울 movie
    selectedMovie: null,
    // 회원가입 여부
    signupState: false,
    // 프로필에 사용될 사용자 정보
    userInfo: null,
    // 리뷰 전체 목록
    reviews: null,
    // // 리뷰의 영화를 찾아줄 리스트
    // movieListForReview: null,
    // // ReviewListItem
    // reviewItem: null,
    // // 팝업창을 띄울 review
    // selectedReview:null
    inputReview: null,
    color: 'dark'
  },
  mutations: {
    SAVE_JWT: function (state, token) {
    state.userToken = token
    },
    DELETE_JWT: function (state) {
      state.userToken = null
      state.userInfo = null
    },
    GET_MOVIES: function (state, data) {
      state.movies = data
      // 리뷰에서 아이디값으로 타이틀과 장르가 조회 가능한 리스트 만들기
      // for (let movie in Object.entries(state.movies)) {
      //   state.movieListForReview[movie.id] = {title:movie.title, genre:movie.genre_id}

      // }
    },
    GET_USER_INFO: function (state, data) {
      state.userInfo = data
    },
    GET_REVIEWS: function (state, data) {
      state.reviews = data
    },
    CREATE_REVIEW: function (state, input) {
      state.reviews.push(input)
    },
    CHANGE_COLOR: function (state, color) {
      state.color = color
    }
  },
  actions: {
    getJWT: function(context, credential) {
      // console.log(context, credential)
      axios({
        method: 'post',
        url: `${SERVER_URL}/accounts/api-token-auth/`,
        data: credential
      })
      .then((res) => {
        context.commit('SAVE_JWT', res.data.token)
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    deleteJWT: function (context) {
      context.commit('DELETE_JWT')
    },
    getMovies: function (context) {
      if (this.state.userToken) {
        axios({
          method: 'get',
          url: `${SERVER_URL}/api/v1/movies/`,
          headers: {
            Authorization: `JWT ${context.state.userToken}`
          }
        })
          .then((res) => {
            // console.log(res)
            context.commit('GET_MOVIES', res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    getUserInfo: function (context, userid) {
      // console.log(context, userid)
      if (this.state.userToken) {
        axios({
          method: 'get',
          url: `${SERVER_URL}/accounts/${userid}/profile`,
          data: userid,
          headers: {
            Authorization: `JWT ${context.state.userToken}`
          }
        })
          .then((res) => {
            // console.log(res)
            context.commit('GET_USER_INFO', res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    getReviews: function (context) {
      // console.log(context)
      axios({
        method: 'get',
        url: `${SERVER_URL}/community/reviews/`,
        headers: {
          Authorization: `JWT ${context.state.userToken}`
        }
      })
        .then((res) => {
          // console.log(res)
          context.commit('GET_REVIEWS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    createReview: function (context, reviewInfo) {
      console.log(reviewInfo)
      // console.log(`${SERVER_URL}/community/reviews/`)
      axios({
        method: 'post',
        url: `${SERVER_URL}/community/reviews/`,
        data: reviewInfo,
        headers: {
          Authorization: `JWT ${context.state.userToken}`
        }
      })
        .then((res) => {
          console.log(res)
          context.commit('CREATE_REVIEW', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  getters: {
    decodedToken: function (state, ) {
      if (state.userToken) {
        return jwt_decode(state.userToken)
      } 
      else {
        return null
      }
    },
    movies: function (state) {
      return state.movies
    },
    reviews: function (state) {
      return state.reviews
    },
    comments: function (state) {
      return state.comments
    },
    color: function (state) {
      if (state.color == 'night') {
        return 'navbar-dark bg-dark'
      }
      else {
        return 'navbar-dark bg-primary'
      }
    }
  },
  modules: {
  }
})
