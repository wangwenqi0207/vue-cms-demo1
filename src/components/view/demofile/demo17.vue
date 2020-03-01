<template>
  <div id="test">
    <div v-show="go_study">
      {{text}}<div id="meClocker" >{{clocker}}</div>
    </div>
     <div v-show="go_rest">
      {{text2}}<div id="meClocker" >{{clocker2}}</div>
    </div>
  </div>
</template>

<script>
// import times from "./times";
export default {
  data() {
    return {
      startTime: null,
      endTime: null,
      timer: "",   //定义一个定时器的变量
      currentTime: Math.round(new Date().getTime()/1000),
      go_study:false,
      go_rest:false,
      clocker: "", //显示倒计时
      clocker2: "",
      timeobj: null, //时间对象
      text:'自习时间还剩：',
      text2:'休息弹幕时间：'
    };
  },
  // components: {
  //   times
  // },
  created(){

      var calss1_start2 = Math.round(new Date(new Date(new Date().getTime()).setHours(8,0,0,0))/1000)  //获取当天8点

      var calss1_start = Math.round(new Date(new Date(new Date().getTime()).setHours(0,8,0,0))/1000)
      var calss1_end = Math.round(new Date(new Date(new Date().getTime()).setHours(0,8,10,0))/1000)

      var rest_start = Math.round(new Date(new Date(new Date().getTime()).setHours(0,8,0,0))/1000)
      var rest_end = Math.round(new Date(new Date(new Date().getTime()).setHours(0,8,10,0))/1000)

      this.endTime = calss1_end;
      this.startTime = calss1_start;
      this.endTime2 = rest_end;
      this.startTime2 = rest_start;
      console.log(this.endTime,this.startTime)

      // var _this = this; 
      // this.timer = setInterval(function() {
      //   _this.currentTime = Math.round(new Date().getTime()/1000)
      if(this.currentTime >= calss1_start2){
          console.log(this.currentTime)
          this.go_study = true;
        }
      // }, 1000);
    this.begin();
    // this.begin2();

    // var timestamp = Math.round(new Date('2019-11-29 16:00:00').getTime()/1000);   //获取指定时间的时间戳/1000 是要舍弃后面三位数
    // var timestamp2 = Math.round(new Date().getTime()/1000);  //获取当前的时间戳
    // var timestamp3 = Math.round(new Date(new Date().toLocaleDateString()).getTime()/1000)  //当天零点
    // let startTime = Math.round(new Date(new Date(new Date().getTime()-24*60*60*1000).setHours(0,0,0,0))/1000);// 前一天0点
    // let endTime = Math.round(new Date(new Date(new Date().getTime()-24*60*60*1000).setHours(23,59,59,999))/1000)  //当天零点
    
  },

  // beforeDestroy() {
  //   if (this.timer) {
  //     clearInterval(this.timer); 
  //    }
  // },

  methods: {

    begin(){
      let timeLag = parseInt(this.endTime) - parseInt(this.startTime);
      // if(timeLag>=0){
      //     // this.shows = true;
      // }
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
          clearInterval(go);
          this.go_study = !this.go_study;
          this.go_rest = true;
          this.begin2();
        }
      };

      //此处调用函数避免前一秒倒计时不显示
      timeFunction();
      let go = setInterval(function(){
        timeFunction();
      }, 1000);
    },


    begin2(){
      let timeLag = parseInt(this.endTime2) - parseInt(this.startTime2);

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
        this.clocker2 = 
            `
            ${add0(this.timeobj.hours)}:
            ${add0(this.timeobj.minutes)}: 
            ${add0(this.timeobj.seconds)}
            `;
        // 当时间差小于等于0的时候证明倒计时已经过结束
        if (time <= 0) {
          clearInterval(go);
          this.go_study =!this.go_study ;
          this.go_rest = false;
          this.begin();
        }
      };

      //此处调用函数避免前一秒倒计时不显示
      timeFunction();
      let go = setInterval(function(){
        timeFunction();
      }, 1000);
    },
  }

}
</script>

<style scoped>
#test {
  height: 100%;
}
.clocker{
  padding: 10px;
  overflow: hidden;
  font-size: 10px;
}
</style>

