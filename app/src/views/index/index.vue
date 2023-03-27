<template>
  <div class="content">
    <div>
      <!-- <router-link to='/draw'>draw</router-link>
      <router-link to='/list'>list</router-link>
            
     
    -->
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

  },
  created () {
    console.log('randomNum: ', randomNum(0, 100))
  }
}
</script>

<style>
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


</style>
