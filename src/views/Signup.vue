<template>
  <div>
    <h1>Signup</h1>
    <input type="text" placeholder="ID" v-model="credential.username">
    <input type="password" placeholder="password" v-model="credential.password">
    <input type="passwordconfirm" placeholder="password confirm" v-model="credential.passwordConfirmation">
    <hr>
    <p>추가 정보</p>
    <input type="text" placeholder="nickname" v-model="credential.nickname">
    <input type="text" placeholder="favorite_movie" v-model="credential.favorite_movie">
    <input type="text" placeholder="birth_year" v-model="credential.birth_year">
    <button @click="signup" @keyup.enter="signup">Signup</button>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Signup',
  data: function () {
    return {
    credential: {
        username: '',
        password: '',
        passwordConfirmation: '',
        nickname: '',
        favorite_movie: '',
        // 입력형식 편하게 바꿔주기
        birth_year: '',      
     }
    }
  },
  methods: {
    signup: function () {
      axios({
        method: 'post',
        url: `${SERVER_URL}/accounts/signup/`,
        data: this.credential,
      })
        .then ((res) => {
          console.log(res)
          this.$router.push({ name: 'Login' })
          alert('회원가입이 완료되었습니다.')
        })
        .catch ((err) => {
          console.log(err)
        })
    }
  }  
}
</script>

<style>

</style>