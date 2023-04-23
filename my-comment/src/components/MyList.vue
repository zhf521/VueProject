<template >
  <div>
    <h1>评论</h1>
    <h2 v-show="MyComments.length === 0">暂无评论，欢迎在左侧添加您的评论！</h2>
    <ul>
      <MyItem v-for="(comment, index) in MyComments" :key="index" :comment="comment" :deleteComment="deleteComment" :index="index"></MyItem>
    </ul>
  </div>
</template>
<script>
import MyItem from './MyItem.vue'
export default {
  name: 'MyList',
  components: {
    MyItem
  },
  props: ['MyComments', "deleteComment"],
}
</script>
<style></style>