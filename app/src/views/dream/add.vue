<template>
    <div class="content">

      <p class="block">
        <span class="ll">愿望标题:</span>
        <span class="lr">
         <el-input style="border:none" class="myinput" clearable placeholder="请输入标题" v-model="dreamTitle"  maxlength="20"></el-input>
        </span>
      </p>
      <p class="flex">
        <span class="ll">是否为日常任务:</span>
        <span class="lr">
          <el-switch
            v-model="isLong"
            active-text="是"
            inactive-text="否">
          </el-switch>
        </span>
      </p>
      <p  class="flex">
        <span class="ll">是否已完成:</span>
         <span class="lr">
          <el-switch
            v-model="isEnd"
            active-text="是"
            inactive-text="否">
          </el-switch>
        </span>
      </p>
      <p class="textAreaP">
        <span class="ll">愿望详情:</span>
        <span class="lr">
         <el-input type="textarea" :rows="5" placeholder="请输入详情" v-model="dreamDetail"></el-input>
        </span>
      </p>
      <p>
          <el-button round style="width:70%; background: linear-gradient(315deg, #eb4eb1, #9257f9 50%, #3150ed);color:#fff" @click="addBtn" :loading="addloading"> 添 加 愿 望 </el-button>
      </p>
    </div>
  </template>

  <script>
  import {Indicator, MessageBox, Toast} from "mint-ui";
  import {addDream} from "../../api";
  export default {
    data() {
      return {
        dreamTitle:'',
        dreamDetail:'',
        isLong:false,
        isEnd:false,
        uId:JSON.parse(localStorage.getItem('user')).uId,
        addloading:false
      };
    },
    methods: {
      addBtn(){
        if(this.dreamTitle!=='' && this.dreamDetail!==''){
          const params = {
            uId:this.uId,
            dreamTitle:this.dreamTitle,
            dreamDetail:this.dreamDetail,
            isLong:this.isLong,
            isEnd:this.isEnd
          }
          if(this.isEnd){
            params['longCount'] = 1
            params['longHistory'] = JSON.stringify([{time:new Date().getTime(),uid:this.uId }])
          }
          this.addloading = true
          addDream(params).then((res) => {
            setTimeout(()=>{
              this.addloading = false
            },1500)

            if (res.ret !== true) {
              Toast({
                message: res.msg,
                position: "bottom",
                duration: 2000,
              });
              return;
            } else {
              Toast({
                message: res.msg,
                position: "bottom",
                duration: 3000,
              });

            }
          });
        }else{
          MessageBox({
            title: '提示',
            message: '请输入标题或详情'
          })
        }
      }
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
    line-height: 40px;
    border-bottom: 1px dotted #666;
    padding: 4px 0;
  }
  .content p:last-child{
    border: none;
    margin-top: 10px;
    text-align: center;

  }
   .content .textAreaP{
    border: none;
   }
   .content p .ll,  .content p .lr{
    line-height: 40px;
    font-size: 14px;
    color: #555;
   }
  .content .block {
    display: flex;
  }
  .content .block .lr{
    flex: auto;
  }
   .content .block .ll{
    flex: 1;
  }
  .content .textAreaP .lr{
    display: block;
  }
  .content .flex{
    display: flex;
    justify-content: space-between;
  }
  .lr{
    line-height: 48px;
  }
  .myinput{
    background:none;
  }
  .el-input__inner{
    border-color: #f7f7f7;
  }
  </style>
