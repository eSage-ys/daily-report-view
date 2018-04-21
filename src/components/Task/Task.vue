<template>
  <el-container>
    <el-aside width='200px'><SideTaskList/></el-aside>
    <el-main>
      <el-card class="box-card">
      <div slot="header" >
        <span>当前任务</span>
        <i class="el-icon-circle-plus-outline"></i>
      </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" >
          <span>明日计划</span>
          <i class="el-icon-circle-plus-outline"></i>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" >
          <span>待办事项</span>
          <i class="el-icon-circle-plus-outline"></i>
        </div>
      </el-card>
    </el-main>
  </el-container>
  <!-- <el-row :gutter='10'>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row> -->
</template>

<script>
import SideTaskList from './SideTaskList'

export default {
  name: 'task',
  components: {SideTaskList},
  data () {
    return {
      name: ''
    }
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
