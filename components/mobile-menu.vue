<template>
    <div>
        <div 
            :class="{'h-0 transform scale-y-0': !showMobileMenu, 'flex h-screen transfrom scale-y-100 origin-top bg-starCommandBlue': showMobileMenu}" class="relative z-10 transition-transform duration-300 ease-in">
            <div @click="close" class="flex justify-center items-start pt-14 w-16 h-full relative pl-10">
                <div class="">
                    <svg class="stroke-current text-white" width="50" height="25" viewBox="0 0 40 40" stroke-width="5" overflow="visible">
                        <line x2="40" y2="40" />
                        <line x1="40" y2="40" />
                    </svg>
                </div>
            </div>
            <div :class="{'hidden': !showMobileMenu, 'flex': showMobileMenu}" class="flex flex-col pt-14 pl-10 w-60 text-white text-2xl">
                <p class="hover:text-middleYellow cursor-default py-4 border-b border-white pl-4" @click="close">Home</p>
                <nuxt-link :to="{ path: `/` }">
                    <p class="hover:text-middleYellow cursor-default py-4 border-b border-white pl-4" @click="close">Adopt</p>
                </nuxt-link>
                <nuxt-link :to="{ path: `/foster` }">
                    <p class="hover:text-middleYellow cursor-default py-4 border-b border-white pl-4" @click="close">Foster</p>
                </nuxt-link>
                <nuxt-link :to="{ path: `/about` }">
                    <p class="hover:text-middleYellow cursor-default py-4 border-b border-white pl-4" @click="close">About</p>
                </nuxt-link>
                <nuxt-link :to="{ path: `/events` }">
                    <p class="hover:text-middleYellow cursor-default py-4 border-b border-white pl-4" @click="close">Events</p>
                </nuxt-link>
                <nuxt-link :to="{ path: `/contact` }">
                    <p class="hover:text-middleYellow cursor-default py-4 border-b border-white pl-4" @click="close">Contact</p>
                </nuxt-link>
                <nuxt-link :to="{ path: '/donate' }">
                    <p class="hover:text-middleYellow cursor-default py-4 border-b border-white pl-4" @click="close">Donate</p>
                </nuxt-link>
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
            close: 'toggle'
            })  
        },    
    }
</script>

<style scoped>

</style>