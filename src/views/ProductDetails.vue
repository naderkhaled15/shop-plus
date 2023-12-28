<script setup lang="ts">
import { productModule } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';


const route =useRoute()
const productStore=productModule()
const getProductDetails=productStore.getProductDetails
const {productDetails}=storeToRefs(productStore)
let loading =ref(false)

onBeforeMount(async()=>{
    loading.value=true
    await getProductDetails((+route.params.id))
    console.log(productDetails.value)
    loading.value=false
})

watch(route,async()=>{
    loading.value=true
    document.documentElement.scrollTo(0,0)
    await getProductDetails((+route.params.id))
    loading.value=false
})
</script>

<template>
    <div class="text-center fs-1">
        <!-- make :loading to element and make another loading card -->
        {{ route.params.id }}
    </div>
</template>

<style lang="scss"></style>