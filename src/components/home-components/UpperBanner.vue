<script setup lang="ts"></script>
<template>
    <div class="upper-banner">
        <div class="parent">
            <div class="container">
                <div class="b-content col-6">
                    <h1 class="b-title"><span>huge saving</span> on UHD televisions</h1>
                    <p class="b-body">sale up to 70% off on selected items*</p>
                    <button type="button" class="btn btn-outline-light rounded-pill text-capitalize">shop now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.upper-banner {
    .parent {
        background-image: url(../../media/images/banner-bg.jpg);
        background-repeat: no-repeat;
        background-position: left top;
        background-size: cover ;
        height: 550px;
        display: flex;
        justify-content: center;
        align-items: center;
        .b-content {
            .b-title{
                font-size: 8rem;
                font-weight: bold;
                color: white;
                span {
                    color: #10ffda;
                }
            }
            .b-body {
                margin-top: 3.5rem;
                font-size: 2.8rem;
                color: white;
            }
            button {
                margin-top: 5rem;
                font-size: 2.8rem;
                padding: 1.5rem 5.8rem;
            }
        }
    }
    
}
</style>