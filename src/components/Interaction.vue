<template>
  <main class="bgcolor">
    <section class="mainPage">
        <div class="imageWrap" v-if="this. $store.state.imagetoggle == 2">
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_day/day_1.png') + ')' }" id="element_1"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_day/day_2.png') + ')' }" id="element_2"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_day/day_3.png') + ')' }" id="element_3"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_day/day_4.png') + ')' }" id="element_4"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_day/day_5.png') + ')' }" id="element_5"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_day/day_6.png') + ')' }" id="element_6"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_day/day_7.png') + ')' }" id="element_7"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_day/day_8.png') + ')' }" id="element_8"></div>
        </div>
        <div class="imageWrap" v-else-if="this. $store.state.imagetoggle == 3">
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_night/night_1.png') + ')' }" id="element_1"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_night/night_2.png') + ')' }" id="element_2"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_night/night_3.png') + ')' }" id="element_3"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_night/night_4.png') + ')' }" id="element_4"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_night/night_5.png') + ')' }" id="element_5"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_night/night_6.png') + ')' }" id="element_6"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_night/night_7.png') + ')' }" id="element_7"></div>
          <div class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_night/night_8.png') + ')' }" id="element_8"></div>
        </div>
    </section>

    <section class="subPage" :class="{ day : this.$store.state.imagetoggle == 2, night : this.$store.state.imagetoggle == 3}">
    <div v-if="this. $store.state.imagetoggle == 2" class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_day/day_9.png') + ')' }" id="element_9"></div>
    <div v-if="this. $store.state.imagetoggle == 3" class="img" :style="{ backgroundImage: 'url(' + require('@/assets/jungle_night/night_9.png') + ')' }" id="element_9"></div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Interaction',
  mounted: function () { 
    let x = 0;
    let y = 0;
    let mx = 0;
    let my = 0;
    let speed = 0.03;
    let scrollTop = 0;
    let element_1, element_2, element_3, element_4, element_5, element_6, element_7, element_8, element_9;
    
    window.onload = function() {

      // 효과를 넣을 요소들 정의
      element_1 = document.getElementById("element_1")
      element_2 = document.getElementById("element_2")
      element_3 = document.getElementById("element_3")
      element_4 = document.getElementById("element_4")
      element_5 = document.getElementById("element_5")
      element_6 = document.getElementById("element_6")
      element_7 = document.getElementById("element_7")
      element_8 = document.getElementById("element_8")
      element_9 = document.getElementById("element_9")
  
      window.addEventListener('mousemove', mouseMove, false);
      window.addEventListener('scroll', scrollFunc, false);
  
      loop();
    }
    
    // 스크롤 이동량에 따라 움직일 속도 정하는 함수
    function scrollFunc() {
      var scrollTop = document.documentElement.scrollTop;
    
      element_1.style.transform = "translate3d(0px ,"+ -scrollTop * .01 +"vh , 0px)"
      element_2.style.transform = "translate3d(0px ,"+ -scrollTop * .01 +"vh , 0px)"
      element_3.style.transform = "translate3d(0px ,"+ -scrollTop * .03 +"px , 0px)"
      element_4.style.transform = "translate3d(0px ,"+ -scrollTop * .12 +"px , 0px)"
      element_5.style.transform = "translate3d(0px ,"+ -scrollTop * .16 +"px , 0px)"
      element_7.style.transform = "translate3d(0px ,"+ -scrollTop * .40 +"px , 0px)" 
    }
    // 마우스 이동에 가속을 주는 함수
    function loop() {
        mx += (x - mx) * speed
        my += (y - my) * speed
    
    
        element_6.style.transform = "translate3d("+ mx / 70 +"px ," + -scrollTop * .30 +"px , 0px)"
        element_8.style.transform = "translate("+ mx / 20 +"px ," + -scrollTop * .35 +"px)"
        element_9.style.transform = "scale(1.2) translate("+ mx / 15 +"px ," + -my / 15 +"px)"
        window.requestAnimationFrame(loop);
    }
    
    function mouseMove (e) {
        x = (e.clientX - window.innerWidth / 2)
        y = (e.clientY - window.innerHeight / 2)
    }
  },
}

</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  overflow-x: hidden;
  /* background-color: #0C2F4D; */
}

main {
  position: relative;
  overflow-x: hidden;
}
.img {
  background-size: 100% 100%;
  /* background-size: contain; */
  background-position: center;

}

section {
  position: relative;
}

section.mainPage .imageWrap {
  height: 90vh;
  width: 100%;
  overflow-y: hidden;
}

section.mainPage .imageWrap #element_1 {
  position: fixed;
  height: 100%;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
section.mainPage .imageWrap #element_2 {
  position: fixed;
  height: 100%;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
section.mainPage .imageWrap #element_3 {
  position: fixed;
  height: 100%;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
section.mainPage .imageWrap #element_4 {
  position: fixed;
  height: 100%;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
section.mainPage .imageWrap #element_5 {
  position: fixed;
  height: 100%;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
section.mainPage .imageWrap #element_6 {
  position: fixed;
  height: 100%;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
section.mainPage .imageWrap #element_7 {
  position: fixed;
  height: 100%;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
section.mainPage .imageWrap #element_8 {
  position: fixed;
  height: 100%;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
}

section.subPage.day {
  background: #0C2F4D;
  height: 80vh;
  width: 100%;
}

section.subPage.night {
  background: #44009D;
  height: 80vh;
  width: 100%;
}

#element_9 {
  position: relative;
  height: 100vh;
  top: -95vh;
  background-repeat: no-repeat;
}

/* section.subPage .innerWrap {
  position: relative;
  height: 20vh;
} */


</style>