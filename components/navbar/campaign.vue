<template>
    <div class="campaign z-40 w-screen relative">
        <!-- desktop -->
        <div class="bg-black flex justify-center opacity-100 text-center sm:hidden md:flex hidden lg:flex flex hidden py-2 z-60 relative">
            <nuxt-link :to="'/'">
                <img :src="imageUrlFor(logo)" class="lg:flex md:hidden hidden mr-4 -mt-8 absolute top-0 h-72 :h-40 -left-0 z-50"/>
            </nuxt-link>
            <nuxt-link :to="{ path: '/donate' }"><div class="flex text-white text-xl">Sponsor a pup's journey to becoming heartworm free! <div class="cursor-pointer transform hover:text-middleYellow transition-all duration-500 font-medium hover:scale-125 hover:font-black ml-6">DONATE NOW</div></div></nuxt-link>
        </div>
        <!-- mobile -->
        <div class="bg-black opacity-90 text-center py-2 flex sm:flex md:hidden lg:hidden z-40 justify-center">
            <p class="font-sans text-white text-sm justify-center">Save Shala. CLICK HERE</p>
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
                setLogo: 'setLogo'
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