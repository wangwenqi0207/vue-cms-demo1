//组件开发，写好一个细化的功能，将所需数据用props抛出，子组件内部产生的数据，用$emit抛出，逻辑在父组件处理，做到解耦
<template>
    <div class="panel">
      <div class="panel-wrapper">
        <div class="panel-content">
          <div class="panel-content-l">
            <div class="panel-content-title">
              {{leftTitle}}
            </div>
            <div class="panel-content-info">
              {{leftInfo}}
            </div>
          </div>
          <div class="panel-content-m">
            <div class="panel-content-title">
              {{centerTitle}}
            </div>
            <div class="panel-content-info">
              {{centerInfo}}
            </div>
          </div>
          <div class="panel-content-r">
            <div class="panel-content-title">
              {{rightTitle}}
            </div>
            <div class="panel-content-info">
              {{rightInfo}}
            </div>
          </div>
 
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name:'panel',
      props: {// 要用到的值，用props传递
        leftTitle: '', 
        leftInfo: '',
        centerTitle: '',
        centerInfo: '',
        rightTitle: '',
        rightInfo: ''
      }
    }
</script>

<style scoped> 
.panel {
  margin: .24rem .25rem;
  position: relative;
  z-index: 10;
}
.panel .panel-wrapper{
    background-color: #fff;
    border-radius: 8px;
  }
.panel-wrapper .panel-content{
      display: flex;
      box-shadow: 0 0 8px 0 rgba(0,0,0,0.20);
      border-radius: 8px;
      position: relative;
      z-index: 1;
    }
 
.panel-content-l, .panel-content-m{
        border-right: 1px dashed #bccdff;
    }
.panel-content-l:after, .panel-content-m:after{
        position: absolute;
        right: -0.06rem;
        top: -.28rem;
        content: '';
        width: 0.1rem;
        height: 0.05rem;
        border-radius:0 0 0.1rem 0.1rem;
        background-color: #efeff4;
        z-index: 100;
    }
.panel-content-l:before, .panel-content-m:before{
        position: absolute;
        right: -0.06rem;
        bottom: -.28rem;
        content: '';
        width: 0.1rem;
        height: 0.05rem;
        border-radius:0.1rem 0.1rem 0 0;
        background-color: #efeff4;
        z-index: 100;
  }
.panel-content-l, .panel-content-m, .panel-content-r{
        flex: 1;
        text-align: center;
        margin: .28rem 0;
        position: relative;
        z-index: 9;
        overflow: visible;
  }
 .panel-content-title{
          font-size: .24rem;
          color: #666;
        }
 .panel-content-info{
          margin: .06rem 0;
          font-size: .4rem;
          color: #5C84FD;
          font-weight: bolder;
    }
</style>
