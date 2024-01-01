<script setup lang="ts">
import { defineAsyncComponent } from 'vue';


const AppNavbar=defineAsyncComponent(()=>import("../global/AppNavbar.vue"))
const FixedNav=defineAsyncComponent(()=>import("../global/FixedNav.vue"))
const AppSidecart=defineAsyncComponent(()=>import("../global/AppSidecart.vue"))
const AppFooter=defineAsyncComponent(()=>import("../global/AppFooter.vue"))

</script>
<template>
        <div class="layout-container">

            <!-- navbar -->
                <app-navbar/>
                <fixed-nav/>
            <!-- aside -->
            <app-sidecart/>
            <!-- body -->
            <main>
                <slot></slot>
            </main>
            <!-- footer -->
                <app-footer/>
       </div>
</template>
<style lang="scss">

</style>