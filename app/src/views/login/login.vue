<template>
  <div class="content">
    <div class="box">
      <div class="logo">
        <img src="../../image/iconfont/xin-start.png" alt="" />
      </div>
      <div class="login-form">
        <p>
          <input
            type="text"
            class="login-userId"
            placeholder="用户ID"
            v-model="uId"
          />
        </p>
        <p>
          <input
            type="password"
            class="login-pwd"
            placeholder="密码"
            v-model="pwd"
          />
        </p>
        <mt-button size="large" type="default" @click="userLogin">登录</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, Indicator } from "mint-ui";
import { login } from "../../api/index";
export default {
  // 女
  // 账号： 0
  // 密码：123

  // 男
  // 账号： 1
  // 密码：123
  data() {
    return {
      uId: "",
      pwd: "",
    };
  },
  created(){
    //
  },
  methods: {
    userLogin() {
    Indicator.open({
        text: "正在登录...",
        spinnerType: "snake",
        });
      login({ uId: this.uId, pwd: this.pwd }).then((res) => {
        setTimeout(()=>{
            Indicator.close();
         },1000)

        if (res.ret !== true) {
          Toast({
            message: res.msg,
            position: "bottom",
            duration: 2000,
          });
          return;
        } else {
          Toast({
            message: "登录成功,正在跳转",
            position: "bottom",
            duration: 3000,
          });

          localStorage.setItem("user",JSON.stringify(res.data))
          setTimeout(()=>{
            this.$nextTick(()=>{
                this.$router.push('/')
            })
          },1500)
        }
      });
    },
  },
};
</script>

<style scoped>
.login-form button {
  background-color: #eb4eb1;
  color: #fff;
}

.box {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(315deg, #eb4eb1, #9257f9 50%, #3150ed);
}
.logo {
  width: 12.7015625rem;
  margin: 80px auto;
}
.logo img {
  width: 100%;
}
.login-form {
  width: 80%;
  margin: 0 auto;
  color: #fff;
}
.login-form input {
  width: 100%;
  border: 1px solid #ff0;
  /* background: #c50206; */
  margin-bottom: 10px;
  border-radius: 5px;
  color: #666;
  height: 2.5rem;
  padding-left: 1rem;
  box-sizing: border-box;
}
.login-form button {
  margin-top: 1rem;
}
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #fff;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
}

input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #fff;
}
</style>
