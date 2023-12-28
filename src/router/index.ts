import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import("../views/HomeView.vue"),
      meta:{
        title:"Ella-Mart"
      }
    },
    {
      path: '/category/:categ/:title',
      name: 'category',
      component: ()=>import("../views/CategoryView.vue"),
      meta:{
        title:'product-category'
      }
    },
    {
      path: '/product_details/:categ/:id',
      name: 'product_details',
      component: ()=>import("../views/ProductDetails.vue"),
      meta:{
        title:'product-details'
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Not found",
      component:()=>import("../components/home-components/NotFoundpage.vue"),
   meta:{
    title:"not-Found"
   }
    },
  ],
  scrollBehavior(){
    
    return {top:0,behavior:'smooth'}
  }
})

router.beforeEach((to,_from,next)=>{
  document.title=to.meta.title as string
  next();
})


export default router
