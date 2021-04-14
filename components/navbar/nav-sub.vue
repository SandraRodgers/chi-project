<template>
    <div class="nav-sub absolute z-20">
        <div class="pt-20 lg:flex flex-row-reverse content-around bg-transparent right-0 hidden fixed mt-6">
            <div class="relative z-20 flex space-x-12 text-lg bg-carolinaBlue  px-4 py-2 text-white rounded-b-lg border-b border-opacity-25 border-starCommandBlue">
                <p @mouseenter="showDropdown" class="hover:text-black cursor-pointer">
                    CHIHUAHUAS 
                    <span class="icon"><font-awesome-icon :icon="['fas', 'caret-down']"/></span>
                </p>
                <nuxt-link :to="{ path: `/foster` }">
                    <p @mouseenter="hideDropdown" class="hover:text-black cursor-pointer">FOSTER</p>
                </nuxt-link>
                <nuxt-link :to="{ path: `/adopt` }">
                <p class="hover:text-black cursor-pointer">ADOPT</p>
                    </nuxt-link>
                <p class="hover:text-black cursor-pointer">NEWSLETTER</p>
                <nuxt-link :to="{ path: '/donate' }">
                    <p class="hover:text-black cursor-pointer">DONATE</p>
                </nuxt-link>
            </div>
            <div :class="{'opacity-0 invisible': !this.$store.state.showAdoptDropdown, 'flex flex-col opacity-100 visible': this.$store.state.showAdoptDropdown}" 
            class="absolute z-10 bg-white top-28 left-0 border border-opacity-25 border-davysGrey transition-opacity duration-300 ease-in">
                <div @mouseleave="hideDropdown" class="pt-8 pb-2 px-4">
                <nuxt-link :to="{ path: `/adopt/midwest` }" @click.native="hideDropdown"><p class="py-2 border-b">MIDWEST DOGS</p></nuxt-link>
                <nuxt-link :to="{ path: `/adopt/southeast` }" @click.native="hideDropdown"><p class="py-2 border-b">SOUTHEAST DOGS</p></nuxt-link>
                <nuxt-link :to="{ path: `/adopt/southwest` }" @click.native="hideDropdown"><p class="py-2 border-b">SOUTHWEST DOGS</p></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        data(){
            return {
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