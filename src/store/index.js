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
  },
  mutations: {
    SAVE_JWT: function (state, token) {
    state.userToken = token
    },
    DELETE_JWT: function (state) {
      state.userToken = null
    },
    GET_MOVIES: function (state, data) {
      state.movies = data
    },
  },
  actions: {
    getJWT: function(context, credential) {
      console.log(context, credential)
      axios({
        method: 'post',
        url: `${SERVER_URL}/accounts/api-token-auth/`,
        data: credential
      })
      .then((res) => {
        context.commit('SAVE_JWT', res.data.token)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    deleteJWT: function (context) {
      context.commit('DELETE_JWT')
    },
    getMovies: function (context) {
      console.log(context)
      axios({
        method: 'get',
        url: `${SERVER_URL}/api/v1/movies/`,
        headers: {
          Authorization: `JWT ${context.state.userToken}`
        }
      })
        .then((res) => {
          console.log(res)
          context.commit('GET_MOVIES', res.data)
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
    movieTitle: function (state) {
      console.log(state.movieItem.title)
      console.log(state.movieItem)
    },
    movieContent: function (state) {
      console.log(state.movieItem)
    },
    // movieOverview: function (state) {
    //   console.log(state.selectedMovie.overview)
    // },
    // moviePosterPath: function (state) {
    //   console.log(state.selectedMovie.poster_path)
    // },
    
  },
  modules: {
  }
})
