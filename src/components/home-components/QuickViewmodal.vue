<script setup lang="ts">
import { inject, onBeforeMount, onMounted, ref, watch } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation } from "swiper/modules";
import { cartModule } from "@/stores/cartStore";
import { storeToRefs } from "pinia";

const cartStore = cartModule();
const addItem = cartStore.addItem;

const modules = ref([Pagination, Navigation]);
let loading = ref(false);
let productImg = ref<{ [key: string]: any }>({});
let counter = ref(1);
let productInfo: { [key: string]: any } = ref({});

// emit global
const emitter = inject("Emitter") as any;

onBeforeMount(async () => {
  loading.value = true;
  await emitter.on("productInfo", (data: { [key: string]: any }) => {
    productInfo.value = data;
  });
  setTimeout(() => {
    loading.value = false;
  }, 500);
});

watch(
  () => {
    productInfo.value;
  },
  () => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 500);
    counter.value = 1;
  },
  { deep: true }
);
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-xl mx-auto">
      <div class="modal-content my-auto">
        <div class="modal-header">
          <h1
            class="modal-title fw-bold ms-auto"
            id="exampleModalLabel"
            style="font-size: clamp(12px, 2.5rem, 25px)"
          >
            {{ productInfo["title"] }} details
          </h1>
          <button
            type="button"
            class="btn-close bg-secondary p-4"
            data-bs-dismiss="modal"
            aria-label="Close"
            style="font-size: clamp(12px, 2.5rem, 25px)"
          ></button>
        </div>

        <div class="modal-body">
          <div class="product-details">
            <div class="card mx-auto container border-0">
              <!-- product place holders ........................................................................ -->
              <div class="row opacity-25" aria-hidden="true" v-if="loading">
                <div class="col-md-7 m-0 p-5" style="height: 60rem">
                  <div
                    class="w-100 100"
                    style="background-color: #868e96"
                  ></div>
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
              <!-- product  ................................... -->

              <div class="row row-cols-2 g-0" v-if="!loading">
                <!-- first column -->
                <div class="col-md-7 p-5">
                  <div class="overflow-hidden w-100 pb-5" style="height: 60rem">
                    <img
                      :src="
                        productImg[productInfo['title']]
                          ? productImg[productInfo['title']]
                          : productInfo['thumbnail']
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
                      v-for="(img, index) in productInfo['images']"
                      :key="index"
                    >
                      <!-- images -->
                      <button
                        @click="productImg[productInfo['title']] = img"
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
                      ({{ productInfo["title"] }}) -
                      {{ productInfo["category"] }} for sale
                    </h5>

                    <div
                      class="d-flex align-items-center gap-5 fs-4 mb-4 rating-box"
                    >
                      <i
                        :data-star="productInfo['rating']"
                        class="rating d-flex"
                      ></i>
                      <p class="in-stock m-0 p-0">
                        stock : {{ productInfo["stock"] }}
                      </p>
                    </div>

                    <p class="product-card-text p-0 mb-4">
                      {{ productInfo["description"] }}
                    </p>
                    <p class="product-card-text mb-4">
                      brand : {{ productInfo["brand"] }}
                    </p>
                    <p class="product-card-text mb-4">
                      <span class="fw-bold">availability : </span>
                      {{
                        productInfo["stock"] > 0 ? "in stock" : "out of stock"
                      }}
                    </p>

                    <div class="mb-5 product-card-text fw-bold">
                      <span
                        class="discount"
                        v-if="productInfo['discountPercentage'] > 0"
                        ><del>&#x24;{{ productInfo["price"] }}</del> from
                      </span>
                      <span class="text-black fw-bold"
                        >&#x24;{{
                          Math.ceil(
                            productInfo["price"] -
                              productInfo["price"] *
                                (productInfo["discountPercentage"] / 100)
                          )
                        }}</span
                      >
                    </div>

                    <!-- increase and decrease form -->
                    <div>
                      <p class="mb-4 product-card-text fw-bold">quantity</p>
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
                          :max="productInfo['stock']"
                        />
                        <button
                          type="button"
                          class="btn fs-1"
                          @click="
                            counter < productInfo['stock'] ? counter++ : false
                          "
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <p>
                          subtotal :
                          <strong>
                            &#x24;{{
                              counter *
                              Math.ceil(
                                productInfo["price"] -
                                  productInfo["price"] *
                                    (productInfo["discountPercentage"] / 100)
                              )
                            }}</strong
                          >
                        </p>
                      </div>
                    </div>

                    <!-- button -->
                    <button
                      type="button"
                      class="btn btn-outline-dark rounded-pill card-btn"
                      @click="addItem(productInfo, counter)"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
