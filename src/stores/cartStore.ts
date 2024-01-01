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
    cartItems:[] as Product[]
  }),
  actions:{
    addItem(item:any,productNumber:number){
      this.cartItems=JSON.parse(localStorage.getItem('cart-items')!)?JSON.parse(localStorage.getItem('cart-items')!):[]

      if(this.cartItems.length<=0 || this.cartItems.find(el=>el.id===item.id)===undefined){
        item.quantity=productNumber
        this.cartItems.push(item)
      }else {
        let curretnItem=this.cartItems.find(el=>el.id===item.id) as Product
        curretnItem.quantity+=productNumber
      }
      localStorage.setItem('cart-items',JSON.stringify(this.cartItems))
    },
    deleteItem(itemId:number){
      this.cartItems=JSON.parse(localStorage.getItem('cart-items')!)
      let indexOfElement:number|null=this.cartItems.findIndex(el=>el.id===itemId)!==-1?this.cartItems.findIndex(el=>el.id===itemId):null
      if(indexOfElement){
        this.cartItems.splice(indexOfElement,1)
        indexOfElement=null
      }else {
        console.log('no items in the cart')
      }

      localStorage.setItem('cart-items',JSON.stringify(this.cartItems))
    }
  },
  getters:{

  }
})
