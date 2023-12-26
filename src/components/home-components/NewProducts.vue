<script setup lang="ts">
    import { onBeforeMount, onMounted, ref } from "vue";
    import { Swiper,SwiperSlide } from "vue-awesome-swiper";
    import { Pagination,Navigation, Autoplay } from "swiper/modules";
    import { storeToRefs } from "pinia";
    import {productModule} from "@/stores/productStore";

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


    const props=defineProps({ 
        products:{
            type:Array as ()=>Product[],
            required:true
        } 
    })

</script>

<template>
        <div>
        <div class="top-categories">
            <div class="category">
                <h2 class="cat-head me-auto display-3 fw-bold">new products</h2>
                <p><a href="#" class="link-secondary link-offset-2 link-underline-opacity-100">shop all</a></p>
            </div>

        </div>
        <div class="row row-cols-2" style="padding-bottom: 7rem;">
                <div class="products col-8 pt-5 ">
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
                    :Autoplay ="{ delay: 1000 }"
                    >
                    <swiper-slide v-for="product in props.products.slice(0,5)" :key="product['id']">
                        <div class="card h-100 border-0">
                            <div class="overflow-hidden w-100" style="height:250px ;">
                                <img :src="productImg[product['title']]?productImg[product['title']]:product['thumbnail']" class="card-img-top w-100" alt="product image" loading="lazy">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title pt-3 pb-2">{{ product['title'] }}</h5>
                                <p class="card-text pb-2">{{ product['description'] }}</p>
                                <div class="price"> <span class="discount" v-if="product['discountPercentage'] > 0"><del>&#x24;{{ product['price'] }}</del> from </span>&#x24;{{Math.ceil((product['price'] - ( product['price'] * (product['discountPercentage'] / 100) )))}} </div>
                                <div >
                                    <button v-for="(image, index) in product['images']" :key="index" :value="image"  @click="productImg[product['title']]=image" class="img-toggle mt-4">
                                        <img :src="String(image)" alt="product image" height="35px" width="35px"  style="border-radius: 50%; border: 1px solid black;" class="product-img">
                                    </button>
                                </div>
                                <!-- button -->
                                <button type="button" class="btn btn-outline-dark rounded-pill card-btn mt-5" @click="console.log(product['title'])">choose options</button>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination"></div>
                </swiper>
            </div>
            <div class="col-4">
                <div class="overflow-hidden">
                    <img src="../../media/images/vr-banner.webp" alt="vr img" width="100%" class="vr-img">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .swiper-wrapper {
        height: 60rem;
        margin-left: 1rem;
    }
    .card{
    .card-img-top {
        height: 250px; 
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        &:hover{
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
            transition: 1.5s ease;
        }
    }

    .card-body {
        display: flex;
        flex-direction: column;
        padding:1rem 2rem;
        flex: 0 0 auto;
   
    .card-title {
        font-size: 1.8rem;
        font-weight: bold;
    }
    .card-text {
        font-size: 2rem;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 0;
    }
    .rating {
        font-size: 2rem;
        width: 8.4rem;
        margin-bottom: auto;
    }
    .price {
        font-size: 2rem;
        font-weight: 900;
        color: #e10600;
        .discount {
            font-weight: 400;
            color: black;
        }
    }
    .product {
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: blue;
    }
    .card-btn {
        padding: 1rem 0 ;
        font-size: 2rem;
        font-weight: bold;
        margin:2rem auto 0;
        width: 90%;
    }
    .img-toggle {
        border: 0;
        padding-right: 0.3rem;
        background-color: transparent;
        margin-top: 0.8rem;
        &:first-child{
            padding-left: 0 !important;
            margin-left: 0 !important;
        }
    }
    }
}
    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
    }
.vr-img {
    &:hover{
            -webkit-transform: scale(1.02);
            -ms-transform: scale(1.02);
            transform: scale(1.02);
            transition: 1.5s ease;
        }
}
</style>