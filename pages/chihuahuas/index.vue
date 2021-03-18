<template>
  <div class="bg-alibaster pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
    <h1>Chihuahuas</h1>
    <div class="chihuahuas">
      <div v-for="chihuahua in chihuahuas" :key="chihuahua._id">
        <div
        :name="chihuahua.name"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 mx-2"
        border-variant="warning"
        >
        <img :src="imageUrlFor(chihuahua.mainImage)"/>
          <div>
            <block-content :blocks="chihuahua.description[0]" :key="chihuahua.description[0]._id" v-if="chihuahua.description.length" />
          </div>
          <nuxt-link :to="chihuahua.slug.current"><button>Read more</button></nuxt-link>
        </div>     
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
            }
        },
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
        
    const query = groq`*[_type == "chihuahua"]`
    const chihuahuas = await $sanity.fetch(query)
    if(chihuahuas) {
      return { chihuahuas }
    }
  },


    }
</script>

<style scoped>


</style>