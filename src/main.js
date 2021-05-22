import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// (FROM) fontawesome 사용하기
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// (아이콘1.) 가져오기
// import { faPagelines } from '@fortawesome/free-brands-svg-icons'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'

// (아이콘2) 라이브러리 추가
// library.add(faUserSecret)
library.add(faFireAlt)
library.add(faTint)
library.add(faGem)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// (TO) fontawesome 사용하기
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
