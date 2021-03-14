<template>
    <div class="bg-whitesmoke pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center">
        <div class="flex justify-center pt-5 md:pt-14 lg:pt-16 w-11/12 md:w-9/12 lg:w-9/12">
            <hr class="h-2 w-full" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        </div>
        <div class="flex items-center justify-center flex-col bg-whitesmoke  bg-clip-padding">
            <h1 class="title flex justify-center w-11/12 md:w-9/12 lg:w-9/12 text-xl md:text-xl lg:text-3xl bg-white pt-4 md:pt-6 lg:pt-8 font-bold">Our Mission</h1>
            <div class="flex flex-col items-center text-center w-11/12 md:w-9/12 lg:w-9/12 py-4 md:py-6 lg:py-8 px-6 bg-white text-xs md:text-sm lg:text-lg font-light">
                <block-content :blocks="child" v-for="child in missionFirstParagraph" :key="child._id" /> 
                <nuxt-link :to="{ path: `/about` }" tag="button" class="bg-middleYellow text-xs md:text-sm lg:text-lg p-1 md:p-2 lg:p-3 mt-4 md:mt-6 lg:mt-10 w-3/5 md:w-2/5 lg:w-2/5 text-black">Learn More</nuxt-link>
            </div>
        </div>
        <div class="flex justify-center w-11/12 md:w-9/12 lg:w-9/12">
            <hr class="bg-starCommandBlue h-2 w-full" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
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

<style scoped>

</style>