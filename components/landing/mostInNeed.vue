<template>
<div class="bg-whitesmoke flex flex-col items-center w-screen">
    <h2 class="title text-black font-bold text-2xl md:text-3xl lg:text-4xl py-2">Chihuahuas most in need</h2>
    
    <div class="cards-container items-center md:justify-center lg:justify-center  py-3 flex flex-col md:flex-row lg:flex-row xl:flex-row w-4/6 md:w-5/6 sm-6/6 lg:w-screen">
        
        <div v-for="chi in mostInNeed" :key="chi.id" class="card w-6/6 md:w-2/6 lg:w-1/6 flex flex-col mx-10 m-6 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <img class="img rounded-t h-40 object-cover" style="filter: contrast(110%);" :src="imageUrlFor(chi.mainImage)"/>
            <div class="rounded-b flex flex-col justify-around items-center card-text bg-white h-36">
                <p class="card-text-description text-sm"> {{
                chi.tagline}}</p>
                <button class="text-sm bg-middleYellow w-5/6 text-black font-extralight py-1 px-2">Read More</button>
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
        mounted(){
            console.log(this.mostInNeed)
        }
        
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