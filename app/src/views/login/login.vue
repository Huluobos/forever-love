<template>
  <div class="content">
    <div class="box">
        <div class="logo">
            <img src="../../image/iconfont/xin-start.png" alt="">
        </div>
        <div class="login-form">
                <p><input type="text" class="login-userId" placeholder="用户ID" v-model="userId"></p> 
                <p><input type="password"  class="login-pwd" placeholder="密码" v-model="pwd"></p> 
                <mt-button size="large" type="danger" @click="userLogin">登录</mt-button>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { login } from '../../api/index';


export default {
  data(){
      return{
        userId:"",
        pwd:"",
      }
  },
  methods:{
      userLogin(){
        //   console.log(this)
         login("userLogin",{userId:this.userId,pwd:this.pwd}).then(res=>{
                if(res.code==400){
                    Toast({
                        message: res.msg,
                        position: 'bottom',
                        duration: 2000
                    });
                    return
                }
                if(res.code==500){
                    Toast({
                        message: '服务器出错误',
                        position: 'bottom',
                        duration: 2000
                    });
                    return
                }
                if(res.code==200){
                    //  console.log(this)
                    // 开始增加积分
                    // this.$axios.post("findJfS",{jfName:"每日登录"}).then(ress=>{
                    //     if(ress.code==200){
                    //          this.$axios.post("addJf",{jfNum:5,jfName:"每日登录"}).then(resolve=>{
                    //             // console.log(resolve)
                    //         })
                    //     }else{
                    //         // console.log(res)
                    //     }
                    // })
                     Toast({
                        message: '登录成功',
                        position: 'bottom',
                        duration: 2000
                    });

                }
          })
      },
  },
 
}
</script>

<style scoped>

.box{
    position: fixed;
    top:0px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(315deg, #eb4eb1, #9257f9 50%, #3150ed);
}
.logo{
    width: 12.7015625rem;
    margin: 80px auto;  
}
.logo img{
    width: 100%;

}
.login-form{
    width: 80%;
    margin: 0 auto;
    color: #fff;
}
.login-form input{
    width: 100%;
    border: 1px solid #ff0;
    /* background: #c50206; */
    margin-bottom: 10px;
    border-radius: 5px;
    color: #fff;
    height: 2.5rem;  
    padding-left: 1rem;
    box-sizing: border-box;
}
.login-form button{
    margin-top: 1rem;
}
input::-webkit-input-placeholder { /* WebKit browsers */ 
    color: #fff;
} 

input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
    color: #fff;
} 

input::-moz-placeholder { /* Mozilla Firefox 19+ */ 
    color: #fff;
} 

input:-ms-input-placeholder { /* Internet Explorer 10+ */ 
    color: #fff;
} 
</style>
