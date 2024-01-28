<script setup lang="ts">

    import { useRouter } from 'vue-router';
    const router=useRouter()

</script>
<template>
        <div class="deal-container mt-5">

            <div class="row cols-3 py-4">
                <div class="col" role="img" aria-label="offer" >
                    <div class="shrink ">
                        <img src="../../assets/images/playstations.webp" alt="offer" style="width: 100%; height: 100%;" loading="lazy" @click="router.push({name:'category',params:{'title':'home-decoration'}} )">
                    </div>
                </div>
                <div class="col" role="img" aria-label="offer">
                    <div class="shrink ">
                        <img src="../../assets/images/headset.webp" alt="offer" style="width: 100%; height: 100%;" loading="lazy" @click="router.push({name:'category',params:{'title':'lighting'}})" >
                    </div>
                </div>
                <div class="col" role="img" aria-label="offer">
                    <div class="shrink">
                        <img src="../../assets/images/chairs.webp" alt="offer" style="width: 100%; height: 100%;" loading="lazy" @click="router.push({name:'category',params:{'title':'furniture'}})" >
                    </div>
                </div>
            </div>

            <div class="row row-cols-2 pt-5 ">
                <div class="col">
                    <div class="shrink">
                        <img src="../../assets/images/iphones.webp" alt="offer" style="width: 100%; height: 100%;" loading="lazy" @click="router.push({name:'category',params:{'title':'smartphones'}})" >
                    </div>
                </div>
                <div class="col">
                    <div class="shrink">
                        <img src="../../assets/images/laptops.webp" alt="offer" style="width: 100%; height: 100%;" loading="lazy" @click="router.push({name:'category',params:{'title':'laptops'}})" >
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss">
.deal-container {
    z-index: 9;
    padding: 5rem 2.8rem;
    background-color: #f5f5f5;
    gap: 3rem;
    
    .shrink {
        overflow: hidden;
        padding:0;
        margin: 0;
        border-radius: 3rem;
    img {
        transition: 1.5s ease;
        border-radius: 2rem;
    &:hover{
    -webkit-transform: scale(1.08);
    -ms-transform: scale(1.08);
    transform: scale(1.08);
    transition: 1.5s ease;
    }
    }
}
}
</style>
