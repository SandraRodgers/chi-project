<template>
    <div class="bg-middleYellow bg-opacity-80 pt-4">
        <div class="xl:h-80 lg:h-80 md:h-80 sm:h-80 h-80 w-screen px-4 sm:px-4 md:px-10 lg:px-0">
            <div @mouseenter="hideDropdown" class="bg-banner3a bg-cover sm:bg-cover md:bg-cover pr-10 lg:bg-cover bg-no-repeat h-full w-full bg-center lg:bg-cover border-b border-opacity-25 border-davysGrey">
            </div>    
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        methods: {
            ...mapMutations({
            hideDropdown: 'hide'
            }),  
        }
        
    }
</script>

<style scoped>



</style>