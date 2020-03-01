<template>
  <div id="progress-father">
    <div id="progress-son" :style="{width:percentage+'%',background:background}"></div>
    <span>{{percentage}}%</span>
  </div>
</template>

<script>
export default {
  name:'pro',
  props: ["percentage", "background"],
  data() {
    return {};
  }
};
</script>

<style scoped>
#progress-father {
  height: 15px;
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  background: #ddd;
  position: relative;
}
#progress-son {
  height: 15px;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
  transition: width 1s;
}
#progress-father span {
  position: absolute;
  height: 15px;
  line-height: 15px;
  top: 0;
  right: 5px;
  color: #fff;
  font-size: 10px;
}
</style>