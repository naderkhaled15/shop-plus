<script setup lang="ts">
import { cartModule } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';
import { onUpdated, ref } from 'vue';
import { useRouter } from 'vue-router';

const router=useRouter()

const cartStore=cartModule()
const deleteItem=cartStore.deleteItem
const {cartItems,totalPriceShipping}=storeToRefs(cartStore)
let agree=ref(false)

const totalPrice=():number=>{
  let total=ref(0)
  cartItems.value.forEach((product:any)=>{
    total.value+=product['quantity'] * (Math.ceil((product['price'] - ( product['price'] * (product['discountPercentage'] / 100) ))))
  })
  return  Number( total.value.toFixed(2))
}

onUpdated(() => {
  localStorage.setItem('cart-items',JSON.stringify(cartItems.value))
})
</script>

<template>
<div class="offcanvas offcanvas-end overflow-y-auto" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style="width: 500px;">
  <div class="m-3" style="color:#888682;">
    <div class="position-sticky top-0 z-1 bg-white m-3">
      <div class="offcanvas-header p-0">
        <h5 class="offcanvas-title fs-2 text-black" id="offcanvasRightLabel">shopping cart</h5>
        <button type="button" class="btn-close fs-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <p class="fs-3 fw-bold my-3">{{cartItems.length}} items</p>
      <!-- progress bar -->
      <div class="progress-bar position-relative" v-if="cartItems.length">
        <div class="progress mt-3" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" :aria-valuemax="totalPriceShipping" style="height: 13px; border-radius: 9px;">
            <svg class="icon-shipping-truck position-absolute" width="30px" height="30px" viewBox="0 0 40.55 24" fill="#dc3545" 
            :style="`top:-7px; left:calc(${ totalPrice() / totalPriceShipping * 100 <= 100 ? (totalPrice() / totalPriceShipping * 100) : 100 }% - 30px);transition:0.5s all ease-in-out`">
            <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
            <path stroke="#fff" class="truck-body" d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"/>
            <path stroke="#fff" class="truck-body" d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"/>
            <path fill="#fff" class="wheel" d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"/>
            <path fill="#fff" class="wheel" d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"/>
            </g>
            </g>
            </svg>
            <div class="progress-bar progress-bar-striped bg-danger" 
              :style="`width : calc(${totalPrice() / totalPriceShipping * 100 <= 100 ?totalPrice() / totalPriceShipping * 100 :100}%); transition:0.5s all ease-in-out`">
            </div>
        </div>
        <p class="fs-3 my-3 align-self-start" style="font-weight: 500;">only {{totalPrice()-totalPriceShipping<=0?`&#x24;${totalPriceShipping-totalPrice()} away from free shipping`:`your order qualifies for free shipping`}}</p>
      </div>
    </div>
    <!-- cart body -->
    <div class="offcanvas-body pt-0 d-flex flex-column">
      
        <!-- to show if there no product -->
        <div v-if="!cartItems.length" class="d-flex flex-column">
          <p class="fs-3 my-4" style="font-weight: 500;">free shipping for all orders over {{totalPriceShipping.toFixed(2)}}!</p>
          <p class="fs-3 my-5 text-center">your cart is empty</p>
          <button type="button" class="btn btn-outline-secondary rounded-pill shopping-btn my-5 text-capitalize" data-bs-dismiss="offcanvas" aria-label="Close">continue shopping</button>
        </div>
        <!-- to show if there product -->
        <div v-if="cartItems.length" class="d-flex flex-column">
          <!-- product cards -->
          <div class="card-group d-flex flex-column mb-3" v-for="product in cartItems" :key="product['id']">
            <div class="card row-cols-2 d-flex flex-row border-0">

              <div class="col-6 align-items-start overflow-hidden">
                <img :src="product['thumbnail']" class="card-img-top m-0" alt="product image">
              </div>

              <div class="card-body col-6 position-relative d-flex justify-content-between py-5">

                <h5 class="card-title fs-4">{{product['title']}} - {{ product['brand'] }}</h5>

                <p class="card-text fs-5">category : {{ product['category'] }}</p>

                <div class="cart-product-count my-3 mx-auto">
                  <button type="button" class="btn fs-5" @click="product['quantity'] > 1 ? product['quantity']-- : false"> - </button>
                  <input  type="number" class="border-0 fs-5 text-center" :value="product['quantity']" min="1" :max="product['stock']"  disabled>
                  <button type="button" class="btn fs-5" @click="product['quantity'] < product['stock'] ? product['quantity']++ : false"> + </button>
                </div>

                  <button type="button" class="btn-close position-absolute top-0 end-0 fs-4" aria-label="Close" @click="deleteItem(product['id'])"></button>

                  <div class="sub-total d-flex justify-content-between">
                    <p class="fs-5">subtotal : </p>
                    <strong class="fs-5"> 
                      &#x24; 
                      {{product['quantity'] * (Math.ceil((product['price'] - ( product['price'] * (product['discountPercentage'] / 100) ))))}} 
                    </strong>
                  </div>

              </div>

            </div>
          </div>
          <div class="d-flex justify-content-between mt-4 fs-3 text-black fw-bold">
            <p>total :</p>
            <p>&#x24;{{totalPrice()}}</p>
          </div>
          <p class="fs-3 my-2">tax included and shipping calculated at checkout</p>
          <label class="d-flex align-items-center gap-3 fs-4">
            <input type="checkbox" v-model="agree">
            <span class="checkmark fs-4 my-3">i agree with terms & conditions</span>
          </label>
          <button type="button" class="btn btn-primary text-white rounded-pill shopping-btn my-4 text-capitalize" style="background-color: #6ca7ea;" :disabled="!agree">checkout</button>         
          <button type="button" class="btn btn-outline-secondary rounded-pill shopping-btn mb-4 text-capitalize" @click="router.push({name:'cart_page'})">view cart</button>
        </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
  .shopping-btn{
    padding: 15px 20px;
    font-size: 20px;
    width: 90%;
    border-color: #d0d1d1 !important;
    color: black;
    font-weight: 500;
    align-self: center;
  }
  .cart-product-count {
    display: flex;
    align-items: center;
    border: 1px solid black;
    width: fit-content;
    border-radius: 100px;
    input[type='number'] {
      width: 35px;
      background-color: transparent;
      margin: 0 auto;
      font-weight: 400;
    }
  }
</style>