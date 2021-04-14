<template>
    <div class="flex justify-center bg-whitesmoke py-6 w-full">
        <!-- desktop -->
        <div class="shadow-lg flex flex-col items-center w-10/12 shadow-2xl rounded-md">
        <hr class="sm:flex hidden items-center h-2 w-full bg-clip-padding rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <div class="sm:flex hidden justify-center">
            <div class="h-full flex bg-white">
                <div class="flex flex-col items-center justify-center w-3/6 pt-6 pb-10">
                    <h3 class="title volunteer-heading text-2xl md:text-3xl lg:text-3xl font-bold pb-3 pt-6">Happy Tails</h3>
                    <h5 class="text-xl font-semibold">PB and Sandra</h5>
                    <p class="py-6 md:py-6 lg:py-8 px-11 text-center overflow-scroll text-sm md:text-lg lg:text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna. Neque viverra justo nec ultrices dui sapien eget mi proin. Volutpat diam ut venenatis tellus in metus vulputate. Nam libero justo laoreet sit amet cursus sit amet.</p>
                    <nuxt-link :to="{ path: `/happy-tails`}" tag="button" class="bg-middleYellow text-sm md:text-sm lg:text-lg p-1 md:p-2 lg:p-3 mt-8 md:mt-6 lg:mt-10 w-3/5 md:w-2/5 lg:w-2/5 text-black rounded-sm hover:opacity-70">Read More</nuxt-link>
                </div>
                <div class="flex justify-center items-center w-3/6 py-6">
                <img class="volunteer-pic h-64 md:h-72 lg:h-80" src="~assets/images/MeandPB.jpg"/>
                </div>
            </div>
        </div>
        <hr class="sm:flex hidden items-center h-2 w-full bg-clip-padding rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        </div>
        <!-- mobile -->
        <div class="sm:hidden flex flex-col items-center">
            <div class="flex justify-center w-11/12">
                <hr class="h-2 w-full bg-clip-padding rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
            </div>
        <div class="flex items-center justify-center flex-col bg-whitesmoke bg-clip-padding">
            <h1 class="flex justify-center w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white pt-8">Happy Tails</h1>
            <div class="flex justify-center w-11/12 py-6 bg-white">
                <img class="volunteer-pic h-40" src="~assets/images/MeandPB.jpg"/>
            </div>
            <p class="flex flex-col items-center text-center w-11/12 py-4 px-6 bg-white text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna. Neque viverra justo nec ultrices dui sapien eget mi proin. Volutpat diam ut venenatis tellus in metus vulputate. Nam libero justo laoreet sit amet cursus sit amet.
            </p>
            <div class="flex justify-center w-11/12 bg-white">
            <nuxt-link :to="{ path: `/happy-tails` }" tag="button" class="bg-middleYellow text-sm md:text-sm lg:text-lg p-1 md:p-2 lg:p-3 mt-8 md:mt-6 lg:mt-10 w-3/5 md:w-2/5 lg:w-2/5 text-black">Read More</nuxt-link>
            </div>
            
        </div>
        <div class="flex sm:hidden justify-center w-11/12 pt-6 bg-white rounded-b-md">
            <hr class="h-2 w-full bg-clip-padding rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>