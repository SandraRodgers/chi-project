<template>
<div class="bg-alibaster pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
  <!-- Success Story 1 -->
        <div class="flex justify-center pt-5 md:pt-14 lg:pt-16 w-11/12 md:w-11/12 lg:w-11/12">
            <hr class="bg-starCommandBlue h-2 w-7/12">
            <hr class="bg-tan h-2 w-7/12 bg-clip-padding">
        </div>
        <div class="flex items-center justify-center flex-col bg-white w-11/12">
            <h1 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl bg-white pt-4 md:pt-6 lg:pt-8 ">{{successStories[0].title}}</h1>
            <h2 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-xl bg-white pt-4 md:pt-6 lg:pt-8 ">{{successStories[0].subtitle}}</h2>
           <div class="px-14">
              <div class="flex items-start  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
                <div class="flex flex-col px-4 w-3/6">
                  <block-content :blocks="child" v-for="child in successStories[0].description" :key="child._id" />
                </div>
                <div class="flex px-4 w-3/6 justify-end">
                <img class="h-80" :src="imageUrlFor(successStories[0].mainImage)"/>
                  </div>
                  </div>
              </div>
            </div>
    <div class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12">
        <hr class="bg-starCommandBlue h-2 w-7/12">
        <hr class="bg-tan h-2 w-7/12 bg-clip-padding">
    </div>

    <!-- Success Story 1 -->
    <div class="flex justify-center pt-5 md:pt-14 lg:pt-16 w-11/12 md:w-11/12 lg:w-11/12">
            <hr class="bg-starCommandBlue h-2 w-7/12">
            <hr class="bg-tan h-2 w-7/12 bg-clip-padding">
        </div>
        <div class="flex items-center justify-center flex-col bg-white w-11/12">
            <h1 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl bg-white pt-4 md:pt-6 lg:pt-8 ">{{successStories[1].title}}</h1>
            <h2 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-xl bg-white pt-4 md:pt-6 lg:pt-8 ">{{successStories[1].subtitle}}</h2>
           <div class="px-14">
              <div class="flex items-start  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
                <div class="flex flex-col px-4 w-3/6">
                <img class="h-80" :src="imageUrlFor(successStories[1].mainImage)"/>
                  
                </div>
                <div class="flex flex-col px-4 w-3/6 justify-end">
                <block-content :blocks="child" v-for="child in successStories[1].description" :key="child._id" />
                  </div>
                  </div>
              </div>
            </div>
    <div class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12">
        <hr class="bg-starCommandBlue h-2 w-7/12">
        <hr class="bg-tan h-2 w-7/12 bg-clip-padding">
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
        data() {
    return {
      aboutEntries: [],
    }
  },
    async asyncData({ $sanity }) {
        
    const query = groq`*[_type == "success"]`
    const successStories = await $sanity.fetch(query)
    console.log(successStories)
    return { successStories }
  },


    }
</script>

<style scoped>
p {
 padding-bottom: 14px;
}

</style>