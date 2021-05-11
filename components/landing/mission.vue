<template>
    <div class="bg-whitesmoke flex justify-center">
        <div class="flex flex-col mt-5 md:mt-10 lg:mt-10 w-11/12 lg:w-9/12 md:w-9/12 sm:w-11/12 shadow-2xl rounded-md">
        <div class="flex bg-white rounded-md" >
            <hr class="bg-starCommandBlue h-2 w-full rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        </div>
        <div class="flex justify-center flex-col bg-clip-padding py-0 sm:py-0 large:py-4 md:py-4 bg-white px-6">
            <h1 class="title flex justify-center text-2xl md:text-3xl lg:text-3xl bg-white pt-4 md:pt-6 lg:pt-8 sm:pt-4 font-bold">Our Mission</h1>
            <div class="flex flex-col items-center text-center py-6 md:py-6 lg:py-8 bg-white text-sm lg:text-lg md:text:lg sm:text-sm font-light">
                <block-content :blocks="child" v-for="child in missionFirstParagraph" :key="child._id" /> 
                <nuxt-link :to="{ path: `/about` }" tag="button" class="bg-middleYellow text-sm md:text-sm lg:text-lg p-1 md:p-2 lg:p-3 mt-4 md:mt-6 lg:mt-6 w-3/5 md:w-2/5 lg:w-5/12 text-black rounded-sm hover:opacity-70">Read More</nuxt-link>
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
        props: ['missionFirstParagraph'],
        methods: {
            imageUrlFor(source) {
                return imageBuilder.image(source);
            },
        },
        mounted(){

        }
    }
</script>