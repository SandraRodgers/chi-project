<template>
   <footer :class="{'hidden': showMobileMenu, 'flex': !showMobileMenu}"
    class="footer bg-black relative text-white mb-8 my-4">
    <!-- desktop -->
    <div>
    <div class="hidden lg:flex md:flex sm:hidden w-full  px-10 lg:px-24 md:px-10">
        <div class="flex w-7/12">
            <div class="flex flex-col w-7/12">
                <span class="font-bold uppercase mb-2">SUPPORT US</span>
                <span class="my-2 max-w-md text-sm mr-24">CRT is a nonprofit, public charity. We have no paid employees. Please consider supporting us through a donation or on a volunteer basis.</span>
                <nuxt-link :to="{ path: `/donate` }" tag="button" class="text-sm bg-middleYellow w-6/12 mt-2 py-1 rounded-sm text-black rounded-sm hover:opacity-70 font-medium">DONATE</nuxt-link>
            </div>
            <div class="flex flex-col w-6/12">
                <span class="font-bold w-full uppercase mb-2">Connect</span>
                <div class="flex items-center w-full">
                    <a href="https://www.facebook.com/CuteChihuahuas" class="my-2 fa-2x"><font-awesome-icon :icon="['fab', 'facebook']"/></a>
                    <a href="https://www.facebook.com/CuteChihuahuas" class="mx-4">Facebook</a>
                </div>
                <div class="flex items-center w-full">
                    <a href="https://www.instagram.com/chirescue_dfw/" class="my-2 fa-2x"><font-awesome-icon :icon="['fab', 'instagram']"/></a >
                    <a href="https://www.instagram.com/chirescue_dfw/" class="mx-4">Instagram</a>
                </div>
            </div>
        </div>
        <div class="flex w-5/12">
            <div class="flex flex-col">
                <span class="font-bold uppercase mb-2">Newsletter</span>
                <span class="my-2 max-w-md text-sm mr-24">Sign up to receive our bi-yearly newsletter:</span>
                <div class="field flex w-12/12 py-2">
                    <label class="flex items-center label w-2/12 text-xs lg:text-base sm:text-xs">Email</label>
              <div class="control w-8/12">
                <input v-model="contactEmail" class="input w-full bg-black border border-white py-1" type="email">
              </div>
            </div>
            </div>
        </div>
    </div>
    <div class="hidden sm:hidden md:flex lg:flex flex-col mt-12 items-center">
        <p class="text-sm font-bold mb-2">
            Copyright &#169; {{getYear}}
        </p>
    </div>
    </div>

    <!-- mobile -->

    <div class="px-8 flex sm:flex md:hidden lg:hidden flex-col">
        <div class="flex flex-col">
            <span class="font-bold uppercase mb-2">SUPPORT US</span>
            <span class="my-2 max-w-md text-sm mr-4">CRT is a nonprofit, public charity. We have no paid employees. Please consider supporting us through a donation or on a volunteer basis.</span>
            <nuxt-link :to="{ path: `/donate` }" tag="button" class="text-sm bg-middleYellow w-6/12 mt-2 py-1 rounded-sm text-black rounded-sm hover:opacity-70 font-medium">DONATE</nuxt-link>
        </div>
        <div class="flex flex-col">
            <span class="font-bold w-full uppercase mt-12 mb-2">Connect</span>
            <div class="flex items-center w-full">
                <a href="https://www.facebook.com/CuteChihuahuas" class="my-2 fa-2x"><font-awesome-icon :icon="['fab', 'facebook']"/></a><span href="https://www.facebook.com/CuteChihuahuas" class="mx-4">Facebook</span>
            </div>
            <div class="flex items-center w-full">
                <a href="https://www.instagram.com/chirescue_dfw/" class="my-2 fa-2x"><font-awesome-icon :icon="['fab', 'instagram']"/></a >
                <a href="https://www.instagram.com/chirescue_dfw/" class="mx-4">Instagram</a>
            </div>
        </div>
        <div class="flex flex-col">
            <span class="font-bold uppercase mb-2 mt-12">Newsletter</span>
            <span class="my-2 max-w-md text-sm mr-24">Sign up to receive our bi-yearly newsletter:</span>
            <div class="field flex w-12/12 py-2">
                <label class="flex items-center label w-3/12 text-xs lg:text-base sm:text-xs font-medium">Email</label>
            <div class="control w-9/12">
            <input v-model="contactEmail" class="input w-full bg-black border border-white py-1" type="email">
            </div>
        </div>
         <div class="flex sm:flex md:hidden lg:hidden flex-col mt-12 items-center">
            <p class="text-sm font-bold mb-2">
                Copyright &#169; {{getYear}}
            </p>
        </div>
        </div>
    </div>
</footer>
</template>

<script>
    export default {
        data(){
            return {
                contactEmail: ''
            }
        },
        computed:{
            getYear(){
                return new Date().getFullYear()
            },
            showMobileMenu () {
                return this.$store.state.showMobileMenu
            }
        }
        
    }
</script>

<style scoped>

</style>