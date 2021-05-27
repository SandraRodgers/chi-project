<template>
    <div class="campaign z-40 w-screen relative">
        <!-- desktop -->
        <div class="bg-black flex justify-center opacity-100 text-center sm:hidden md:flex hidden lg:flex flex py-2 z-60 relative">
            <nuxt-link :to="'/'">
                <img :src="imageUrlFor(logo)" class="lg:flex md:flex hidden mr-4 -mt-8 absolute top-0 h-72 md:h-52 lg:h-72 -left-0 z-50"/>
            </nuxt-link>
            <nuxt-link :to="{ path: '/campaign' }">
                <div class="flex text-white text-xl md:text-lg lg:text-xl">Celebrating Our Silver Anniversary - CRT Turns 25 Years Old 
                    <div class="cursor-pointer transform hover:text-middleYellow transition-all duration-500 font-medium hover:scale-125 hover:font-black ml-6">PRESIDENT'S MESSAGE</div>
                </div>
            </nuxt-link>
        </div>
        <!-- mobile -->
        <div class="bg-black opacity-90 text-center py-2 flex sm:flex md:hidden lg:hidden z-40 justify-center">
             <nuxt-link :to="{ path: '/campaign' }">
                <p class="font-sans text-white text-sm justify-center active:text-middleYellow">CRT Turns 25 Years Old. PRESIDENT'S MESSAGE</p>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
    import sanity from "../../sanityClient"
    import imageUrlBuilder from "@sanity/image-url";
    const imageBuilder = imageUrlBuilder(sanity);

    export default {
        computed: {
            logo(){
                return this.$store.state.logo
            }
        },
         methods: {
            ...mapMutations({
                toggleMobileMenu: 'toggle',
                showDropdown: 'show',
                hideDropdown: 'hide',
                }),
            imageUrlFor(source) {
              return imageBuilder.image(source);
            },
        },
        
    }
</script>

<style scoped>
.campaign {
    font-family: "Poppins";
    font-weight: 300;
}

</style>