<template>
  <div style="display: flex">
    <div v-for="(item,index) in link_list" :key="index">
      <div style="display: flex">
        <v-btn text small tile class="px-2" link :to="item.link">
          <v-icon small v-if="item.icon">
            {{item.icon}}
          </v-icon>
          {{item.label}}
        </v-btn>
        <v-divider v-if="item.diver" vertical/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBannerLinks',
  props: {
    link_list: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
