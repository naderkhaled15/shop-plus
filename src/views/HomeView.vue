<script setup lang="ts">
import {productModule} from "@/stores/productStore"
import { storeToRefs } from "pinia";
import { defineAsyncComponent, onBeforeMount } from 'vue';
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
const {flashDeals,mobilePhones,skinCare,categoryItems,groceriesProducts,fragrancesProducts}=storeToRefs(productStore);

onBeforeMount(async()=>{
 await getProducts()
})


</script>
<template>
    <div>
    <upper-banner/>
    <feature-section/>
    <top-discount/>
    <flash-swiper :products="flashDeals" title="flash deals" color="red" appear margin="0"/>
    <top-categories/>
    <new-products :products="categoryItems"/>
    <quality-feature/>
    <flash-swiper :products="mobilePhones" title="top mobile phones" color="#202020" margin="0"/>

    <div class="row row-cols-2 mx-2 mb-4 mt-5 g-5">
        <img src="../media/images/band-left-cover.webp" alt="band-img" class="h-100" loading="lazy">
        <img src="../media/images/band-right-cover.webp" alt="band-img" class="h-100" loading="lazy">
    </div>

    <flash-swiper :products="fragrancesProducts" title="home fragrances" color="#202020" margin="0"/> 

    <div class="row row-cols-1 mx-2 mt-5">
        <img src="../media/images/tv-banner.webp" alt="banner img" loading="lazy">
    </div>

    <flash-swiper :products="skinCare" title="skincare" color="#202020" margin="auto"/>

    <why-shopwithus/>
    </div>
</template>
