<script setup lang="ts">
import { ref } from 'vue';

    const categories=ref([
        {
            title:"mobile phones",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263"
        },
        {
            title:"laptops & tablets",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209"
        },
        {
            title:"televisions",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137"
        },
        {
            title:"PCs & accessories",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840"
        },
        {
            title:"audio & video",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791"
        },
        {
            title:"gaming & accessories",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635"
        },
        {
            title:"home appliances",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882"
        },
        {
            title:"kitchen appliances",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410"
        },
        {
            title:"cameras",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515"
        },
        {
            title:"consumables",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964"
        },
        {
            title:"smart homes",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828"
        },
        {
            title:"accessories",
            image:"https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367"
        },
    ])
</script>

<template>
    <div>
        <div class="cyber-banner">
            <img src="../../assets/images/cyber-banner.webp" alt="cyber banner" width="100%" height="100%" class="pt-5">
        </div>

        <div class="top-categories">

            <div class="category">
                <h3 class="cat-head ms-auto">top categories</h3>
            </div>

            <div class="row row-cols-4 row-cols-sm-6 px-0 m-0">
                <div class="card border-0 text-center p-3" v-for="categ in categories" :key="categ.title">
                    <div class="card-body" >
                        <div class="overflow-hidden rounded-circle">
                            <img :src="categ['image']" alt="category img" class="category-img" width="100%" height="100%">
                        </div>
                        <h5 class="card-title">{{categ['title']}}</h5>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss">
    .top-categories {
        .category {
            padding: 8rem 2rem 3rem;
            display: flex;
            justify-content: center;
            .cat-head {
                font-weight: 800;
                font-size: clamp(15px , 4rem , 35px);
                margin-right: auto;
            }
            p{
                margin-left: auto;
                .link-secondary {
                    justify-self: flex-end;
                    font-size: 2rem;
                    font-weight: 500;
                    &:hover {
                        text-decoration: none;
                    }
                } 
            }   

        }
        .card {
            .category-img {
                &:hover{
            -webkit-transform: scale(1.08);
            -ms-transform: scale(1.08);
            transform: scale(1.08);
            transition: 1.5s ease;
        }
            }
            .card-title {
                font-size: clamp(7px , 2.5rem , 24px) !important;
                margin: 2.5rem 0 3.5rem;
                font-weight: 600;
            }
        }
    }
</style>