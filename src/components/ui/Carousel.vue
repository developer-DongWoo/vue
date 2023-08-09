<template>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" data-ride="carousel" data-bs-interval="3000">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3000">
        <img src="https://i.namu.wiki/i/IhFrc6uiSNlonNFRXzSNrKrhPKrjpmlmsB_SDg3x0PeW_L06BFuF7mOq8AcPDYjonfNpG64cQYsINU8sICeDpg.webp" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="https://image.edaily.co.kr/images/photo/files/NP/S/2023/05/PS23050400683.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"; // 부트스트랩 CSS를 불러옵니다.
import "bootstrap/dist/js/bootstrap.bundle.min"; // 부트스트랩 JavaScript를 불러옵니다.

export default {
  name: "VueCarousel",
};
</script>
  
  <style>
  .carousel-container {
    position: relative;
  }
  
  /* .carousel-img {
    height: 200px;
    max-width: 1000px;
    object-fit: scale-down;
  } */

  #carouselExampleDark{
    margin: 0 auto;
    max-width: 1000px;
  }
  .carousel-inner{
    height: 50vh;
  }
  .d-block h-100{
    height: 100%;
  }
  
  @media (max-width: 767px) {
    .carousel-control-prev,
    .carousel-control-next {
      display: none;
    }
  }
  </style>
  