<style scoped>
a{
  text-decoration: none;
}
</style>
<template>
  <div style="display: flex; justify-content: space-between" class="px-6 pt-4 ">
    <div v-for="(item, index) in BusinessList" :key="index">
      <div style="font-size: 14px">
        {{ item.kor_title }}
      </div>
      <div style="font-size: 14px">
        {{ item.eng_title }}
      </div>
      <div class="pt-6">
        <a :href="item.link">$ {{ numberWithCommas(item.price) }} - MD</a>
      </div>
    </div>
  </div>
</template>

<script>
import BusinessList from "@/Models/BusinessList";

export default {
  name: "BusinessList",
  data: () => ({
    BusinessList: BusinessList
  }),
  methods:{
    numberWithCommas(x){
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>

<style scoped>

</style>
