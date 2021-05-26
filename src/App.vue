<template>
  <div id="app" :class="{backgroundday : isDay, backgroundnight : isNight}">

    <!-- cursor Item -->
    <span v-if="!this.$store.state.imagetoggle" class="cursorItem fa-lg" style="color: #2F959A"><font-awesome-icon :icon="['fab', 'pagelines']" /></span>

      <Interaction
        v-if="this.$store.state.imagetoggle"
      />
    <nav @click="CLOSE_ALERT" class="sticky navbar navbar-expand-lg" :class="color">
      <div class="container-fluid">
        <router-link @click.native="JUNGLE_ANIMATION" class="nav-link active" style="font-size:X-large" to="/jungle">JUNGLE.</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse show" id="navbarColor02" style="">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link @click.native="NO_ANIMATION" class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link @click.native="NO_ANIMATION" class="nav-link" to="/about">About</router-link>
            </li>
            <li @click="NIGHT_ANIMATION" class="nav-item">
              <router-link class="nav-link" to="/campfire">Campfire</router-link>
            </li>
            <li @click="NO_ANIMATION" v-if="this.$store.state.userToken" class="nav-item">
              <router-link class="nav-link" to="/profile">MyPage</router-link>
            </li>
            <li @click="NO_ANIMATION" v-if="this.$store.state.userToken" class="nav-item">
              <router-link class="nav-link" @click.native="deleteJWT" to="#">Logout</router-link>
            </li>
            <li @click="DAY_ANIMATION" v-if="!this.$store.state.userToken" class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Signup'}">Signup</router-link>
            </li>
            <li @click="NO_ANIMATION" v-if="!this.$store.state.userToken" class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Login'}">Login</router-link>
            </li>
          
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Explore</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search">
            <button class="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <router-view :class="{backgroundday : this.$store.state.imagetoggle==2, backgroundnight : this.$store.state.imagetoggle==3}"/>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import Interaction from '@/components/Interaction'

  // // 마우스 포인터
  // let x = 0
  // let y = 0
  // let mx = 0
  // let my = 0
  // let speed = 0.1
  // let cursorItem
  // // 마우스 포인터
  // window.addEventListener("mousemove", mouseFunc, false)
  // function mouseFunc(e){
  //   x = e.pageX
  //   y = e.pageY
  // }
  // // 매끄럽게 따라오도록 loop사용
  // loop();
  // function loop() {
  //   cursorItem = document.querySelector(".cursorItem");
  //   mx += (x-mx) * speed;
  //   my += (y-my) * speed;
  //   // cursor_item의 스타일 중 좌표공간을 변경시키는 transform 속성에서 translate 을 변경시킴 (위치, 회전, 좌우반전)
  //   cursorItem.style.transform = "translate("+mx+"px,"+my +"px) rotate(180deg) scaleX(-1)";
  //   window.requestAnimationFrame(loop)
  // }

export default {
  name: 'App',
  components: {
    Interaction,
  },
  methods: {
    deleteJWT: function () {
      this.$store.dispatch('deleteJWT')
      this.$router.push({name: 'Home'})
    },
    ...mapMutations([
      'NO_ANIMATION',
      'JUNGLE_ANIMATION',
      'DAY_ANIMATION',
      'NIGHT_ANIMATION',
      'CLOSE_ALERT'
    ]),
  },
  computed: {
    isDay () {
      if (this.$store.state.imagetoggle==2) {
        return true
      } else {
        return false
      }
    },
    isNight () {
      if (this.$store.state.imagetoggle==3) {
        return true
      } else {
        return false
      }
    },
    imageToggle () {
      return this.$store.state.imagetoggle
    },
    ...mapGetters([
      'color'
    ])
  }
}
</script>

<style>
#app {
  font-family: Noto Sans KR, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
  position: relative;
}

.sticky {
  position: sticky;
  top: 0px;
  margin-top: -100px;
  padding-bottom: 8px;
}

nav {
    opacity: .99;
    z-index: 5000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #FFF;
}


.backgroundday {
  background-image: linear-gradient(#0c2f4d 80%, #0f051d 100%);
  opacity: .99;
  z-index: 9000;
}

.backgroundnight {
  background-image: linear-gradient(#44009D 80%, #0f051d 100%);
  opacity: .99;
  z-index: 9000;
}
.border-light {
  border-color: #ffffff !important;
  box-shadow: 0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4),
  0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1);
  
}

.cursorItem {
  position: absolute;
  width : 20px;
  height : 20px;
  top: 120px;
  left: 13px;
  z-index: 10000;
  /* -webkit-transform: rotate(90deg); Chrome, Safari, Opera */
  /* transform: rotate(90deg); */
}
</style>
