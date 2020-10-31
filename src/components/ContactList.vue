<template>
  <div style="display: flex">
    <div v-for="(item,index) in link_list" :key="index">
      <div style="display: flex">
        <div style="display: flex"  class="px-2">
          <div class="mr-2" style="align-self: center">
            <v-icon size="28">
              {{item.icon}}
            </v-icon>
          </div>
          <div style="text-align: left">
            <h4>{{item.title}}</h4>
            <div>
              {{item.description}}
            </div>
          </div>
        </div>
        <v-divider v-if="item.diver" vertical/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  props: {
    link_list: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
