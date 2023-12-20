import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from '@/axios'

export const productModule = defineStore('productModule',{
  state:()=>({
    flashDeals:[]
  }),
  actions:{
    async getProducts(){
      try{  
        let result= await axios.get("/products?limit=10")
        let products:[]=result.data.products
        this.flashDeals.push(...products)
      }catch(e:any){ console.warn(e.message)}
    }
  },
  getters:{}
})
