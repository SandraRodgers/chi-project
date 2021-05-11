<template>
    <div class="bg-whitesmoke flex justify-center">
        <div class="flex flex-col mt-5 md:mt-10 lg:mt-10 w-11/12 lg:w-9/12 md:w-9/12 sm:w-11/12 shadow-2xl rounded-md">
        <div class="flex bg-white rounded-md">
            <hr class="bg-starCommandBlue h-2 w-full rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        </div>
        <div class="flex justify-center flex-col bg-clip-padding py-0 bg-white px-0 lg:px-4 md:px-4 sm:px-1">
            <div class="flex flex-col items-center">
                <h1 class="title flex justify-center text-2xl md:text-3xl lg:text-3xl bg-white pt-4 md:pt-6 lg:pt-8 sm:pt-4 font-bold">Happy Tails</h1>
                <h2 class="py-2 lg:py-4 sm:py-2 font-semibold text-center">Read about our most recent adoptions!</h2>
            </div>
            <div class="flex flex-col items-center py-2 md:py-6 lg:py-4 sm:py-2 bg-white text-xs lg:text-base md:text:lg sm:text-xs font-light">
                <div class="flex w-12/12 lg:w-11/12 sm:w-12/12">
                    <div class="flex w-full px-3 lg:px-6 md:px-6 sm:px-2">
                        <block-content :blocks="child" v-for="child in happyTailsLanding.teaser" :key="child._id" /> 
                    </div>
                    <div class="flex w-full mx-2 lg:mx-4 sm:mx-2 h-40 sm:h-40 lg:h-52 justify-center">
                        <img class="rounded-md" :src="imageUrlFor(happyTailsLanding.mainImage)"/>
                    </div>
                </div>
                
                <nuxt-link :to="{ path: `/happy-tails` }" tag="button" class="bg-middleYellow text-sm md:text-sm lg:text-lg p-1 md:p-2 lg:p-3 mt-4 md:mt-6 lg:mt-6 w-3/5 md:w-2/5 lg:w-5/12 text-black rounded-sm hover:opacity-70">Read More</nuxt-link>
            </div>
        </div>
        <div class="flex justify-center pt-0 sm:pt-0 lg:pt-6 md:pt-6 bg-white rounded-b-md">
            <hr class="bg-starCommandBlue h-2 w-full rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        </div>
        </div>
    </div>
</template>

<script>
import sanity from "../../sanityClient"
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

    export default {
        props: ['happyTailsLanding'],
        methods: {
            imageUrlFor(source) {
                return imageBuilder.image(source);
            },
        },
        mounted(){

        }
    }
</script>