<template>
  <div>
    111
    111
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      dreamTab: [
        { name: "我的愿望", id: 0 },
        { name: "长线任务", id: 1 },
        { name: "达成愿望", id: 2 },
        { name: "对方愿望", id: 3 },
      ],
    };
  },
  created() {
    console.log("对方愿望");
  },
  methods: {},
};
</script>

<style scoped>

</style>
