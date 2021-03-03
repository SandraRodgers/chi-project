<template>
    <div class="bg-alibaster py-6">
        <!-- desktop -->
        <div class="sm:flex hidden justify-center">
            
            <div class="volunteer-card h-96 flex bg-white w-5/6 ">
                <div class="flex flex-col items-center justify-center border-t-8 border-b-8 border-tan w-3/6 py-6">
                    <h3 class="volunteer-heading text-2xl md:text-3xl lg:text-4xl pb-3">Featured Volunteer</h3>
                    <h5 class="text-xl">Name</h5>
                    <p class="p-6 px-11 text-center overflow-scroll text-sm md:text-base lg:text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna. Neque viverra justo nec ultrices dui sapien eget mi proin. Volutpat diam ut venenatis tellus in metus vulputate. Nam libero justo laoreet sit amet cursus sit amet.</p>
                </div>
                <div class="flex justify-center items-center border-t-8 border-b-8 border-starCommandBlue w-3/6 py-6">
                <img class="volunteer-pic h-64 md:h-72 lg:h-80" src="~assets/images/MeandPB.jpg"/>
                </div>
            </div>
            
        </div>
        <!-- mobile -->
        <div class="sm:hidden flex flex-col items-center">
            <div class="flex justify-center w-10/12">
            <hr class="bg-starCommandBlue h-2 w-10/12">
            <hr class="bg-tan h-2 w-10/12 bg-clip-padding">
        </div>
        <div class="flex items-center justify-center flex-col bg-alibaster bg-clip-padding">
            <h1 class="flex justify-center w-10/12 text-xl bg-white pt-4">Featured Volunteer</h1>
            <div class="flex justify-center w-10/12 bg-white">
                <img class="volunteer-pic h-40" src="~assets/images/MeandPB.jpg"/>
            </div>
            <p class="flex flex-col items-center text-center w-10/12 py-4 px-6 bg-white text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna. Neque viverra justo nec ultrices dui sapien eget mi proin. Volutpat diam ut venenatis tellus in metus vulputate. Nam libero justo laoreet sit amet cursus sit amet.
            </p>
            
        </div>
        <div class="flex justify-center w-10/12">
            <hr class="bg-starCommandBlue h-2 w-10/12">
            <hr class="bg-tan h-2 w-10/12 bg-clip-padding">
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.volunteer-pic h-80 {
    /* height: 350px; */
    /* object-fit: cover; */  
}

.volunteer-card h-96 {
    /* height: 400px */
}
</style>