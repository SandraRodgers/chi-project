<template>
    <div class="nav-sub absolute z-20">
        <div class="pt-24 lg:flex flex-row-reverse content-around bg-transparent right-0 hidden fixed mt-2">
            <div class="relative z-20 flex space-x-12 text-lg bg-starCommandBlue  px-4 text-white rounded-b-lg border-b border-opacity-25 border-davysGrey">
                <p @mouseenter="showDropdown" class="hover:text-blueJeans cursor-default">ADOPT <span class="icon"><font-awesome-icon :icon="['fas', 'caret-down']"/></span></p>
                <p class="hover:text-blueJeans cursor-default">FOSTER</p>
                <p class="hover:text-blueJeans cursor-default">SPONSOR</p>
                <p class="hover:text-blueJeans cursor-default">VOLUNTEER</p>
                <p class="hover:text-blueJeans cursor-default">DONATE</p>
            </div>
            <div 
            :class="{'opacity-0': !this.$store.state.showAdoptDropdown, 'flex flex-col opacity-100': this.$store.state.showAdoptDropdown}" 
            class="absolute z-10 bg-white top-28 left-0 border border-opacity-25 border-davysGrey transition-opacity duration-300 ease-in">
                <div @mouseleave="hideDropdown" class="pt-8 pb-2 px-4">
                <p class="py-2 border-b">MIDWEST DOGS</p>
                <p class="py-2 border-b cursor-pointer">SOUTHEAST DOGS</p>
                <nuxt-link :to="{ path: `/adopt/southwest` }"><p class="py-2 border-b">SOUTHWEST DOGS</p></nuxt-link>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        // computed: {
        //     showMobileMenu () {
        //         return this.$store.state.showMobileMenu
        //     },
        //     showAdoptDropdown () {
        //         return this.$store.state.showAdoptDropdown
        //     }
        // },
        data(){
            return {
                isOpen: false
            }
        },
        methods: {
            ...mapMutations({
            toggleMobileMenu: 'toggle',
            showDropdown: 'show',
            hideDropdown: 'hide'
            }),  
        }
    }
</script>

<style scoped>

.nav-sub {
    font-family: "Poppins";
    font-weight: 400;
}

</style>