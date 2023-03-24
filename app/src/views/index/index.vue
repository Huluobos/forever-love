<template>
  <div class="content">
    <div>
      <router-link to='/draw'>draw</router-link>
      <router-link to='/list'>list</router-link>
    </div>

  </div>
</template>

<script>
import { randomNum } from '../../utils/util'
export default {
  data () {
    return {
      
    }
  },

  methods: {

  },
  created () {
    console.log('randomNum: ', randomNum(0, 100))
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
  font-size: 80rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
