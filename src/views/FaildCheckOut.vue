<template>
    <div class="text-center my-5">
        <h1 class="fw-bold pb-5" style="color: red;font-size: 5rem;">Faild</h1>
        <b class="fs-2 d-block pb-3">please try again later</b>
        <button
                  type="button"
                  class="btn btn-outline-secondary my-4 py-4 text-capitalize w-25 rounded-5 fw-bold"
                  style="font-size:clamp(7px , 2rem ,20px);"
                  @click="$router.push({ name: 'home' })"
                >
                  continue shopping
                </button>    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>