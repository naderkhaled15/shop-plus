<script setup lang="ts">
import router from "@/router";
import {productModule} from "@/stores/productStore"
import { storeToRefs } from "pinia";
import { defineAsyncComponent, onBeforeMount, onMounted, ref, useModel } from 'vue';
// import {errorToast} from "@/components/toast/Error"

const UpperBanner=defineAsyncComponent(()=>import("../components/home-components/UpperBanner.vue"))
const FeatureSection=defineAsyncComponent(()=>import("../components/home-components/FeatureSection.vue"))
const TopDiscount=defineAsyncComponent(()=>import("../components/home-components/TopDiscount.vue"))
const FlashSwiper=defineAsyncComponent(()=>import("../components/home-components/FlashSwiper.vue"))
const TopCategories=defineAsyncComponent(()=>import("../components/home-components/TopCategories.vue"))
const NewProducts=defineAsyncComponent(()=>import("../components/home-components/NewProducts.vue"))
const QualityFeature=defineAsyncComponent(()=>import("../components/home-components/QualityFeature.vue"))
const WhyShopwithus=defineAsyncComponent(()=>import("../components/home-components/WhyShopwithus.vue"))

const productStore=productModule()
const getProducts=productStore.getProducts;
const {flashDeals,mobilePhones,skinCare,categoryItems,fragrancesProducts}=storeToRefs(productStore);
let loading=ref(false)

onBeforeMount(async()=>{
loading.value=true
 await getProducts()
 document.documentElement.scrollTo(0,0)
 loading.value=false
})


</script>
<template>
    <div>
    <upper-banner/>
    <feature-section/>
    <top-discount/>
    <flash-swiper :products="flashDeals" title="flash deals" color="red" appear margin="0" :loading="loading"/>
    <top-categories/>
    <new-products :products="categoryItems"/>
    <quality-feature/>
    <flash-swiper :products="mobilePhones" title="top mobile phones" color="#202020" margin="0" :loading="loading"/>

    <div class="row row-cols-2 mx-5 g-5 my-3 overflow-hidden">
        <img src="../assets/images/band-left-cover.webp" alt="band-img" class="h-100 img-hover" loading="lazy" width="100%" height="100%">
        <img src="../assets/images/band-right-cover.webp" alt="band-img" class="h-100 img-hover" loading="lazy" width="100%" height="100%">
    </div>

    <flash-swiper :products="fragrancesProducts" title="fragrances" color="#202020" margin="0" :loading="loading"/> 

    <div class="row row-cols-1 mx-5 my-5 overflow-hidden">
        <img src="../assets/images/tv-banner.webp" alt="banner img" loading="lazy" class=" img-hover" width="100%" height="100%">
    </div>

    <flash-swiper :products="skinCare" title="skincare" color="#202020" margin="auto" :loading="loading"/>

    <why-shopwithus/>
    </div>
</template>
<style lang="scss">
.img-hover {
    &:hover {
        &:hover{
            -webkit-transform: scale(1.03);
            -ms-transform: scale(1.03);
            transform: scale(1.03);
            transition: 1.5s ease;
        }
    }
}
</style>