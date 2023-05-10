import { reqGoodsInfo } from '@/api'
const state = {
  goodInfo: {},
}
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo
  },
}
const actions = {
  //获取产品信息的action
  async getGoodInfo(context, skuId) {
    let result = await reqGoodsInfo(skuId)
    if (result.code == 200) {
      context.commit('GETGOODINFO', result.data)
    }
  },
}
const getters = {}
export default {
  state,
  actions,
  mutations,
  getters,
}
