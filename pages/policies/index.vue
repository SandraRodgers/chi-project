<template>
    <div class="bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
    <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
      <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
        <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8">{{policy[0].title}}</h1>
          <div class="flex flex-col px-4 w-11/12 bg-white">
            <div class="py-4 text-md lg:text-base">
              <block-content :blocks="child" v-for="child in policy[0].description" :key="child._id" />
            </div>
          </div>
        </div>
        <hr class="h-2 w-11/12 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    </div>
</template>

<script>
import groq from 'groq'
    export default {
        async asyncData({ $sanity }) {
            const queryPolicy = groq`*[_type == 'information'&& name=='policies']`
            const policy = await $sanity.fetch(queryPolicy)
            return { policy }
  },
        
    }
</script>

<style scoped>

p {
 padding-bottom: 14px;
}

h3 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 16px;
    margin-top: 24px;
}

b, strong {
  font-weight: 600;
}

</style>