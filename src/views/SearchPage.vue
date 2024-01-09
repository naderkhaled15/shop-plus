<script setup lang="ts">
    import { productModule } from '@/stores/productStore';
    import { storeToRefs } from 'pinia';
    import { onBeforeMount, watch } from 'vue';
    import { useRoute,useRouter } from 'vue-router';

    const productStore=productModule()
    const {searchedProducts}=storeToRefs(productStore)
    const searchForProducts=productStore.searchForProducts

    const route=useRoute()
    const router=useRouter()

    onBeforeMount(() => {
        searchForProducts(route.params.key as string)
    })
    
    watch(()=>{
        route.params.key
    },()=>{
        searchForProducts(route.params.key as string)
    },{deep:true})

</script>

<template>
    <div class="p-5">
        <div v-if="searchedProducts.length<=0">
            <p class="fs-1 fw-bold text-center">404 not found </p>
        </div>

        <div v-if="searchedProducts.length > 0">
            <div class="card mb-3 p-5 border-bottom border-0 h-100" style="width: 100%;" v-for="product in searchedProducts" :key="product.id">
                <div class="row g-0">

                    <div class="col-sm-1 col-lg-2 d-flex align-items-center justify-content-center">
                        <img :src="product['thumbnail']" class="rounded-5" width="100%" alt="product image" loading="lazy">
                    </div>

                    <div class="col-sm-9 col-lg-9">
                        <div class="card-body d-flex justify-content-between h-100">
                            <h5 class="card-title pt-3">{{ product['title'] }}</h5>
                            <p class="card-text pb-2">{{ product['description'] }}</p>
                            <div class="price py-3 d-flex align-items-center"> 
                                <i :data-star="product['rating']" class="rating my-auto me-5"></i>
                                <span>
                                    <span class="discount" v-if="product['discountPercentage'] > 0"><del>&#x24;{{ product['price'] }}</del> from </span>
                                    <span>&#x24;{{Math.ceil((product['price'] - ( product['price'] * (product['discountPercentage'] / 100) )))}} </span>
                                </span>
                                <button type="button" class="btn btn-outline-dark rounded-pill card-btn ms-auto mx-0 my-0 w-25" @click="router.push({name:'product_details',params:{'categ':product['category'],'id':product['id']}})">Show Product</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
</template>