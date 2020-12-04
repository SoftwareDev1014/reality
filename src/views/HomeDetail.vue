<template>
  <div>
    <v-container>
      <div class="thumb-example">
        <!-- swiper1 -->
        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper class="swiper gallery-thumbs px-2" :options="swiperOptionThumbs" ref="swiperThumbs">
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
        </swiper>
      </div>
    </v-container>
    <v-container>
      <v-card>
        <v-row>
          <v-col cols="6">
            <div class="pa-6">
              <h3><i class="fas fa-dollar-sign"></i> 343,400</h3>
            </div>
            <div style="display: flex" class="px-4 py-2">
              <h4><i class="fas fa-map-marker-alt"/> 110 N MAPLETON Drive, Los Angeles, CA 90077</h4>
            </div>
            <div style="display: flex" class="px-4 py-2">
              <h4><i class="fas fa-bed"/> 방 : 3</h4>
              <v-spacer></v-spacer>
              <h4><i class="fas fa-bath"/> 욕실 : 2</h4>
              <v-spacer></v-spacer>
              <h4><i class="fas fa-square"/> 건축면적 : 2200 sqft</h4>
            </div>
            <div style="display: flex" class="px-4 py-2">
              <h4>건축년도 : 1990</h4>
            </div>
          </v-col>
          <v-col cols="1">
          </v-col>
          <v-col cols="5" class="pr-10">
            <div style="display: flex;justify-content: space-between;">
              <div style="align-self: center">
                <v-img class="v-avatar"
                       :src="require('../assets/pic/user1.jpg')"
                       width="150"></v-img>
              </div>
              <div class="pa-2">
                <div class="pt-4">
                  <h4>Kyong M Starrett</h4>
                </div>
                <div class="pt-4">
                  <h5>213-864-2145</h5>
                </div>
                <div class="pt-4">
                  <h5>sdes@sdadewe.com</h5>
                </div>
                <div style="display: flex;justify-content: space-between" class="pt-4">
                  <v-spacer/>
                  <v-btn>에이전트에게 문의하기</v-btn>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <v-container>
      <v-card>
        <div class="pa-4">
          <div>
            <h3>매물 상세정보</h3>
          </div>
          <div class="pt-2 px-4">
            <h5>형태 : French</h5>
          </div>
          <div class="pt-2 px-4">
            <h5>층수 : 2</h5>
          </div>
          <div class="pt-2 px-4">
            <h5>바닥 : N/A</h5>
          </div>
          <div class="pt-2 px-4">
            <h5>난방 : Central</h5>
          </div>
        </div>
      </v-card>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="5">
          <v-card class="pt-0" style="height: 100%">
            <div class="pa-4">
              <h3>매물설명</h3>
            </div>
            <div class="pa-6">
              <h4>This Elegant Holmby Hills Estate was built in the image of Marie Antoinette's 18th century French
                Chateau in Versailles outside Paris. A magnificent residence on Holmby Hills most prestigious street,
                entering this grand residence through 14' glass and verdigris wrought iron doors, one is greeted by
                daylight from a 46' high dome two stories overhead. Suspended from the center of the dome a massive
                eighteenth century baccarat crystal chandelier. The library, 790 sq ft. living room, formal dining room,
                and two marble powder rooms, all with high ceilings and large French doors, surround the entry. The
                1800sq ft. master bedroom suite contains 3 fire places, a sitting room, several balconies, wet bars, and
                a marble spa. There are, in addition, 3 separate guest suites with private baths, self contained staff
                quarters and an elevator servicing all 3 floors.</h4>
            </div>
          </v-card>
        </v-col>
        <v-col cols="7">
          <v-card style="height: 100%">
            <v-toolbar
              flat
              color="purple"
              dark
            >
              <v-toolbar-title>주변 지역 정보</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
              <v-tab>
                <v-icon left>
                  mdi-map-marker-radius
                </v-icon>
                Map
              </v-tab>
              <v-divider></v-divider>
              <v-tab>
                <v-icon left>
                  mdi-school
                </v-icon>
                School
              </v-tab>
              <v-divider></v-divider>
              <v-tab-item>
                <v-card flat style="border-left: solid lightgray 1px">
                  <v-card-text>
                    <MyMap/>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat style="border-left: solid lightgray 1px">
                  <v-card-text>
                    <p>
                      Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
                      vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam
                      libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae,
                      posuere imperdiet, leo. Nunc sed turpis.
                    </p>

                    <p>
                      Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
                      tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula
                      arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac
                      felis sit amet ligula pharetra condimentum.
                    </p>

                    <p>
                      Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.
                      Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor.
                      Aliquam eu nunc.
                    </p>

                    <p>
                      Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus
                      pede. Duis leo. Fusce fermentum odio nec arcu.
                    </p>

                    <p class="mb-0">
                      Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget,
                      vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum
                      sed, iaculis a, condimentum nec, nisi.
                    </p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
      <v-card>
        <div class="pa-4">
          <h3>주변에 등록된 매물</h3>
        </div>
        <div class="pa-4">
          <v-row>
            <v-col cols="3" v-for="(item, index) in hostlist" :key="index">
              <v-img :src="require('@/assets' + item.image)" width="100%"/>
              <div>{{ item.name }}</div>
              <div class="pt-1">$ {{ item.price }}</div>
              <div>{{ item.mls_code }}</div>
              <div style="display: flex;justify-content: space-between">
                <i class="fa fa-bed">{{ item.room_num }} Bed</i>
                <v-spacer/>
                <i class="fas fa-bath">{{ item.bath_num }} Bath</i>
                <v-spacer/>
                <i class="fas fa-square">{{ item.sqft }}</i>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>

  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import hostlist from '@/Models/hostlist'
import MyMap from '../components/MyMap'

export default {

  name: 'homedetail',
  title: 'Thumbs gallery with Two-way control',
  components: {
    MyMap,
    Swiper,
    SwiperSlide
    // eslint-disable-next-line vue/no-unused-components
  },
  data() {
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
      },
      map: null,
      mapcenter: {lat: 37.773972, lng: -122.431297},
      hostlist: hostlist
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller = swiperThumbs
      swiperThumbs.controller = swiperTop
    })

    // this.setMarker(this.mapcenter, 'A')
  },
  methods: {

    setMarker(Points, Label) {
      /* const markers = new google.maps.Marker({
        Position: Points,
        map: this.map,
        label: {
          text: Label,
          color: '#9d2c2c'
        }
      }) */
    }
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
      background-image: url('/homedetail/1.jpg');
    }

    &.slide-2 {
      background-image: url('/homedetail/2.jpg');
    }

    &.slide-3 {
      background-image: url('/homedetail/3.jpg');
    }

    &.slide-4 {
      background-image: url('/homedetail/4.jpg');
    }

    &.slide-5 {
      background-image: url('/homedetail/5.jpg');
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
