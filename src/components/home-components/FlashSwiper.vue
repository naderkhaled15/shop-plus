<script setup lang="ts">
import { inject, ref} from "vue";
import { Swiper,SwiperSlide } from "vue-awesome-swiper";
import { Pagination,Navigation, Autoplay } from "swiper/modules";
import {  useRouter } from "vue-router";

let productImg=ref<{[key:string]:any}>({});
const modules=ref([Pagination,Navigation,Autoplay])
const router=useRouter()

const breakpoints= {       
      0: {       
            slidesPerView: 1,
            spaceBetween: 10     
        },    
        375: {       
            slidesPerView: 2,
            spaceBetween: 20     
        },          
        575: {       
            slidesPerView: 3,
            spaceBetween: 20     
        },          
        800: {       
            slidesPerView: 4,       
            spaceBetween: 30     
        },     
   }   

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
    },
    loading:{
        type:Boolean
    }
})

// fire global emit
const emitter=inject("Emitter") as any
const quickView=(data:{[key:string]:any})=>{
    emitter.emit('productInfo',data)
}


</script>
<template>
    <div class="container-fluid">
        <div class="flash-container">
            <div>
                <h1 class="flash-head" :style="{color: props.color, marginLeft:props.margin}">{{ props.title }}</h1>
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
                    :Autoplay ="{ delay: 1000 , disableOnInteraction:true , waitForTransition: true }"
                    :loop="true"
                    :breakpoints="breakpoints"
                    >
                    <swiper-slide v-for="product in props.products" :key="product['id']">
                            <!-- loading placeholder -->
                            <div class="card border-0" aria-hidden="true" v-if="loading">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                                <div class="card-body bg-info">
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
                        <div class="card border-0" v-if="!loading">

                            <div class="quick-view-container overflow-hidden w-100 position-relative" style="height:25rem;min-height: 150px;">
                                <img :src="productImg[product['title']]?productImg[product['title']]:product['thumbnail']" class="card-img-top m-0 p-0" alt="product image" loading="lazy" style="width: 100%; height: 100%;">
                                <div class="quick-view"><button type="button" class="rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="quickView(product)">quick view</button> </div>
                            </div>

                            <div class="card-body h-100">
                                <h5 class="card-title pt-3">{{ product['title'] }}</h5>
                                <p class="card-text pb-2">{{ product['description'] }}</p>
                                <i v-if="props.appear" :data-star="product['rating']" class="rating mt-auto"></i>
                                <div class="price py-2"> <span class="discount" v-if="product['discountPercentage'] > 0"><del>&#x24;{{ product['price'] }}</del> from </span>&#x24;{{Math.ceil((product['price'] - ( product['price'] * (product['discountPercentage'] / 100) )))}} </div>
                                <div class="d-flex align-items-center cursor-pointer">
                                    <button v-for="(image, index) in product['images'].slice(0,3)" :key="index" :value="image"  @click="productImg[product['title']]=image" class="img-toggle">
                                        <img :src="String(image)" alt="product image" style="border-radius: 50%; border: .1px solid black;width: 3.5rem; min-width:20px;min-height: 20px; height: 3.5rem; " class="product-img" loading="lazy">
                                    </button>
                                    <span v-if="product['images'].slice(3).length>0" class="fw-bold" style="font-size: clamp(10px , 1.5rem , 15px)"> + {{ product['images'].slice(3).length }}</span>
                                </div>
                                <!-- button -->
                                <button type="button" class="btn btn-outline-dark rounded-pill card-btn" @click="router.push({name:'product_details',params:{'categ':product['category'],'id':product['id']}})">choose options</button>
                            </div>
                        </div>

                    </swiper-slide>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.flash-container {
    padding: 5rem 2rem 0;
    .flash-head {
        font-weight: 800;
        font-size: clamp(15px , 4rem , 35px);
        padding-bottom: 4rem;  
        margin-bottom: 0;
    }
    
}

</style>