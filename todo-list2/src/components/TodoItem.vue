<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input class="check" type="checkbox" v-model='todo.finish'>
      <span>{{ todo.title }}</span>
    </label>
    <el-button v-show="isShow" class="btn" type="danger" icon="el-icon-delete" size="mini"
      @click="deleteItem"></el-button>
  </li>
</template>
<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'index','deleteTodo'],
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    handleEnter(enter) {
      if (enter) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    deleteItem() {
      const { todo, index, deleteTodo } = this
      if (window.confirm(`确定删除${todo.title}吗？`)) {
        deleteTodo(index)
      }
    }
  }
}
</script>
<style scoped>
li {
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

.btn {
  height: 25px;
}
</style>