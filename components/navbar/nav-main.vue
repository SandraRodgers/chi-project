<template>
    <div class="w-screen">

        <!-- Mobile Menu Closed -->
        <div class="fixed bg-transparent z-20 lg:hidden w-screen">
            <div class="w-screen absolute h-24 flex items-end bg-white">
                <div @click="toggleMobileMenu" class="flex justify-center items-end pl-4 pb-5 w-16 h-full relative">
                    <div class="">
                        <svg class="fill-current text-black" viewBox="0 0 100 70" width="40" height="20">
                            <rect width="90" height="10"></rect>
                            <rect y="30" width="90" height="10"></rect>
                            <rect y="60" width="90" height="10"></rect>
                        </svg>
                    </div>
                </div>
                <span class="w-screen flex justify-center bg-transparent mr-16 z-40">
                    <nuxt-link :to="'/'">
                        <img :src="imageUrlFor(setLogo)" class="sm:h-40 md:h-56 h-40 relative top-20 md:top-36 sm:top-20"/>
                    </nuxt-link>
                </span>
            </div>
        </div>

        <!-- Desktop -->
        <div class="w-full nav-main pt-14 fixed z-30 lg:flex flex-row-reverse content-around border-b border-opacity-25 border-davysGrey py-5 pr-8 bg-white hidden  font-semibold" @mouseenter="hideDropdown">
            <div class="flex space-x-20 text-lg">
                <nuxt-link :to="'/'">
                    <img :src="imageUrlFor(setLogo)" class="mr-4 mt-4 absolute top-0 h-72 left-6 z-20"/>
                </nuxt-link>
                <nuxt-link :to="{ path: `/about` }"><p class="cursor-pointer z-50 relative">ABOUT</p></nuxt-link>
                <nuxt-link :to="{ path: `/events` }"><p>EVENTS</p></nuxt-link>
                <nuxt-link :to="{ path: `/regions` }"><p>REGIONS</p></nuxt-link>
                <nuxt-link :to="{ path: `/success` }"><p>SUCCESS STORIES</p></nuxt-link>
                <nuxt-link :to="{ path: `/contact` }"><p>CONTACT US</p></nuxt-link>
            </div>
        </div>
    </div>
    
</template>

<script>
    import { mapMutations } from 'vuex';
    import sanity from "../../sanityClient"
    import imageUrlBuilder from "@sanity/image-url";
    const imageBuilder = imageUrlBuilder(sanity);

    export default {
        props: ['assetId'],
        computed: {
            showMobileMenu() {
                return this.$store.state.showMobileMenu
            },
            // setLogo:{
            //     get(){
            //         if(this.$store && this. $store.state.logo && this.$store.state.logo[0] && this.$store.state.logo[0].imageFile){
            //             return this.$store.state.logo[0].imageFile
            //     }
            //     },
            //     set(logo){
            //         if(logo){
            //             this.$store.state.logo = logo
            //         }
                    
            //     }
            // },
            setLogo() {
                if(this.$store && this. $store.state.logo && this.$store.state.logo[0] && this.$store.state.logo[0].imageFile){
                    return this.$store.state.logo[0].imageFile
                }
            },
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

</style>