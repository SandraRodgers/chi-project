<template>

<div>
    <!-- Desktop -->
    <div class="bg-opacity-80 hidden xl:flex lg:flex sm:hidden md:flex shadow-lg">
        <img  @mouseenter="hideDropdown" src="@/assets/images/banner_desktop11.png"/>
    </div>
    <!-- Mobile -->
    <div class="sm:flex flex-col lg:hidden md:hidden xl:hidden bg-opacity-80 z-10 w-screen">
        <div class="flex justify-center"> 
            <img class="w-80 z-10 shadow-lg w-screen" src="@/assets/images/mobile_banner.png"/>
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



</style>