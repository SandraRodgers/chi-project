<template>
  <div class="h-12/12 w-screen bg-white flex justify-center items-center">
    <div class="mt-24 mb-16 flex flex-col items-center justify-around h-56">
        <h1 class="text-2xl extrabold" v-if="error.statusCode === 404">Oops! Page not found</h1>
        <h1 class="text-2xl extrabold" v-else>An error occurred</h1>
        <div class="flex justify-center items-center ">
            <img class="h-24 my-2" src="~assets/images/chi-sil-1-transparent.png"/>
        </div>
        <nuxt-link class="text-xl extrabold text-starCommandBlue hover:opacity-50" to="/">Return to Home</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'

  }
</script>

<style>

</style>