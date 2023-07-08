<template lang="">
<ul>
  <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo"></TodoItem>
</ul>
</template>
<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>