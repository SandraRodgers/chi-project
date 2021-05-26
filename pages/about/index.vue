<template>
  <div class="bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
    <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
      <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8">{{mission.title}}</h1>
      <div class="flex flex-col px-0 lg:px-4 md:px-2 sm:px-0 w-11/12 text-md lg:text-base text-center">
        <block-content :blocks="child" v-for="child in mission.description" :key="child._id" />
      </div>
        
      <div class="flex items-center justify-center flex-col bg-white w-11/12" v-for="about in aboutUs" :key="about.id">
        <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-2 md:py-4 lg:py-4 sm:py-2">{{about.title}}</h1>
        <img class="h-40 md:h-52 lg:h-80 sm:h-40 mt-4 lg:mt-10 md:mt-6 sm:mt-4 rounded-md" :src="imageUrlFor(about.mainImage)"/>
        <h2 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-xl lg:text-2xl bg-white pt-4 md:pt-6 lg:pt-8 font-bold">{{about.subtitle}}</h2>
        <div class="px-0 md:px-10 lg:px-14">
          <div class="flex items-start  py-4 md:py-6 lg:py-8 bg-white text-sm md:text-base lg:text-base sm:text-sm">
            <div class="flex flex-col px-4 w-6/6">
              <block-content :blocks="child" v-for="child in about.description" :key="child._id" />
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

export default {
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    }
  },
  data() {
    return {
    }
  },

  async asyncData({ $sanity }) {
  const queryAboutUs = groq`*[_type == 'information'&& name=='about']`
  const queryMission = groq`*[_type == 'information'&& name=='mission'][0]`
  const aboutUs = await $sanity.fetch(queryAboutUs)
  const mission = await $sanity.fetch(queryMission)
  return { aboutUs, mission }
  },
}
</script>

<style scoped>

p {
 padding-bottom: 14px;
}

b, strong {
  font-weight: 600;
}

</style>