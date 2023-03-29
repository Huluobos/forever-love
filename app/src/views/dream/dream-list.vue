<template>
  <div class="content">
    <div v-for="(item, inx) in list" :key="inx + 'daydream'">
      <div class="cell">
        <img
          class="title-img"
          src="../../image/iconfont/xin-start.png"
          alt=""
        />
        <span class="fontK title" slot="title">
          {{ item.dreamTitle }}
        </span>
        <span class="date">
          <p>{{ createTime(item.createTime) }}</p>
        </span>
        <img class="link-img" src="../../image/iconfont/right.png" alt="" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
import { getDream } from "../../api/index";
import { timeTrans, timeAlls } from "../../utils/util";
export default {
  data() {
    return {
      selected: "1",
      list: [],
    };
  },
  props:{
    params:{
      type:Object,
    }
  },
  created() {
    Indicator.open({
      text: "加载中....",
      spinnerType: "fading-circle",
    });
    console.log(this.params);
    this.getList();
  },
  computed: {
    createTime() {
      return function (time) {
        //这里的value就是带的参数
        return timeTrans(time);
      };
    },
  },
  methods: {
    getList() {
      const params = {
        ...this.params,
        uId:'1'
      };
      getDream(params).then((res) => {
        console.log("res: ", res);
        this.list = res.data;
        Indicator.close();
      });
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 10px;
}
.cell {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 2% 1rem;
  padding: 0.28986rem;
  background-color: #fff;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, #eb4eb1, #9257f9 50%, #3150ed) 0.5;
  border-radius: 5px 5px 0 0;
  max-width: 96%;
}
.title-img {
  width: 10%;
  max-width: 5rem;
}
.title {
  font-family: "微软雅黑";
  font-size: 1.1rem;
  color: #666;
  flex: auto;
  display: block;
  width: 66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.date {
  font-size: 12px;
  color: #999;
  display: block;
  padding-left: 1em;
}
.link-img {
  display: block;
  padding-left: 8px;
  width: 5%;
}
</style>
