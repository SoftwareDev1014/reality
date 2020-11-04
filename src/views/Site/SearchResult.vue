<template>
  <v-container>
    <v-card height="100px">

    </v-card>
    <v-row>
      <v-col cols="3">
        <v-card class="pa-2">
          <div style="display: flex; justify-content: space-between; border-bottom: solid black 2px" class="pt-4">
            <v-spacer></v-spacer>
            <h3>Search Options</h3>
            <v-spacer></v-spacer>
          </div>
          <div class="pt-6" style="display: flex; justify-content: space-between">
            <div style="width: 50%">
              <h4>Min Price</h4>
            </div>
            <div style="width: 50%">
              <v-text-field
                outlined
                prepend-inner-icon="fas fa-dollar-sign"
                dense
                hide-details
                class="custom_input"
              ></v-text-field>
            </div>
          </div>
          <div class="pt-6" style="display: flex; justify-content: space-between">
            <div style="width: 50%">
              <h4>Max Price</h4>
            </div>
            <div style="width: 50%">
              <v-text-field
                outlined
                prepend-inner-icon="fas fa-dollar-sign"
                dense
                hide-details
                class="custom_input"
              ></v-text-field>
            </div>
          </div>
          <div class="pt-6" style="display: flex; justify-content: space-between">
            <div style="width: 50%">
              <h4>Room Num</h4>
            </div>
            <div style="width: 50%">
              <v-text-field
                outlined
                append-icon="fas fa-plus"
                dense
                hide-details
                class="custom_input"
              ></v-text-field>
            </div>
          </div>
          <div class="pt-6" style="display: flex; justify-content: space-between">
            <div style="width: 50%">
              <h4>Bath Num</h4>
            </div>
            <div style="width: 50%">
              <v-text-field
                outlined
                append-icon="fas fa-plus"
                dense
                hide-details
                class="custom_input"
              ></v-text-field>
            </div>
          </div>
          <div class="pt-6" style="display: flex; justify-content: space-between">
            <div style="width: 50%">
              <h4>Square</h4>
            </div>
            <div style="width: 50%">
              <v-text-field
                outlined
                append-icon="fas fa-plus"
                dense
                hide-details
                class="custom_input"
              ></v-text-field>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-card height="50px">
          <div style="display: flex; justify-content: space-between; height: 100%" class="px-4">
            <div style="align-self: center">
              <h4>Filter Options</h4>
            </div>
            <div style="align-self: center" v-for="(item, index) in filterBtns" :key="index">
              <v-btn small outlined @click="()=>{
                if (!multiple){
                  let f_index=filter.findIndex(x=>x.key==item.key)
                  if (f_index>-1){
                    filter[f_index].direct=filter[f_index].direct=='asc'?'desc':'asc'
                  }else{
                    filter=[]
                    let f_item={
                      key:item.key,
                      direct:'asc'
                    }
                    filter.push(f_item)
                  }
                }
              }">
                {{item.label}}
                <template v-if="getFilterIndex(item.key)>-1">
                  <v-icon v-if="getFilterDirect(item.key)=='asc'">fas fa-caret-down</v-icon>
                  <v-icon v-else>fas fa-caret-up</v-icon>
                </template>

              </v-btn>
            </div>
          </div>
        </v-card>
        <v-divider></v-divider>
        <v-card>
          <search-comp></search-comp>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchComp from "@/components/SearchComp";
export default {
  name: "SearchResult",
  components: {SearchComp},
  data:()=>({
    filterBtns:[
      {
        label:"Recent",
        key:"1"
      },
      {
        label:"Price",
        key:"2"
      },
      {
        label:"Room Number",
        key:"3"
      },
      {
        label:"Bath Number",
        key:"4"
      },
      {
        label:"Square",
        key:"5"
      }
    ],
    filter:[],
    multiple:false
  }),
  methods:{
    getFilterIndex(key){
      return this.filter.findIndex(x=>x.key==key)
    },
    getFilterDirect(key){
      let  f_index= this.filter.findIndex(x=>x.key==key)
      return this.filter[f_index].direct
    }
  }
}
</script>

<style scoped>

</style>
