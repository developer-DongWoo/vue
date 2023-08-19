<template>
    <div>
      <JoinExchangeCarousel>
      </JoinExchangeCarousel>
    </div>
  </template>
  
  <script>
    import JoinExchangeCarousel from './JoinExchangeCarousel';
  export default {
    name:"JoinExchange",
    components: {
      JoinExchangeCarousel
    }
  };
  </script>
  
  <style>
  /* Add your custom styling for carousel steps here */
  .carousel-step {
    text-align: center;
    padding: 20px;
  }
  </style>
  