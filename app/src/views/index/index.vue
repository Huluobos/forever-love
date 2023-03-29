<template>
  <div class="content">
    <div>
      <!-- <router-link to='/draw'>draw</router-link>
      <router-link to='/list'>list</router-link>
            
     1111111111111111111111111111111FFFFF 
    -->
    AHSGSDHHSOJCdn道具宝石记得
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

<style scoped>



</style>
