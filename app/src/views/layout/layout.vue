<template>
  <div>
    <HeaderTop/>
    <div class="cont">
        <router-view/>
    </div> 
    <TabbarBottom/>
  </div>
</template>

<script>
 import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
 import TabbarBottom from '../../components/TabbarBottom/TabbarBottom.vue'
export default {
    components:{
        HeaderTop,TabbarBottom
    },
  data() {
    return {

    }
  },
  methods: {},
}
</script>

<style>
.cont {
    margin-top: 41px;
    margin-bottom: 56px;
}
</style>
