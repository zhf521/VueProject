<template>
  <div>
    用户名
    <br>
    <input type="text" placeholder="用户名" v-model="name">
    <br>
    <br>
    评论内容
    <br>
    <textarea rows="10" placeholder="评论内容" v-model="content"></textarea>
    <br>
    <br>
    <button @click="add">添加</button>
  </div>
</template>
<script>
export default {
  name: 'MyAdd',
  props: {
    addComment: {
      type: Function,
      required: true,
    }
  },
  data() { //从页面拿数据，用v-model
    return {
      name: '',
      content: '',
    }
  },
  methods: {
    add() {
      //检查输入的合法性
      const name = this.name.trim()
      const content = this.content.trim()
      if (!name || !content) {
        alert('姓名和内容不能为空')
        return
      }
      //根据输入的数据，封装成一个comment对象
      const comment = {
        name,
        content,
      }
      //添加到MyComments中
      this.addComment(comment)
      //清除输入
      this.name = ''
      this.content = ''
    }
  }
}
</script>
<style ></style>