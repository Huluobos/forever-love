<template>
  <div class="content">
    <div>
      <!-- <router-link to='/draw'>draw</router-link>
      <router-link to='/list'>list</router-link>
            
     1111111111111111111111111111111FFFFF 
    -->
    <mt-button @click="loginOut">退出登录</mt-button>
    </div>

  </div>
</template>

<script>
import { randomNum } from '../../utils/util'
export default {
  data () {
    return {
      rangeValue:20
    }
  },

  methods: {
    loginOut(){
      localStorage.setItem("user",'')
      this.$nextTick(()=>{
        this.$router.replace('/login')
      })
      
    }
  },
  created () {
    console.log('randomNum: ', randomNum(0, 100))
  }
}
</script>

<style scoped>



</style>
