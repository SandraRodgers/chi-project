<template>
   <footer :class="{'hidden': showMobileMenu, 'flex': !showMobileMenu}"
    class="footer flex justify-center bg-black relative text-white mb-8 my-4">
    <!-- desktop -->
    <div class="">
    <div class="hidden lg:flex md:flex  sm:hidden w-full  px-10 lg:px-24 md:px-10">
        <div class="flex w-7/12">
            <div class="flex flex-col w-7/12">
                <span class="font-bold uppercase mb-2">SUPPORT US</span>
                <span class="my-2 max-w-md text-sm mr-24">CRT is a nonprofit, public charity. We have no paid employees. Please consider supporting us through a donation or on a volunteer basis.</span>
                <button class="mt-2 w-3/6">
                    <nuxt-link class="text-sm bg-middleYellow px-8 lg:px-14 md:px-14 sm:px-8 py-1 rounded-sm text-black rounded-sm hover:opacity-70 font-medium" :to="{ path: `/donate` }">DONATE</nuxt-link>
                </button>
                
            </div>
            <div class="flex flex-col w-6/12">
                <span class="font-bold w-full uppercase mb-2">Connect</span>
                <div class="flex w-full my-2">
                    <div class="mb-2 fa-2x"><font-awesome-icon :icon="['fab', 'facebook']"/></div>
                    <div class="flex flex-col">
                        <a href="https://www.facebook.com/CRTMidwest/" class="mx-4 my-2 hover:text-carolinaBlue">Midwest</a>
                        <a href="https://www.facebook.com/CuteChihuahuas" class="mx-4 my-2 hover:text-carolinaBlue">Southwest (DFW)</a>
                        <a href="https://www.facebook.com/CRTSoutheasternRegion/" class="mx-4 my-2 hover:text-carolinaBlue">Southeast</a>
                    </div>
                </div>
                <div class="flex items-center w-full">
                    <a href="https://www.instagram.com/chirescue_dfw/" class="my-2 fa-2x"><font-awesome-icon :icon="['fab', 'instagram']"/></a >
                    <a href="https://www.instagram.com/chirescue_dfw/" class="mx-4 hover:text-carolinaBlue">Instagram</a>
                </div>
            </div>
        </div>
        <div class="flex w-5/12">
            <div class="flex flex-col">
                <span class="font-bold uppercase mb-2">Newsletter</span>
                <span class="my-2 max-w-md text-sm mr-24">Sign up to receive our bi-yearly newsletter:</span>
                <div class="field flex w-12/12 py-2">
                    <label class="flex items-center label w-2/12 text-xs lg:text-base sm:text-xs">Email</label>
              <div class="control w-8/12 flex">
                <input v-model="contactEmail" class="input w-full bg-black border border-white py-1" type="email">
                <button @click="sendEmailAddress" class="text-sm bg-black border border-white w-6/12 mt-2 py-1 rounded-sm text-white rounded-sm hover:bg-middleYellow hover:text-black hover:border-middleYellow font-medium ml-4">SUBMIT</button>
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
            <button class="mt-2 w-3/6">
                <nuxt-link class="text-sm bg-middleYellow px-8 lg:px-24 md:px-16 sm:px-8 py-1 rounded-sm text-black rounded-sm hover:opacity-70 font-medium" :to="{ path: `/donate` }">DONATE</nuxt-link>
            </button>
        </div>
        <div class="flex flex-col">
            <span class="font-bold w-full uppercase mt-12 mb-2">Connect</span>
            <div class="flex w-full">
                <a href="https://www.facebook.com/CuteChihuahuas" class="mb-2 fa-2x"><font-awesome-icon :icon="['fab', 'facebook']"/></a><div class="flex flex-col">
                        <a href="https://www.facebook.com/CRTMidwest/" class="mx-4 my-2 hover:text-carolinaBlue">Midwest</a>
                        <a href="https://www.facebook.com/CuteChihuahuas" class="mx-4 my-2 hover:text-carolinaBlue">Southwest (DFW)</a>
                        <a href="https://www.facebook.com/CRTSoutheasternRegion/" class="mx-4 my-2 hover:text-carolinaBlue">Southeast</a>
                    </div>
            </div>
            <div class="flex items-center w-full">
                <a href="https://www.instagram.com/chirescue_dfw/" class="my-2 fa-2x"><font-awesome-icon :icon="['fab', 'instagram']"/></a >
                <a href="https://www.instagram.com/chirescue_dfw/" class="mx-4 hover:text-carolinaBlue">Instagram</a>
            </div>
        </div>
        <div class="flex flex-col">
            <span class="font-bold uppercase mb-2 mt-12">Newsletter</span>
            <span class="my-2 max-w-md text-sm mr-24">Sign up to receive our bi-yearly newsletter:</span>
            <div class="field flex w-12/12 py-2">
                <label class="flex items-center label w-3/12 text-xs lg:text-base sm:text-xs font-medium">Email</label>
            <div class="control w-9/12 flex">
            <input v-model="contactEmail" class="input w-full bg-black border border-white py-1" type="email">
            <button @click="sendEmailAddress" class="text-sm bg-black border border-white w-6/12 mt-2 py-1 rounded-sm text-white rounded-sm hover:bg-middleYellow hover:text-black hover:border-middleYellow font-medium ml-4">SUBMIT</button>
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
                contactEmail: '',
                messages: [],
            }
        },
        computed:{
            getYear(){
                return new Date().getFullYear()
            },
            showMobileMenu () {
                return this.$store.state.showMobileMenu
            }
        },
        methods: {
            sendEmailAddress () {
                this.messages = []
                this.triggerSendEmailAddressToGoogleSheets()
                },
            resetForm () {
                this.contactEmail = []
            },
            async triggerSendEmailAddressToGoogleSheets () {
                try {
                    const response = await this.$axios.$post('/.netlify/functions/google-sheets-newsletters', this.contactEmail)
                    this.resetForm()
                    this.messages.push({ type: 'success', text: response })
                    this.contactEmail = '';
                } catch (error) {
                    this.messages.push({ type: 'error', text: error.response.data })
                }
            } 
        }
    }
</script>

<style scoped>

</style>