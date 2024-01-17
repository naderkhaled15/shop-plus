<script setup lang="ts">

    import { ref } from 'vue';
    import { useRoute,useRouter } from 'vue-router';
    import { cartModule } from '@/stores/cartStore';
    import { storeToRefs } from 'pinia';
    import { userModule } from '@/stores/userStore';

    const uesrStore=userModule()
    const {userInfo}=storeToRefs(uesrStore) 
    const deleteUser=uesrStore.deleteUser

    // cart store
    const cartStore=cartModule()
    const {cartItems}=storeToRefs(cartStore)

    const route=useRoute()
    const router=useRouter()
    let search =ref('')

</script>

<template>
        <nav class="navbar sticky-top bg-body-tertiary p-3">
            <div class="container-fluid row row-cols-3 m-0 p-0">
                    
                    <div class="col-5 fs-1" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex aling-items-center flex-row">
                            <li class="nav-item d-flex align-items-center justify-content-center col-2">
                                <button type="button" class="btn btn-secondary px-4 nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsiveMenu" aria-controls="offcanvasLeft"><span class="navbar-toggler-icon" style="width: 5rem; min-width: 18px;"></span></button>
                            </li>

                            <li class="nav-item col-9">
                                <form class="d-flex ms-auto col-sm-12 col-lg-7 col-xxl-7 " role="search">
                                    <div class="input-group d-flex flex-row align-items-center">
                                        <div class="input-group-append p-0 me-3">
                                            <button class="btn rounded-pill p-0 z-2 border-0" type="submit" :disabled="!search" @click.prevent="router.push({name:'search',params:{'key':search}}),search=''">
                                            <svg data-icon="search" viewBox="0 0 512 512" style="width: 3rem;min-width: 14px;">
                                                <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"></path>
                                            </svg>
                                            </button>
                                        </div>
                                    <input class="form-control rounded-pill bg-white text-dark z-1 px-4 my-2 search" type="search" placeholder="Search the store" aria-label="Search" v-model="search">
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
            
                    <div class="col-2 text-center">
                        <a class="navbar-brand" href="#">
                            <router-link to="/">
                                <img src="../../media/images/footer-logo.webp" alt="ellarmart-logo" style="width:clamp(70px , 25rem ,170px)">
                            </router-link>
                        </a>
                    </div>
                    
                    <div class="col-5 fs-1" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex aling-items-center flex-row gap-5">
                            
                            <li class="nav-item ms-auto" v-if="!userInfo">
                                <button type="button" class="btn btn-secondary nav-link" @click="router.push({name:'log_in'})">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false" role="presentation" class="icon icon-account" style="width: 5.5rem; min-width: 18px;">
                                        <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z"></path>
                                    </svg>
                                </button>
                            </li>
                            <li class="nav-item ms-auto" v-if="userInfo">
                                <button type="button" class="btn btn-secondary nav-link" @click="deleteUser">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false" role="presentation" class="icon icon-account" style="width: 5.5rem; min-width: 18px;fill: #dc3545;">
                                        <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z"></path>
                                    </svg>
                                </button>
                            </li>
                        
                        <li class="nav-item">
                            <button type="button" class="btn btn-secondary nav-link position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" :style="`pointer-events:${route.name==='cart_page'? 'none': 'auto'}`">
                                <span class="position-absolute translate-middle badge rounded-pill bg-secondary" style="top: 1rem; left: 80%; font-size:clamp(6px,1.8rem,12px);">{{cartItems.length}}</span>
                                <svg viewBox="0 0 30 30" class="icon icon-cart" enable-background="new 0 0 30 30" style="width: 5rem; min-width: 18px;">
                                    <g><path d="M20,6V5c0-2.761-2.239-5-5-5s-5,2.239-5,5v1H4v24h22V6H20z M12,5c0-1.657,1.343-3,3-3s3,1.343,3,3v1h-6V5z M24,28H6V8h4v3    h2V8h6v3h2V8h4V28z"></path></g>
                                </svg>
                            </button>
                        </li>
                        
                    </ul>
                </div>
        
            </div>
        </nav>
</template>

<style>

</style>