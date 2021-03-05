<template>
    <div 
        class="bg-alibaster pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <div class="flex justify-center pt-5 md:pt-14 lg:pt-16 w-11/12 md:w-11/12 lg:w-11/12">
            <hr class="bg-starCommandBlue h-2 w-7/12">
            <hr class="bg-tan h-2 w-7/12 bg-clip-padding">
        </div>
        <div class="flex items-center justify-center flex-col bg-white w-11/12">
            <h1 class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl bg-white pt-4 md:pt-6 lg:pt-8 ">Southwest Dogs</h1>
            <p class="flex flex-col items-center text-center w-11/12 md:w-11/12 lg:w-11/12 px-2 py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">These dogs are being fostered in Dallas, Texas and must be adopted within the Dallas, North Central Texas or the southern Oklahoma area.</p>
        </div>
    <div 
        class="bg-white items-center md:justify-center lg:justify-center  py-3 flex flex-col md:flex-row lg:flex-row xl:flex-row w-10/12 md:w-10/12 lg:w-11/12">
        
        <div 
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