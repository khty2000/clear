<template>
  <div class="f-header">
    <div class="right-menu">
      <router-link to="/config" class="config-link"><i class="fa fa-gear"></i></router-link>
    </div>
    <div class="left-title">
      <div class="t-num">{{numOfTask}}</div>
      <div class="header-title">
        <div class="title-btn">{{title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Clear 清单'
    }
  },
  props: {
    numOfTask: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.f-header{
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  line-height: 40px;
  z-index: 10;
  background: #fafafa;
}
.right-menu, .t-num{
  float: right;
}
.right-menu{
  width: 40px;
  text-align: center;
}
.config-link{
  display: block;
}
.config-link i{
  color: #606266;
  font-size: 26px;
  line-height: 40px;
  vertical-align: top;
}
.left-title{
  margin-right: 40px;
}
.header-title{
  margin-right: 30px;
}
.title-btn{
  display: inline-block;
  padding: 0 5px;
  font-size: 18px;
}
.t-num{
  font-size: 16px;
  margin-right: 5px;
}
</style>
