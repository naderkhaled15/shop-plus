<script setup lang="ts">
import { ref} from "vue";
import { Swiper,SwiperSlide } from "vue-awesome-swiper";
import { Pagination,Navigation, Autoplay } from "swiper/modules";
import { useRoute, useRouter } from "vue-router";

let productImg=ref<{[key:string]:any}>({});
const modules=ref([Pagination,Navigation,Autoplay])
const router=useRouter()

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
    
    const props=defineProps({
    products:{
        type:Array as ()=>Product[],
        required: true
    },
    title:{
        type:String,
        required: true
    },
    color:{
        type:String,
        required: true
    },
    appear:{
        type:Boolean,
    },
    margin:{
        type: String||Number
    }
})

</script>
<template>
    <div class="container-fluid">
        <div class="flash-container">
            <div class="d-flex justify-content-between align-items-center">
                <h1 class="flash-head" :style="{color: props.color, marginLeft:props.margin}">{{ props.title }}</h1>
                <p class=" mt-0 ms-auto"><a href="#" class="link-secondary link-offset-2 link-underline-opacity-100">shop all</a></p>
            </div>
            <div class="products">
                <swiper
                    :modules="modules"
                    :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                    }"
                    :pagination="{el:'.swiper-pagination',clickable:true}"
                    :slides-per-view="4"
                    :space-between="50"
                    :navigation="{nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev'}"                    
                    :preload-images="false"
                    :Lazy="true"
                    :Autoplay ="{ delay: 1000 }"
                    >
                    <swiper-slide v-for="product in props.products" :key="product['id']">
                            <!-- loading placeholder -->
                            <div class="card border-0" aria-hidden="true" v-if="props.products.length<0">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                                <div class="card-body">
                                    <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                    </h5>
                                    <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                    </p>
                                    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                </div>
                            </div>
                            <!-- card -->
                        <div class="card h-100 border-0">
                            <div class="overflow-hidden w-100" style="height:250px ;">
                                <img :src="productImg[product['title']]?productImg[product['title']]:product['thumbnail']" class="card-img-top w-100" alt="product image" loading="lazy">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title pt-3">{{ product['title'] }}</h5>
                                <p class="card-text pb-2">{{ product['description'] }}</p>
                                <i v-if="props.appear" :data-star="product['rating']" class="rating"></i>
                                <div class="price py-3"> <span class="discount" v-if="product['discountPercentage'] > 0"><del>&#x24;{{ product['price'] }}</del> from </span>&#x24;{{Math.ceil((product['price'] - ( product['price'] * (product['discountPercentage'] / 100) )))}} </div>
                                <div class="d-flex align-items-center cursor-pointer">
                                    <button v-for="(image, index) in product['images'].slice(0,3)" :key="index" :value="image"  @click="productImg[product['title']]=image" class="img-toggle">
                                        <img :src="String(image)" alt="product image" height="35px" width="35px"  style="border-radius: 50%; border: 1px solid black;" class="product-img" loading="lazy">
                                    </button>
                                    <span v-if="product['images'].slice(3).length>0" class="fw-bold" style="font-size: 15px;"> + {{ product['images'].slice(3).length }}</span>
                                </div>
                                <!-- button -->
                                <button type="button" class="btn btn-outline-dark rounded-pill card-btn mt-5" @click="router.push({name:'product_details',params:{'categ':product['category'],'id':product['id']}})">choose options</button>
                            </div>
                        </div>

                    </swiper-slide>
                    <div class="swiper-button-next" style="width: 30px; height: 30px;"></div>
                    <div class="swiper-button-prev" style="width: 30px; height: 30px;"></div>
                    <div class="swiper-pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.flash-container {
    padding: 6rem 2rem 0;
    .flash-head {
        font-weight: 800;
        font-size: 3.2rem;   
        padding-bottom: 3rem;   
        margin-bottom: 0;
    }
    .link-secondary {
        font-size: 2rem;
        font-weight: 500;
        &:hover {
            text-decoration: none;
        }
    } 
    // .card{
    // .card-img-top {
    //     height: 250px; 
    //     border-top-left-radius: 15px;
    //     border-top-right-radius: 15px;
    //     &:hover{
    //         -webkit-transform: scale(1.05);
    //         -ms-transform: scale(1.05);
    //         transform: scale(1.05);
    //         transition: 1.5s ease;
    //     }
    // }

    // .card-body {
    //     display: flex;
    //     flex-direction: column;
    //     padding:1rem 2rem;
    //     flex: 0 0 auto;
   
    // .card-title {
    //     font-size: 1.8rem;
    //     font-weight: bold;
    // }
    // .card-text {
    //     font-size: 2rem;
    //     font-weight: 400;
    //     overflow: hidden;
    //     text-overflow: ellipsis;
    //     display: -webkit-box;
    //     -webkit-line-clamp: 2;
    //     line-clamp: 2;
    //     -webkit-box-orient: vertical;
    //     margin: 0;
    // }
    // .rating {
    //     font-size: 2rem;
    //     width: 8.4rem;
    //     margin-bottom: auto;
    // }
    // .price {
    //     font-size: 2rem;
    //     font-weight: 900;
    //     color: #e10600;
    //     .discount {
    //         font-weight: 400;
    //         color: black;
    //     }
    // }
    // .product {
    // width: 100%;
    // display: flex;
    // flex-direction: row;
    // background-color: blue;
    // }
    // .card-btn {
    //     padding: 1rem 0 ;
    //     font-size: 2rem;
    //     font-weight: bold;
    //     margin:2rem auto 0;
    //     width: 90%;
    // }
    // .img-toggle {
    //     border: 0;
    //     padding-right: 0.3rem;
    //     background-color: transparent;
    //     &:first-child{
    //         padding-left: 0 !important;
    //         margin-left: 0 !important;
    //     }
    // }
    // }}
    
    .swiper-wrapper {
        height: 60rem;
        margin-bottom: 20px;
    }
    .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
    }
    
    .swiper-button-prev,.swiper-button-next { 
        font-weight: 600;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 2px solid #505050;
        background-color: white;
        top: 45%;
        padding: 20px;
        &::after {
            color:#505050;
            font-size: 20px;
            }
    }
    
}

</style>