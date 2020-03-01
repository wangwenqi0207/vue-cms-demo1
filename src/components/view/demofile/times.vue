<template>
    <!-- 倒计时封装:当小于三天的时候出现颜色变为红色 -->
      <div>
          {{text}}<div id="meClocker" :class="{three : timeobj.days <= (sign||3)}">{{clocker}}</div>
      </div> 
</template>


<script>
export default {
  data() {
    return {
      clocker: "", //显示倒计时
      timeobj: null, //时间对象
      text:'下课时间还剩：'
    };
  },
  /**传入时间戳显示倒计时函数【后台时间戳一般都是10位的】
   * @argument start 开始时间(10位时间戳)
   * @argument end   结束时间(10为时间戳)
   * @argument msg   倒计时结束后显示的文本（选填）默认为倒计时已结束
   * @argument sign  倒计时结束前几天特殊显示样式 默认三天后变红
   */
  props: ["startTime", "endTime","sign"],

  created() {
    let timeLag = parseInt(this.endTime) - parseInt(this.startTime);
    let add0 = num => {
      return num < 10 ? "0" + num : num;
    };
    let timeFunction = () => {
      // time为两个时间戳之间相差的秒数
      let time = timeLag--;
      //打印出时间对象
      this.timeobj = {
        seconds: time % 60,
        minutes: Math.floor(time / 60) % 60,
        hours: Math.floor(time / 60 / 60) % 24,
        days: Math.floor(time / 60 / 60 / 24),
        weeks: Math.floor(time / 60 / 60 / 24 / 7),
        months: Math.floor(time / 60 / 60 / 24 / 30),
        years: Math.floor(time / 60 / 60 / 24 / 365)
      };
      this.clocker = 
          `
           ${add0(this.timeobj.hours)}:
           ${add0(this.timeobj.minutes)}: 
           ${add0(this.timeobj.seconds)}
           `;
      // 当时间差小于等于0的时候证明倒计时已经过结束
      if (time <= 0) {
        this.text = '下课啦：'
        clearInterval(go);
      }
    };

    //此处调用函数避免前一秒倒计时不显示
    timeFunction();
    let go = setInterval(function() {
      timeFunction();
    }, 1000);

  }
};

</script>
<style scoped>
.three{
  color: #f00;
  font-size: 20px;
}
</style>