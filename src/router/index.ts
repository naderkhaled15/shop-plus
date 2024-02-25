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
      path: '/faild',
      name: 'faild',
      component: ()=>import("../views/FaildCheckOut.vue"),
      meta:{
        title:"checkout-faild"
      },
      beforeEnter: (to, from, next) => {
        let currentUser=JSON.parse(localStorage.getItem('user-info')!)
        let userToken=JSON.parse(localStorage.getItem('token')!)
        if(currentUser && userToken){
          next()
        } else  {
          next('/')
        }
      }
    },
    {
      path: '/success',
      name: 'success',
      component: ()=>import("../views/SuccessCheckOut.vue"),
      meta:{
        title:"checkout-faild"
      },
      beforeEnter: (to, from, next) => {
        let currentUser=JSON.parse(localStorage.getItem('user-info')!)
        let userToken=JSON.parse(localStorage.getItem('token')!)
        if(currentUser && userToken){
          next()
        } else  {
          next('/')
        }
      }
    },
    {
      path: '/category/:title',
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
      path: '/cart_page',
      name: 'cart_page',
      component: ()=>import("../views/CartView.vue"),
      meta:{
        title:'cart'
      }
    },
    {
      path: '/check_out',
      name: 'check_out',
      component: ()=>import("../views/CheckOut.vue"),
      meta:{
        title:'checkout'
      }
    },
    {
      path: '/search/:key',
      name: 'search',
      component: ()=>import("../views/SearchPage.vue"),
      meta:{
        title:'search'
      }
    },
    {
      path: '/log_in',
      name: 'log_in',
      component: ()=>import("../views/LoginView.vue"),
      meta:{
        title:'log in'
      }
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: ()=>import("../views/SignupView.vue"),
      meta:{
        title:'sign up'
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
