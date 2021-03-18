<template>
<div class="bg-whitesmoke pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <div class="flex items-center justify-center flex-col bg-white w-11/12">
        <h1 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl bg-white py-4 md:pt-6 lg:pt-8 ">{{mission.title}}</h1>
        <div class="flex flex-col px-4 w-11/12">
                  <block-content :blocks="child" v-for="child in mission.description" :key="child._id" />
                </div>
        </div>
        <div class="flex items-center justify-center flex-col bg-white w-11/12" v-for="about in aboutUs" :key="about.id">
            <h1 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl bg-white pt-4 md:pt-6 lg:pt-8 ">{{about.title}}</h1>
            <img class="h-64 mt-10" :src="imageUrlFor(about.mainImage)"/>
            <h2 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-xl bg-white pt-4 md:pt-6 lg:pt-8 ">{{about.subtitle}}</h2>
           <div class="px-14">
              <div class="flex items-start  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
                <div class="flex flex-col px-4 w-6/6">
                  <block-content :blocks="child" v-for="child in about.description" :key="child._id" />
                </div>
                <!-- <div class="flex px-4 w-2/6 justify-end">
                <img class="h-80" :src="imageUrlFor(about.mainImage)"/>
                  </div> -->
                  </div>
                
              </div>
            </div>
           
     
    
    <hr class="h-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
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
    }
  },
  data() {
    return {
      aboutEntries: [],
    }
  },

  async asyncData({ $sanity }) {
  const queryAboutUs = groq`*[_type == 'information'&& name=='about']`
  const queryMission = groq`*[_type == 'information'&& name=='mission'][0]`
  const aboutUs = await $sanity.fetch(queryAboutUs)
  const mission = await $sanity.fetch(queryMission)
  console.log(aboutUs)
  return { aboutUs, mission }
  },
}
</script>

<style scoped>

p {
 padding-bottom: 14px;
}

</style>