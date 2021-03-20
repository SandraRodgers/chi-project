<template>
<div class="bg-whitesmoke pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center">
    <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    <div class="flex justify-center bg-white w-11/12">Most In Need</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna. Neque viverra justo nec ultrices dui sapien eget mi proin. Volutpat diam ut venenatis tellus in metus vulputate. Nam libero justo laoreet sit amet cursus sit amet.</p>
     <hr class="h-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
     <div v-for="chi in mostInNeed" :key="chi.id" class="flex flex-col items-center">
        <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <div class="bg-white w-11/12 flex flex-col items-center justify-center pt-10">
            <div class="flex justify-center">
            <div class="w-11/12 bg-white">{{chi.name}}</div>
            </div>
            <img class="img rounded-t h-40 object-cover" style="filter: contrast(110%);" :src="imageUrlFor(chi.mainImage)"/>
            <div class="flex flex-col px-4 w-4/6">
             <block-content :blocks="child" v-for="child in chi.description" :key="child._id" />
                  </div>
             
        </div>
       
            
        

    <hr class="h-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    </div>
    </div>
</template>

<script>
import groq from 'groq'
import sanity from "../../sanityClient"
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

    export default {
    async asyncData({ $sanity }) {


    //Most in Need
    const queryMostInNeed = groq`*[_type == 'mostInNeed']`
    const mostInNeed = await $sanity.fetch(queryMostInNeed)
    


    return { mostInNeed}
    }, 
    methods: {
        imageUrlFor(source) {
            return imageBuilder.image(source);
        },
    },


  }
</script>

<style scoped>

</style>