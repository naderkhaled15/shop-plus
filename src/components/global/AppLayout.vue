<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const AppNavbar=defineAsyncComponent(()=>import("../global/AppNavbar.vue"))
const AppSidebar=defineAsyncComponent(()=>import("../global/AppSidebar.vue"))
const AppFooter=defineAsyncComponent(()=>import("../global/AppFooter.vue"))
</script>
<template>
       <div class="container-fluid">
            <!-- navbar -->
            <app-navbar></app-navbar>
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