<style scoped>
  /*.menu_title{
    font-size: 18px;
    color: white;
    cursor: pointer;
  }*/
</style>
<template>
    <div >
      <v-menu
        offset-y
        v-if="item_data.isDrop"
        tile
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            tile
            dark
            v-bind="attrs"
            v-on="on"
            large
            text
            class="px-1"
          >
            {{item_data.name}}
            <v-icon>
              keyboard_arrow_down
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in item_data.children"
            :key="index"
            link
            :to="item.link"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        v-else
        tile
        dark
        v-bind="attrs"
        v-on="on"
        text
        large
      >
        {{item_data.name}}
      </v-btn>
    </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item_data: {
      type: Object
    }
  },
  data: () => ({
    isDropDown: true
  })
}
</script>
