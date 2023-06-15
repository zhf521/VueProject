//引入VueRouter
import VueRouter from 'vue-router'
//引入路由组件
// import Login from '../components/Login.vue'
const Login = () =>
  import(/* webpackChunkName: "login_home_welcome" */ '../components/Login.vue')

// import Home from '../components/Home.vue'
const Home = () =>
  import(/* webpackChunkName: "login_home_welcome" */ '../components/Home.vue')
// import Welcome from '../components/Welcome.vue'
const Welcome = () =>
  import(
    /* webpackChunkName: "login_home_welcome" */ '../components/Welcome.vue'
  )


// import Users from '../components/user/Users.vue'
// import Rights from '../components/power/Rights.vue'
// import Roles from '../components/power/Roles.vue'
const Users = () =>
  import(/* webpackChunkName: "users_rights_roles" */ '../components/user/Users.vue')
const Rights = () =>
  import(
    /* webpackChunkName: "users_rights_roles" */ '../components/power/Rights.vue'
  )
const Roles = () =>
  import(/* webpackChunkName: "users_rights_roles" */ '../components/power/Roles.vue')
// import Cate from '../components/goods/Cate.vue'
// import Params from '../components/goods/Params.vue'
const Cate = () =>
  import(/* webpackChunkName: "cate_params" */ '../components/goods/Cate.vue')
const Params = () =>
  import(/* webpackChunkName: "cate_params" */ '../components/goods/Params.vue')

// import Orders from '../components/orders/Orders.vue'
// import Report from '../components/report/Report.vue'
const Orders = () =>
  import(
    /* webpackChunkName: "orders_report" */ '../components/orders/Orders.vue'
  )
const Report = () =>
  import(/* webpackChunkName: "orders_report" */ '../components/report/Report.vue')

//创建并暴露router实例对象，去管理路由规则

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles },
        { path: '/categories', component: Cate },
        { path: '/params', component: Params },
        { path: '/orders', component: Orders },
        { path: '/reports', component: Report },
      ],
    },
  ],
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next 是一个函数，表示放行
  //next() 放行
  //next('/login') 强制跳转

  //如果用户访问的登录页，直接放行
  if (to.path === '/login') return next()
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  //没有token，强制跳转到登录页
  if (!tokenStr) {
    return next('/login')
  }
  next()
})

export default router
