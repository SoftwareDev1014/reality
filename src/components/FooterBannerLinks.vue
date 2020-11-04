<template>
  <div>
    <div v-for="(item,index) in link_list" :key="index">
      <div style="display: flex">
        <v-btn text small tile class="px-0" link :to="item.text">
          <v-icon small v-if="item.icon">
            {{item.icon}}
          </v-icon>
          {{item.text}}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBannerLinks',
  props: {
    link_list: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
