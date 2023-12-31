<script setup lang="ts">
import { productModule } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { Swiper,SwiperSlide } from "vue-awesome-swiper";
import { Pagination,Navigation } from "swiper/modules";


const route =useRoute()
const router=useRouter()
const productStore=productModule()
const getProductDetails=productStore.getProductDetails
const {productDetails}=storeToRefs(productStore)
const modules=ref([Pagination,Navigation])
let loading =ref(false)
let productImg=ref<{[key:string]:any}>({});
let counter=ref(1)

onBeforeMount(async()=>{
    loading.value=true
    await getProductDetails((+route.params.id))
    console.log(productDetails.value)
    loading.value=false
})

watch(route,async()=>{
    loading.value=true
    document.documentElement.scrollTo(0,0)
    await getProductDetails((+route.params.id))
    loading.value=false
})
</script>

<template>
    <div class="product-details">
        <div class="card my-5 mx-auto container border-0">
            <div class="row g-0">

                <!-- first column -->
                <div class="col-md-6 p-5">
                    <div class="overflow-hidden w-100 p-5" style="height: 700px;">
                        <img :src="productImg[productDetails['title']]?productImg[productDetails['title']]:productDetails['thumbnail']" class="card-img-top m-0 h-100" alt="product image" loading="lazy">
                    </div>
                    <swiper
                    :modules="modules"
                    :pagination="{el:'.swiper-pagination',clickable:true}"
                    :slides-per-view="3"
                    :space-between="10"
                    :navigation="{nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev'}"                    
                    :preload-images="false"
                    :Lazy="true"
                    >
                    <swiper-slide v-for="(img,index) in productDetails['images']" :key="index">
                            <!-- images -->
                                    <button  @click="productImg[productDetails['title']]=img" class="bg-transparent border-0">
                                        <img :src="String(img)" alt="product image" height="200px" width="200px"  style="border: 1px solid black;"  loading="lazy">
                                    </button>
                    </swiper-slide>
                    <div class="swiper-button-next" style="width: 20px; height: 20px;"></div>
                    <div class="swiper-button-prev" style="width: 20px; height: 20px;"></div>
                    <div class="swiper-pagination"></div>
                </swiper>
                </div>
                <!-- second column -->
                <div class="col-md-6 h-100 p-5">
                    <div class="card-body p-5">

                            <h5 class="product-card-title p-0 m-0 mb-4 fs-1 fw-bold text-black">({{ productDetails['title'] }}) - {{ productDetails['category'] }} for sale</h5>

                            <div class="d-flex align-items-center gap-5 fs-4 mb-4 rating-box">
                                <i :data-star="productDetails['rating']" class="rating d-flex"></i>
                                <p class="in-stock m-0 p-0 "> stock : {{ productDetails['stock'] }}</p>
                            </div>

                            <p class="product-card-text p-0 m-0 mb-3 fs-4 mb-4">{{ productDetails['description'] }}</p>
                            <p class="mb-4">brand : {{ productDetails['brand'] }}</p>
                            <p class="mb-4">availability : {{ productDetails['stock']>0?'in stock':'not available' }}</p>

                            <div class="mb-5"> <span class="discount" v-if="productDetails['discountPercentage'] > 0"><del>&#x24;{{ productDetails['price'] }}</del> from </span> <span class="text-black fw-bold">&#x24;{{Math.ceil((productDetails['price'] - ( productDetails['price'] * (productDetails['discountPercentage'] / 100) )))}}</span>  </div>
                            
                            <!-- increase and decrease form -->
                            <div>
                                <p class="mb-4 fs-3">quantity</p>
                                <div class="product-count mb-5 ">
                                    <button type="button" class="btn fs-1" @click="counter>1?counter--:false, console.log(counter)"> - </button>
                                    <input type="number" class="border-0 fs-1 text-center" v-model="counter"  disabled min="1" :max="productDetails['stock']">
                                    <button type="button" class="btn fs-1" @click="counter<productDetails['stock']?counter++:false , console.log(counter)"> + </button>
                                </div>
                            </div>
                                
                            <!-- button -->
                            <button type="button" class="btn btn-outline-dark rounded-pill card-btn mt-5" >add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.product-details {
    .swiper-wrapper {
            height: fit-content;
            margin: 3rem auto 0;
            padding-bottom: 5rem;
        }
        .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        }
    .swiper-button-prev,.swiper-button-next { 
        width: 35px;
        height: 35px;
        top: 50%;
        &::after {
            color:#505050;
            font-size: 25px;
            font-weight: 800;
            }
        }
        // SECOND COLOUMN 
        .card-body {
            color: #797979;
            font-size: 1.5rem;
            font-weight: 500;
            .product-count {
                display: flex;
                align-items: center;
                border: 1px solid black;
                width: fit-content;
                border-radius: 100px;
                input[type='number'] {
                    width: fit-content;
                    background-color: transparent;
                    margin: 0 auto;
                    font-weight: 400;
                }
            }
            .card-btn {
                padding: 1rem 0;
                font-size: 2rem;
                font-weight: bold;
                margin:2rem auto 0;
                width: 100%;
            }
            // .product-card-title {
            //     font-weight: 700;
            //     font-size: 2.5rem !important;
            //     margin:0 0 1rem 0 !important;
            // }
            // .rating-box {
            //     margin: 0 0 1rem 0 !important;
            // }
        }
}
</style>