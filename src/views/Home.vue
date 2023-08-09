<template>
    <div class="row" style="margin: 0;">
      <hr style="margin: 0;padding:0">
      <section style="margin: 0; padding: 0;">
        <div
          id="home_top_container"
          class="col-lg-12"
          style="
            background-image: url('https://cdn.pixabay.com/photo/2013/07/18/10/59/pulse-trace-163708_1280.jpg');
          "
        ></div>
        <div class="slogan-container">
          <transition-group name="fade" mode="out-in">
            <p class="slogan" v-if="showSlogan" :key="sloganKey">
              {{ currentSlogan }}
            </p>
          </transition-group>
        </div>
        <button id="move_bottom_button" @click="scrollToBottom">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
        </button>
      </section>
      <section id="wellcome">
        <div id="wellcomeBox">
            <div>
                <h4>트레이딩뷰와 연동하여 <br> 손쉬운 자동매매를 구현합니다</h4>
            </div>
            <br>
            <div class="wellcomeBoxText">
                <p>
                sinamon은 트레이딩뷰와의 강력한 연동을 통해
                당신의 투자를 더욱 효율적으로 관리할 수 있도록 지원합니다. <br>
                트레이딩뷰의 다양한 지표를 활용하여 자동매매 전략을 구축하고, <br>
                실시간으로 시장 변화에 반응하여 당신의 자산을 최적화하세요.
                </p>
            </div>  
        </div>
        <div id="home-carousel">
            <Carousel></Carousel>
        </div>
        <div>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
      </section>
  
      <section class="col-lg-6" id="chart_section">
      </section>
      <section class="col-lg-6" id="info_section"></section>
    </div>
  </template>
  
  <script>
    import Carousel from "../components/ui/Carousel";

  export default {
    name: "VueHome",
    components: {
        Carousel
    },
    data() {
      return {
        widgetHeight: "calc(100vh - 70px)",
        slogans: [
          "쉬운 인터페이스로 \n간편하게 봇을 이용하세요",
          "안정적인 시그널로 \n수익을 안전하게 쌓아보세요",
          "트레이딩뷰 시그널로 \n더 스마트하게 자동매매 하세요",
        ],
        showSlogan: false,
        sloganIndex: 0,
      };
    },
    computed: {
      currentSlogan() {
        return this.slogans[this.sloganIndex];
      },
      sloganKey() {
        return `slogan-${this.sloganIndex}`;
      },
    },
    mounted() {
    this.showSlogan = true;
    this.rotateSlogans();
  },
    methods: {
      rotateSlogans() {
        setInterval(() => {
          this.showSlogan = false;
          setTimeout(() => {
            this.sloganIndex = (this.sloganIndex + 1) % this.slogans.length;
            this.showSlogan = true;
          }, 500);
        }, 5000);
      },
      scrollToBottom() {
        window.scrollTo(0, window.innerHeight+60);
      },
    },
  };
  </script>

<style>
#home_top_container{
    width: 100vw;
    height: calc(100vh - 70px);
    background-color: rgba(187, 233, 207, 0.5); /* 배경색에 투명도 추가 */
    background-image: url('https://cdn.pixabay.com/photo/2013/07/18/10/59/pulse-trace-163708_1280.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    z-index: -1;
    position: relative; /* 부모 요소의 position을 relative로 설정 */
}
#home_chart_area{
    height: 400px;
}
#chart_section{
    padding: 0;
}
#info_section{
    padding: 0;
}

.slogan-container {
    position: absolute;
    top: 55%; /* 부모 요소의 중앙에 위치시키기 위해 top을 50%로 설정 */
    left: 50%; /* 부모 요소의 중앙에 위치시키기 위해 left를 50%로 설정 */
    transform: translate(-50%, -50%); /* 중앙 정렬을 위한 transform */
    text-align: center;
    color: rgb(255, 255, 255);
    white-space: pre-line;
}

.slogan {
    width: 90vw;
    font-size: 24px;
    margin: 10px;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
#move_bottom_button {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    color: white;
    position: absolute;
    bottom: 10vh; /* 페이지 아래에 위치 */
    left: 50%;
    transform: translateX(-50%);
    animation: shakeButton 1s infinite;
    transition: transform 0.3s ease-in-out;
    margin-left: -17px;
}

#move_bottom_button:hover {
    color: rgb(181, 255, 203);
    font-weight: 900;
    transform: translateX(-50%) scale(1.1); /* 가로 방향 가운데 정렬 유지 */
}

@keyframes shakeButton {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

#wellcome{
    height: 100vh;
}

#wellcomeBox {
  margin: 0 auto;
  margin-top: 30px;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0); /* 배경색 조정 */
  text-align: center;
  color: rgb(0, 0, 0);
  border-radius: 10px; /* 모서리 둥글게 */
  max-height: 50%;
}
.wellcomeBoxText {
  font-size: large;
  line-height: 1.5; /* 줄 간격 조정 */
  margin-top: 20px; /* 위 여백 추가 */
}
#wellcomeBox h4 {
  font-size: xx-large;
}

#home-carousel {
    height: 50vh;
}
@media (max-width: 767px) {
  .wellcomeBoxText {
    font-size: large;
  }
  #wellcomeBox h4 {
    font-size: 24px;
  }
}
</style>
