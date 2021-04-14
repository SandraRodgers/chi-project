<template>
    <div class="bg-whitesmoke pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
    <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
      <div class="flex items-center justify-center flex-col bg-white w-11/12">
            <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl font-bold bg-white pt-4 md:pt-6 lg:pt-8 ">{{chihuahua.chihuahua}}</h1>
            <div class="text-center py-4 w-8/12">
            <h2 class="font-semibold" v-if="chihuahua.region === 'southwest'">
                  This dog is being fostered in Dallas TX and must be adopted within the Dallas, North Central Texas or the southern Oklahoma area.
                </h2>
               <h2 class="font-semibold" v-if="chihuahua.region === 'midwest'">
                  All dogs listed here are adoptable in the following Midwestern states (OH / KY/ IL / MI / WI/ MN/). We do transport! They are spread out throughout the Midwest in foster homes.
                </h2>
                <h2 class="font-semibold" v-if="chihuahua.region === 'southeast'">
                  North Carolina, South Carolina, Virginia, Tennessee (Nashville Area), Alabama, Georgia and Maryland
                </h2>
              </div>
           <div class="px-14">
              <div class="flex items-start  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
                <div class="flex flex-col px-2 w-4/6">
                <div class="flex justify-center py-4">
                <div class="w-4/6">
                <div class="flex py-1">
                  <div class="w-28">Name:</div>
                  <div class="ml-10">{{chihuahua.chihuahua}}</div>
                </div>
                <div class="flex py-1">
                  <div class="w-28">Gender:</div>
                  <div class="ml-10">{{chihuahua.gender}}</div>
                </div>
                <div class="flex py-1">
                  <div class="w-28">Age:</div>
                  <div class="ml-10">{{chihuahua.age}}</div>
                </div>
                <div class="flex py-1">
                  <div class="w-28">Weight:</div>
                  <div class="ml-10">{{chihuahua.weight}}</div>
                </div>
                <div class="flex py-1">
                  <div class="w-28">Dogs:</div>
                  <div class="ml-10"></div>
                </div>
                <div class="flex py-1">
                  <div class="w-28">Cats:</div>
                  <div class="ml-10"></div>
                </div>
                <div class="flex py-1">
                  <div class="w-28">Children:</div>
                  <div class="ml-10"></div>
                </div>
              </div>
              </div>
                  <block-content :blocks="child" v-for="child in chihuahua.description" :key="child._id" />
                  <div class="flex justify-center">
                    <nuxt-link :to="{ path: `/adopt` }" tag="button" class="bg-middleYellow text-sm md:text-sm lg:text-lg p-1 md:p-2 lg:p-3 mt-8 md:mt-6 lg:mt-10 w-3/5 md:w-2/5 lg:w-2/5 text-black hover:opacity-70 rounded-sm">Adoption Application</nuxt-link>
                  </div>
                </div>
                <div class="flex px-4 w-2/6 justify-end">
                <img class="h-80" :src="imageUrlFor(chihuahua.mainImage)"/>
                  </div>
                  </div>
              </div>
            </div>
        <hr class="h-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    </div>
</template>



<script>
import { groq } from '@nuxtjs/sanity'
import sanity from "../../sanityClient"
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

export default {
    methods: {
      imageUrlFor(source) {
        return imageBuilder.image(source);
      },
    },
    
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "chihuahua" && slug.current == "${params.slug}"][0]`
    const chihuahua = await $sanity.fetch(query)
    return { chihuahua }
  }
}
</script>

<style scoped>
p {
 padding-bottom: 14px;
}

</style>