<template>
  <div>
    <div class="thumb-example">
      <!-- swiper1 -->
      <swiper class="swiper gallery-top"
              :initialSlide="5"
              :options="swiperOptionTop" ref="swiperTop">
        <swiper-slide class="slide-1">1</swiper-slide>
        <swiper-slide class="slide-2">2</swiper-slide>
        <swiper-slide class="slide-3">3</swiper-slide>
        <swiper-slide class="slide-4">4</swiper-slide>
        <swiper-slide class="slide-5">5</swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1">1</swiper-slide>
        <swiper-slide class="slide-2">2</swiper-slide>
        <swiper-slide class="slide-3">3</swiper-slide>
        <swiper-slide class="slide-4">4</swiper-slide>
        <swiper-slide class="slide-5">5</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'swiper-example-thumbs-gallery',
  title: 'Thumbs gallery with Two-way control',
  components: {

  },
  data () {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      // console.log('swiperTop',swiperTop)
      // console.log('swiperThumbs',swiperThumbs)
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>
<style lang="scss" scoped>
$white: #FFFFFF;
$black: #e5dbdb;
$github-primary: #24292e;
$github-secondary: #30363c;
$github-text-primary: #0366d6;
$github-sponsor-primary: rgb(234, 74, 170);

$body-bg: #e0e0e0;
$module-bg: $white;
$module-bg-darken: #f7f7f7;

$text-color: #353535;
$text-secondary: lighten($text-color, 20%);
$link-color: $black;
$text-reverse: $module-bg-darken;

// sizes
$container-width: 960px;
$radius: 1px;

// gaps
$golden-ratio: 0.618;
$gap: 1rem; // ~14px
$sm-gap: $gap * $golden-ratio; // ~8.6px
$xs-gap: $sm-gap / 2; // ~4.4px
$lg-gap: $sm-gap * 2; // ~17px

// times
$transition-time-fast: .15s;
$transition-time-normal: .25s;
$transition-time-slow: .38s;

// fonts
$font-size-base: 14px;
$font-size-large: $font-size-base * 1.1; // ~15.4px
$font-size-huge: $font-size-base * 1.3; // ~19px
$font-size-small: $font-size-base * .888; // ~12.4px

$iconfont-size: $font-size-base * 1.35;

.thumb-example {
  height: 480px;
  background-color: $black;
}
.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
    &.slide-1 {
      background-image:url('/homedetail/1.jpg');
    }
    &.slide-2 {
      background-image:url('/homedetail/2.jpg');
    }
    &.slide-3 {
      background-image:url('/homedetail/3.jpg');
    }
    &.slide-4 {
      background-image:url('/homedetail/4.jpg');
    }
    &.slide-5 {
      background-image:url('/homedetail/5.jpg');
    }
  }
  &.gallery-top {
    height: 80%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: $gap 0;
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>
