<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const UpperBanner=defineAsyncComponent(()=>import("../components/home-components/UpperBanner.vue"))
const FeatureSection=defineAsyncComponent(()=>import("../components/home-components/FeatureSection.vue"))
const TopDiscount=defineAsyncComponent(()=>import("../components/home-components/TopDiscount.vue"))




</script>
<template>
    <div>
    <upper-banner></upper-banner>
    <feature-section></feature-section>
    <top-discount></top-discount>
    </div>
</template>
