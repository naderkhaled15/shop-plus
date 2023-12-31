<script setup lang="ts">
import {  RouterView } from 'vue-router'
import AppLayout from './components/global/AppLayout.vue';
import {defineAsyncComponent} from "vue"

const QuickViewmodal=defineAsyncComponent(()=>import("@/components/home-components/QuickViewmodal.vue"))
</script>

<template>
  <app-layout>
    <RouterView />
    <quick-viewmodal/>
  </app-layout>
</template>
