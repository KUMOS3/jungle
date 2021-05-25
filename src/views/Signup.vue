<template>
  <div>
    <div class="alert alert-dismissible alert-success">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
    </div>
    <h1 class="my-5">Signup</h1>
    <div class="row">
      <div class="col-12 col-lg-6">
        <fieldset class="col-sm-8 col-md-6 col-lg-11 offset-sm-2 offset-md-3 offset-lg-1">
          <h5 class="my-4 fa-lg"><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /> Your Information</h5>
          <div class="form-group">
            <label for="ID" class="form-label">ID</label>
            <input v-model="credential.username" type="text" class="form-control form-control-lg" id="InputID" aria-describedby="IDHelp" placeholder="Enter ID">
            <small id="IDHelp" class="form-text text-muted">We'll never share your ID with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="nickname" class="form-label mt-4">Nickname</label>
            <input v-model="credential.nickname" type="text" class="form-control form-control-lg" id="InputNickname" aria-describedby="IDHelp" placeholder="Enter Nickname">
            <small id="IDHelp" class="form-text text-muted">JUNGLE support your creative idea.</small>
          </div>
          <div class="form-group mt-4">
            <label for="InputPassword" class="form-label mt-4">Password</label>
            <input v-model="credential.password" type="password" class="form-control form-control-lg" id="InputPassword" placeholder="Password">
          </div>
          <div class="form-group my-4">
            <label for="InputPasswordConfirm" class="form-label">Password Confirm</label>
            <input v-model="credential.passwordConfirmation" type="password" class="form-control form-control-lg" id="InputPasswordConfirm" placeholder="Password Comfirm">
          </div>
          <hr>
          <hr>
          <h5 class="mt-5 fa-lg"><font-awesome-icon :icon="['fas', 'fire-alt']" style="color:#fd7e14" /> Your Information</h5>
          <div class="form-group my-4">
            <label for="SelectBirthYear" class="form-label mt-4">Birth Year</label>
            <select v-model="credential.birth_year" class="form-select" id="SelectBirthYear">
              <option disabled value="">Select Birth year</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
              <option>2012</option>
              <option>2011</option>
              <option>2010</option>
              <option>2009</option>
              <option>2008</option>
              <option>2007</option>
              <option>2006</option>
              <option>2005</option>
              <option>2004</option>
              <option>2003</option>
              <option>2002</option>
              <option>2001</option>
              <option>2000</option>
              <option>1999</option>
              <option>1998</option>
              <option>1997</option>
              <option>1996</option>
              <option>1995</option>
              <option>1994</option>
              <option>1993</option>
              <option>1992</option>
              <option>1991</option>
              <option>1990</option>
              <option>1989</option>
              <option>1988</option>
              <option>1987</option>
              <option>1986</option>
              <option>1985</option>
              <option>1984</option>
              <option>1983</option>
              <option>1982</option>
              <option>1981</option>
              <option>1980</option>
              <option>1979</option>
              <option>1978</option>
              <option>1977</option>
              <option>1976</option>
              <option>1975</option>
              <option>1974</option>
              <option>1973</option>
              <option>1972</option>
              <option>1971</option>
              <option>1970</option>
              <option>1969</option>
              <option>1968</option>
              <option>1967</option>
              <option>1966</option>
              <option>1965</option>
              <option>1964</option>
              <option>1963</option>
              <option>1962</option>
              <option>1961</option>
              <option>1960</option>
              <option>1959</option>
              <option>1958</option>
              <option>1957</option>
              <option>1956</option>
              <option>1955</option>
              <option>1954</option>
              <option>1953</option>
              <option>1952</option>
              <option>1951</option>
              <option>1950</option>
              <option>1949</option>
              <option>1948</option>
              <option>1947</option>
              <option>1946</option>
              <option>1945</option>
              <option>1944</option>
              <option>1943</option>
              <option>1942</option>
              <option>1941</option>
              <option>1940</option>
              <option>1939</option>
              <option>1938</option>
              <option>1937</option>
              <option>1936</option>
              <option>1935</option>
              <option>1934</option>
              <option>1933</option>
              <option>1932</option>
              <option>1931</option>
              <option>1930</option>
              <option>1929</option>
              <option>1928</option>
              <option>1927</option>
              <option>1926</option>
              <option>1925</option>
              <option>1924</option>
              <option>1923</option>
              <option>1922</option>
              <option>1921</option>
            </select>
          </div>
          <div class="form-group my-4">
            <label for="InputFavoriteMovie" class="form-label mt-4">Favorite Movie</label>
            <input v-model="credential.favorite_movie" type="text" class="form-control form-control-lg" placeholder="favorite_movie">
          </div>
          </fieldset>
        </div>

        <div class="col-12 col-lg-6 d-flex justify-content-center flex-column align-items-center">
          <div class="form-group my-4 col-9">
            <h5 class="mb-4 fa-lg"><font-awesome-icon :icon="['fas', 'gem']" style="color:#be4bdb" />  Select Favorite Genres</h5>
              <div class="row">
                <div v-for="(checked, genre) in checkedGenres" :key="genre" class="searchable-container items col-xs-5 col-sm-4 col-md-3 col-lg-4 my-3">
                  <div class="info-block block-info clearfix">
                      <div data-toggle="buttons" class="btn-group">
                          <label class="btn btn-default">
                            <div>
                              <input v-model="checkedGenres[genre]" class="form-check-input mx-3" type="checkbox" :value="genre" :id="genre">
                            </div>
                            <div>
                              <label class="form-check-label" :for="genre">
                                {{ koreanGenres[genre] }}
                              </label>
                            </div>
                          </label>
                      </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>

    <button @click="signup" @keyup.enter="signup" class="btn-lg btn-light">Submit</button>

    <!-- <div class="form-group has-success">
      <label class="form-label mt-4" for="inputValid">Valid input</label>
      <input type="text" value="correct value" class="form-control is-valid" id="inputValid">
      <div class="valid-feedback">Success! You've done it.</div>
    </div>

    <div class="form-group has-danger">
      <label class="form-label mt-4" for="inputInvalid">Invalid input</label>
      <input type="text" value="wrong value" class="form-control is-invalid" id="inputInvalid">
      <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
    </div> -->



    <!-- <input type="text" placeholder="birth_year" v-model="credential.birth_year"> -->
    




  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Signup',
  data: function () {
    return {
    checkedGenres: {
      action: null,
      adventure: null,
      animation: null,
      comedy: null,
      crime: null,
      documentary: null,
      drama: null,
      family: null,
      fantasy: null,
      history: null,
      horror: null,
      music: null,
      mystery: null,
      romance: null,
      scienceFiction: null,
      tvMovie: null,
      thriller: null,
      war: null,
      western: null,
    },
    koreanGenres: {
      action: '액션',
      adventure: '모험',
      animation: '애니메이션',
      comedy: '코미디',
      crime: '범죄',
      documentary: '다큐멘터리',
      drama: '드라마',
      family: '가족',
      fantasy: '판타지',
      history: '역사',
      horror: '공포',
      music: '음악',
      mystery: '미스터리',
      romance: '로맨스',
      scienceFiction: 'SF',
      tvMovie: 'TV 영화',
      thriller: '스릴러',
      war: '전쟁',
      western: '서부',
    },
    credential: {
        username: '',
        password: '',
        passwordConfirmation: '',
        nickname: '',
        favorite_movie: '',
        favorite_generes: [],
        // 입력형식 편하게 바꿔주기
        birth_year: '',      
    }
    }
  },
  methods: {
    signup: function () {
      for (let genre in this.checkedGenres) {
        if (this.checkedGenres[genre] === true) {
          this.credential.favorite_generes.push(this.koreanGenres[genre])
        }
      }

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
      },
    ...mapMutations([
      'CHANGE_COLOR'
    ])
  },
  created: function () {
    this.CHANGE_COLOR('day')
    document.body.style.backgroundImage = "linear-gradient( #0C2F4D 80%,  #092742 100% )"
    if (this.$store.state.userToken) {
      this.getUserInfo()
    }
  }
}
</script>

<style>
  .searchable-container{margin:20px 0 0 0}
  .searchable-container label.btn-default.active{background-color:#007ba7;color:#FFF}
  .searchable-container label.btn-default{width:90%;border:1px solid #efefef;margin:5px; box-shadow:5px 8px 8px 0 #ccc;}
  .searchable-container label .bizcontent{width:100%;}
  .searchable-container .btn-group{width:90%}
</style>