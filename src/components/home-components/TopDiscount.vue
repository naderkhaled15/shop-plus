<script setup lang="ts"></script>
<template>
        <div class="deal-container mt-5">
            <div class="row py-4">
                <div class="col me-5" role="img" aria-label="offer" >
                    <div class="shrink">
                        <img src="../../media//images/playstations.webp" alt="offer" style="width: 100%; height: 100%;" loading="lazy">
                    </div>
                </div>
                <div class="col me-5" role="img" aria-label="offer">
                    <div class="shrink">
                        <img src="../../media//images/headset.webp" alt="offer" style="width: 100%; height: 100%;" loading="lazy">
                    </div>
                </div>
                <div class="col" role="img" aria-label="offer">
                    <div class="shrink">
                        <img src="../../media//images/chairs.webp" alt="offer" style="width: 100%; height: 100%;" loading="lazy">
                    </div>
                </div>
            </div>
            <div class="row pt-5 ">
                <div class="col me-5">
                    <div class="shrink">
                        <img src="../../media//images/iphones.webp" alt="offer" style="width: 100%; height: 100%;" loading="lazy">
                    </div>
                </div>
                <div class="col">
                    <div class="shrink">
                        <img src="../../media//images/laptops.webp" alt="offer" style="width: 100%; height: 100%;" loading="lazy">
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
        padding: 3px;
        border-radius: 30px;
    img {
        transition: 1.5s ease;
        border-radius: 20px;
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
