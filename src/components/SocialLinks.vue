<template>
  <div style="display: flex">
    <div v-for="(item,index) in link_list" :key="index" style="display: flex"  class="px-2">
      <v-btn fab x-small color="white" light class="px-2" link :href="item.link" target="_blank">
        <v-icon v-if="item.icon">
          {{item.icon}}
        </v-icon>
      </v-btn>
      <v-divider v-if="item.diver" vertical/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    link_list: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
