<template>
  <div>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="/" @click.native="clickSelect('/')">
        <img v-if="selected === '/'" slot="icon" src="../../image/iconfont/a-3Dhuichang-hover.png" />
        <img v-else slot="icon" src="../../image/iconfont/a-3Dhuichang.png" />
        <div class="b-text">首页</div> 
      </mt-tab-item>
      <mt-tab-item id="/dream" @click.native="clickSelect('/dream')">
        <img v-if="selected === '/dream'" slot="icon" src="../../image/iconfont/follow-hover.png" />
        <img v-else slot="icon" src="../../image/iconfont/follow.png" />
        愿望
      </mt-tab-item>
      <mt-tab-item id="/draw" @click.native="clickSelect('/draw')">
        <img v-if="selected === '/draw'" slot="icon" src="../../image/iconfont/hangyehuodong-hover.png" />
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
      selected:'/'
    };
  },
  methods: {
    clickSelect(to){
       this.$router.push(to)
    }
  },
  watch:{
    // selected(to,from){
    //   this.$router.push(to)
    // },
    '$route': { // $route可以用引号，也可以不用引号
        handler(to, from){
          if(to.path.indexOf('dream') >-1){
            this.selected = "/dream"
          }else if(to.path.indexOf('draw') >-1){
            this.selected = "/draw"
          }else{
            this.selected = "/"
          }
        },
        deep: true, // 深度监听
        immediate: true, // 第一次初始化渲染就可以监听到
    }
  }
};
</script>

<style>
.b-text {
    width: 100%;
}

.mint-tabbar > .mint-tab-item.is-selected{
 /* background-color: rgba(38,162,255,.1); */
 background: linear-gradient(315deg, #eb4eb1, #9257f9 50%, #3150ed);
 color: #fff;
}
.mint-tab-item-label{
  font-size: 13px;
}
</style>
