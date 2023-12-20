<script setup lang="ts">
import {productModule} from "@/stores/productStore"
import { storeToRefs } from "pinia";
import { onMounted ,onBeforeMount, ref} from "vue";

const productStore=productModule()
const getProducts=productStore.getProducts;
const {flashDeals}=storeToRefs(productStore)
let productImg=ref<{[key:string]:any}>({})

onBeforeMount(()=>{
    getProducts()
    console.log(flashDeals)
})

</script>
<template>

    <div class="container-fluid">
        <div class="flash-container">
            <h1 class="flash-head">flash deals</h1>
            <div class="products">
                <!-- vfor -->
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5" >
                <div class="col" v-for="product in flashDeals" :key="product['id']">
                    <div class="card h-100 border-0">
                    <img :src="productImg[product['title']]?productImg[product['title']]:product['thumbnail']" class="card-img-top w-100" alt="product image"  style="height: 250px; border-top-left-radius: 15px; border-top-right-radius: 15px;" loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title">{{ product['title'] }}</h5>
                        <p class="card-text">{{ product['description'] }}</p>
                        <!-- rating -->
                        <i :data-star="product['rating']" class="rating"></i>
                        <!-- price -->
                        <div class="price"> <span class="discount" v-if="product['discountPercentage'] > 0"><del>&#x24;{{ product['price'] }}</del> from </span>&#x24;{{Math.ceil((product['price'] - ( product['price'] * (product['discountPercentage'] / 100) )))}} </div>
                        <!-- images -->
                        <div >
                            <button v-for="(image, index) in product['images']" :key="index" :value="image"  @click="productImg[product['title']]=image" class="img-toggle">
                                <img :src="String(image)" alt="product image" height="30px" width="30px"  style="border-radius: 50%; border: 1px solid black;">
                            </button>
                        </div>
                        <!-- button -->
                        <button type="button" class="btn btn-outline-dark rounded-pill card-btn">choose options</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.flash-container {
    padding: 6rem 2rem;
    .flash-head {
        color: #e10600;
        font-weight: 900;
        font-size: 3.4rem;   
        padding-bottom: 3rem;   
    }
    .card-body {
        display: flex;
        flex-direction: column;
        padding:1rem 2rem;
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
        width: 80%;
    }
    .img-toggle {
        border: 0;
        padding-right: 0.3rem;
        background-color: transparent;
    }
    }
    
}
[data-star] {
  text-align:left;
  font-style:normal;
  display:inline-block;
  position: relative;
  unicode-bidi: bidi-override;
}
[data-star]::before { 
    width: auto;
  display:block;
  content: '★★★★★';
  color: #eee;
}
[data-star]::after {
    width: auto;
  white-space:nowrap;
  position:absolute;
  top:0;
  left:0;
  content: '★★★★★';
  width: 0;
  color: #ff8c00;
  overflow:hidden;
  height:100%;
}

[data-star^="0.1"]::after{width:2%}
[data-star^="0.2"]::after{width:4%}
[data-star^="0.3"]::after{width:6%}
[data-star^="0.4"]::after{width:8%}
[data-star^="0.5"]::after{width:10%}
[data-star^="0.6"]::after{width:12%}
[data-star^="0.7"]::after{width:14%}
[data-star^="0.8"]::after{width:16%}
[data-star^="0.9"]::after{width:18%}
[data-star^="1"]::after{width:20%}
[data-star^="1.1"]::after{width:22%}
[data-star^="1.2"]::after{width:24%}
[data-star^="1.3"]::after{width:26%}
[data-star^="1.4"]::after{width:28%}
[data-star^="1.5"]::after{width:30%}
[data-star^="1.6"]::after{width:32%}
[data-star^="1.7"]::after{width:34%}
[data-star^="1.8"]::after{width:36%}
[data-star^="1.9"]::after{width:38%}
[data-star^="2"]::after{width:40%}
[data-star^="2.1"]::after{width:42%}
[data-star^="2.2"]::after{width:44%}
[data-star^="2.3"]::after{width:46%}
[data-star^="2.4"]::after{width:48%}
[data-star^="2.5"]::after{width:50%}
[data-star^="2.6"]::after{width:52%}
[data-star^="2.7"]::after{width:54%}
[data-star^="2.8"]::after{width:56%}
[data-star^="2.9"]::after{width:58%}
[data-star^="3"]::after{width:60%}
[data-star^="3.1"]::after{width:62%}
[data-star^="3.2"]::after{width:64%}
[data-star^="3.3"]::after{width:66%}
[data-star^="3.4"]::after{width:68%}
[data-star^="3.5"]::after{width:70%}
[data-star^="3.6"]::after{width:72%}
[data-star^="3.7"]::after{width:74%}
[data-star^="3.8"]::after{width:76%}
[data-star^="3.9"]::after{width:78%}
[data-star^="4"]::after{width:80%}
[data-star^="4.1"]::after{width:82%}
[data-star^="4.2"]::after{width:84%}
[data-star^="4.3"]::after{width:86%}
[data-star^="4.4"]::after{width:88%}
[data-star^="4.5"]::after{width:90%}
[data-star^="4.6"]::after{width:92%}
[data-star^="4.7"]::after{width:94%}
[data-star^="4.8"]::after{width:96%}
[data-star^="4.9"]::after{width:98%}
[data-star^="5"]::after{width:100%}
</style>