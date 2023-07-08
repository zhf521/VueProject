<template lang="">
  <li>
    <label>
      <input class="check" type="checkbox">
      <span>xxx</span>
    </label>
    <el-button class="btn" type="danger" icon="el-icon-delete" size="mini"></el-button>
  </li>
</template>
<script>
export default {
  name: 'TodoItem'
}
</script>
<style scoped>
li {
  list-style: none;
  border: 1px solid rgb(48, 47, 47);
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.check {
  margin-top: 8px;
}
</style>