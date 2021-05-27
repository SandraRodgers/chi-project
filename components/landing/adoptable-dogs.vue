<template>
    <div class="w-full my-4 sm:my-4 lg:my-8">
        <div class="w-full flex justify-center">
            <h2
            class="js-show-on-scroll text-center mt-2 font-bold text-4xl md:text-3xl sm:text-2xl lg:text-4xl pt-4 sm:pt-4 lg:pt-2 md:pt-2 mt-2">{{adoptableDogs.title}}</h2>
        </div>
        <div class="flex lg:flex-row mt-4 lg:mt-6 sm:mt-4 h-2/3 lg:h-80 sm:h-2/3 relative">
            <div class="w-1/3 overflow-hidden shadow-lg mx-2 shadow-lg">
                <h2
            class="js-show-on-scroll z-20 ml-4 absolute top-0 mt-2 font-semibold text-xs md:text-3xl lg:text-4xl sm:text-xs pt-4 sm:pt-4 lg:pt-2 md:pt-2 mt-2 text-white">
                <nuxt-link :to="{ path: '/adopt/southeast'}">Southeast</nuxt-link>
            </h2>
           
                <img 
                    :src="imageUrlFor(adoptableDogs.regionOneImage)"
                    class="relative object-cover h-2/3 lg:h-80 sm:h-1/3 mr-2 transition transform hover:scale-125 duration-500 rounded-sm shadow-lg"
                />
                <button class="hidden sm:hidden lg:flex w-2/12 absolute bottom-0 mb-12 ml-4">
                    <nuxt-link class="text-sm font-bold bg-middleYellow w-3/6 sm:w-3/6 lg:w-5/6  md:w-5/6 text-black py-2 px-8 mt-2 rounded-sm hover:opacity-70" :to="{ path: '/adopt/southeast'}">View Dogs</nuxt-link>
                </button>
            </div>
             <div class="w-1/3 overflow-hidden shadow-lg">

                <h2
            class="js-show-on-scroll z-20 ml-4 lg:ml-24 sm:ml-4 absolute top-0 mt-2 font-semibold text-xs md:text-3xl lg:text-4xl sm:text-xs pt-4 sm:pt-4 lg:pt-2 md:pt-2 mt-2 text-white"><nuxt-link :to="{ path: '/adopt/midwest'}">Midwest</nuxt-link></h2>

                <img 
                    :src="imageUrlFor(adoptableDogs.regionTwoImage)"
                    class="relative object-cover h-2/3 lg:h-80 sm:h-1/3 transition transform hover:scale-125 duration-500 rounded-sm shadow-lg"
                />
                <button class="hidden sm:hidden lg:flex w-2/12 absolute bottom-0 mb-12 ml-16">
                    <nuxt-link class="text-sm font-bold bg-middleYellow w-3/6 sm:w-3/6 lg:w-5/6  md:w-5/6 text-black py-2 px-8 mt-2 rounded-sm hover:opacity-70" :to="{ path: '/adopt/southeast'}">View Dogs</nuxt-link>
                </button>
            </div>
            <div class="w-1/3 overflow-hidden shadow-lg mx-2">
            <h2
            class="js-show-on-scroll z-20 ml-4 lg:ml-40 sm:ml-4 absolute top-0 mt-2 font-semibold text-xs md:text-3xl lg:text-4xl sm:text-xs pt-4 sm:pt-4 lg:pt-2 md:pt-2 mt-2 text-white"><nuxt-link :to="{ path: '/adopt/southeast'}">Southwest</nuxt-link></h2>
            <img 
                :src="imageUrlFor(adoptableDogs.regionThreeImage)"
                class="object-cover opacity-2 h-2/3 lg:h-80 sm:h-1/3 transition transform hover:scale-125 duration-500 rounded-sm shadow-lg"
            />
            <button class="hidden sm:hidden lg:flex w-2/12 absolute bottom-0 right-0 mb-12 mr-4">
                <nuxt-link class="text-sm font-bold bg-middleYellow w-3/6 sm:w-3/6 lg:w-5/6  md:w-5/6 text-black py-2 px-8 mt-2 rounded-sm hover:opacity-70" :to="{ path: '/adopt/southwest'}">View Dogs</nuxt-link>
            </button>
            </div>
        </div>
    </div>
</template>

<script>
import sanity from "../../sanityClient"
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

export default {
    props: ['adoptableDogs'],
    methods: {
        imageUrlFor(source) {
            return imageBuilder.image(source);
        },
        // Callback for IntersectionObserver
        callback(entries) {
            entries.forEach(entry => {
            // Is the element in the viewport?
            if (entry.isIntersecting) {
            // Add the fadeIn class:
            entry.target.classList.add("motion-safe:animate-fadeIn");
            } else {
            // Otherwise remove the fadein class
            entry.target.classList.remove("motion-safe:animate-fadeIn");
            }
            });
    }},
    mounted(){
        // Get all the elements you want to show on scroll
        const targets = document.querySelectorAll(".js-show-on-scroll");

        // Set up a new observer
        const observer = new IntersectionObserver(this.callback);

        // Loop through each of the target
        targets.forEach(function(target) {
        // Hide the element
        target.classList.add("opacity-0");

        // Add the element to the watcher
        observer.observe(target);
        });


    }

  
}
</script>

<style scoped>

</style>