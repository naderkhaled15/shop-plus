<script setup lang="ts">
import { cartModule } from "@/stores/cartStore";
import { storeToRefs } from "pinia";
import { onUpdated, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const cartStore = cartModule();
const { cartItems, totalPriceShipping } = storeToRefs(cartStore);
const deleteItem = cartStore.deleteItem;
let agree = ref(false);


onUpdated(() => {
  localStorage.setItem("cart-items", JSON.stringify(cartItems.value));
});

const contries = ref(["Egypt", "Lebanon", "America", "Seria", "Jordon"]);
</script>

<template>
  <div class="py-5 px-2 position-relative">
    <div>

      <!-- bread crump -->
      <nav
        style="
          --bs-breadcrumb-divider: '>';
          position: sticky;
          top: clamp(34px, 7.7rem, 77px);
          z-index: 100;
        "
        aria-label="breadcrumb"
        class="bg-white pt-4"
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">home</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">your cart</li>
        </ol>
      </nav>

      <!-- no products -->
      <div v-if="cartItems.length <= 0" class="d-flex flex-column">
        <h1 style="font-size: clamp(12px, 4rem, 40px); font-weight: 600">
          your cart
        </h1>
        <p
          class="mt-4 mb-5"
          style="
            font-weight: 500;
            color: #968686;
            font-size: clamp(8px, 1.8rem, 18px);
          "
        >
          free shipping for all orders over {{ totalPriceShipping.toFixed(2) }}!
        </p>
        <p
          class="mt-4 mb-3"
          style="
            font-weight: 500;
            color: #968686;
            font-size: clamp(8px, 1.8rem, 18px);
            align-self: center;
          "
        >
          your cart is empty!
        </p>
        <button
          type="button"
          class="btn btn-outline-secondary rounded-pill my-3 text-capitalize"
          style="
            font-size: clamp(10px, 2rem, 20px);
            font-weight: 500;
            padding: 1.5rem 10rem;
            align-self: center;
          "
          @click="router.push({ name: 'home' })"
        >
          continue shopping
        </button>
      </div>

      <!-- there is products -->
      <div v-if="cartItems.length > 0">

        <!-- progress section -->
        <div
          class="mt-5 bg-white border-bottom border-2"
          
          style="position: sticky; top: clamp(47px ,11.8rem ,118px); z-index: 100"
        >
          <!-- 4rem -->
          <h1 style="font-size: clamp(12px, 3.9rem, 39px); font-weight: 600">
            your cart
          </h1>
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
                style="width: clamp(12px,3rem ,30px); height: clamp(20px ,3rem ,30px);"
                viewBox="0 0 40.55 24"
                :style="`top:-6px; left:calc(${
                  (cartStore.totalPrice / totalPriceShipping) * 100 <= 100
                    ? (cartStore.totalPrice / totalPriceShipping) * 100
                    : 100
                }% - clamp(12px,3rem,30px));transition:0.3s all ease-in-out; fill:${
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
                }%);background-color:${
                  (cartStore.totalPrice / totalPriceShipping) * 100 <= 100
                    ? '#dc3545'
                    : '#3a8e3a'
                }; transition:0.3s all ease-in-out`"
              ></div>
            </div>
            <p class="my-3 align-self-start" style="font-weight: 500;font-size: clamp(6px, 1.8rem, 18px)">
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
        </div>

        <div class="row row-cols-2 m-0" v-if="cartItems.length">

            <!-- left column summary  section              -->
          <div class="col-8 p-0 m-0">
            <div
              style="
                background-color: #fafafa;
                text-transform: uppercase;
                font-weight: 700;
                font-size: clamp(5px,1.6rem ,17px);
                
              "
            >
              <div class="row row-cols-5 m-4 p-3">
                <div class="col-7">product</div>
                <div class="col-1 text-center">price</div>
                <div class="col-2 text-center">quantity</div>
                <div class="col-1 text-center">total</div>
                <div class="col-1 text-center"></div>
              </div>
            </div>

            <div class="border">
              <div
                class="row m-4 p-3"
                v-for="product in cartItems"
                :key="product['id']"
                style="font-weight: 500; font-size:clamp(5px,1.5rem,14px)"
              >
                <div class="col-7 d-flex">
                  <div class="col-4">
                    <img
                      :src="product['thumbnail']"
                      class="m-0" 
                      height="100%"
                      width="100%"
                      alt="product image"
                    />
                  </div>
                  <div>
                    <h5 class="card-title ms-3 px-3" style="font-size:clamp(5px,1.5rem,14px)">
                      ({{ product["title"] }}) sample -
                      {{ product["category"] }} for sale
                    </h5>
                    <p class="card-text ms-3 px-3 my-4" style="font-size:clamp(5px,1.5rem,14px)">
                      <strong>category : </strong> {{ product["category"] }}
                    </p>
                  </div>
                </div>

                <div class="col-1 my-auto text-center">
                  &#x24; {{ product["price"].toFixed(2) }}
                </div>
                <div class="col-2 my-auto text-center">

                  <div class="cart-count cart-product-count my-3 mx-auto">
                    <button
                      type="button"
                      class="btn"
                      @click="
                        product['quantity'] > 1 ? product['quantity']-- : false
                      "
                    >
                      -
                    </button>
                    <input
                      id="reduce-count"
                      name="reduce"
                      type="number"
                      class="border-0"
                      :value="product['quantity']"
                      min="1"
                      :max="product['stock']"
                      disabled
                    />
                    <button
                      type="button"
                      class="btn"
                      @click="
                        product['quantity'] < product['stock']
                          ? product['quantity']++
                          : false
                      "
                    >
                      +
                    </button>
                  </div>

                </div>
                <div class="col-1 my-auto text-center">
                  &#x24;{{
                    (
                      product["quantity"] *
                      Math.ceil(
                        product["price"] -
                          product["price"] *
                            (product["discountPercentage"] / 100)
                      )
                    ).toFixed(2)
                  }}
                </div>
                <div class="col-1 my-auto text-end">
                  <button
                    type="button"
                    class="btn-close fs-4 p-0 m-0"
                    aria-label="Close"
                    @click="deleteItem(product['id'])"
                  ></button>
                </div>
                <hr class="mt-4 mb-0" />
              </div>
            </div>
            <div class="w-100 my-5">
              <p class="fs-5 text-uppercase">
                do you want a gift wrap? <strong>only for $10.00</strong>
                <button
                  type="button"
                  class="btn btn-outline-secondary rounded-pill text-black py-2 px-4 text-uppercase fs-5 ms-2"
                >
                  add
                </button>
              </p>
              <p class="mt-5" style="font-size: clamp(6px, 1.4rem, 14px); font-weight: 500">
                additional comments
              </p>

              <div class="form-floating">
                <textarea
                  class="form-control w-75 rounded-5"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style="height: 10rem"
                ></textarea>
                <label
                  for="floatingTextarea2"
                  style="font-size: clamp(5px, 1.4rem, 14px); color: #968686"
                  >special instruction for seller</label
                >
              </div>

              <div class="d-flex my-4 gap-3">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 179.94 179.96"
                  class="icon icon-shield-check"
                  width="2rem"
                  height="2rem"
                >
                  <defs></defs>
                  <path
                    d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"
                  ></path>
                  <polygon
                    style="fill: #fff !important "
                    points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57"
                  ></polygon>
                </svg>
                <p
                  style="
                    font-size: clamp(6px, 1.4rem, 14px);
                    font-weight: 400;
                    color: #968686;
                  "
                >
                  secure shopping guarantee
                </p>
              </div>
              <img
                src="../assets/images/cart-page-cards.webp"
                alt="cards"
                style="width: 25rem"
              />
            </div>
          </div>




            <!-- right column summary section                                                       -->
          <div class="col-4 px-3 py-4">
            <div class="w-100 h-100">
              <h2
                class="text-uppercase py-3 ps-0 border-black"
            
                style="font-size:clamp(7px ,1.9rem ,20px); font-weight: 700 ;border-bottom: 1px solid gray;"
              >
                order summary
              </h2>

              <div
                class="sub-total d-flex justify-content-between align-items-start mt-5 border-bottom"
              >
                <p class="m-0" style="font-weight: 500;font-size:clamp(6px,1.5rem,19px);">subtotal :</p>
                <strong style="font-size:clamp(6px,1.5rem,19px);">&#x24;{{cartStore.totalPrice }}</strong>
              </div>

              <div class="mt-4 border-bottom">
                <p class="mb-4" style="font-weight: 500;font-size:clamp(6px,1.5rem,19px)">
                  get shipping estimate:
                </p>
                <form>
                  <div class="form-row">
                    <div class="col-12" style="margin-bottom: 2rem">
                      <select
                      style="font-size: clamp(5px,1.5rem,15px);padding: clamp(2px, 1.2rem ,15px) clamp(3px,1rem,30px) ;"
                        class="form-control rounded-pill"
                        id="exampleFormControlSelect1"
                      >
                        <option
                          v-for="(cont,index) in contries"
                          :key="index"
                          style="font-size:clamp(7px,1.5rem,15px)"
                        >
                          {{ cont }}
                        </option>
                      </select>
                    </div>

                    <div class="d-flex mb-4">
                      <div class="col-8 mb-3">
                        <select
                        style="font-size: clamp(5px,1.5rem,15px);padding: clamp(2px, 1.2rem ,15px) clamp(3px,1rem,10px) ; width: 95%;"
                          class="form-control rounded-pill"
                          id="exampleFormControlSelect1"
                        >
                          <option
                            v-for="(region, index) in 5"
                            :key="index"
                            style="font-size:clamp(7px,1.5rem,15px)"
                          >
                            region {{ region }}
                          </option>
                        </select>
                      </div>

                      <div class="col-4 mb-3">
                        <input
                          type="text"
                          style="font-size: clamp(2px,1.2rem,19px);padding: clamp(3px, 1.5rem ,15px) clamp(3px,1rem,10px) ;"
                          class="form-control rounded-pill w-100"
                          id="validationServer02"
                          placeholder="postal code"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="mt-4 border-bottom">
                <p class="mb-4" style="font-weight: 500;font-size:clamp(6px,1.5rem,19px)">coupon code</p>
                <form>
                  <div class="form-row">
                    <div class="col ms-auto mb-3">
                      <input
                        type="text"
                        class="form-control rounded-pill p-4"
                        id="validationServer02"
                        style="font-size: clamp(5px,1.5rem,15px);padding: clamp(2px, 1.2rem ,15px) clamp(3px,1rem,30px) ;"
                        placeholder="enter coupon code"
                        required
                      />
                    </div>
                  </div>
                </form>
                <p
                  class="mt-4 mb-5"
                  style="font-weight: 400; color: #968686;font-size:clamp(5px,1.5rem,19px)"
                >
                  coupon code will be applied on the checkout page
                </p>
              </div>

              <div class="d-flex justify-content-between border-bottom">
                <p class="my-5" style="font-weight: 500;font-size:clamp(6px,1.5rem,19px)">total :</p>
                <strong class="my-5" style="font-size:clamp(6px,1.5rem,19px);" >&#x24;{{cartStore.totalPrice }}</strong>
              </div>

              <div>
                <p
                  class="my-4"
                  style="font-weight: 400; color: #968686; font-size:clamp(5px,1.5rem,19px)"
                >
                  tax included and shipping calculated at checkout
                </p>

                    <label class="d-flex align-items-center gap-3">
                        <input class="form-check-input fs-4" type="checkbox" id="gridCheck" v-model="agree">
                        <span class="checkmark" style="font-size:clamp(5px,1.5rem,19px)">i agree with
                            <a href="#" class="text-black" style="font-size:clamp(5px,1.5rem,19px)">terms & conditions</a></span>
                    </label>

                <button
                  type="button"
                  class="btn btn-info btn-hover my-4 text-capitalize w-100 py-4"
                  style="background-color: #6ca7ea;font-size:clamp(7px , 2rem ,20px);color: white;"
                  :disabled="!agree"
                  @click="router.push({ name: 'check_out' })"
                >
                  proceed to checkout
                </button>
                
                <button
                  type="button"
                  class="btn btn-outline-secondary my-4 py-4 text-capitalize w-100"
                  style="font-size:clamp(7px , 2rem ,20px);"
                  @click="router.push({ name: 'home' })"
                >
                  continue shopping
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
.breadcrumb {
  .breadcrumb-item {
    font-size: clamp(5px, 1.8rem, 18px);
    font-weight: 600;
    a {
      color: #999999;
      text-decoration: none;
    }
  }
  .active {
    color: #4e4e4e !important;
  }
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