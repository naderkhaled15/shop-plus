<script setup lang="ts">
  import { cartModule } from '@/stores/cartStore';
import { ref } from 'vue';

  let cartProducts=ref(JSON.parse(localStorage.getItem('cart-items')!)?JSON.parse(localStorage.getItem('cart-items')!).length:0)
  

  const cartStore=cartModule()
  const deleteItem=cartStore.deleteItem
</script>
<template>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title fs-3" id="offcanvasRightLabel">shopping cart</h5>
    <button type="button" class="btn-close fs-5 me-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body pt-0">
    <p class="fs-4">{{cartProducts}} items</p>
    <button type="button" @click="deleteItem(3)">delete</button>
  </div>
</div>
</template>