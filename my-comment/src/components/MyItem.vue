<template>
  <li>
    <p><span>{{ comment.name }}</span><span>说:</span></p>
    <p>{{ comment.content }}</p>
    <button @click="deleteItem">删除</button>
  </li>
</template>
<script>
export default {
  name: 'MyItem',
  props: { // 指定属性名和属性值的类型
    comment: Object,
    deleteComment: Function,
    index: Number,
  },
  methods: {
    deleteItem() {
      const { comment, index, deleteComment } = this
      if (window.confirm(`确认删除${comment.name}的评论吗 ？`)) {
        deleteComment(index)
      }
    }
  }
}
</script>
<style ></style>