<template>
  <div>
    <h1>请发表您的评论</h1>
    <el-row :gutter="100">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <MyAdd :addComment="addComment"></MyAdd>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <MyList :MyComments="MyComments" :deleteComment="deleteComment"></MyList>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyAdd from './components/MyAdd.vue'
import MyList from './components/MyList.vue'
export default {
  name: 'App',
  components: {
    MyAdd, MyList
  },
  data() {
    return {
      MyComments: []
    }
  },
  methods: {
    //添加评论:
    addComment(comment) {
      this.MyComments.unshift(comment)
    },
    //删除评论
    deleteComment(index) {
      this.MyComments.splice(index,1)
    }
  }
}
</script>

<style></style>
