<template>
  <div>
  <mt-header fixed title="多个按钮">
    <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <!-- <mt-button @click="handleClose">关闭</mt-button> -->
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name:'Header',
  data() {
    return {

    }
  },
  methods: {},
}
</script>

<style>
.content {

}
</style>
