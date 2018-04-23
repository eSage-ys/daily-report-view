<template>
  <el-menu>
    <el-submenu index="1">
      <template slot="title">
        <span>当前任务</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">子任务1</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-2">
        <template slot="title">子任务2</template>
        <el-menu-item index="1-2-1">子任务2-1</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <span>明日计划</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">子任务1</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="2-2">
        <template slot="title">子任务2</template>
        <el-menu-item index="2-2-1">子任务2-1</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <span>待办事项</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">子任务1</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-2">
        <template slot="title">子任务2</template>
        <el-menu-item index="3-2-1">子任务2-1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'side-tasks-list'
}
</script>

<style>

</style>
