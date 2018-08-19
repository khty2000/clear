<template>
  <div class="task-item" :style="{background: color}">
    <div v-show="showGroup" class="task-info">
      {{group}}
    </div>
    <div class="task-title">
      {{title}}
    </div>
    <div v-show="showDate" class="task-date clr">
      {{dateStr}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    color: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    group: {
      type: String,
      default: '#默认'
    },
    date: {
      type: Date,
      required: true
    },
    showGroup: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    dateStr: function () {
      // let now = new Date()
      return this.date.format('yyyy-MM-dd hh:mm:ss')
    },
    showDate: function () {
      return true
    }
  }
}
</script>

<style scoped>
.task-item{
  box-shadow: 0ch;
  border-radius: 2px;
  min-height: 60px;
  padding: 10px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  box-shadow: 1px 1px 3px #a6a6a6, -1px 1px 3px #a6a6a6;
  margin-bottom: 10px;
}
.task-info{
  float: right;
  width: 60px;
  text-align: right;
}
.task-title{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-right: 60px;
}
.task-date{
  font-size: 14px;
  text-align: right;
  margin-top: 5px;
}
</style>
