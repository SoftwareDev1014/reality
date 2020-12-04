<template>
  <div>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer app absolute style="width: 100%;background-color: lightgrey">
      <Footer/>
    </v-footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: 'Container',
  components: {Footer, Header},
}
</script>

<style scoped>

</style>
