<template>
    <div class="w-screen">

        <!-- Mobile Menu Closed -->
        <div class="bg-transparent z-20 lg:hidden md:hidden w-screen">
            <div class="w-screen flex items-end bg-white h-16">
                <div @click="toggleMobileMenu" class="flex pl-4 pb-5 w-16 relative">
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
                        <img :src="imageUrlFor(logo)" class="sm:h-28 md:h-56 h-28 relative top-10 md:top-36 sm:top-10"/>
                    </nuxt-link>
                </span>
            </div>
        </div>

        <!-- Desktop -->
        <div class="w-full nav-main pb-4 z-30 lg:flex md:flex flex-row-reverse content-around py-2 pr-8 bg-white hidden" @mouseenter="hideDropdown">
            <div class="flex space-x-20 lg:space-x-20 md:space-x-12 text-lg lg:text-lg md:text-md">
                <nuxt-link :to="{ path: `/about` }">
                    <p class="cursor-pointer z-20 relative cursor-pointer transform bg-white hover:text-starCommandBlue transition-all duration-500 font-medium hover:scale-125">ABOUT</p>
                </nuxt-link>
                <nuxt-link :to="{ path: `/events` }">
                    <p class="cursor-pointer transform bg-white hover:text-starCommandBlue transition-all duration-500 font-medium hover:scale-125">EVENTS</p>
                </nuxt-link>
                <nuxt-link :to="{ path: `/policies` }">
                    <p class="cursor-pointer transform bg-white hover:text-starCommandBlue transition-all duration-500 font-medium hover:scale-125">POLICIES</p>
                </nuxt-link>
                <nuxt-link :to="{ path: `/success` }">
                    <p class="cursor-pointer transform bg-white hover:text-starCommandBlue transition-all duration-500 font-medium hover:scale-125">SUCCESS STORIES</p>
                </nuxt-link>
                <nuxt-link :to="{ path: `/contact` }">
                    <p class="cursor-pointer transform bg-white hover:text-starCommandBlue transition-all duration-500 font-medium hover:scale-125">CONTACT US</p>
                </nuxt-link>
            </div>
        </div>
    </div>
    
</template>

<script>
    import { mapMutations, mapState } from 'vuex';
    import sanity from "../../sanityClient"
    import imageUrlBuilder from "@sanity/image-url";
    const imageBuilder = imageUrlBuilder(sanity);

    export default {
        props: ['assetId'],
        computed: {
            showMobileMenu() {
                return this.$store.state.showMobileMenu
            },
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

</style>