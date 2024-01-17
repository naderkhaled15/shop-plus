import { defineStore } from "pinia";
import { commerceUrl } from "@/axios";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  rating: number;
  discountPercentage: number;
  price: number;
  images: Array<string>;
  category: string;
  brand: string;
  stock: number;
}

let cache: { [key: string]: Product[] } = {};

export const productModule = defineStore("productModule", {
  state: () => ({
    flashDeals: [] as Product[],
    categoryItems: [] as Product[],
    mobilePhones: [] as Product[],
    skinCare: [] as Product[],
    groceriesProducts: [] as Product[],
    fragrancesProducts: [] as Product[],
    categoryProducts: [] as Product[],
    productDetails: [] as { [key: string]: any },
    searchedProducts: [] as Product[],
    allCategories: [
      {
        title: "smart phones",
        route: "smartphones",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "mens watches",
        route: "mens-watches",
      },
      {
        title: "lighting",
        route: "lighting",
      },
      {
        title: "furniture",
        route: "furniture",
      },
      {
        title: "womens jewellery",
        route: "womens-jewellery",
      },
    ],
  }),
  actions: {
    async getProducts() {
      try {
        const cacheKey = "/products";
        let products;
        if (!cache[cacheKey]) {
          await commerceUrl.get("/products?limit=30").then((res) => {
            cache[cacheKey] = res.data.products;
            products = cache[cacheKey];
            this.flashDeals = products.slice(0, 7);
            this.mobilePhones = products.filter(
              (el) => (el as any).category === "smartphones"
            );
            this.skinCare = products.filter(
              (el) => (el as any).category === "skincare"
            );
            this.categoryItems = products.filter(
              (el) => (el as any).category === "laptops"
            );
            this.groceriesProducts = products.filter(
              (el) => (el as any).category === "groceries"
            );
            this.fragrancesProducts = products.filter(
              (el) => (el as any).category === "fragrances"
            );
          });
        }
      } catch (e: any) {
        console.error("this is error", e.message);
      }
    },
    async getCategoriesProducts(product: string) {
      try {
        const result = await commerceUrl.get(`/products/category/${product}`);
        this.categoryProducts = result.data.products;
      } catch (e: any) {
        if (axios.isCancel(e)) {
          console.error("Request Cancelled", e.message);
        } else {
          console.error("Error", e.message);
        }
      }
    },
    async getProductDetails(product: number) {
      try {
        const result = await commerceUrl.get(`/products/${product}`);
        this.productDetails = result.data;
      } catch (e: any) {
        if (axios.isCancel(e)) {
          console.error("Request Cancelled", e.message);
        } else {
          console.error("Error", e.message);
        }
      }
    },
    async searchForProducts(product: string) {
      try {
        const result = await commerceUrl.get(`/products/search?q=${product}`);
        this.searchedProducts = result.data.products;
      } catch (e: any) {
        if (axios.isCancel(e)) {
          console.error("Request Cancelled", e.message);
        } else {
          console.error("Error", e.message);
        }
      }
    },
  },
  getters: {},
});
