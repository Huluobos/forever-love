<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="0">日常任务</mt-tab-item>
      <mt-tab-item id="1">我的愿望</mt-tab-item>
      <mt-tab-item id="2">对方愿望</mt-tab-item>
      <mt-tab-item id="3">达成历史</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="0">
        <dreamList :params="dataList[0]" v-if="selected === '0'"></dreamList>
      </mt-tab-container-item>
      <mt-tab-container-item id="1">
        <dreamList :params="dataList[1]" v-if="selected === '1'"></dreamList>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
         <dreamList :params="dataList[2]" v-if="selected === '2'"></dreamList>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <dreamList :params="dataList[3]" v-if="selected === '3'"></dreamList>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import dreamList from "./dream-list.vue";
export default {
  components: { dreamList,},
  data() {
    return {
      selected: "0",
      dataList:[  // 日常任务0  我的愿望1  对方愿望2  达成历史3
        {isEnd:false,isLong:false,}, //uid,
        {isEnd:true,isLong:false,},
        {isEnd:true,isLong:false,},
        {isEnd:true,isLong:false,},
      ]
      
      
      
      // 
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
