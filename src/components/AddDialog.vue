<template>
  <div class="add-dialog" :class="{fullScreen: isFull}">
    <div class="btn add-btn is-circle" @click="showView">
      <i class="fa fa-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isFull: false
    }
  },
  methods: {
    showView: function () {
      // 修改窗口
      this.isFull = true
    }
  }
}
</script>

<style scoped>
  .add-dialog{
    position: fixed;
    right: 25px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #EA4335;
    color: #FFFFFF;
    box-shadow: 2px 4px 10px #333333;
    transition: transform .3s linear;
  }
  .add-dialog.fullScreen{
    transform: scale(100);
    background: #FAFAFA;
    box-shadow: none;
  }
  .add-dialog.fullScreen .btn{
    transform: scale(.01);
  }
  .btn{
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 1;
    text-align: center;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 11px;
    font-size: 28px;
    transition: transform .3s linear;
  }
  .btn.is-circle{
    border-radius: 50%;
  }
  .add-btn i{
    vertical-align: bottom;
  }

</style>
