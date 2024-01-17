<script setup lang="ts">
    import { inject, ref } from "vue";
    import { Swiper,SwiperSlide } from "vue-awesome-swiper";
    import { Pagination,Navigation, Autoplay } from "swiper/modules";
    import router from "@/router";

    const modules=ref([Pagination,Navigation,Autoplay])
    let productImg=ref<{[key:string]:any}>({});
 
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

    const breakpoints= {       
      0: {       
            slidesPerView: 1,
            spaceBetween: 10     
        },    
        375: {       
            slidesPerView: 2,
            spaceBetween: 20     
        },                   
        1300: {       
            slidesPerView: 3,       
            spaceBetween: 30     
        },     
   }   


const props=defineProps({ 
    products:{
        type:Array as ()=>Product[],
        required:true
    } 
})

// fire emit
const emitter=inject("Emitter") as any
const quickView=(d:{[key:string]:any})=>{
emitter.emit('productInfo',d)
}

</script>

<template>
        <div class="container-fluid">
        <div class="flash-container">
            <div>
                <h1 class="flash-head">new products</h1>
            </div>
        </div>
        <div class="row row-cols-2" style="padding-bottom: 7rem;">
            
            <div class="products col-12 col-md-8 my-auto">
                <swiper
                    :modules="modules"
                    :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                    }"
                    :pagination="{el:'.swiper-pagination',clickable:true}"
                    :slides-per-view="3"
                    :space-between="30"
                    :preload-images="false"
                    :Lazy="true"
                    :Autoplay ="{ delay: 1000, disableOnInteraction:true , waitForTransition: true  }"
                    :breakpoints="breakpoints"
                    >
                    <swiper-slide v-for="product in props.products.slice(0,5)" :key="product['id']">
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
                         <div class="card border-0" v-if="props.products.length>0">

                            <div class="quick-view-container overflow-hidden w-100 position-relative" style="height:25rem;min-height: 150px;">
                                <img :src="productImg[product['title']]?productImg[product['title']]:product['thumbnail']" class="card-img-top m-0 p-0" alt="product image" loading="lazy" style="width: 100%; height: 100%;">
                                <div class="quick-view"><button type="button" class="rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="quickView(product)">quick view</button> </div>
                            </div>

                            <div class="card-body h-100">
                                <h5 class="card-title pt-3">{{ product['title'] }}</h5>
                                <p class="card-text pb-2">{{ product['description'] }}</p>
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
                    <div class="swiper-pagination"></div>
                </swiper>
            </div>

            <div class="col-12 col-md-4 my-auto mx-auto">
                <div class="overflow-hidden my-auto mx-auto">
                    <img src="../../media/images/vr-banner.webp" alt="vr img" width="100%" height="100%" class="vr-img">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.vr-img {
    &:hover{
            -webkit-transform: scale(1.02);
            -ms-transform: scale(1.02);
            transform: scale(1.02);
            transition: 1.5s ease;
        }
}
</style>