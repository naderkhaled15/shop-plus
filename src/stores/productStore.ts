import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '@/axios'

interface Product {
  id:number;
  title:string;
  thumbnail:string;
  description:string;
  rating:number;
  discountPercentage:number;
  price:number;
  images:Array<string>;
  category:string;
} 

let cache:{[key:string]:Product[]} = {};

export const productModule = defineStore('productModule',{
  state:()=>({
    flashDeals:[] as Product[],
    categoryItems:[] as Product[],
    mobilePhones:[] as Product[],
    skinCare:[] as Product[],
    homeDecoration:[] as Product[],
    groceriesProducts:[] as Product[],
  }),
  actions:{
    async getProducts(){
      try{  
        const cacheKey="/products";
        if (!cache[cacheKey]) {
        await axios.get('/products?limit=30').then((res)=>{cache[cacheKey] = res.data.products}) 
      }
      
        const products = cache[cacheKey]
        this.flashDeals=products.slice(0,7)
        this.mobilePhones=products.filter(el=>(el as any).category==="smartphones")
        this.skinCare=products.filter(el=>(el as any).category==="skincare")
        this.homeDecoration=products.filter(el=>(el as any).category==="home-decoration")
        this.categoryItems=products.filter(el=> (el as any).category==="laptops" )
        this.groceriesProducts=products.filter(el=> (el as any).category==="groceries" )

      }catch(e:any){ console.error("this is error",e.message)}
    }
  },
  getters:{}
})
