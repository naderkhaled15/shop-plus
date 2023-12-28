import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import("../views/HomeView.vue"),
      meta:{
        title:"home"
      }
    },
    {
      path: '/category/:categ/:title',
      name: 'category',
      component: ()=>import("../views/CategoryView.vue"),
      meta:{
        title:'catogary'
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Not found",
      component:()=>import("../components/home-components/NotFoundpage.vue"),
   meta:{
    title:"not Found"
   }
    },
  ]
})

router.beforeEach((to,_from,next)=>{
  document.title=to.meta.title as string
  next();
})


export default router
