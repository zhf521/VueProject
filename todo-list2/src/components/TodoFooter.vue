<template lang="">
  <div class="container">
    <label class="lab">
      <input type="checkbox" v-model="isAll">
      <span>已完成{{countFinish}}/全部{{todos.length}}</span>
    </label>
    <el-button type="danger" size="mini" @click="deleteCompleteTodos">清除已完成任务</el-button>
  </div>
</template>
<script>
export default {
  name: 'TodoFooter',
  props: ['todos', 'checkAll','deleteCompleteTodos'],
  computed: {
    countFinish() {
      let n = 0
      this.todos.forEach((item) => {
        // console.log(item.finish)
        if (item.finish) {
          n++
        }
      })
      return n
    },
    isAll: {
      get() {
        return this.countFinish === this.todos.length && this.countFinish > 0
      },
      set(checked) {
        this.checkAll(checked)
      }
    }
  }
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