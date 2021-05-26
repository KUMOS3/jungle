<template>
    <div>
      <!-- <img src="@/assets/jungle_animation/layer1.png" class="move-in-1" id="layer1">
      <img src="@/assets/jungle_animation/layer2.png" class="move-in-2" id="layer2">
      <img src="@/assets/jungle_animation/layer3.png" class="move-in-3" id="layer3">
      <img src="@/assets/jungle_animation/layer4.png" class="move-in-4" id="layer4">
      <img src="@/assets/jungle_animation/layer5.png" class="move-in-5" id="layer5">
      <img src="@/assets/jungle_animation/layer6.png" class="move-in-6" id="layer6">
      <img src="@/assets/jungle_animation/layer7.png" class="move-in-7" id="layer7">
      <img src="@/assets/jungle_animation/layer8.png" class="move-in-8" id="layer8">
      <img src="@/assets/jungle_animation/logo_toodark.png" class="move-in-9" id="layer9"> -->
    </div>
</template>

<script>
export default {
  name: 'Animation',
  data: function () {
    return {
    }
  },
}
  // window.addEventListener('mousewheel', function () {
  //   var go = document.querySelector(".move-in-1")
  //   console.log(go.style.animation)
  //   go.style.animation = "move-in-1 1.5s ease 0s 1 forwards running"
  //   console.log(go.style.animation)
  // })
</script>

<style scoped>
  .center {
  position: absolute;
  }
  .move-in-1 {
    animation-name: move-in-1;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  .move-in-2 {
    animation: move-in-1 1.5s forwards;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  .move-in-3 {
    animation: move-in-1 1.5s forwards;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  .move-in-4 {
    animation: move-in-1 2s forwards;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  .move-in-5 {
    animation: move-in-1 2.5s forwards;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  .move-in-6 {
    animation: move-in-1 3s forwards;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  .move-in-7 {
    animation: move-in-1 3.5s forwards;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  /* .move-in-8 {
    animation: move-in-1 4s forwards;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    animation-play-state: paused;
  } */
  .move-in-9 {
    animation: move-in-9 0.7s forwards;
    animation-fill-mode: forwards;
    animation-delay: 1.8s;
    animation-timing-function: cubic-bezier(0,.83,.63,.70);
    /* animation-play-state: paused; */
  }
  @keyframes move-in-1 {
    0% {
      transform: translate3d(0px, 0px, 0px);
    }
    100% {
      transform: perspective(700px) translate3d(0px, 0px, 700px);
    }
  }


  @keyframes move-in-2 {
    0% {
      transform: translate3d(0px, 0px, 0px);
    }
    100% {
      transform: perspective(500px) translate3d(600px, 0px, 500px);
    }
  }
  @keyframes move-in-3 {
    0% {
      transform: translate3d(0px, 0px, 0px);
    }
    100% {
      transform: perspective(500px) translate3d(-300px, 0px, 500px);
    }
  }
  @keyframes move-in-4 {
    0% {
      transform: translate3d(0px, 0px, 0px);
    }
    100% {
      transform: perspective(500px) translate3d(0px, 0px, 400px);
    }
  }
  @keyframes move-in-5 {
    0% {
      transform: translate3d(0px, 0px, 0px);
    }
    100% {
      transform: perspective(500px) translate3d(0px, 0px, 400px);
    }
  }
  @keyframes move-in-6 {
    0% {
      transform: translate3d(0px, 0px, 0px);
    }
    100% {
      transform: perspective(500px) translate3d(0px, 0px, 400px);
    }
  }
  @keyframes move-in-7 {
    0% {
      transform: translate3d(0px, 0px, 0px);
    }
    100% {
      transform: perspective(500px) translate3d(0px, 0px, 300px);
    }
  }
  /* @keyframes move-in-8 {
    0% {
      transform: translate3d(0px, 0px, 0px);
    }
    100% {
      transform: perspective(500px) translate3d(0px, 0px, 300px);
    }
  }  */
  @keyframes move-in-9 {
    0% {
      transform: translate3d(0px, -1000px, 0px);
    }
    50% {
      transform: translate3d(300px, 1500px, 0px);      
    }
    100% {
      transform: translate3d(300px, 1300px, 0px);
    }
  } 
  @keyframes move-in-reverse {
    0% {
      transform: perspective(500px) translate3d(360px, 200px, 400px);
    }
    100% {
      transform: translate3d(0px, 0px, 0px);
    }
  }

  #layer1 {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    z-index: 80;
  }
  #layer2 {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    z-index: 70;
  }
  #layer3 {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    z-index: 70;
  }
  #layer4 {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    z-index: 50;
  }
  #layer5 {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    z-index: 40;
  }
  #layer6 {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    z-index: 30;
  }
  #layer7 {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    z-index: 20;
  }
  #layer8 {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    z-index: 10;
  }
  #layer9 {
    position: absolute;
    top: -1000px;
    left: 0px;
    height: 30vh;
    z-index: 10;
  }
</style>
