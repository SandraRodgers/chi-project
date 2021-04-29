<template>
        <div class="bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <div class="flex items-center justify-center flex-col bg-white w-11/12 md:w-10/12 lg:w-11/12">
            <h1 class="flex justify-center w-12/12 md:w-12/12 lg:w-12/12 text-xl md:text-xl lg:text-3xl font-bold bg-white pt-4 md:pt-6 lg:pt-8">Southeast Dogs</h1>
            <p class="flex flex-col items-center text-center w-11/12 md:w-11/12 lg:w-11/12 px-2 py-2 sm:py-2 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">North Carolina, South Carolina, Virginia, Tennessee (Nashville Area), Alabama, Georgia and Maryland. Please read the profile as some of the dogs can only be adopted in NC/SC, VA, TN, AL, GA and MD.</p>
            <p class="text-center text-xs md:text-sm lg:text-base px-4 py-2 sm:py-2 md:py-4 lg:py-4"><strong class="mr-2">Contact: </strong><a href="mailto:carolinascoordinator@chihuahua-rescue.com" class="font-medium text-starCommandBlue hover:opacity-80">carolinascoordinator@chihuahua-rescue.com</a> if you have any questions.</p>

        </div>
    <div 
        class="bg-white items-center md:justify-center lg:justify-center flex flex-col md:flex-row lg:flex-row xl:flex-row w-11/12 md:w-10/12 lg:w-11/12">
        <div class="flex justify-center">
        <div class="cards-container items-center md:justify-center lg:justify-center py-3 flex flex-col md:flex-row lg:flex-row xl:flex-row w-5/6 md:w-5/6 sm-5/6 lg:w-screen">
        <div v-for="(chihuahua) in chihuahuas" :key="chihuahua.id" class="card w-11/12 md:w-64 lg:w-64 sm:w-11/12 flex flex-col mx-10 m-6 transition-opacity duration-500 shadow-lg rounded-b">
            <img class="img rounded-t h-52 object-cover" :src="imageUrlFor(chihuahua.mainImage)"/>
            <div class="rounded-b flex flex-col justify-around items-center card-text bg-white h-40">
                <div class="font-bold">{{chihuahua.chihuahua}}</div>
                <p class="card-text-description text-sm font-normal text-center px-4"> {{
                chihuahua.tagline}}</p>
                <nuxt-link v-if="chihuahua.slug.current" :to="{ path: `/adopt/${chihuahua.slug.current}`}" tag="button" class="text-sm bg-middleYellow w-4/6 text-black py-2 px-2 mb-2 rounded-sm hover:opacity-70">
                Read More
                </nuxt-link>
            </div>
        </div>
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
        
    const query = groq`*[_type == 'chihuahua' && region == 'southeast'] {_id, chihuahua, mainImage, slug, tagline}`
    const chihuahuas = await $sanity.fetch(query)
    return { chihuahuas }
  },


    }
</script>

<style scoped>
b, strong {
    font-weight: 600;
}

</style>