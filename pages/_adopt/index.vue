<template>
    <div class="bg-whitesmoke pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
    <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
      <div class="flex items-center justify-center flex-col bg-white w-11/12">
        <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8">{{adoptInfo[0].subtitle}}</h1>
          <div class="flex flex-col px-4 w-11/12 bg-white">
            <div class="text-center py-4">
              <h2 class="font-semibold">If you would like to adopt a CRT rescue, please read the following information.</h2>
            </div>
            <block-content :blocks="child" v-for="child in adoptInfo[0].description" :key="child._id" />
          </div>
        </div>
        <hr class="h-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    </div>
</template>

<script>
import groq from 'groq'

    export default {
        //Queries
        async asyncData({ $sanity }) {
            const queryAdopt = groq`*[_type == 'information'&& name=='adoption-process']`
            const adoptInfo = await $sanity.fetch(queryAdopt)
            return { adoptInfo }
        },
        
    }
</script>

<style scoped>
p {
 padding-bottom: 14px;
 font-size: 18px;
}
</style>