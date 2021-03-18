<template>
    <div class="lg:h-96 h-48 sm:h-48">
        <!-- banner mobile -->
        <div class="sm:hidden flex justify-content bg-yellow-stars bg-contain">
            <div class=" sm:hidden">
                <img class="banner-image-mobile flex" src="~assets/images/chi_tongueout_outline.png"/>
            </div>
            <div class="banner-text-mobile flex flex-col justify-center items-center">
                <p class="text-center text-2xl text-gray-900 bold p-1 mr-2 mt-4">Saving chihuahuas</p>
                <p class="text-md">for 25 years</p>
            </div>
        </div>
        <!-- banner desktop -->
        <div @mouseenter="hideDropdown" class="h-full bg-yellow-stars bg-contain relative z-0 hidden sm:flex border-b border-opacity-25 border-davysGrey w-screen">
            <!-- <div class="banner-image-container bg-blue-dots-pattern bg-contain flex"> -->
            <img class="relative inset-x-72" src="~assets/images/chi_tongueout_outline.png"/>
            <div class="flex flex-col justify-start">
            <h2 class="h-20 relative left-72 sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl text-gray-900 mt-24 font-semibold">Saving chihuahuas</h2>
            <h2 class="h-20 relative left-72 sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl text-gray-900 font-semibold ml-10">for 25 years</h2>
            </div>
        </div>    
    </div>
    
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        methods: {
            ...mapMutations({
            hideDropdown: 'hide'
            }),  
        }
        
    }
</script>

<style scoped>



</style>