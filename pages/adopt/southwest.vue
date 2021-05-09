<template>
    <div class="bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <div class="flex items-center justify-center flex-col bg-white w-11/12 md:w-10/12 lg:w-11/12">
            <h1 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl font-bold bg-white pt-4 md:pt-6 lg:pt-8 ">Southwest Dogs</h1>
            <p class="flex flex-col items-center text-center w-11/12 md:w-11/12 lg:w-11/12 px-2 py-2 sm:py-2 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">These dogs are being fostered in Dallas, Texas and must be adopted within the Dallas, North Central Texas or the southern Oklahoma area.</p>
            <p class="flex flex-col items-center text-center w-11/12 md:w-11/12 lg:w-11/12 px-2 py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">After filling out an adoption form, please email<a href="mailto:DFWCoordinator@chihuahua-rescue.com" class="font-medium text-starCommandBlue hover:opacity-80">DFWCoordinator@chihuahua-rescue.com</a></p>
            <div 
                class="bg-white items-center md:justify-center lg:justify-center flex flex-col md:flex-row lg:flex-row xl:flex-row w-12/12 md:w-10/12 lg:w-11/12">
                <div class="flex justify-center w-5/6 lg:w-screen md:w-screen sm:w-5/6">
                <div class="cards-container justify-center items-center py-3 flex flex-col flex-wrap md:flex-row lg:flex-row xl:flex-row w-full md:w-5/6 sm-5/6 lg:w-full">
                    <div v-for="(chihuahua) in chihuahuas" :key="chihuahua.id" class="card w-11/12 md:w-64 lg:w-64 sm:w-11/12 flex flex-col mx-4 my-4 transition-opacity duration-500 shadow-lg rounded-b">
                        <img class="img rounded-t h-52 object-cover" :src="imageUrlFor(chihuahua.mainImage)"/>
                        <div class="rounded-b flex flex-col justify-around items-center card-text bg-white h-40">
                        <p class="card-text-description text-sm font-normal text-center px-4 font-semibold"> {{
                        chihuahua.chihuahua}}</p>
                        <p class="card-text-description text-sm font-normal text-center px-4"> {{
                        chihuahua.tagline}}</p>
                        <nuxt-link v-if="chihuahua.slug.current" :to="{ path: `/adopt/${chihuahua.slug.current}` }" tag="button" class="text-sm bg-middleYellow w-4/6 text-black py-2 mb-2 px-2 rounded-sm hover:opacity-70">
                            Read More
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <hr class="h-2 w-11/12 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    </div>
</template>

<script>
import groq from 'groq'
import sanity from "../../sanityClient"
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);


//     const query = groq`
//   *[_type == 'chihuahua' && region == 'southwest'] {_id, age, chihuahua, description, gender, weight, mainImage}
// `

export default {
    methods: {
        imageUrlFor(source) {
            return imageBuilder.image(source);
    }},
    data() {
        return {
            chihuahuas: [],
            serializers: {
                types: {
                chihuahua: 'div'
                }
            }
        }
    },
    async asyncData({ $sanity }) {
        const query = groq`*[_type == 'chihuahua' && region == 'southwest'] {_id, age, chihuahua, description, gender, weight, mainImage, slug, tagline} | order(order asc)`
        const chihuahuas = await $sanity.fetch(query)
        return { chihuahuas }
    },



    }
</script>

<style scoped>

</style>