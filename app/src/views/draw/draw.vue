<template>
  <div class="content">
    <div>
      <LuckyWheel 
        ref="myLucky"
        width="300rpx"
        height="300rpx"
        :prizes="prizes"
        :blocks="blocks"
        :buttons="buttons"
        @start="startCallback"
        @end="endCallback"
      />
    </div>
    <div>
      <LuckyGrid
       ref="myLucky2"
        width="300rpx"
        height="300rpx"
        :blocks="blocks"
        :prizes="prizes2"
         :buttons="buttons2"
         :activeStyle="activeStyle"
         :defaultConfig="defaultConfig"
        rows='3'
        cols='3'
         @start="startCallback2"
        @end="endCallback2"
      />
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 背景
      blocks: [{ padding: '13px', background: 'rgba(0, 0, 0, 0.5)' }],
      // 奖品列表
      prizes: [ 
        { range:'10',fonts: [{ text: '0', top: '10%' }], background: '#e9e8fe' },
        { range:'20',fonts: [{ text: '1', top: '10%' }], background: '#b8c5f2' },
        { range:'30',fonts: [{ text: '2', top: '10%' }], background: '#e9e8fe' },
        { range:'40',fonts: [{ text: '3', top: '10%' }], background: '#b8c5f2' },
        { range:'1',fonts: [{ text: '4', top: '10%' }], background: '#e9e8fe' },
        { range:'1',fonts: [{ text: '5', top: '10%' }], background: '#b8c5f2' },
        { range:'1',fonts: [{ text: '5', top: '10%' }], background: '#b8c5f2' },
        { range:'1',fonts: [{ text: '5', top: '10%' }], background: '#b8c5f2' },
      ],
      buttons: [{
        radius: '35%',
        background: '#8a9bf3',
        fonts: [{ text: '开始', top: '-10px' }]
      }],
      prizes2:[
        {x:0,y:0,range:10,fonts:[{ text: '0', top: '10%' }]},
        {x:1,y:0,range:10,fonts:[{ text: '1', top: '10%' }]},
        {x:2,y:0,range:10,fonts:[{ text: '2', top: '10%' }]},
        {x:0,y:1,range:10,fonts:[{ text: '3', top: '10%' }]},
        {x:2,y:1,range:10,fonts:[{ text: '4', top: '10%' }]},
        {x:0,y:2,range:10,fonts:[{ text: '5', top: '10%' }]},
        {x:1,y:2,range:10,fonts:[{ text: '6', top: '10%' }]},
        {x:2,y:2,range:10,fonts:[{ text: '7', top: '10%' }]},

      ],
      buttons2:[
        {
          x:1,y:1,range:0,fonts:[{ text: 'button', top: '10%' }]
        }
      ],
      activeStyle:{
        fontColor:'#ff6700'
      },
      defaultConfig:{
        gutter:2,
        speed:10,
        accelerationTime:2500,
        decelerationTime:2500,
      }
    }
  },
  onLoad() {},
  methods: {
    // 点击抽奖按钮会触发star回调
    startCallback () {
      // 调用抽奖组件的play方法开始游戏
      this.$refs.myLucky.play()
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是0
        const index = 0
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop(index)
      }, 3000)
    },
    // 抽奖结束会触发end回调
    endCallback (prize) {
      console.log(prize)
    },

     // 点击抽奖按钮会触发star回调
    startCallback2 () {
      // 调用抽奖组件的play方法开始游戏
      this.$refs.myLucky2.play()
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是0
        const index = 4
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky2.stop(index)
      }, 2000)
    },
    // 抽奖结束会触发end回调
    endCallback2 (prize) {
      console.log(prize)
    },
  },
}
</script>

<style>
.content {
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
}

</style>
