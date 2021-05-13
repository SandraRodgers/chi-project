<template>
    <div class="flex flex-col w-full">
        <div class="bg-whitesmoke pt-28 lg:pt-28 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center">
            <hr class="h-2 mt-6 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
            <div class="flex items-center justify-center flex-col bg-white w-11/12">
                <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8">Most In Need</h1>
                <div class="flex flex-col text-center px-4 w-11/12 mb-8">
                    <block-content :blocks="child" v-for="child in mostInNeedIntro[0].description" :key="child._id" />
                    <p>Scroll down to see our most-in-need chihuahuas.</p>
                </div>
            </div>
            <hr class="h-2 w-11/12 mb-6 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
            <div :id="chi.name" v-for="chi in mostInNeed" :key="chi.id" class="flex flex-col items-center">
            <hr class="h-2 w-11/12 mt-10 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
            <div class="bg-white w-11/12 flex flex-col items-center justify-center pt-6">
                <div class="flex flex-col items-center text-center">
                    <h3 class="w-11/12 bg-white text-2xl md:text-3xl lg:text-3xl font-bold py-2">{{chi.name}}</h3>
                    <h4 class="bg-white text-xl md:text-md lg:text-xl font-medium py-4">{{getRegion(chi)}} - {{chi.status}}</h4>
                </div>
                <img class="img rounded object-cover mb-4 h-72" style="filter: contrast(110%);" :src="imageUrlFor(chi.mainImage)"/>
                <div class="flex flex-col items-center px-4 w-8/12 pt-2 shadow-lg" v-if="chi.bestFriends && chi.bestFriends.length > 0">
                    <h4 class="font-semibold">Best Friends:</h4>
                    <div class="best-friends px-4 w-10/12 pt-6">
                        <block-content :blocks="child" v-for="child in chi.bestFriends" :key="child._id" className="bestFriends" />
                    </div>
                </div>
                <div class="story flex flex-col px-4 w-10/12 pt-6 pb-4">
                    <block-content :blocks="child" v-for="child in chi.description" :key="child._id" />
                </div>
                <div v-if="chi.imageTwo" class="flex flex-col sm:flex-col lg:flex-row md:flex-row justify-around my-4 h-full sm:h-full md:h-40 lg:h-40 w-3/6 lg:w-6/6 md:w-6/6 sm:w-3/6 p-4">
                    <img v-if="chi.imageTwo" class="rounded my-2 mx-1 h-full" style="filter: contrast(110%);" :src="imageUrlFor(chi.imageTwo)"/>
                    <img v-if="chi.imageThree" class="rounded my-2 mx-1 h-full" style="filter: contrast(110%);" :src="imageUrlFor(chi.imageThree)"/>
                    <img v-if="chi.imageFour" class="rounded my-2 mx-1 h-full" style="filter: contrast(110%);" :src="imageUrlFor(chi.imageFour)"/>
                    <img v-if="chi.imageFive" class="rounded my-2 mx-1 h-full" style="filter: contrast(110%);" :src="imageUrlFor(chi.imageFive)"/>
                </div>
                <button class="mt-8 sm:mt-8 md:mt-8 lg:mt-12 bg-middleYellow hover:opacity-70 mb-8">
                    <nuxt-link class="bg-middleYellow text-sm md:text-sm lg:text-lg px-8 lg:px-24 md:px-16 sm:px-8 py-2 text-black rounded-sm" :to="{ path: `/donate` }">DONATE</nuxt-link>
                </button>
            </div> 
            <hr class="h-2 w-11/12 mb-6 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
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
    const queryMostInNeed = groq`*[_type == 'mostInNeed' && name!='Intro Section' && current==true]`
    const queryMostInNeedIntro = groq `*[_type == 'mostInNeed' && name=='Intro Section']`
    const mostInNeed = await $sanity.fetch(queryMostInNeed)
    const mostInNeedIntro = await $sanity.fetch(queryMostInNeedIntro)
    return { mostInNeed, mostInNeedIntro}
    }, 
    methods: {
        imageUrlFor(source) {
            return imageBuilder.image(source);
        },
        getRegion(chi) {
            if (chi.region) {
             return chi.region.charAt(0).toUpperCase() + chi.region.slice(1)
            }
        }
    },
    computed: {
        
    }


  }
</script>

<style scoped>

p {
 padding-bottom: 14px;
 
}

b, strong {
    font-weight: 600;
}

.story a {
    color: #13A3DC;
    font-weight: 600;
}

.best-friends {
    height: 20vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: scroll;
    padding: 20px 0;
}

ul {
    padding: 0 20px;
}

</style>