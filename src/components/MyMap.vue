<template>
  <div>
    test
    <div id="map1" style="width: 100%; height: 400px" ref="map1">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMap',
  created () {

  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      console.log(document.getElementById('map1'),this.$refs.map1)
      try {
        // document.getElementById('map')
        this.map = new google.maps.Map(document.getElementById('map1'), {
          center: { lat: -33.8688, lng: 151.2195 },
          zoom: 13
        })
      } catch (e) {
        console.log('map error', e)
      }
    },
  }
}
</script>

<style scoped>

</style>
