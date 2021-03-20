<template>
    <div class="flex flex-col items-center justify-center mt-8 bg-blue-dots bg-cover bg-no-repeat bg-blend-lighten bg-clip-padding">

        <div class="flex items-center justify-center flex-col w-full bg-carolinaBlue bg-opacity-50" >
            <h1 class="title text-black flex justify-center w-full md:w-9/12 lg:w-9/12 text-xl md:text-xl lg:text-4xl pt-8 md:pt-4 lg:pt-8 font-extrabold">Our Impact</h1>
            <div class="flex justify-center items-center text-center md:w-9/12 lg:w-9/12 md:py-6 lg:py-8 text-xs md:text-med lg:text-lg font-light">
                <div class="flex flex-col items-center w-full">
                    <div class="flex w-full">
                        <div class="flex flex-col items-center px-4 mx-4 w-3/4">
                            <img @mouseenter="displayFactOne" class="h-24 lg:h-48 sm:h-24 lg:w-48 w-24 sm:w-24 rounded-full object-cover border-4 border-white hover:shadow-2xl hover:scale-90 transform transition-transform  ease-in" :src="imageUrlFor(ourImpact.impactOneImage)"/>
                            <h3 class="text-black lg:text-2xl sm:text-lg text-lg font-semibold my-4">{{ourImpact.impactOneHeader}}</h3>
                            <h4
                            :class="{'opacity-0': !factIsVisibleOne, 'flex flex-col opacity-100': factIsVisibleOne}" class="text-black font-light my-4 lg:text-med text-xs sm:text-xs transition-opacity duration-1000 ease-in">{{ourImpact.impactOneFact}}</h4>
                        </div>
                        <div class="flex flex-col items-center px-4 mx-4 w-3/4">
                            <img @mouseenter="displayFactTwo" class="h-24 lg:h-48 sm:h-24 lg:w-48 w-24 sm:w-24  rounded-full object-cover border-4 border-white hover:shadow-2xl hover:scale-90 transform transition-transform  ease-in" :src="imageUrlFor(ourImpact.impactTwoImage)"/>
                            <h3 class="text-black lg:text-2xl sm:text-lg text-lg font-semibold my-4">{{ourImpact.impactTwoHeader}}</h3>
                            <h4
                            :class="{'opacity-0': !factIsVisibleTwo, 'flex flex-col opacity-100': factIsVisibleTwo}" class="text-black font-light my-4 lg:text-med text-xs sm:text-xs transition-opacity duration-1000 ease-in">{{ourImpact.impactTwoFact}}</h4>
                        </div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex flex-col items-center px-4 mx-4 w-3/4">
                            <img @mouseenter="displayFactThree" class="h-24 lg:h-48 sm:h-24 lg:w-48 w-24 sm:w-24 rounded-full object-cover border-4 border-white hover:shadow-2xl hover:scale-90 transform transition-transform  ease-in" :src="imageUrlFor(ourImpact.impactThreeImage)"/>
                            <h3 class="text-black lg:text-2xl sm:text-lg text-lg font-semibold my-4">{{ourImpact.impactThreeHeader}}</h3>
                            <h4
                            :class="{'opacity-0': !factIsVisibleThree, 'flex flex-col opacity-100': factIsVisibleThree}" class="text-black font-light my-4 lg:text-med text-xs sm:text-xs transition-opacity duration-1000 ease-in">{{ourImpact.impactThreeFact}}</h4>
                        </div>
                        <div class="flex flex-col items-center px-4 mx-4 w-3/4">
                            <img @mouseenter="displayFactFour" class="h-24 lg:h-48 sm:h-24 lg:w-48 w-24 sm:w-24 rounded-full object-cover border-4 border-white hover:shadow-2xl hover:scale-90 transform transition-transform ease-in" :src="imageUrlFor(ourImpact.impactFourImage)"/>
                            <h3 class="text-black lg:text-2xl sm:text-lg text-lg font-semibold my-4">{{ourImpact.impactFourHeader}}</h3>
                            <h4
                            :class="{'opacity-0': !factIsVisibleFour, 'flex flex-col opacity-100': factIsVisibleFour}" class="text-black font-light lg:text-med text-xs sm:text-xs transition-opacity duration-1000 ease-in">{{ourImpact.impactFourFact}}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import sanity from "../../sanityClient"
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

export default {
    props: ['ourImpact'],
    data(){
        return {
            factIsVisibleOne: false,
            factIsVisibleTwo: false,
            factIsVisibleThree: false,
            factIsVisibleFour: false,

        }
    },
    methods: {
        imageUrlFor(source) {
            return imageBuilder.image(source);
        },
        displayFactOne(){
            this.factIsVisibleOne = true;
        },
        displayFactTwo(){
            this.factIsVisibleTwo = true;
        },
        displayFactThree(){
            this.factIsVisibleThree = true;
        },
        displayFactFour(){
            this.factIsVisibleFour = true;
        },

},

    }
</script>

<style scoped>

</style>