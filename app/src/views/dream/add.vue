<template>
    <div class="content">
    
      <p><mt-field label="愿望标题" placeholder="" v-model="dreamTitle"></mt-field></p>
      <p class="flex">
        <span class="lr">是否为日常任务:</span>  
        <span class="lr"><mt-switch v-model="isLong"></mt-switch></span>
      </p>
      <p  class="flex">
        <span class="lr">是否已完成:</span>  
        <span class="lr"><mt-switch v-model="isEnd"></mt-switch></span>
      </p>
      <p class="textAreaP">
        <span class="lr">愿望详情:</span>
        <span class="lr"><mt-field type="textarea" rows="20" v-model="dreamDetail"></mt-field></span>
      </p>
      <p>
        <mt-button size="large" type="default" @click="userLogin">登录</mt-button>
      </p>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        dreamTitle:'',
        dreamDetail:'',
        isLong:false,
        isEnd:false,
      };
    },

  };
  </script>
  
  <style scoped>
  .content {
    margin-top: 10px;
    max-height: calc(100vh - 154px);
    overflow-y: auto;
    padding: 0 10px;
  }
  .content p{
    background-color: #fff;
    
    line-height: 48px;
    border-bottom: 1px solid #ccc;
   
  }
  .content .textAreaP{

  }
  .content .flex{
    display: flex;
    justify-content: space-between;
  }
  .lr{
    line-height: 48px;
  }
  </style>
  