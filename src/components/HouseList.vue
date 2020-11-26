<template>
  <v-sheet
    elevation="0"
  >
    <v-slide-group
      v-model="model"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="(item,index)  in hostList" :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          class="ma-4"
          height="200"
          width="200"
          @click="toggle"
        >
          <v-img :src="require('@/assets' + item.image)" width="100%" height="130px"/>
          <div class="px-2">
            <div style="font-size: 12px">{{ item.name }}</div>
            <div style="font-size: 12px">$ {{ item.price }}</div>
            <div style="font-size: 12px">{{ item.mls_code }}</div>
            <div style="display: flex;justify-content: space-between; font-size: 12px">
              <i class="fa fa-bed">{{ item.room_num }} Bed </i>
              <v-spacer></v-spacer>
              <i class="fas fa-bath">{{ item.bath_num }} Bath</i>
              <v-spacer></v-spacer>
              <i class="fas fa-square">{{ item.sqft }} sqft</i>
            </div>
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>


  <!--  <v-container style="display: flex">-->
  <!--    <v-row>-->
  <!--      <v-col  cols="4" v-for="(item,index)  in hostList"  :key="index">-->
  <!--        <v-img :src="require('@/assets' + item.image)" width="100%"/>-->
  <!--        <div>{{item.name}}</div>-->
  <!--        <div class="pt-1">$ {{item.price}}</div>-->
  <!--        <div>{{item.mls_code}}</div>-->
  <!--        <div style="display: flex;justify-content: space-between">-->
  <!--          <i class="fa fa-bed">{{item.room_num}} Bed</i>-->
  <!--          <i class="fas fa-bath">{{item.bath_num}} Bath</i>-->
  <!--        </div>-->
  <!--      </v-col>-->
  <!--    </v-row>-->
  <!--  </v-container>-->
</template>

<script>
import hostlist from "@/Models/hostlist";

export default {
  name: "HouseList",
  data: () => ({
    model: null,
    hostList: hostlist
  })
}
</script>

<style scoped>

</style>
