<template lang="">
  <div class="container">
    <label class="lab">
      <input type="checkbox">
      <span>已完成0/全部3</span>
    </label>
    <el-button type="danger" size="mini">清除已完成任务</el-button>
  </div>
</template>
<script>
export default {
  name: 'TodoFooter'
}
</script>
<style scoped>
.container {
  border-top: 2px solid black;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}

.lab {
  margin-top: 3px;
}
</style>