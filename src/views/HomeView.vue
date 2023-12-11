<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const UpperBanner=defineAsyncComponent(()=>import("../components/home-components/UpperBanner.vue"))
</script>
<template>
    <div>
    <upper-banner></upper-banner>
    </div>
</template>