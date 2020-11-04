<template>
  <v-card  tile>
    <v-card-text>
      <div style="display: flex;justify-content: center; border-bottom: dashed grey 1px;">
        {{refData.title}}
      </div>
      <div style="display: flex" class="pt-3">
        <div style="width: 40%; align-self: center">
          <v-img :src="require('@/assets' + refData.image)"/>
        </div>
        <div style="width: 60%" class="pl-3">
          <div style="line-height: 16px" class="pb-3">
            <h5>{{refData.content}}</h5>
          </div>
          <div v-for="(item, index) in refData.region" :key="index">
            <a :href="item.link"><div style="line-height: 18px; font-size: 12px">{{item.label}}</div></a>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import HomeReference from "@/Models/HomeReference";
export default {
  name: "HomeReference",
  props:{
    refData:{
      type:Object
    }
  },
  data:()=>({
    HomeReference:HomeReference
  })
}
</script>

<style scoped>

</style>
