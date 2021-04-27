<template>
    <div class="flex flex-col w-full">
        <div class="bg-whitesmoke pt-28 lg:pt-28 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center">
            <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
            <div class="flex items-center justify-center flex-col bg-white w-11/12">
                <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8">Most In Need</h1>
                <div class="flex flex-col px-4 w-11/12 mb-8">
                    <block-content :blocks="child" v-for="child in mostInNeedIntro[0].description" :key="child._id" />
                    <p>Scroll down to see our most-in-need chihuahuas.</p>
                </div>
            </div>
            <hr class="h-2 w-11/12 mb-10" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
            <div :id="chi.name" v-for="chi in mostInNeed" :key="chi.id" class="flex flex-col items-center">
            <hr class="h-2 w-11/12 mt-10" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
            <div class="bg-white w-11/12 flex flex-col items-center justify-center pt-10">
                <div class="flex justify-center">
                    <h3 class="w-11/12 bg-white text-2xl md:text-3xl lg:text-3xl font-bold py-4">{{chi.name}}</h3>
                </div>
                <img class="img rounded-t h-40 object-cover" style="filter: contrast(110%);" :src="imageUrlFor(chi.mainImage)"/>
                <div class="flex flex-col px-4 w-10/12 py-6">
                    <block-content :blocks="child" v-for="child in chi.description" :key="child._id" />
                </div>
            </div> 
            <hr class="h-2 w-11/12 mb-10" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
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
    async asyncData({ $sanity }) {

    //Most in Need
    const queryMostInNeed = groq`*[_type == 'mostInNeed' && name!='Intro Section']`
    const queryMostInNeedIntro = groq `*[_type == 'mostInNeed' && name=='Intro Section']`
    const mostInNeed = await $sanity.fetch(queryMostInNeed)
    const mostInNeedIntro = await $sanity.fetch(queryMostInNeedIntro)
    return { mostInNeed, mostInNeedIntro}
    }, 
    methods: {
        imageUrlFor(source) {
            return imageBuilder.image(source);
        },
    },


  }
</script>

<style scoped>

p {
 padding-bottom: 14px;
 font-size: 18px;
}

b, strong {
    font-weight: 600;
}
</style>