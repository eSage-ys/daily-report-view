<template>
  <el-tree
    :data="taskTree"
    :props="defaultProps"
    draggable
    highlight-current
    @node-click="handleNodeClick"
    >
    <!--
    default-expand-all
    :allow-drop="allowDrop"
    :allow-drag="allowDrag"
    -->
  </el-tree>
  <!-- <el-menu>
    <el-submenu v-for="(nodes, i) in taskList" :index="i" :key=i>
      <template slot="title">
        <span>{{ nodes.label }}</span>
      </template>
      <div v-for="(task, j) in nodes.childNodes" :key=j>
        <el-submenu v-if="task.childNodes.length > 0" :index="task._id">
          <template slot="title">
            {{ task.title }}
          </template>
        </el-submenu>
        <el-menu-item v-else :index="task._id">
          {{ task.title }}
        </el-menu-item>
      </div>
    </el-submenu> -->

    <!-- <el-submenu index="1">
      <template slot="title">
        <span>当前任务</span>
      </template>
      <el-menu-item index="1-1">子任务1</el-menu-item>
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
    </el-submenu> -->
  <!-- </el-menu> -->
</template>

<script>
export default {
  name: 'side-tasks-list',
  data () {
    return {
      defaultProps: {
        label: 'title',
        children: 'children'
      }
    }
  },
  computed: {
    taskTree () {
      return this.$store.getters.taskTree
    }
  },
  methods: {
    handleNodeClick (data) {
      // todo 锚点
      console.log(data)
    }
  }
}
</script>

<style>

</style>
