<template>
    <div class="bg-whitesmoke pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <div class="bg-whitesmoke pt-10 lg:pt-10 flex flex-col items-center justify-center w-full">
            <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
            <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
                <h3 class="title bg-white text-2xl md:text-3xl lg:text-3xl font-bold pt-6 w-11/12 flex justify-center">{{successIntro[0].subtitle}}</h3>
                <div class="w-11/12">
                    <div class="flex flex-col justify-content  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
                        <div class="flex px-4 w-6/6 justify-center">
                            <img class="h-28 lg:h-40 md:h-36 sm:h-28 rounded-md" :src="imageUrlFor(successIntro[0].mainImage)"/>
                        </div>
                        <div class="flex pt-8 px-6 lg:px-16 md:px-10 sm:px-4 w-6/6 justify-center text-center flex-col">
                            <block-content :blocks="child" v-for="child in successIntro[0].description" :key="child._id" />
                        </div>
                    </div>
                </div>
            </div>
            <hr class="h-2 w-11/12 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        </div>
        <div v-for="story in successStories" :key="story.id">
            <div class="bg-whitesmoke flex flex-col items-center justify-center w-full">
                <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
                <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
                    <h1 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl bg-white pt-4 md:pt-6 lg:pt-8 font-semibold">{{story.title}}</h1>
                    <h2 class="flex justify-center text-center lg:text-left sm:text-center w-11/12 md:w-11/12 lg:w-11/12 text-lg sm:text-lg md:text-xl lg:text-xl bg-white pt-4">{{story.subtitle}}</h2>
                    <div class="flex lg:hidden sm:flex px-4 justify-center">
                        <img class="h-52 py-2 rounded-md" :src="imageUrlFor(story.mainImage)"/>
                    </div>
                <div class="px-0 md:px-14 sm:px-0 lg:px-14">
                    <div class="flex items-start  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
                        <div class="flex flex-col px-4 w-6/6 sm:6/6 md:w-6/6 lg:w-3/6">
                            <block-content :blocks="child" v-for="child in story.description" :key="child._id" />
                        </div>
                        <div class="flex flex-col hidden sm:hidden lg:flex px-4 w-3/6 items-center">
                            <div>
                                <img class="h-72 rounded-md" :src="imageUrlFor(story.mainImage)"/>
                            </div>
                            <div>
                                <img v-if="story.imageTwo" class="h-72 rounded-md my-4" style="filter: contrast(110%);" :src="imageUrlFor(story.imageTwo)"/>
                            </div>
                            <div>
                                <img v-if="story.imageThree" class="h-72 rounded-md my-4" style="filter: contrast(110%);" :src="imageUrlFor(story.imageThree)"/>
                            </div>
                            <div>
                                <img v-if="story.imageFour" class="h-72 rounded-md my-4" style="filter: contrast(110%);" :src="imageUrlFor(story.imageFour)"/>
                            </div>
                            <div>
                                <img v-if="story.imageFive" class="h-72 rounded-md my-4" style="filter: contrast(110%);" :src="imageUrlFor(story.imageFive)"/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <hr class="h-2 w-11/12 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
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
        
        async asyncData({ $sanity }) { 
          const querySuccessStories = groq`*[_type == "success" && current==true]`
          const querySuccessIntro = groq`*[_type == 'information'&& name=='success-stories-intro']`
          const successStories = await $sanity.fetch(querySuccessStories)
          const successIntro = await $sanity.fetch(querySuccessIntro)
          return { successStories, successIntro }
        },

    }
</script>

<style scoped>
p {
 padding-bottom: 14px;
}

</style>