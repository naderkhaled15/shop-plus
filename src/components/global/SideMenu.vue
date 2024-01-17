<script setup lang="ts">
import { productModule } from "@/stores/productStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { userModule } from '@/stores/userStore';

const uesrStore=userModule()
const {userInfo}=storeToRefs(uesrStore) 
const deleteUser=uesrStore.deleteUser

// languages test
import { languageModule } from "@/stores/languageStore";
const langStore = languageModule();
const { languagesSet, language } = storeToRefs(langStore);
// languages test

const router = useRouter();
const productStore = productModule();
const { allCategories } = storeToRefs(productStore);
</script>

<template>
  <div
    class="offcanvas offcanvas-start p-2"
    tabindex="-1"
    id="offcanvasResponsiveMenu"
    aria-labelledby="offcanvasLeftLabel"
    style="width: 50rem; min-width: 180px"
  >
    <!-- header -->
    <div class="offcanvas-header">
      <h5
        class="offcanvas-title fw-bold"
        id="offcanvasLeftLabel"
        style="font-size: clamp(18px, 2.8rem, 23px)"
      >
        menu
      </h5>
      <button
        type="button"
        class="btn-close me-3"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsiveMenu"
        aria-label="Close"
        style="font-size: clamp(10px, 2rem, 20px)"
      ></button>
    </div>

    <!-- body -->
    <div class="offcanvas-body pt-0 d-flex flex-column">
      <!-- accounts list -->
      <ul class="list-group list-group-flush mb-5">
        <li
          class="list-group-item py-4 list-group-item-action list-group-item-white w-100 border-0 p-0"
          >
          <span>
          <button
          v-if="!userInfo"
          type="button"
          class="btn btn-white nav-link w-100 d-block text-start d-flex align-items-center"
            @click="router.push({ name: 'log_in'})"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            >

              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              class="icon icon-account"
              style="width: 6rem"
              >
              <path
            d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z"
            ></path>
          </svg>
          <span class="me-auto ms-3" style="font-weight: 600;font-size: clamp(11px, 3.5rem, 35px)"
          
          >sign in</span
          >
        </button>

        <span v-if="userInfo" class="me-auto ms-3 d-block mb-5" style="font-weight: 600;font-size: clamp(11px, 3.5rem, 35px)"
            >welcome  {{ userInfo.username }}</span
          >

          <button
          v-if="userInfo"
          type="button"
          class="btn btn-white nav-link w-100 d-block text-start d-flex align-items-center"
            @click="deleteUser()"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            >

              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              class="icon icon-account"
              style="width: 6rem;fill: #dc3545;"
              >
              <path
            d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z"
            ></path>
          </svg>
          <span class="me-auto ms-3 text-danger" style="font-weight: 600;font-size: clamp(11px, 3.5rem, 35px)"
          
          >log out</span
          >
        </button>
      </span>
        </li>

        <li 
          class="list-group-item py-4 list-group-item list-group-item-action list-group-item-white w-100 p-0"
        >
          <button
          v-if="!userInfo"
            type="button"
            class="btn btn-white nav-link w-100 d-block text-start d-flex align-items-center"
            @click="
              router.push({ name: 'sign_up' })
            "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="icon icon-account"
              viewBox="0 0 1024 1024"
              style="width: 4.5rem"
            >
              <title>user</title>
              <path
                class="path1"
                d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"
              ></path>
              <path
                class="path2"
                d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"
              ></path>
            </svg>
            <span class="me-auto ms-3" style="font-weight: 600;font-size: clamp(11px, 3.5rem, 35px)"
              >Create An Account</span
            >
          </button>
        </li>
      </ul>

      <!-- category list -->
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item py-5 list-group-item list-group-item-action list-group-item-white w-100"
          v-for="categ in allCategories"
          :key="categ.title"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <router-link
            :to="{ name: 'category', params: { title: categ.route } }"
            class="text-decoration-none text-black res-nav-list d-block"
            style="font-weight: 600;font-size: clamp(12px, 3.5rem, 35px)"
            >{{ categ.title }}</router-link
          >
        </li>
      </ul>

      <!-- languages list -->
      <ul
        class="list-group mt-auto border-top pt-5"
        style="margin-bottom: 70px"
      >


      
        <li class="nav-item me-2 dropdown">
          <button
            class="btn dropdown-toggle d-flex justify-content-center align-items-center fs-2 p-0 pt-5 w-100 border-0"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span v-html="language[0].icon" class="me-3"></span>
            <span class="fw-bold me-auto" style="font-size:clamp(13px, 2.8rem, 28px)">
              {{ language[0].lang }} / {{ language[0].currency }}</span
            >
          </button>
          <ul
            class="dropdown-menu w-100 border-0"
            aria-labelledby="dropdownMenuButton1"
          >
            <li
              class=" m-3"
              v-for="lang in languagesSet"
              :key="lang.lang"
              @click="language = [lang]"
              style="font-size: clamp(11px, 3.5rem, 35px)"
            >
              <a class="dropdown-item" href="#">
                <span v-html="lang.icon" class="me-4" style="font-size: clamp(11px, 3.5rem, 35px)"></span>
                <span style="font-size: clamp(11px, 3.5rem, 35px)">{{ lang.lang }} / {{ lang.currency }}</span>
              </a>
            </li>
          </ul>
        </li>



      </ul>
    </div>

    <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon icon-account" viewBox="0 0 1024 1024" width="100%" height="100%"><title>user</title><path class="path1" d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"></path><path class="path2" d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"></path></svg> -->
  </div>
</template>

<style lang="scss"></style>
