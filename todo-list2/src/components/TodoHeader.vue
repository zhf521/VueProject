<template>
  <div class="container">
    <h2>ToDo</h2>
    <input class="input" v-model="title" @keyup.enter="add" placeholder="请输入你的任务名称，按回车键确认">
  </div>
</template>
<script>
export default {
  name: 'TodoHeader',
  data() {
    return {
      title: '',
      finish: false,
    }
  },
  props: {
    addTodo: Function
  },
  methods: {
    add() {
      const title = this.title.trim()
      if (!title) {
        alert('请输入内容！')
        return
      }
      // console.log(title)
      const todo = { title: title, finish: false }
      this.addTodo(todo)
      this.title = ''
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input {
  width: 98%;
}
</style>