<script setup lang="ts"></script>

<template>
        <div class="shop-with-us">
            <h2 class="shop-header">why shop <span>with us?</span></h2>
            <div class="row row-cols-4 w-100 shop-body">
                <div class="col">
                    <img src="../../media/images/free-shipping.png" alt="why shop with us" style="width: 120px; height: 120px;">
                    <p class="shop-feature">free shipping on first order</p>
                    <p class="shop">praesent suscipit mattis facilisis</p>
                    <p><a href="#" class="link-shop link-offset-2 link-underline-opacity-100">learn more</a></p>
                </div>
                <div class="col">
                    <img src="../../media/images/weekly-flash-sales.png" alt="why shop with us" style="width: 120px; height: 120px;">
                    <p class="shop-feature">weekly flash sale</p>
                    <p class="shop">praesent suscipit mattis facilisis</p>
                    <p><a href="#" class="link-shop link-offset-2 link-underline-opacity-100">learn more</a></p>
                </div>
                <div class="col">
                    <img src="../../media/images/discount.png" alt="why shop with us" style="width: 120px; height: 120px;">
                    <p class="shop-feature">anual payment discount</p>
                    <p class="shop">praesent suscipit mattis facilisis</p>
                    <p><a href="#" class="link-shop link-offset-2 link-underline-opacity-100">learn more</a></p>
                </div>
                <div class="col">
                    <img src="../../media/images/cash-back.png" alt="why shop with us" style="width: 120px; height: 120px;">
                    <p class="shop-feature">cashback reward program</p>
                    <p class="shop">praesent suscipit mattis facilisis</p>
                    <p><a href="#" class="link-shop link-offset-2 link-underline-opacity-100">learn more</a></p>
                </div>
            </div>
        </div>
    </template>

<style lang="scss">
    .shop-with-us {
        background-image: url(../../media/images/why-shop-with-us-banner.webp);
        background-repeat: no-repeat ;
        background-position: left top;
        background-size: cover ;
        height: fit-content;
        color: #ffffff;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 4rem;
        flex-direction: column;
        .shop-header {
            color: #10ffda;
            font-weight: 900;
            font-size: 5rem;
            letter-spacing: 1px;
            margin-top:40px;
            span {
                color: #ffffff;
            }
        }
        .shop-body {
            padding:3rem 5rem;
            font-size: 2rem;
            div {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 0 2.5rem;
                .shop-feature {
                    text-align: center;
                    font-size: 3rem;
                    font-weight: 700;
                }
                .shop {
                    font-weight: 500;
                    font-size: 2.2rem;
                    margin:3px 0 0;
                }                
                .link-shop {
                    color: #ffffff;
                    font-size: 2rem;
                    font-weight: 500;
                    &:hover {
                        text-decoration: none;
                    }
            }
        }
    } 
    }
</style>