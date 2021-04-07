<template>
    <!-- <div>
<p>Copyright &#169; {{getYear}}</p>
    </div> -->
   <footer :class="{'hidden': showMobileMenu, 'flex': !showMobileMenu}"
    class="footer bg-black opacity-90 relative pt-1  text-white lg:px-56 px-10">
    <div class="">

        <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 flex flex-col md:flex-row md:justify-around lg:justify-between">
                <div class="flex flex-col px-0 md:px-10 lg:px-10">
                    <span class="font-bold uppercase mb-2">Footer header 1</span>
                    <span class="my-2 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </span>
                
                </div>
                <!-- <div class="flex flex-col">
                    <span class="font-bold uppercase mt-4 md:mt-0 mb-2">Footer header 2</span>
                    <span class="my-2"><a href="#" class="text-md hover:text-blue-500">link 1</a></span>
                    <span class="my-2"><a href="#" class=" text-md hover:text-blue-500">link 1</a></span>
                    <span class="my-2"><a href="#" class="text-md hover:text-blue-500">link 1</a></span>
                </div> -->
                <div class="flex flex-col lg:ml-10 md:ml-10 sm:ml-0 ml-0 lg:items-center sm:items-start items-start w-3/6 md:4/6 sm:w-6/6 lg:w-6/6 w-6/6">
                    <span class="font-bold w-full uppercase mt-8 md:mt-0 mb-2">Connect</span>
                    <div class="flex items-center w-full">
                        <span class="my-2 fa-3x"><font-awesome-icon :icon="['fab', 'facebook']"/></span><span class="mx-4">Facebook</span>
                    </div>
                    <div class="flex items-center w-full">
                        <span class="my-2 fa-3x"><font-awesome-icon :icon="['fab', 'instagram']"/></span >
                        <span class="mx-4">Instagram</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="mt-8  flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
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