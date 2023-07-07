<template>
  <div>
    <h2 class="title">ToDo</h2>
    <el-input placeholder="请输入你的任务名称，按回车键确认">
    </el-input>
  </div>
</template>
<script>
export default {
  name: 'TodoHeader'
}
</script>
<style scoped>
.title {
  text-align: center;
}
</style>