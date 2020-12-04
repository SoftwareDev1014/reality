<template>
    <v-container>
      <div style="width: fit-content;margin: auto">
        <div class="justify-center d-flex pt-3 px-4 pb-6">
          <select class="border px-2 mr-2">
            <option>For Sale</option>
          </select>
          <input placeholder="Enter City, State or Zip Code" class="border px-2 mr-2" style="width: 300px">
          <select class="border px-2">
            <option>모든 매물</option>
            <option>주택(Single Family)</option>
            <option>타운하우스(Townhouse)</option>
            <option>콘도(Condo)</option>
          </select>
          <v-btn color="primary">Search Homes</v-btn>
        </div>
        <div style="border-bottom: 2px solid #b40101;"></div>
      </div>

    </v-container>
</template>

<script>
export default {
  name: 'Property'
}
</script>

<style scoped>

</style>
