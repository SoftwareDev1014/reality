<template>
    <v-container style="display: flex">
      <v-row>
        <v-col  cols="4" v-for="(item,index)  in searchresult"  :key="index">
          <v-img :src="require('@/assets' + item.image)" width="100%"/>
          <div>{{item.name}}</div>
          <div class="pt-1">$ {{item.price}}</div>
          <div>{{item.mls_code}}</div>
          <div style="display: flex;justify-content: space-between">
            <i class="fa fa-bed">{{item.room_num}} Bed</i>
            <i class="fas fa-bath">{{item.bath_num}} Bath</i>
          </div>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import searchresult from "@/Models/searchresult";
import hostlist from "@/Models/hostlist";
export default {
  name: "SearchComp",
  data: () => ({
    searchresult : searchresult
  })

}
</script>

<style scoped>

</style>
