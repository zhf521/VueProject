<template lang="">
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要再引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>
<script>
//引入其余的组件
import ListContainer from '../Home/ListContainer'
import Recommend from '../Home/Recommend'
import Rank from '../Home/Rank'
import Like from '../Home/Like'
import Floor from '../Home/Floor'
import Brand from '../Home/Brand'

import { mapState } from 'vuex'
export default {
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  mounted() {
    //派发action，获取floor组件的数据
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}
</script>
<style lang="less" scoped></style>