<template>
  <div class="pt-2">
    <ul>
      <li v-for="(item, index) in CommunityList" :key="index">
        <div style="display: flex;justify-content: space-between">
          <div style="font-size: 13px;color:cornflowerblue;">
            {{item.title}}
          </div>
          <div style="font-size: 13px;">
            {{item.date}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CommunityList from "@/Models/CommunityList";
import hostlist from "@/Models/hostlist";

export default {
  name: "CommunityList",
  data:()=>({
    CommunityList:CommunityList
  })
}
</script>

<style scoped>

</style>
