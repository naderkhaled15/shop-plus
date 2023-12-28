<script setup lang="ts">
import { productModule } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route =useRoute()

const productStore=productModule()
const getCategoriesProducts=productStore.getCategoriesProducts
const {categoryProducts}=storeToRefs(productStore)
let productImg=ref<{[key:string]:any}>({});
let loading=ref(false)

onBeforeMount(async()=>{
    document.documentElement.scrollTo(0,0)
    loading.value=true
    await getCategoriesProducts(route.params.categ as string)
    loading.value=false
})

watch(route,async()=>{
    document.documentElement.scrollTo(0,0)
    loading.value=true
    await getCategoriesProducts(route.params.categ as string)
    loading.value=false

})
</script>
<template>
<div class="container-fluid">
    <h2 class="cart-head display-3 fw-bold text-center py-5">{{ route.params.title }}</h2>
    <div class="row row-cols-4 g-5 mx-5 my-5" >
        <div class="col" v-for="product in categoryProducts" :key="product.id">

            
            <!-- loading placeholder -->
            <div class="card border-0 opacity-25" aria-hidden="true" v-if="loading">
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
            <div class="card h-100 border-0" v-if="!loading">
            <div class="overflow-hidden w-100" style="height:250px ;">
                <img :src="productImg[product['title']]?productImg[product['title']]:product['thumbnail']" class="card-img-top w-100" alt="product image" loading="lazy">
            </div>
            <div class="card-body">
                <h5 class="card-title pt-3">{{ product['title'] }}</h5>
                <p class="card-text pb-2">{{ product['description'] }}</p>
                <i :data-star="product['rating']" class="rating"></i>
                <div class="price py-3"> <span class="discount" v-if="product['discountPercentage'] > 0"><del>&#x24;{{ product['price'] }}</del> from </span>&#x24;{{Math.ceil((product['price'] - ( product['price'] * (product['discountPercentage'] / 100) )))}} </div>
                <div class="d-flex align-items-center cursor-pointer">
                    <button v-for="(image, index) in product['images'].slice(0,3)" :key="index" :value="image"  @click="productImg[product['title']]=image" class="img-toggle">
                        <img :src="String(image)" alt="product image" height="35px" width="35px"  style="border-radius: 50%; border: 1px solid black;" class="product-img" loading="lazy">
                    </button>
                    <span v-if="product['images'].slice(3).length>0" class="fw-bold" style="font-size: 15px;"> + {{ product['images'].slice(3).length }}</span>
                </div>
                <!-- button -->
                <button type="button" class="btn btn-outline-dark rounded-pill card-btn mt-5" @click="console.log(product['title'])">choose options</button>
            </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss">

</style>