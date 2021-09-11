<template>

<div>
    <!-- Desktop -->
    <div class="main hidden w-screen xl:flex lg:flex sm:hidden md:flex shadow-lg z-10 relative">
        <img class="w-screen"  @mouseenter="hideDropdown" src="@/assets/images/banner_desktop11.png"/>
        <button class="banner-button mt-2 w-6/6 left-2/3 top-3/4 absolute">
            <nuxt-link class="text-lg bg-black px-8 lg:px-10 md:px-12 sm:px-8 py-3 rounded-sm text-white rounded-sm hover:opacity-70 font-medium" :to="{ path: `/donate` }">DONATE TODAY!</nuxt-link>
        </button>
    </div>
    
    <!-- Mobile -->
    <div class="sm:flex flex-col lg:hidden md:hidden xl:hidden bg-opacity-80 z-10 w-screen relative">
        <div class="flex justify-center"> 
            <img class="z-10 shadow-lg w-screen" src="@/assets/images/mobile_banner.png"/>
            <button class="mobile-button -mt-6 w-6/6 top-2/3 absolute z-20">
                <nuxt-link class="text-md  flex bg-black py-2 px-4 rounded-sm text-white rounded-sm hover:opacity-70 font-medium" :to="{ path: `/donate` }">DONATE!</nuxt-link>
        </button>
        </div>  
        
        <div class="flex items-center mt-4">
            <div class="flex flex-col w-1/3 ml-2 d">
                <div class="flex justify-center items-center ">
                    <img class="h-10 my-2" src="~assets/images/chi-sil-4-transparent.png"/>
                </div>
                <div class="flex justify-center font-semibold">EDUCATE</div>

            </div>
           <div class="flex flex-col w-1/3 d">
                <div class="flex justify-center items-center ">
                    <img class="h-10 my-2" src="~assets/images/chi-sil-1-transparent.png"/>
                </div>
                <div class="flex justify-center font-semibold">SAVE</div>

            </div>
            <div class="flex flex-col w-1/3 mr-2 d">
                <div class="flex justify-center items-center ">
                    <img class="h-10 my-2" src="~assets/images/chi-sil-3-transparent.png"/>
                </div>
                <div class="flex justify-center font-semibold">PROTECT</div>

            </div>
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

.mobile-button {
    left: 70%;
}


</style>