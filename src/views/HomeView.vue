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



const productStore=productModule()
const getProducts=productStore.getProducts;
const {flashDeals,mobilePhones,skinCare,homeDecoration,categoryItems}=storeToRefs(productStore);

onBeforeMount(()=>{
    getProducts()
})
</script>
<template>
    <div>
    <upper-banner/>
    <feature-section/>
    <top-discount/>
    <flash-swiper :products="flashDeals" title="flash deals" color="red" appear  />
    <top-categories/>
    <new-products :products="categoryItems"/>
    <quality-feature/>
    <flash-swiper :products="mobilePhones" title="top mobile phones" color="#202020"/>
    <flash-swiper :products="skinCare" title="skincare" color="#202020"/>
    <!-- <flash-swiper :products="homeDecoration" title="home decoration" color="#202020"/> -->
    </div>
</template>
