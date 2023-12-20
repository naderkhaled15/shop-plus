import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from '@/axios'

export const productModule = defineStore('productModule',{
  state:()=>({
    allProducts:[]
  }),
  actions:{
    async getProducts(){
      let result= await axios.get("/products")
      let products:never[]=result.data.products
      this.allProducts.push(...products)
    }
  },
  getters:{}
})
