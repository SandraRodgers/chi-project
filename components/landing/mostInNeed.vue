<template>
    <div class="bg-whitesmoke flex flex-col items-center mt-14">
        <nuxt-link :to="{ path: '/most-in-need'}">
            <h2 class="title text-black font-bold text-2xl md:text-3xl lg:text-4xl pt-4 sm:pt-4 lg:pt-2 md:pt-2 hover:opacity-70">Chihuahuas most in need</h2>
        </nuxt-link>
        <div class="items-center md:justify-center lg:justify-center py-3 flex flex-col md:flex-row lg:flex-row xl:flex-row w-6/6 md:w-5/6 sm-6/6 lg:w-screen p-5">
            <div v-for="(chi, i) in mostInNeed" :key="chi.id" class="w-72 md:w-64 lg:w-64 sm:w-72 flex flex-col mx-10 m-6 transition-opacity duration-500 shadow-lg">
                <img class="img rounded-t-md h-40 object-cover" :src="imageUrlFor(chi.mainImage)"/>
                <div class="rounded-b-md flex flex-col justify-around items-center bg-white h-40">
                    <p class="font-bold py-2">{{chi.name}}</p>
                    <p class="text-sm sm:text-sm md:text-sm lg:text-sm py-2 px-8 text-center"> {{
                    chi.tagline}}</p>
                    <button class="text-sm bg-middleYellow w-3/6 sm:w-3/6 lg:w-5/6  md:w-5/6 text-black my-4 py-2 px-2 mt-2 rounded-sm hover:opacity-70">
                        <nuxt-link :to="{ path: '/most-in-need', hash:`${mostInNeed[i].name}`}"></nuxt-link>
                            Read More
                        </nuxt-link>
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sanity from "../../sanityClient"
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);
    export default {
        props: ['mostInNeed'],
        methods: {
            imageUrlFor(source) {
                return imageBuilder.image(source);
            },
        },
        
    }
</script>

<style scoped>

.p-20 {
    padding: 20px;
}


</style>