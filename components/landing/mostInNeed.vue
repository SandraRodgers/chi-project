<template>
<div class="bg-whitesmoke flex flex-col items-center mt-14">
    <h2 class="title text-black font-bold text-2xl md:text-3xl lg:text-4xl pt-4 sm:pt-4 lg:pt-2 md:pt-2">Chihuahuas most in need</h2>
    
    <div class="cards-container items-center md:justify-center lg:justify-center  py-3 flex flex-col md:flex-row lg:flex-row xl:flex-row w-6/6 md:w-5/6 sm-6/6 lg:w-screen">
        <div v-for="(chi, i) in mostInNeed" :key="chi.id" class="card w-72 md:w-64 lg:w-64 sm:w-72  flex flex-col mx-10 m-6 transition-opacity duration-500 shadow-lg">
            <img class="img rounded-t-md h-40 object-cover" :src="imageUrlFor(chi.mainImage)"/>
            <div class="rounded-b-md flex flex-col justify-around items-center card-text bg-white h-36">
                <p class="card-text-description text-md sm:text-md md:text-sm lg:text-sm"> {{
                chi.tagline}}</p>
                <nuxt-link :to="{ path: '/most-in-need', hash:`${mostInNeed[i].slug.current}`}" tag="button" class="text-sm bg-middleYellow w-5/6 text-black py-2 px-2 rounded hover:opacity-70">
                Read More
                </nuxt-link>
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

.card-text {
    /* height: 150px; */
    
    padding: 20px;
}

.card-text-description {
overflow: scroll;
}



</style>