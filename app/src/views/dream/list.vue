<template>
  <div class="content">
    <div v-for="(item, inx) in list" :key="inx + 'daydream'">
      <div class="cell">
        <div class="top">
          <div class="index">{{inx+1}}</div>
          <div class="date">
            <p>创建日期:{{ createTime(item.createTime) }}</p>
          </div>
        </div>
      <div class="down">
        <div class="title">
          {{ item.dreamTitle }}
        </div>
        <div class="detail">
          详情:{{ item.dreamDetail}}
        </div>
        <img class="link-img" src="../../image/iconfont/right.png" alt="" />
      </div>
      </div> 
      
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
      list: [],
    };
  },
  props: {
    prop: {
      type: Object,
    },
  },
  created() {
    Indicator.open({
      text: "加载中....",
      spinnerType: "fading-circle",
    });
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
        ...this.prop,
        uId: JSON.parse(localStorage.getItem("user")).uId,
      };
      getDream(params).then((res) => {
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
  max-height: calc(100vh - 154px);
  overflow-y: auto;
}
.cell {
  margin: 0 2% 1rem;
  padding: 0.28986rem;
  background-color: #fff;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, #eb4eb1, #9257f9 50%, #3150ed) 0.5;
  border-radius: 5px 5px 0 0;
  max-width: 96%;
}
.top{
  height: 2rem;
  border-bottom:1px solid #ccc;
}
.top-img {
  width: 2rem;
  max-width: 5rem;
}
.index{
  float: left;
  line-height: 1.8rem;
  height: 2rem;
  width: 2rem;
  background-image: url('../../image/iconfont/xin-start.png');
  background-size: 90% 80%;
  background-repeat: no-repeat;
  background-position:center center;
  text-align: center;
  font-size: 12px;
  color: #777;
  /* <img class="top-img" src="../../image/iconfont/xin-start.png" alt=""/> */
}
.date {
  font-size: 12px;
  color: #999;
  padding-right: 1em;
  float: right;
  line-height: 2rem;
}
.down{
  position: relative;
  /* padding-left: ; */
  padding: 0 0 5px .5rem;
}

.title {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 
  font-size: 1.1rem;
  color: #555;
  width:calc(100% - 2.5rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.2rem;
  line-height: 2.2rem;
}
.detail{
  margin-top:3px;
  /* text-indent: 2em; */
  font-size: .8rem;
  line-height: 1.3rem;
  width: calc(100% - 2.5rem);
  /* word-wrap:break-word; */
  white-space:normal;
   word-break:break-all;
   color: #666;

}

.link-img {
  display: block;
  width: 2rem;
  height: 3rem;
  position: absolute;
  right: .1rem;
  top: 50%;
  margin-top: -1.5rem;
}
</style>
