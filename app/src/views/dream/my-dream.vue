<template>
  <div>

  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import { getDream } from '../../api/index';
export default {
  data() {
    return {
      selected: "1",
      dreamTab: [
        { name: "我的愿望", id: 1 },
        { name: "达成愿望", id: 2 },
        { name: "对方愿望", id: 2 },
      ],
    };
  },
  created() {
    Indicator.open({
      text: "加载中....",
      spinnerType: "fading-circle",
    });
    // 
    this.getList()
  },
  methods: {
    getList(){
        const params = {}
        getDream(params).then(res=>{
            Indicator.close();
        })
    }
  },
};
</script>

<style scoped>
</style>
