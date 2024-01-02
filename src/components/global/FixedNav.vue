<script setup lang="ts">
import { productModule } from '@/stores/productStore';
import { storeToRefs } from 'pinia';

// products store
const productStore=productModule()
const {allCategories}=storeToRefs(productStore)

// cart count
import { cartModule } from '@/stores/cartStore';
const cartStore=cartModule()
const {cartLength}=storeToRefs(cartStore)

</script>
<template>
<nav class="navbar navbar-expand-lg px-4 py-4 border-body nav-bar sticky-nav row row-cols-3 container-fluid">
  <!-- brand logo -->
  <div class="col-2">
    <a class="navbar-brand text-center" href="#">
      <router-link to="/">
        <img src="../../media/images/logo.png" alt="ellarmart-logo" style="width: 60%">
      </router-link>
    </a> 
  </div>

    <!-- collapsed button -->
    <button class="navbar-toggler col-sm-1 ms-auto me-4" type="button" data-toggle="collapse" data-target="#fixedNavBar" aria-controls="fixedNavBar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="col-10 ms-auto">
        <!-- collapsed element -->
        <div class="collapse navbar-collapse" id="fixedNavBar">
          <ul class="navbar-nav col-12 fixed-nav">
            <div class="col-10 d-flex align-items-center gap-5">

              <li v-for="category in allCategories" :key="category.title">
                <RouterLink class="nav-link" active-class="active" :to="{name:'category',params:{'categ':category.route,'title':category.title}}">{{ category.title }}</RouterLink>      
              </li>

            </div>
            <div class="col-2 d-flex align-items-center ms-auto">              
              <li class="nav-item ms-auto ">
                <a class="nav-link" href="#">
                  <svg data-icon="search" viewBox="0 0 512 512" width="100%" height="100%" style="fill: #fbfbfd; width: 30px;">
                    <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"></path>
                  </svg>
                </a> 
              </li>

              <li class="nav-item ms-0">
                  <a class="nav-link" href="#">
                    <button class="btn px-0 py-0 position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <!-- cart number -->
                        <span class="position-absolute translate-middle badge rounded-pill" style="top: 5px; left: 90%; font-size: 12px; background-color: #d12442;">{{cartLength}}</span>
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" style="fill: #fbfbfd;">
                          <path class="path1" d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"></path>
                          <path class="path2" d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"></path>
                          <path class="path3" d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"></path>
                        </svg>
                    </button>
                  </a> 
              </li>
            </div>
          </ul>
        </div>
    </div>
</nav>
</template>
<style lang="scss">
  .sticky-nav {
        z-index: 998;
        position: fixed;
        top: 0;
        left: 0; 
        padding: 0; 
        margin: 0;
    .fixed-nav {
        li {
          font-size:2.2rem;
          font-weight: bold;
      cursor: pointer;
      font-weight: 500;
      a{
        color: #9697c6;
      }
        }
    }
  }
</style>