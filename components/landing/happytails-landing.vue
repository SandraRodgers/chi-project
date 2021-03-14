<template>
    <div class="flex flex-col items-center bg-whitesmoke py-6 w-full">
        <!-- desktop -->
        <hr class="flex items-center h-2 w-5/6 bg-clip-padding" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <div class="sm:flex hidden justify-center">
            
            
            <div class="h-96 flex bg-white w-5/6 ">
                <div class="flex flex-col items-center justify-center w-3/6 py-6">
                    <h3 class="title volunteer-heading text-2xl md:text-3xl lg:text-4xl pb-3">Happy Tails</h3>
                    <h5 class="text-xl">PB and Sandra</h5>
                    <p class="p-6 px-11 text-center overflow-scroll text-sm md:text-base lg:text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna. Neque viverra justo nec ultrices dui sapien eget mi proin. Volutpat diam ut venenatis tellus in metus vulputate. Nam libero justo laoreet sit amet cursus sit amet.</p>
                    <nuxt-link :to="{ path: `/happy-tails`}" tag="button" class="text-sm w-3/6 text-davysGrey text-center font-extralight border border-opacity-25 border-davysGrey py-1 px-2 my-2">Read More</nuxt-link>
                </div>
                <div class="flex justify-center items-center w-3/6 py-6">
                <img class="volunteer-pic h-64 md:h-72 lg:h-80" src="~assets/images/MeandPB.jpg"/>
                </div>
            </div>
        </div>
        <hr class="flex items-center h-2 w-5/6 bg-clip-padding" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <!-- mobile -->
        <div class="sm:hidden flex flex-col items-center">
            <div class="flex justify-center w-10/12">
                <hr class="h-2 w-full bg-clip-padding" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
            </div>
        <div class="flex items-center justify-center flex-col bg-whitesmoke bg-clip-padding">
            <h1 class="flex justify-center w-10/12 text-xl bg-white pt-4">Happy Tails</h1>
            <div class="flex justify-center w-10/12 bg-white">
                <img class="volunteer-pic h-40" src="~assets/images/MeandPB.jpg"/>
            </div>
            <p class="flex flex-col items-center text-center w-10/12 py-4 px-6 bg-white text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna. Neque viverra justo nec ultrices dui sapien eget mi proin. Volutpat diam ut venenatis tellus in metus vulputate. Nam libero justo laoreet sit amet cursus sit amet.
            </p>
            <button class="text-sm w-3/6 text-davysGrey font-extralight border border-opacity-25 border-davysGrey my-4 py-1 px-2">Read More</button>
            
        </div>
        <div class="flex justify-center w-10/12">
            <hr class="h-2 w-full bg-clip-padding" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
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