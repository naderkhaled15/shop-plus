<script setup lang="ts">
    import { cartModule } from '@/stores/cartStore';
    import { storeToRefs } from 'pinia';
import { ref } from 'vue';

    const cartStore=cartModule()
    const deleteItem=cartStore.deleteItem
    const {cartItems,totalPriceShipping}=storeToRefs(cartStore)
    const shipping=ref(20)
    let agree=ref(false)

    const totalPrice=():number=>{
    let total=ref(0)
    cartItems.value.forEach((product:any)=>{
        total.value+=product['quantity'] * (Math.ceil((product['price'] - ( product['price'] * (product['discountPercentage'] / 100) ))))
    })
    return  Number( total.value.toFixed(2))
    }
</script>   

<template>
    <div class="row">
        <div class="col-7 p-5">
            <div class="row">
                <p class="fs-3 fw-bold text-lowercase">new-ella-demo</p>
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">home</router-link></li>
                        <li class="breadcrumb-item"><router-link to="/cart_page">cart</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">check out</li>
                    </ol>
                </nav>
            </div>
            <div class="row py-4">
                <form class="row g-3">
                    <p class="fw-bold fs-5 m-0">shipping addresses</p>
                    <div class="col-12">
                        <input type="text" class="form-control p-3" id="inputCountry" placeholder="Country" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control p-3" id="inputFirstName" placeholder="First Name" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control p-3" id="inputLastName" placeholder="Last Name" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-12">
                        <input type="text" class="form-control p-3" id="inputAddress" placeholder="Adress" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-md-12">
                        <input type="text" class="form-control p-3" id="appartMent" placeholder="Appartment" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control p-3" id="city" placeholder="City" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control p-3" id="country" placeholder="Country" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control p-3" id="postalCode" placeholder="Postal Code" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-10">
                    <div class="form-check ms-3">
                        <input class="form-check-input fs-4" type="checkbox" id="gridCheck"  v-model="agree">
                        <label class="form-check-label fs-4" for="gridCheck">Check me out</label>
                    </div>
                    </div>
                    <div class="col-2 d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary fs-4" :disabled="!agree">Sign in</button>
                    </div>
        </form>
    </div>
    </div>
    <div class="col-5 p-5" style="background-color: #f5f5f5;">
        <div class="overflow-y-auto  overflow-x-hidden" style="height: 500px;">
                <div class="row my-1 p-4 user-select-none" v-for="product in cartItems" :key="product['id']">
                    <div class="col-2 ">
                        <div class="position-relative">
                            <img :src="product['thumbnail']" class="card-img-top rounded-4 border border-2" style="width: 60px; height: 60px;" alt="product image">   
                            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-secondary fs-6" style="left: 95%;">
                                {{product['quantity']}}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </div>
                        
                    </div>
                    
                    <div class="col-6">
                        <h5 class="card-title row-3">{{product['title']}} - {{ product['category'] }} </h5>
                        <p class="card-text mt-3">category : {{ product['brand'] }}</p>
                    </div>
                    
                    <div class="col-1 d-flex align-items-center justify-content-end fs-5 ms-5">
                        <p>&#x24;{{ product['price'] }}</p>
                    </div>
                </div>
            </div>
            
            <div class="row p-4 gap-2 mb-3">
                <input type="text" class="p-3 fs-5 border-0 rounded-2 col-8" placeholder="discount code">
                <button class="btn btn-outline-secondary border-0 col-2 m-0 p-0" type="button" id="button-addon2" style="background-color: #ededed; font-weight: 700;"> Apply </button>
            </div>

            <div class="row px-4 d-flex">

                <div class="col-10 mb-3">
                    <div class="sub-total d-flex justify-content-between">
                        <span class="fs-5">subtotal </span>
                        <span class="fs-5"> &#x24;{{(totalPrice()).toFixed(2)}} </span>
                    </div>
                </div>

                <div class="col-10 mb-3">
                    <div class="sub-total d-flex justify-content-between">
                        <span class="fs-5">shipping </span>
                        <span class="fs-5"> &#x24;{{(shipping).toFixed(2)}} </span>
                    </div>
                </div>

                <div class="col-10">
                    <div class="sub-total d-flex justify-content-between">
                        <span class="fs-5 fw-bold">Total </span>
                        <span class="fs-5 fw-bold"> &#x24;{{(totalPrice() + shipping).toFixed(2)}} </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
.breadcrumb {
    .breadcrumb-item {
        font-size: 12px; 
        font-weight: 600;
        a {
        color: #999999;
        text-decoration: none;
    }
    }
    .active{
        color: #4e4e4e !important;
    } 
}
</style>