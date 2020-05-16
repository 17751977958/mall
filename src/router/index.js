import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)
const Home=()=>import('../components/common/tabbar/Home')
const Type=()=>import('../components/common/tabbar/Type')
const Cart=()=>import('../components/common/tabbar/Cart')
const Profile=()=>import('../components/common/tabbar/Profile')
const  routes=[
  {
    path:"/",
    redirect:"/home"
  },
  {
    path: "/home",
    component:Home
  }, {
    path: "/type",
    component:Type
  },
  {
    path: "/cart",
    component:Cart
  },
  {
    path: "/profile",
    component:Profile
  },
]

const router=new VueRouter({
  mode:"history",
  base:process.env.Base_URL,
  routes

})

export default router
