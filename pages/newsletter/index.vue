<template>
    <div class="bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
            <h3 class="title bg-white text-2xl md:text-3xl lg:text-3xl font-bold pt-6 w-11/12 flex justify-center">{{newslettersIntro[0].subtitle}}</h3>
            <div class="w-11/12">
                <div class="flex flex-col justify-content  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
                    <div class="flex px-4 w-6/6 justify-center">
                        <img class="h-56 rounded-md" :src="imageUrlFor(newslettersIntro[0].mainImage)"/>
                    </div>
                    <div class="flex pt-8 px-6 lg:px-16 md:px-10 sm:px-4 w-6/6 justify-center">
                        <block-content :blocks="child" v-for="child in newslettersIntro[0].description" :key="child._id" />
                    </div>
                </div>
            </div>
            <div class="mb-8">
                <ul v-for="newsletter in newsletters" :key="newsletter.id">
                    <li class="font-semibold p-1">
                        <a target="_blank" :href="`${newsletter.newsletterURL}?dl=${newsletter.title}`">{{newsletter.title}}</a>
                    </li>
                </ul>
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
        async asyncData({ $sanity }) { 
          const queryNewsletters = groq`*[_type == 'newsletter']{
  title,
  "newsletterURL": newsletter.asset->url
}`
          const queryNewslettersIntro = groq`*[_type == 'information'&& name=='newsletters-intro']`
          const newsletters = await $sanity.fetch(queryNewsletters)
          const newslettersIntro = await $sanity.fetch(queryNewslettersIntro)

          return { newsletters, newslettersIntro }
        },
        
    }
</script>

<style scoped>

</style>