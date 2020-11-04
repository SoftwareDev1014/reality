<template>
  <v-card>
      <v-container class="pb-0">
        <div style="display: flex;justify-content: space-between">
          <div style="align-self: center">
            <img v-if="logo.image!=''" :src="require('../../assets/img/logo.png')"/>
          </div>
          <div>
            <div style="display: flex;justify-content: space-between;">
              <v-spacer></v-spacer>
              <div>
                <top-banner-links :link_list="top_banner_links"/>
              </div>
            </div>
            <div style="display: flex;justify-content: space-between" class="pt-3">
              <v-spacer></v-spacer>
              <div>
                <contact-list :link_list="contact_list"/>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    <v-card color="red" flat tile dark>
      <v-container class="py-0">
        <div style="display: flex">
          <div style="flex: 1">
            <div style="display: flex">
              <menu-item v-for="(item,index) in menu" :key="index" :item_data="item" />
            </div>
          </div>
          <div style="align-self: center">
            <social-links :link_list="social_links"/>
          </div>
        </div>
      </v-container>
    </v-card>
  </v-card>
</template>

<script>
import MenuItem from '../../components/MenuItem'
import TopBannerLinks from '../../components/TopBannerLinks'
import SocialLinks from "../../components/SocialLinks";
import ContactList from "../../components/ContactList";
export default {
  name: 'Header',
  components: {ContactList, SocialLinks, TopBannerLinks, MenuItem },
  computed: {
    broad_cast_title () {
      return this.$store.state.site_setting.broad_cast_title
    },
    menu () {
      return this.$store.state.site_setting.menu
    },
    top_banner_links () {
      return this.$store.state.site_setting.top_banner_links
    },
    logo () {
      return this.$store.state.site_setting.logo
    },
    social_links () {
      return this.$store.state.site_setting.social_links
    },
    contact_list () {
      return this.$store.state.site_setting.contact_list
    }
  }
}
</script>

<style scoped>

</style>
