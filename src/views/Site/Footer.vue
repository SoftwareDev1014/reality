<template>
  <v-container>
    <div style="display: flex">
      <div style="flex: 1" >
        <div>
          일등 뉴스타 부동산 소개
        </div>
        <div>
          <footer-banner-links :link_list="footer_banner_links"/>
        </div>
      </div>
      <div class="footer_item" >
        <div style="font-size: 14px">
          <v-icon small>
            fas fa-home
          </v-icon>
          페어팩스(Fairfax) 본사
        </div>
        <div class="pt-4">
          <router-link class="foot-font12" align="left" to = 'home'>
            2751 Prosperity Ave. #580<br>
            Fairfax, VA 22031<br>
            전화:	703-641-4989<br>
            팩스:	703-641-0033
          </router-link>
        </div>
      </div>
      <div  class="footer_item">
        <div style="font-size: 14px">
          락빌 (Rockville)
        </div>
        <div class="pt-4">
          <router-link class="foot-font12" align="left" to="/home">
            600 Jefferson Plaza #400-A<br>
            Rockville, MD 20852<br>
            전화:	301-969-1444<br>
            팩스:	703-641-0033
          </router-link>
        </div>
      </div>
      <div  class="footer_item">
        <div style="font-size: 14px">
          볼티모어 (Baltimore)
        </div>
        <div class="pt-4">
          <router-link class="foot-font12" align="left" to="/home">
            8492 Baltimore National Pike. #200
            Ellicott City, MD <!--21043--><br>
            전화:	410-750-8040<br>
            팩스:	410-750-3992
          </router-link>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import FooterBannerLinks from "../../components/FooterBannerLinks";

export default {
  name: 'Footer',
  components: {FooterBannerLinks},
  computed: {
    footer_banner_links() {
      return this.$store.state.site_setting.footer_intro
    }
  }
}
</script>

<style scoped>

</style>
