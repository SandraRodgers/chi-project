<template>
    <div>
        <div 
        :class="{'hidden': !showMobileMenu, 'flex': showMobileMenu}" class="relative h-screen bg-starCommandBlue z-10">
            <div @click="close" class="flex justify-center items-start pt-14 w-16 h-full relative">
                    <div class="">
                        <svg class="stroke-current text-white" width="50" height="25" viewBox="0 0 40 40" stroke-width="5" overflow="visible">
                            <line x2="40" y2="40" />
                            <line x1="40" y2="40" />
                        </svg>
                        
                    </div>
                    
                </div>
                <div class="flex flex-col pt-24 w-60 text-white text-2xl">
                        <p class="hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4">Home</p>
                        <p class="hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4">Adopt</p>
                        <p class="hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4">Foster</p>
                        <p class="hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4">Sponsor</p>
                        <p class="hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4">Volunteer</p>
                        <p class="hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4">Donate</p>
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