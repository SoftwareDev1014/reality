<template>
  <v-card>
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
  </v-card>
</template>

<script>
export default {
  name: 'PropertyBox',
  props: {

  }
}
</script>

<style scoped>

</style>
