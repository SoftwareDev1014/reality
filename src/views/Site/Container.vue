<template>
  <div>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: 'Container',
  components: {Header},
}
</script>

<style scoped>

</style>
