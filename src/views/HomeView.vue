<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue';
const UpperBanner=defineAsyncComponent(()=>import("../components/home-components/UpperBanner.vue"))
const FeatureSection=defineAsyncComponent(()=>import("../components/home-components/FeatureSection.vue"))
const TopDiscount=defineAsyncComponent(()=>import("../components/home-components/TopDiscount.vue"))
const FlashSwiper=defineAsyncComponent(()=>import("../components/home-components/FlashSwiper.vue"))

</script>
<template>
    <div>
    <upper-banner/>
    <feature-section/>
    <top-discount/>
    <flash-swiper/>
    </div>
</template>
