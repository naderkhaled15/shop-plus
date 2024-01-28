<script setup lang="ts"></script>
<template>
    <div class="upper-banner">
        <div class="parent p-0">
            <img src="../../assets/images/banner-bg.jpg" alt="banner img">
            <div class="b-content col-6">
                <h1 class="b-title mb-0"><span>huge saving</span> on UHD televisions</h1>
                <p class="b-body">sale up to 70% off on selected items*</p>
                <button type="button" class="btn btn-outline-light rounded-pill text-capitalize">shop now</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.upper-banner {
    .parent {
        position: relative;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .b-content {
            position: absolute;
            top: clamp(10px ,4rem ,50px);
            left: 10rem;
            width: 45%;
            .b-title{
                font-size: clamp(15px , 5vw , 85px);
                font-weight: bold;
                color: white;
            
                span {
                    color: #10ffda;
                }
            }
            .b-body {
                margin-top: clamp(7px , 1.8vw , 35px);
                font-size: clamp(5.5px ,  1.8vw , 31px);
                color: white;
                margin-bottom: 0;
            }
            button {
                margin-top: clamp( 6px , 2vw , 50px );
                font-size: clamp(5.5px ,  1.8vw ,28px);
                // padding: 1.2rem 4.5rem;
                padding: clamp(4px,1rem, 12px) clamp(1px ,5rem,50px);
            }
        }
    }
    
}
</style>