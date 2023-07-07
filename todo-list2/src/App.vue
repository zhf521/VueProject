<template>
  <div class="app">
    <TodoHeader />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
export default {
  name: 'App',
  components: {
    TodoHeader
  }
}
</script>

<style>
.app {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid burlywood;
  border-radius: 5%;
}
</style>
