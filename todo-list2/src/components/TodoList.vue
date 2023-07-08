<template lang="">
<ul>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
</ul>
</template>
<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoList',
  components: {
    TodoItem
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>