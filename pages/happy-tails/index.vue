<template>
    <div class="bg-whitesmoke pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <div class="bg-whitesmoke pt-10 lg:pt-10 flex flex-col items-center justify-center w-full">
            <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
            <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
                <h3 class="title bg-white text-2xl md:text-3xl lg:text-3xl font-bold pt-6 w-11/12 flex justify-center">{{happyTailsIntro[0].subtitle}}</h3>
                <div class="w-11/12">
                    <div class="flex flex-col justify-content  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
                        <div class="flex px-4 w-6/6 justify-center">
                            <img class="h-40 rounded-md" :src="imageUrlFor(happyTailsIntro[0].mainImage)"/>
                        </div>
                        <div class="flex pt-8 px-6 lg:px-16 md:px-10 sm:px-4 w-6/6 justify-center text-center">
                            <block-content :blocks="child" v-for="child in happyTailsIntro[0].description" :key="child._id" />
                        </div>
                    </div>
                </div>
            </div>
            <hr class="h-2 w-11/12 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        </div>
        <div v-for="tail in happyTails" :key="tail.id">
            <div class="bg-whitesmoke flex flex-col items-center justify-center w-full">
                <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
                <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
                    <h1 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl bg-white pt-4 md:pt-6 lg:pt-8 font-semibold">{{tail.title}}</h1>
                    <h2 class="flex justify-center text-center lg:text-left sm:text-center w-11/12 md:w-11/12 lg:w-11/12 text-lg sm:text-lg md:text-xl lg:text-xl bg-white pt-4">{{tail.subtitle}}</h2>
                    <div class="flex lg:hidden sm:flex px-4 justify-center">
                        <img class="h-52 py-2 rounded-md" :src="imageUrlFor(tail.mainImage)"/>
                    </div>
                <div class="px-0 md:px-14 sm:px-0 lg:px-14">
                    <div class="flex items-start  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
                        <div class="flex flex-col px-4 w-6/6 sm:6/6 md:w-6/6 lg:w-3/6">
                            <block-content :blocks="child" v-for="child in tail.story" :key="child._id" />
                        </div>
                        <div class="hidden sm:hidden lg:flex px-4 w-3/6 justify-center">
                            <img class="h-80 rounded-md" :src="imageUrlFor(tail.mainImage)"/>
                        </div>
                    </div>
                    </div>
                </div>
                <hr class="h-2 w-11/12 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
            </div>
        </div>
    </div>
</template>

<script>
import groq from 'groq'
import sanity from "../../sanityClient"
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

    export default {
        methods: {
            imageUrlFor(source) {
                return imageBuilder.image(source);
        }},
        
        async asyncData({ $sanity }) {
            
        const queryHappyTails = groq`*[_type == "happyTails" && current==true]`
        const queryHappyTailsIntro = groq`*[_type == 'information'&& name=='happy-tails-intro']`
        const happyTails = await $sanity.fetch(queryHappyTails)
        const happyTailsIntro = await $sanity.fetch(queryHappyTailsIntro)
        return { happyTails, happyTailsIntro }
    },

    }
</script>

<style scoped>
p {
 padding-bottom: 14px;
}

</style>