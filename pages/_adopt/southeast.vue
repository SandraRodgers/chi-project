<template>
        <div class="bg-whitesmoke pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <div class="flex items-center justify-center flex-col bg-white w-11/12">
            <h1 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl font-bold bg-white pt-4 md:pt-6 lg:pt-8 ">Southeast Dogs</h1>
            <p class="flex flex-col items-center text-center w-11/12 md:w-11/12 lg:w-11/12 px-2 py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">These dogs are being fostered in Dallas, Texas and must be adopted within the Dallas, North Central Texas or the southern Oklahoma area.</p>
        </div>
    <div 
        class="bg-white items-center md:justify-center lg:justify-center  py-3 flex flex-col md:flex-row lg:flex-row xl:flex-row w-10/12 md:w-10/12 lg:w-11/12">
        
        <!-- <div 
            v-for="chihuahua in chihuahuas" :key="chihuahua._id" class="card w-6/6 md:w-1/6 lg:w-1/6 flex flex-col m-3 border border-opacity-25 border-davysGrey">
            <nuxt-link :to="chihuahua.slug.current" class="flex flex-col items-center">
            <img class="img h-44 object-cover" :src="imageUrlFor(chihuahua.mainImage)"/>
            <div class="flex flex-col items-center card-text bg-white h-28 p-2">
                <p class="card-text-description text-sm px-1"> {{chihuahua.tagline}}</p>
                <div class="flex justify-start items-end h-full w-full">
                    <nuxt-link :to="chihuahua.slug.current" class="text-description text-sm bold pt-2 border-b border-opacity-25 border-davysGrey">
                     View Profile
                    </nuxt-link>
                </div>
            </div>
             </nuxt-link>
        </div> -->
        <div class="flex justify-center w-10/12 md:w-10/12 lg:w-11/12">
        <div class="cards-container items-center  py-3 flex flex-wrap md:flex-row lg:flex-row xl:flex-row w-10/12 md:w-10/12 lg:w-11/12 lg:w-screen">
        <div v-for="(chihuahua) in chihuahuas" :key="chihuahua.id" class="card shadow-md rounded w-72 md:w-64 lg:w-64 sm:w-72  flex flex-col mx-10 m-6">
            <img class="img rounded-t h-40 object-cover" :src="imageUrlFor(chihuahua.mainImage)"/>
            <div class="rounded-b flex flex-col justify-around items-center card-text bg-white h-36">
                <p class="card-text-description text-md sm:text-md md:text-sm lg:text-sm font-normal px-4"> {{
                chihuahua.tagline}}</p>
                <nuxt-link :to="chihuahua.slug.current" tag="button" class="text-sm bg-middleYellow w-5/6 text-black font-semibold py-1 px-2">
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


//     const query = groq`
//   *[_type == 'chihuahua' && region == 'southwest'] {_id, age, chihuahua, description, gender, weight, mainImage}
// `

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
        
    const query = groq`*[_type == 'chihuahua' && region == 'southwest'] {_id, age, chihuahua, description, gender, weight, mainImage, slug, tagline}`
    const chihuahuas = await $sanity.fetch(query)
    console.log({ chihuahuas })
    return { chihuahuas }
  },


    }
</script>

<style scoped>

</style>