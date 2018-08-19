<template>
  <div class="list-container">
    <div v-show="showTopTip" class="top-tip"></div>
    <task-item
      v-for="(item, index) in tasks"
      :title="item.title"
      :group="item.group"
      :date="new Date(item.date)"
      :color="colors[index%colors.length]"
      :key="index"></task-item>
    <div v-show="showBtmTip" class="bottom-tip"></div>
    <add-dialog></add-dialog>
  </div>
</template>

<script>
import taskItem from '@/components/TaskItem.vue'
import AddDialog from '@/components/AddDialog.vue'
export default {
  data () {
    return {
      // 是否显示canvas
      showBtmTip: false,
      showTopTip: false,

      colors: ['#4285F4', '#EC4536', '#FBBD06', '#34A852', '#EE468B', '#3D7685', '#572704', '#E8D3A3'],
      tasks: [
        {
          title: '任务一',
          group: '#默认',
          date: '2018-07-22 10:22:00'
        },
        {
          title: '任务二',
          group: '#默认',
          date: '2018-07-22 10:22:00'
        },
        {
          title: '任务三',
          group: '#默认',
          date: '2018-07-22 10:22:00'
        },
        {
          title: '任务四',
          group: '#默认',
          date: '2018-07-22 10:22:00'
        },
        {
          title: '任务五',
          group: '#默认',
          date: '2018-07-22 10:22:00'
        },
        {
          title: '任务三',
          group: '#默认',
          date: '2018-07-22 10:22:00'
        },
        {
          title: '任务四',
          group: '#默认',
          date: '2018-07-22 10:22:00'
        },
        {
          title: '任务五',
          group: '#默认',
          date: '2018-07-22 10:22:00'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    scrollEvent: function () {
      console.log('it is scrolling!')
    }
  },
  components: {taskItem, AddDialog},
  mounted: function () {

  }
}
</script>

<style scoped>
.list-container{
  position: relative;
  padding: 0px 10px;
  padding-top: 60px;
  max-height: 100%;
  overflow: scroll;
  box-sizing: border-box;
}
.top-tip{
  position: absolute;
  top: 60px;
  left: -10px;
  right: -10px;
  height: 40px;
}
.bottom-tip{
  position: absolute;
  bottom: 0;
  left: -10px;
  right: -10px;
  height: 40px;
}
</style>
