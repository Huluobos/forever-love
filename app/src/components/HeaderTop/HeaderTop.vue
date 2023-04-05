<template>
  <div>
    <mt-header fixed :title="$route.meta.headerName">
      <mt-button v-if="$route.meta.showHeader === true" icon="back" slot="left"
        @click="routerBack">返回</mt-button
      >
      <!-- <mt-button v-if="$route.meta.showHeader === true" icon="more" slot="right"></mt-button> -->
    </mt-header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    routerBack(){
      this.$router.back()
    }
  },
  created() {},
  destroyed() {},
};
</script>

<style>
.mint-header {
  height: 2.5rem;
  background: linear-gradient(315deg, #eb4eb1, #9257f9 50%, #3150ed);
  
}
.mint-header-title {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 6px;
}
.mint-navbar .mint-tab-item.is-selected {
  /* 底边渐变 */
  border-bottom:2px transparent solid;
  border-image: linear-gradient(to right, #eb4eb1, #9257f9 50%, #3150ed) .5;
  margin-bottom: -3px;

  /* 文字渐变 */
  background: linear-gradient(to right, red, green);
  -webkit-background-clip: text;
  color: transparent;
    
}
</style>
