<template>
<section class="container">

  <div class="parallax-container">
    <div class="parallax-layer layer-0" data-parallax-speed="0.05" data-max-scroll="565"></div>
    <div class="parallax-layer layer-1" data-parallax-speed="0.1" data-max-scroll="565"></div>
    <div class="parallax-layer layer-2" data-parallax-speed="0.3" data-max-scroll="565"></div>
    <div class="parallax-layer layer-3" data-parallax-speed="0.5" data-max-scroll="565"></div>
    <div class="parallax-layer layer-4" data-parallax-speed="0.7" data-max-scroll="565"></div>
    <div class="parallax-layer layer-5" data-parallax-speed="0.9" data-max-scroll="565"></div>
  </div>

  <div class="content">
    <h1>This is parallax.</h1>
  </div>

</section>
</template>

<style scoped>
.container {
  background: #415a6c;
  margin: 0;
  font-family: 'Oswald';
}
.parallax-container {
  position: fixed;
  overflow: visible;
  width: 100%;
  height: 850px;
}
.parallax-layer {
  width: 100%;
  height: 500px;
  position: fixed;
  left: 0;
  top: 0;
  background-position: bottom center;
  background-repeat: repeat-x;
  background-size: 960px 253px;
}
  .layer-0 {
    top: 0;
    z-index: 5;
    background: #dbf0ff url('/images/layer-1.png') no-repeat top 40px center;
    background-size: 120px 138.5px;
  }
  .layer-1 {
    top: -100px;
    z-index: 5;
    background-image: url('/images/layer-2.png');
  }
  .layer-2 {
    top: -50px;
    z-index: 10;
    background-image: url('/images/layer-3.png');
  }
  .layer-3 {
    top: -10px;
    z-index: 15;
    background-image: url('/images/layer-4.png');
  }
  .layer-4 {
    top: 65px;
    z-index: 20;
    background-image: url('images/layer-5.png');
  }
  .layer-5 {
    top: 150px;
    z-index: 25;
    background-image: url('images/layer-6.png');
  }

  
.content {
  position: absolute;
  top: 600px;
  background: #415a6c;
  width: 100%;
  min-height: 1500px;
}
  .content h1 {
    color: #fff;
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
  }
</style>

