<script setup lang="ts">
import { cartModule } from "@/stores/cartStore";
import { storeToRefs } from "pinia";
import { onUpdated, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const cartStore = cartModule();
const deleteItem = cartStore.deleteItem;
const { cartItems } = storeToRefs(cartStore);
const {totalPriceShipping}=cartStore
let agree = ref(false);

onUpdated(() => {
  localStorage.setItem("cart-items", JSON.stringify(cartItems.value));
});
</script>

<template>
  <div
    class="offcanvas offcanvas-end overflow-y-auto p-2"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
    style="width: 50rem; min-width: 180px"
  >
    <div style="color: #888682">
      <div class="position-sticky top-0 z-1 bg-white m-3">
        <div class="offcanvas-header p-0">
          <h5
            class="offcanvas-title fw-bold text-black"
            id="offcanvasRightLabel"
            style="font-size: clamp(9px, 2.5rem, 23px) "
          >
            shopping cart
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-label="Close"
            style="font-size: clamp(8px, 2rem, 20px)"
          ></button>
        </div>
        <p class="fw-bold my-3" style="font-size: clamp(8px, 1.9rem, 18px)">
          {{ cartItems.length }} items
        </p>
        
        <!-- progress bar -->
        <div class="progress-bar position-relative" v-if="cartItems.length">
          <div
            class="progress mt-4"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="100"
            aria-valuemin="0"
            :aria-valuemax="totalPriceShipping"
            style="height: 1.3rem; border-radius: 0.9rem"
          >
            <svg
              class="icon-shipping-truck position-absolute"
              style="
                width: 3rem;
                height: 3rem;
                min-height: 20px;
                min-width: 12px;
              "
              viewBox="0 0 40.55 24"
              :style="`top:-6px; left:calc(${
                (cartStore.totalPrice / totalPriceShipping) * 100 <= 100
                  ? (cartStore.totalPrice / totalPriceShipping) * 100
                  : 100
              }% - clamp(12px,3rem,30px) );transition:0.3s all ease-in-out; fill:${
                (cartStore.totalPrice / totalPriceShipping) * 100 <= 100
                  ? '#dc3545'
                  : '#3a8e3a'
              };`"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    stroke="#fff"
                    class="truck-body"
                    d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                  />
                  <path
                    stroke="#fff"
                    class="truck-body"
                    d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                  />
                  <path
                    fill="#fff"
                    class="wheel"
                    d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                  />
                  <path
                    fill="#fff"
                    class="wheel"
                    d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                  />
                </g>
              </g>
            </svg>
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              :style="`width : calc(${
                (cartStore.totalPrice / totalPriceShipping) * 100 <= 100
                  ? (cartStore.totalPrice / totalPriceShipping) * 100
                  : 100
              }%); transition:0.3s all ease-in-out ;  background-color:${
                (cartStore.totalPrice / totalPriceShipping) * 100 <= 100
                  ? '#dc3545'
                  : '#3a8e3a'
              };`"
            ></div>
          </div>
          <p
            class="my-3 align-self-start"
            style="font-weight: 500; font-size: clamp(6px, 1.8rem, 18px)"
          >
            only
            {{
              cartStore.totalPrice - totalPriceShipping <= 0
                ? `&#x24;${
                    totalPriceShipping - cartStore.totalPrice
                  } away from free shipping`
                : `your order qualifies for free shipping`
            }}
          </p>
        </div>
        <!-- progress bar -->
      </div>

      <!-- cart body -->
      <div class="offcanvas-body pt-0 d-flex flex-column">
        <!-- to show if there no product -->
        <div v-if="!cartItems.length" class="d-flex flex-column">
          <p
            class="my-4"
            style="font-weight: 500; font-size: clamp(6px, 1.8rem, 18px)"
          >
            free shipping for all orders over
            {{ totalPriceShipping.toFixed(2) }}!
          </p>
          <p
            class="my-5 text-center"
            style="font-size: clamp(8px, 1.8rem, 18px)"
          >
            your cart is empty
          </p>
          <button
            type="button"
            class="btn btn-outline-secondary rounded-pill shopping-btn my-5 text-capitalize"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            continue shopping
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary rounded-pill shopping-btn mb-4 text-capitalize"
            @click="router.push({ name: 'cart_page' })"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            view cart
          </button>
        </div>

        <!-- to show if there product -->
        <div v-if="cartItems.length" class="d-flex flex-column">
          <!-- product cards -->
          <div
            class="card-group d-flex flex-row mb-3"
            v-for="product in cartItems"
            :key="product['id']"
          >
            <div class="card d-flex flex-row border-0">
              <div
                class="p-0 overflow-hidden"
                style="
                  width: 20rem;
                  min-width: 45px;
                  height: 15rem;
                  min-height: 60px;
                "
              >
                <img
                  :src="product['thumbnail']"
                  class="card-img-top rounded-5 m-0"
                  alt="product image"
                  style="width: 100%; height: 100%"
                />
              </div>

              <div
                class="card-body position-relative p-3 d-flex flex-column justify-content-between"
                style="
                  width: 100%;
                  min-width: 110px;
                  height: 15rem;
                  min-height: 60px;
                "
              >
                <h5
                  class="card-title m-0"
                  style="font-size: clamp(6px, 1.7rem, 15px)"
                >
                  {{ product["title"] }} - {{ product["brand"] }}
                </h5>

                <p
                  class="card-text m-0"
                  style="font-size: clamp(6px, 1.4rem, 14px)"
                >
                  category : {{ product["category"] }}
                </p>

                <div
                  class="cart-product-count mx-auto"
                  style="min-height: 15px; height: 2.5rem"
                >
                  <button
                    type="button"
                    class="btn"
                    style="font-size: clamp(6px, 1.4rem, 14px)"
                    @click="
                      product['quantity'] > 1 ? product['quantity']-- : false
                    "
                  >
                    -
                  </button>
                  <input
                    type="number"
                    class="border-0 text-center"
                    style="font-size: clamp(6px, 1.4rem, 14px)"
                    :value="product['quantity']"
                    min="1"
                    :max="product['stock']"
                    disabled
                  />
                  <button
                    type="button"
                    class="btn"
                    style="font-size: clamp(6px, 1.4rem, 14px)"
                    @click="
                      product['quantity'] < product['stock']
                        ? product['quantity']++
                        : false
                    "
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  class="btn-close position-absolute top-0 p-2"
                  style="right: 0; font-size: clamp(6px, 1.4rem, 14px)"
                  aria-label="Close"
                  @click="deleteItem(product['id'])"
                ></button>

                <div class="sub-total d-flex justify-content-between">
                  <p style="font-size: clamp(6px, 1.4rem, 14px)">subtotal :</p>
                  <strong style="font-size: clamp(6px, 1.4rem, 14px)">
                    &#x24;
                    {{
                      product["quantity"] *
                      Math.ceil(
                        product["price"] -
                          product["price"] *
                            (product["discountPercentage"] / 100)
                      )
                    }}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between mt-4 text-black fw-bold">
            <p style="font-size: clamp(8px, 1.9rem, 19px)">total :</p>
            <p style="font-size: clamp(8px, 1.9rem, 19px)">
              &#x24;{{ cartStore.totalPrice }}
            </p>
          </div>
          <p class="my-2" style="font-size: clamp(6px, 1.4rem, 14px)">
            tax included and shipping calculated at checkout
          </p>
          <label
            class="d-flex align-items-center gap-3"
            style="font-size: clamp(6px, 1.4rem, 14px)"
          >
            <input class="form-check-input fs-4" type="checkbox" id="gridCheck" v-model="agree">
            <span
              class="checkmark my-3"
              style="font-size: clamp(6px, 1.4rem, 14px)"
              >i agree with terms & conditions</span
            >
          </label>

          <button
            type="button"
            class="btn btn-primary text-white rounded-pill shopping-btn my-4 text-capitalize"
            style="background-color: #6ca7ea"
            :disabled="!agree"
            @click="router.push({ name: 'check_out' })"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            checkout
          </button>

          <button
            type="button"
            class="btn btn-outline-secondary rounded-pill shopping-btn mb-4 text-capitalize"
            @click="router.push({ name: 'cart_page' })"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            view cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.shopping-btn {
  padding: 1.5rem 2rem;
  font-size: clamp(9px, 2rem, 20px);
  width: 90%;
  border-color: #d0d1d1 !important;
  color: black;
  font-weight: 500;
  align-self: center;
}

.cart-product-count {
  display: flex;
  flex-direction: row;
  align-items: center !important;
  justify-content: space-between;
  border: 1px solid black !important;
  width: 10rem;
  min-width: 50px;
  text-align: center;
  border-radius: 10rem;
  input[type="number"] {
    background-color: transparent;
    width: 4rem;
    min-width: 30px;
    margin: 0 auto;
    font-weight: 400;
  }
}
</style>
