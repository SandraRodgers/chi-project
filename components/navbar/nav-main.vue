<template>
    <div>

        <!-- Mobile Menu Closed -->
        <div class="fixed w-full bg-transparent z-0 lg:hidden">
            <div class="absolute h-24 w-full flex items-end bg-white">
                <div @click="toggleMobileMenu" class="flex justify-center items-end pb-5 w-16 h-full relative">
                    <div class="">
                        <svg class="fill-current text-black" viewBox="0 0 100 70" width="40" height="20">
                            <rect width="70" height="10"></rect>
                            <rect y="30" width="70" height="10"></rect>
                            <rect y="60" width="70" height="10"></rect>
                        </svg>
                    </div>
                </div>
            <span class="fixed flex lg:justify-start justify-center w-full bg-transparent">
                <nuxt-link :to="'/'">
                    <img src="~assets/images/logo-transparent.png" class="h-16 bg-white rounded absolute mx-auto text-center inset-x-0 -top-14 border border-opacity-25 border-davysGrey"/>
                </nuxt-link>
            </span>
            </div>
        </div>
        <!-- Desktop -->
        <div class="nav-main pt-14 fixed z-30 lg:flex flex-row-reverse content-around border-b border-opacity-25 border-davysGrey py-5 pr-8 bg-white hidden w-full font-semibold" @mouseenter="hideDropdown">
            <div class="flex space-x-20 text-lg">
                <nuxt-link :to="'/'">
                    <img src="~assets/images/logo-transparent.png" class="mr-4 mt-4 absolute left-0 top-0 bg-white h-32 shadow-lg rounded-xl left-12 top-6 z-20 mt-2 border border-opacity-25 border-davysGrey"/>
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
    import { mapMutations } from 'vuex'
    export default {
        computed: {
            showMobileMenu () {
                return this.$store.state.showMobileMenu
            }
        },
        methods: {
          ...mapMutations({
            toggleMobileMenu: 'toggle',
            showDropdown: 'show',
            hideDropdown: 'hide'
            })  
        },    
    }
</script>

<style scoped>

</style>