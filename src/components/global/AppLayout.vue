<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

const route=useRoute()

const AppNavbar=defineAsyncComponent(()=>import("../global/AppNavbar.vue"))
const FixedNav=defineAsyncComponent(()=>import("../global/FixedNav.vue"))
const AppSidecart=defineAsyncComponent(()=>import("../global/AppSidecart.vue"))
const AppFooter=defineAsyncComponent(()=>import("../global/AppFooter.vue"))

</script>
<template>
        <div class="layout-container">

            <!-- navbar -->
                <app-navbar v-if="route.name !='check_out'"/>
                <fixed-nav v-if="route.name !='check_out'"/>
            <!-- aside -->
            <app-sidecart v-if="route.name !='check_out'"/>
            <!-- body -->
            <main :style="`margin:${route.name ==='check_out'?'20px':'0px'}`">
                <slot></slot>
            </main>
            <!-- footer -->
                <app-footer v-if="route.name !='check_out'"/>

       </div>
</template>
<style lang="scss">

</style>