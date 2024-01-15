<script setup lang="ts">
import { productModule } from "@/stores/productStore";
import { storeToRefs } from "pinia";
import { onBeforeMount, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const productStore = productModule();
const { searchedProducts } = storeToRefs(productStore);
const searchForProducts = productStore.searchForProducts;

const route = useRoute();
const router = useRouter();

onBeforeMount(() => {
  searchForProducts(route.params.key as string);
});

watch(
  () => {
    route.params.key;
  },
  () => {
    searchForProducts(route.params.key as string);
  },
  { deep: true }
);
</script>

<template>
  <div class="p-5">
    <!-- if no products -->
    <div
      v-if="searchedProducts.length <= 0"
      class="d-flex justify-content-center align-items-center"
      style="height: 20rem"
    >
      <p class="fw-bold text-center" style="font-size: 7rem">not found</p>
    </div>

    <!-- if there is products -->
    <div v-if="searchedProducts.length > 0">
      <div
        class="card mb-3 p-5 border-bottom border-0 h-100"
        style="width: 100%"
        v-for="product in searchedProducts"
        :key="product.id"
      >
        <div class="row d-flex flex-row justify-content-between g-0">
          <div
            class="col-3 d-flex align-items-center justify-content-start"
            style="
              height: 25rem;
              width: 25rem;
              min-height: 80px;
              min-width: 80px;
            "
          >
            <img
              :src="product['thumbnail']"
              class="rounded-5"
              style="width: 100%; height: 100%"
              alt="product image"
              loading="lazy"
            />
          </div>

          <div class="col-9 me-auto ms-3">
            <div
              class="card-body d-flex flex-column justify-content-between h-100"
            >
              <h5
                class="card-title pt-3"
                style="font-size: clamp(10px, 3rem, 30px) !important"
              >
                {{ product["title"] }}
              </h5>
              <p
                class="card-text pb-2"
                style="font-size: clamp(5px, 1.5rem, 15px)"
              >
                {{ product["description"] }}
              </p>

              <div class="price py-3 d-flex align-items-center">
                <i
                  :data-star="product['rating']"
                  class="rating my-auto me-5"
                  style="
                    font-size: clamp(7px, 2rem, 20px);
                    width: 8.4rem;
                    min-width: 29.2px;
                  "
                ></i>
                <span>
                  <span
                    class="discount"
                    v-if="product['discountPercentage'] > 0"
                    style="font-size: clamp(7px, 2rem, 20px)"
                    ><del>&#x24;{{ product["price"] }}</del> from
                  </span>
                  <span style="font-size: clamp(7px, 2rem, 20px)"
                    >&#x24;{{
                      Math.ceil(
                        product["price"] -
                          product["price"] *
                            (product["discountPercentage"] / 100)
                      )
                    }}
                  </span>
                </span>

                <button
                  type="button"
                  class="btn btn-outline-dark rounded-pill card-btn ms-auto mx-0 my-0 w-50 pt-2 px-3 fw-bold d-flex align-items-center justify-content-center"
                  style="font-size: clamp(7px ,2.5rem , 25px);"
                  @click="
                    router.push({
                      name: 'product_details',
                      params: { categ: product['category'], id: product['id'] },
                    })
                  "
                >
                  Show Product
                </button>

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