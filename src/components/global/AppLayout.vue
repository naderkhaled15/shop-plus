<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route=useRoute()

const AppNavbar=defineAsyncComponent(()=>import("../global/AppNavbar.vue"))
const FixedNav=defineAsyncComponent(()=>import("../global/FixedNav.vue"))
const SideCart=defineAsyncComponent(()=>import("../global/SideCart.vue"))
const SideMenu=defineAsyncComponent(()=>import("../global/SideMenu.vue"))
const AppFooter=defineAsyncComponent(()=>import("../global/AppFooter.vue"))
const ResponsiveNav=defineAsyncComponent(()=>import("../global/ResponsiveNav.vue"))

let navResponse=ref(false)

onMounted(() => {
    window.innerWidth <= 992?  navResponse.value=true :navResponse.value=false
})

window.onresize=()=>{
    window.innerWidth <= 992? navResponse.value=true :navResponse.value=false
}


</script>
<template>
        <div class="layout-container">

        <!-- navbar -->
            <app-navbar v-show="route.name !='check_out' && !navResponse"/>
            <fixed-nav v-show="route.name !='check_out' && !navResponse"/>
            <responsive-nav v-show="route.name !='check_out' && navResponse" />
        <!-- aside -->
            <side-cart v-show="route.name !='check_out'"/>
            <side-menu v-show="navResponse"/>
            <!-- body -->
            <main :style="`margin:${route.name ==='check_out'?'20px':'0px'}`">
                <slot></slot>
            </main>
        <!-- footer -->
                <app-footer v-show="route.name !='check_out'"/>

       </div>
</template>
<style lang="scss">

</style>