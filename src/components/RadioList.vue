<template>
<div class="pt-2">
    <ul>
      <li v-for="(item, index) in RadioList" :key="index">
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
import RadioList from "@/Models/RadioList";

export default {
  name: "RadioList",
  data:()=>({
    RadioList:RadioList
  })
}
</script>

<style scoped>

</style>
