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
        <DreamList :prop="dataList[0]" v-if="selected === '0'"></DreamList>
      </mt-tab-container-item>
      <mt-tab-container-item id="1">
        <DreamList :prop="dataList[1]" v-if="selected === '1'"></DreamList>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
         <DreamList :paproprams="dataList[2]" v-if="selected === '2'"></DreamList>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <DreamHistory :prop="dataList[3]" v-if="selected === '3'"></DreamHistory>
      </mt-tab-container-item>
    </mt-tab-container>
    
    <DreamAddBtn></DreamAddBtn>
  </div>
</template>

<script>
import DreamList from "./list.vue";
import DreamHistory from "./history.vue";
import DreamAddBtn from "./components/addBtn.vue";
export default {
  components: { DreamList,DreamHistory,DreamAddBtn},
  data() {
    return {
      selected: "0",
      dataList:[  // 日常任务0  我的愿望1  对方愿望2  达成历史3
        {isEnd:false,isLong:true,}, //uid,
        {isEnd:false,isLong:false,},//uid,
        {isEnd:false,isLong:false,}, //uid,

        {isEnd:true,isLong:false,}, //uid, 只展示达成短期的任务
      ]
      
      
      
      // 
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
