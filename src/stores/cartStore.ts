import { defineStore } from 'pinia'


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
  brand:string;
  stock:number;
  quantity:number
} 


export const cartModule = defineStore('cartModule',{
  state:()=>({
    cartItems:JSON.parse(localStorage.getItem('cart-items')!)?JSON.parse(localStorage.getItem('cart-items')!):[] as Product[],
    totalPriceShipping:10000 as number,
  }),
  actions:{
    addItem(item:any,productNumber:number){
      if(this.cartItems.length<=0 || this.cartItems.find((el: { id: Product; })=>el.id===item.id)===undefined){
        // not exists
        item.quantity=productNumber
        this.cartItems.push(item)
      }else {
        // exists
        let curretnItem=this.cartItems.find((el: { id: Product; })=>el.id===item.id) as Product
        curretnItem.quantity+=productNumber
      }
      localStorage.setItem('cart-items',JSON.stringify(this.cartItems))
    },
    deleteItem(itemId:number){
      let indexOfElement:number|null=this.cartItems.findIndex((el: { id: number; })=>el.id===itemId)!==-1?this.cartItems.findIndex((el: { id: number; })=>el.id===itemId):null
      if(indexOfElement!==null){
        this.cartItems.splice(indexOfElement,1)
        indexOfElement=null
      }
      localStorage.setItem('cart-items',JSON.stringify(this.cartItems))
    }
  },
  getters:{}
})
