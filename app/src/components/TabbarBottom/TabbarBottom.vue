<template>
  <div>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="1">
        <img v-if="selected === '1'" slot="icon" src="../../image/iconfont/a-3Dhuichang-hover.png" />
        <img v-else slot="icon" src="../../image/iconfont/a-3Dhuichang.png" />
        <div class="b-text">首页</div> 
      </mt-tab-item>
      <mt-tab-item id="2">
        <img v-if="selected === '2'" slot="icon" src="../../image/iconfont/follow-hover.png" />
        <img v-else slot="icon" src="../../image/iconfont/follow.png" />
        愿望
      </mt-tab-item>
      <mt-tab-item id="3">
        <img v-if="selected === '3'" slot="icon" src="../../image/iconfont/hangyehuodong-hover.png" />
        <img v-else slot="icon" src="../../image/iconfont/hangyehuodong.png" />
        抽奖
      </mt-tab-item>

    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name:'Tabbar',
  data() {
    return {
      selected:'1'
    };
  },
  methods: {},
};
</script>

<style>
.b-text {
    width: 100%;
}
.mint-tabbar > .mint-tab-item.is-selected{
  background-color: rgba(38,162,255,.1);
}
</style>
