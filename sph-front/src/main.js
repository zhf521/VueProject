import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
//第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
//引入路由
import router from './router'
//引入仓库
import store from './store'
//引入mockServer.js
import './mock/mockServer'
//引入swiper样式
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  //全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  //注册路由
  router,
  //注册仓库：组件实例的身上会多一个$store属性
  store,
}).$mount('#app')
