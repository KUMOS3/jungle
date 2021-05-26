<template>
  <div style="margin-top: 100px">
  <section class="bg">
    <div class="center">
      <img src="@/assets/jungle_animation/layer1.png" class="move-in-1" id="layer1">
      <img src="@/assets/jungle_animation/layer2.png" class="move-in-2" id="layer2">
      <img src="@/assets/jungle_animation/layer3.png" class="move-in-3" id="layer3">
      <img src="@/assets/jungle_animation/layer4.png" class="move-in-4" id="layer4">
      <img src="@/assets/jungle_animation/layer5.png" class="move-in-5" id="layer5">
      <img src="@/assets/jungle_animation/layer6.png" class="move-in-6" id="layer6">
      <img src="@/assets/jungle_animation/layer7.png" class="move-in-7" id="layer7">
      <img src="@/assets/jungle_animation/layer8.png" class="move-in-8" id="layer8">
      <a href="/login">
        <img 
          src="@/assets/jungle_animation/logo_toodark.png"
          class="move-in-9" id="layer9"
        >
          <!-- onmouseover="this.src='@/assets/jungle_animation/logo_day.png'"
          onmouseout="this.src='@/assets/jungle_animation/logo_toodark.png'" -->
      </a>
      <img src="@/assets/jungle_animation/layer1.png" id="layer10">
    </div>
  </section>
    <h1>A</h1>

  </div>
</template>

<script>

export default {
  name: 'Jungle',
}
</script>

<style scoped>
  .center {
  position: absolute;
  }
  .move-in-1 {
    animation-name: move-in-1;
    animation-duration: 1.2s;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
    height: 50vh;
  }
  .move-in-2 {
    animation: move-in-1 1.2s forwards;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  .move-in-3 {
    animation: move-in-1 1.2s forwards;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  .move-in-4 {
    animation: move-in-1 1.7s forwards;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  .move-in-5 {
    animation: move-in-1 2.2s forwards;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  .move-in-6 {
    animation: move-in-1 2.7s forwards;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
    animation-timing-function: cubic-bezier(.82,0,.26,1);
    /* animation-play-state: paused; */
  }
  .move-in-7 {
    animation: move-in-1 3.2s forwards;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
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
    animation: move-in-9 1.5s forwards;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    animation-timing-function: cubic-bezier(.84,0,.31,.99);
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
      transform: translate3d(0px, -500vh, 0px);
    }
    40% {
      transform: translate3d(0px, 160vh, 0px)
    }
    /* 20% {
      transform: translate3d(20vh, 160vh, 0px)
    }
    30% {
      transform: translate3d(0px, 160vh, 0px)
    } */
    60% {
      transform: translate3d(60vw, 100vh, 0px) rotate(60deg)
    }
    100% {
      transform: translate3d(45vh, 120vh, 0px);
    }
  } 

  #layer1 {
    position: absolute;
    top: -10vh;
    left: 0px;
    height: 100vh;
    width: 100vw;
    z-index: 80;
  }
  #layer2 {
    position: absolute;
    top: -10vh;
    left: 0px;
    height: 100vh;
    width: 100vw;
    z-index: 70;
  }
  #layer3 {
    position: absolute;
    top: -10vh;
    left: 0px;
    height: 100vh;
    width: 100vw;
    z-index: 70;
  }
  #layer4 {
    position: absolute;
    top: -10vh;
    left: 0px;
    height: 100vh;
    width: 100vw;
    z-index: 50;
  }
  #layer5 {
    position: absolute;
    top: -10vh;
    left: 0px;
    height: 100vh;
    width: 100vw;
    z-index: 40;
  }
  #layer6 {
    position: absolute;
    top: -10vh;
    left: 0px;
    height: 100vh;
    width: 100vw;
    z-index: 30;
  }
  #layer7 {
    position: absolute;
    top: -10vh;
    left: 0px;
    height: 100vh;
    width: 100vw;
    z-index: 20;
  }
  #layer8 {
    position: absolute;
    top: -10vh;
    left: 0px;
    height: 100vh;
    width: 100vw;
    z-index: 10;
  }
  #layer9 {
    position: absolute;
    top: -100vh;
    left: 3vw;
    height: 40vh;
    width: 50vw;
    z-index: 15;
  }
  /* #layer10 {
    position: absolute;
    top: -10vh;
    left: 0px;
    height: 100vh;
    width: 100vw;
    z-index: 13;
  } */
</style>
