<template>
  <div>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
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
