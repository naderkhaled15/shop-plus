<script setup lang="ts">
import { productModule } from "@/stores/productStore";
import { storeToRefs } from "pinia";
import { onBeforeMount, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation } from "swiper/modules";
// cart store
import { cartModule } from "@/stores/cartStore";

const cartStore = cartModule();
const addItem = cartStore.addItem;

const route = useRoute();
const router = useRouter();
const productStore = productModule();
const getProductDetails = productStore.getProductDetails;
const { productDetails } = storeToRefs(productStore);
const modules = ref([Pagination, Navigation]);
let loading = ref(false);
let productImg = ref<{ [key: string]: any }>({});
let counter = ref(1);

onBeforeMount(async () => {
  loading.value = true;
  await getProductDetails(+route.params.id);
  loading.value = false;
});

watch(route, async () => {
  loading.value = true;
  document.documentElement.scrollTo(0, 0);
  await getProductDetails(+route.params.id);
  loading.value = false;
});
</script>

<template>
  <div class="product-details">
    <div class="card my-5 mx-auto container border-0">
      <!-- product place holders ...................................-->
      <div class="row row-cols-2 opacity-25" aria-hidden="true" v-if="loading">
        <div class="col-md-7 m-0 p-5" style="height: 600px">
          <div class="w-100 h-100" style="background-color: #868e96"></div>
        </div>
        <div class="card-body col-md-5 p-5">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>

          <span class="placeholder col-7"></span>
          <span class="placeholder col-4 mt-4"></span>
          <span class="placeholder col-4 mt-4"></span>
          <span class="placeholder col-6 mt-4"></span>
          <span class="placeholder col-8 mt-4"></span>
          <span class="placeholder col-4 mt-4"></span>
          <span class="placeholder col-6 mt-4"></span>
          <span class="placeholder col-8 mt-4"></span>
          <a
            class="btn btn-secondary disabled placeholder col-6"
            style="margin-top: 10rem"
            aria-disabled="true"
          ></a>
          <a
            class="btn btn-primary disabled placeholder col-6"
            style="margin-top: 2rem"
            aria-disabled="true"
          ></a>
        </div>
      </div>

      <!-- product  ..................................-->
      <div class="row row-cols-2 g-0" v-if="!loading">
        <!-- first column -->

        <div class="col-7 p-5">
          <div class="overflow-hidden w-100 pb-5" style="height: 60rem">
            <img
              :src="
                productImg[productDetails['title']]
                  ? productImg[productDetails['title']]
                  : productDetails['thumbnail']
              "
              width="100%"
              height="100%"
              class="card-img-top m-0 mx-auto mw-100 h-100"
              alt="product image"
              loading="lazy"
            />
          </div>

          <swiper
            :modules="modules"
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :slides-per-view="3"
            :space-between="7"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }"
            :preload-images="false"
            :Lazy="true"
          >
            <swiper-slide
              v-for="(img, index) in productDetails['images']"
              :key="index"
            >
              <!-- images -->
              <button
                @click="productImg[productDetails['title']] = img"
                class="border-0 bg-transparent h-100 w-100 px-5 py-3"
              >
                <img
                  :src="String(img)"
                  alt="product image"
                  height="100%"
                  width="100%"
                  style="border: 1px solid black"
                  loading="lazy"
                />
              </button>
            </swiper-slide>
            <div class="swiper-button-next" style="right: -1%"></div>
            <div class="swiper-button-prev" style="left: -1%"></div>
            <div class="swiper-pagination"></div>
          </swiper>
        </div>

        <!-- second column -->
        <div class="col-5 h-100 p-5">
          <div class="card-body pt-0">
            <h5 class="product-card-title">
              ({{ productDetails["title"] }}) -
              {{ productDetails["category"] }} for sale
            </h5>

            <div class="d-flex align-items-center gap-5 mb-4 rating-box">
              <i
                :data-star="productDetails['rating']"
                class="rating d-flex"
              ></i>
              <p class="in-stock m-0 p-0">
                stock : {{ productDetails["stock"] }}
              </p>
            </div>

            <p class="product-card-text p-0 mb-4">
              {{ productDetails["description"] }}
            </p>
            <p class="product-card-text mb-4">
              <span class="fw-bold">brand : </span>{{ productDetails["brand"] }}
            </p>
            <p class="product-card-text mb-4">
              <span class="fw-bold">availability : </span
              >{{ productDetails["stock"] > 0 ? "in stock" : "out of stock" }}
            </p>

            <div class="mb-5 product-card-text fw-bold">
              <span
                class="discount"
                v-if="productDetails['discountPercentage'] > 0"
                ><del>&#x24;{{ productDetails["price"] }}</del> from
              </span>
              <span class="text-black fw-bold"
                >&#x24;{{
                  Math.ceil(
                    productDetails["price"] -
                      productDetails["price"] *
                        (productDetails["discountPercentage"] / 100)
                  )
                }}</span
              >
            </div>

            <!-- increase and decrease form -->
            <div>
              <p class="mb-4 product-card-text">quantity</p>

              <div class="product-count mb-5">
                <button
                  type="button"
                  class="btn fs-1"
                  @click="counter > 1 ? counter-- : false"
                >
                  -
                </button>
                <input
                  type="number"
                  class="border-0 fs-1 text-center"
                  v-model="counter"
                  disabled
                  min="1"
                  :max="productDetails['stock']"
                />
                <button
                  type="button"
                  class="btn fs-1"
                  @click="counter < productDetails['stock'] ? counter++ : false"
                >
                  +
                </button>
              </div>
            </div>

            <!-- button -->
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill card-btn"
              @click="addItem(productDetails, counter)"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
