<template>
  <div class="app">
    <TodoHeader>
    </TodoHeader>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
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
