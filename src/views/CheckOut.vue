<script setup lang="ts">
    import { cartModule } from '@/stores/cartStore';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';

    const cartStore=cartModule()
    const {cartItems}=storeToRefs(cartStore)
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
        <div class="col-7 py-5 d-flex flex-column justify-content-start" style="min-height: 100vh; padding:0 100px;">
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

            <div class="pt-5 pb-3 overflow-hidden">
                <p class="text-center fs-4" style="font-weight: 500; color: #999999;">express checkout</p>
                <div class="d-flex justify-content-center gap-4 border-0">

                    <button type="button" class="btn btn-primary col-6">
                        <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" style="width: 60px; height:50px;" aria-labelledby="pi-shopify_pay"><title id="pi-shopify_pay">Shop Pay</title>
                            <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#0d6efd"></path>
                            <path d="M21.382 9.713c0 1.668-1.177 2.858-2.821 2.858h-1.549a.133.133 0 00-.12.08.127.127 0 00-.01.049v2.192a.129.129 0 01-.13.129h-1.084a.13.13 0 01-.13-.13V6.986a.127.127 0 01.08-.12.129.129 0 01.05-.01h2.9c1.637 0 2.814 1.19 2.814 2.858v-.001zm-1.352 0c0-.958-.658-1.658-1.55-1.658h-1.468a.13.13 0 00-.13.13v3.05a.127.127 0 00.038.092.129.129 0 00.092.038h1.468c.892.005 1.55-.695 1.55-1.652zm1.674 3.791a1.527 1.527 0 01.647-1.317c.423-.316 1.084-.48 2.055-.514l1.033-.036v-.303c0-.607-.41-.863-1.068-.863-.658 0-1.075.231-1.17.61a.127.127 0 01-.125.09h-1.022a.13.13 0 01-.126-.092.125.125 0 01-.004-.055c.152-.898.904-1.58 2.494-1.58 1.692 0 2.303.783 2.303 2.276v3.172a.13.13 0 01-.132.129h-1.03a.13.13 0 01-.13-.13v-.236a.096.096 0 00-.061-.091.1.1 0 00-.107.022c-.31.334-.808.575-1.607.575-1.175 0-1.95-.607-1.95-1.657zm3.735-.687v-.246l-1.339.07c-.705.036-1.115.326-1.115.816 0 .444.376.69 1.034.69.893 0 1.42-.48 1.42-1.33zm2.316 4.6v-.919a.13.13 0 01.049-.1.132.132 0 01.108-.027c.158.029.318.044.479.044a1.229 1.229 0 001.245-.876l.067-.211a.133.133 0 000-.088l-2.145-5.471a.13.13 0 01.06-.165.13.13 0 01.062-.015h1.04a.132.132 0 01.123.085l1.456 3.859a.131.131 0 00.125.088.133.133 0 00.125-.088l1.265-3.848a.13.13 0 01.126-.09h1.076a.134.134 0 01.132.116.134.134 0 01-.008.063l-2.295 6.076c-.528 1.413-1.433 1.773-2.43 1.773a1.959 1.959 0 01-.561-.066.132.132 0 01-.1-.14h.001zM8.57 6.4a5.363 5.363 0 00-3.683 1.427.231.231 0 00-.029.31l.618.839a.236.236 0 00.362.028 3.823 3.823 0 012.738-1.11c2.12 0 3.227 1.584 3.227 3.15 0 1.7-1.163 2.898-2.835 2.921-1.292 0-2.266-.85-2.266-1.974a1.908 1.908 0 01.713-1.48.231.231 0 00.033-.324l-.65-.815a.236.236 0 00-.339-.034 3.43 3.43 0 00-.942 1.183 3.39 3.39 0 00-.337 1.47c0 1.935 1.655 3.452 3.775 3.464h.03c2.517-.032 4.337-1.884 4.337-4.415 0-2.247-1.667-4.64-4.752-4.64z" fill="#fff"></path>
                        </svg>
                    </button>
                    
                    <button  type="button" class="btn btn-dark col-6">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width: 50px; height:17px;"><g fill="none" fill-rule="evenodd">
                            <path d="M19.526 2.635v4.083h2.518c.6 0 1.096-.202 1.488-.605.403-.402.605-.882.605-1.437 0-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99c1.013 0 1.873.337 2.582 1.012.72.675 1.08 1.497 1.08 2.466 0 .991-.36 1.819-1.08 2.482-.697.665-1.559.996-2.583.996h-2.485v.001zm7.668 2.287c0 .392.166.718.499.98.332.26.722.391 1.168.391.633 0 1.196-.234 1.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.409.294-.613.657-.613 1.093m1.946-5.815c1.112 0 1.989.297 2.633.89.642.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45 1.372-2.486 1.372-.882 0-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.892 0 1.629.163 2.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132 2.132 0 0 0-1.455-.547c-.84 0-1.504.353-1.995 1.062l-1.324-.834c.73-1.045 1.81-1.568 3.238-1.568m11.853.262l-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z" fill="#FFF"/>
                            <path d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944" fill="#4285F4"/><path d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703" fill="#34A853"/><path d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z" fill="#FABB05"/>
                            <path d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774" fill="#E94235"/></g></svg>
                    </button>
                    
                </div>
            </div>

            <div class="row py-4">
                <form class="row g-3">
                    <p class="fw-bold fs-5 m-0">shipping addresses</p>
                    <div class="col-12">
                        <input type="text" class="form-control p-3" id="inputCountry" placeholder="Country/Region" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control p-3" id="inputFirstName" placeholder="First Name" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control p-3" id="inputLastName" placeholder="Last Name" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-12">
                        <input type="text" class="form-control p-3" id="inputAddress" placeholder="Address" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-md-12">
                        <input type="text" class="form-control p-3" id="appartMent" placeholder="Appartment" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control p-3" id="city" placeholder="City" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control p-3" id="country" placeholder="Governorate" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control p-3" id="postalCode" placeholder="Postal Code" style="font-weight: 500; font-size: 13px;" required>
                    </div>
                    <div class="col-9">
                    <div class="form-check ms-3">
                        <input class="form-check-input fs-4" type="checkbox" id="gridCheck"  v-model="agree">
                        <label class="form-check-label fs-4" for="gridCheck">Check me out</label>
                    </div>
                    </div>
                    <div class="col-3 d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary fs-4 rounded-3 py-3 px-4 mt-3" :disabled="!agree" @click="$router.push({name:'payment_checkout'})">payment methods</button>
                    </div>
        </form>
    </div>
        <p class="mt-auto pt-4 border-top" style="font-size: 12px; font-weight: 500; color: #4e4e4e;">all rights reserved <span class="text-lowercase">new-ella-demo</span></p>
    </div>
    <div class="col-5 m-0 b-0" style="background-color: #f5f5f5; min-height: 100vh;">
            <div class="py-4 overflow-y-auto  overflow-x-hidden" style="max-height: 700px;">
                <div class="row my-1 p-4 user-select-none" v-for="product in cartItems" :key="product['id']">
                    <div class="col-2 ">
                        <div class="position-relative">
                            <img :src="product['thumbnail']" class="card-img-top rounded-4 border border-2" style="width: 60px; height: 60px;" alt="product image">   
                            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-secondary fs-6" style="left:58%;">
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