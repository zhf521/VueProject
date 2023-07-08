<template>
  <div class="app">
    <TodoHeader :addTodo="addTodo">
    </TodoHeader>
    <TodoList :todos="todos" :deleteTodo="deleteTodo"></TodoList>
    <TodoFooter :todos="todos" :checkAll="checkAll" :deleteCompleteTodos="deleteCompleteTodos"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [
        // { title: '123', finish: false, }
      ]
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    checkAll(check) {
      this.todos.forEach(todo => todo.finish = check)
    },
    deleteCompleteTodos() {
      this.todos = this.todos.filter(item => !item.finish)
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
.app {
  width: 300px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid burlywood;
  border-radius: 5%;
}
</style>
