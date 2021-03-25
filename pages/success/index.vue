<template>
  <div class="bg-whitesmoke pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
    <div class="bg-whitesmoke pt-28 lg:pt-40 flex flex-col items-center justify-center w-full">
      <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <h3 class="title bg-white text-2xl md:text-3xl lg:text-3xl font-bold pt-6 w-11/12 flex justify-center">{{successIntro[0].title}}</h3>
        <div class="w-11/12">
          <div class="flex flex-col justify-content  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
            <div class="flex px-4 w-6/6 justify-center">
              <img class="h-40" :src="imageUrlFor(successIntro[0].mainImage)"/>
            </div>
            <div class="flex pt-8 px-16 w-6/6 justify-center">
              <block-content :blocks="child" v-for="child in successIntro[0].description" :key="child._id" />
            </div>
          </div>
        </div>

      <hr class="h-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    </div>
  <!-- Success Story 1 -->
        <div class="bg-whitesmoke pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
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
    <hr class="h-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">

    <!-- Success Story 1 -->
    <div class="bg-whitesmoke pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
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
    <hr class="h-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
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
        data() {
    return {
      aboutEntries: [],
    }
  },
    async asyncData({ $sanity }) {
        
    const querySuccessStories = groq`*[_type == "success"]`
    const querySuccessIntro = groq`*[_type == 'information'&& name=='success-stories-intro']`
    const successStories = await $sanity.fetch(querySuccessStories)
    const successIntro = await $sanity.fetch(querySuccessIntro)
    console.log(successIntro[0])
    return { successStories, successIntro }
  },


    }
</script>

<style scoped>
p {
 padding-bottom: 14px;
}

</style>