<template>
  <el-container>
    <el-aside width='200px'><SideTaskList/></el-aside>
    <el-main>
      <el-card class="box-card">
        <div slot="header" >
          <span>当前任务1</span>
          <i class="el-icon-circle-plus-outline"></i>
        </div>
        <el-card class="box-card" draggable="true">
          <span>子任务1</span>
          <div>firstTime: {{ firstTime }}</div>
          <div>lastTime: {{ lastTime }}</div>
          <div>timeCount: {{ time.length }}</div>
          <el-button type="primary" icon="el-icon-circle-plus-outline" @click='SAVE_TIME'>增加</el-button>
        </el-card>
      </el-card>
      <el-card class="box-card">
        <div slot="header" >
          <span>明日计划</span>
          <i class="el-icon-circle-plus-outline"></i>
        </div>
        <el-card class="box-card">
          <div>
            {{taskList}}
          </div>
        </el-card>
      </el-card>
      <el-card class="box-card">
        <div slot="header" >
          <span>待办事项</span>
          <i class="el-icon-circle-plus-outline"></i>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
import SideTaskList from './SideTaskList'
const userId = '5add553e882737292015c53c'

export default {
  name: 'task',
  components: {SideTaskList},
  data () {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState(['time', 'userInfo', 'taskList']),
    ...mapGetters(['firstTime', 'lastTime'])
  },
  methods: {
    ...mapMutations(['SAVE_TIME']),
    ...mapActions(['GET_TASK_LIST'])
  },
  created () {
    this.GET_TASK_LIST(userId)
  }
}
</script>

<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
