<script setup lang="ts">
import { defineAsyncComponent } from 'vue';


const AppNavbar=defineAsyncComponent(()=>import("../global/AppNavbar.vue"))
const FixedNav=defineAsyncComponent(()=>import("../global/FixedNav.vue"))
const AppSidebar=defineAsyncComponent(()=>import("../global/AppSidebar.vue"))
const AppFooter=defineAsyncComponent(()=>import("../global/AppFooter.vue"))

</script>
<template>
        <div class="layout-container">

            <!-- navbar -->
                <app-navbar></app-navbar>
                <fixed-nav></fixed-nav>
            <!-- aside -->
                <app-sidebar></app-sidebar>
            <!-- body -->
            <main>
                <slot></slot>
            </main>
            <!-- footer -->
                <app-footer></app-footer>
       </div>
</template>
<style lang="scss">

</style>