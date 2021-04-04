<template>
    <div class="campaign fixed z-40 w-full">
        <!-- desktop -->
        <div class="bg-black flex justify-center opacity-90 text-center py-2 sm:flex hidden">
            <nuxt-link :to="'/'">
                <img :src="imageUrlFor(logo)" class="lg:flex md:hidden hidden mr-4 -mt-8 absolute top-0 h-72 -left-0 z-50"/>
            </nuxt-link>
            <p class="text-white text-xl">Save Shala. Be her Christmas miracle. CLICK HERE to donate now!</p>
        </div>
        <!-- mobile -->
        <div class="bg-black opacity-90 text-center py-2 sm:hidden">
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