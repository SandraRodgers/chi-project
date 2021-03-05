<template>
    <div :class="{'hidden': hidePage, 'flex flex-col': !hidePage}" class="pt-24 bg-white">
        <banner/>
        <mission/>
        <most-in-need/>
        <featured-volunteer/>
        <footer/>
    </div>
</template>

<script>
import mission from './mission.vue'
import banner from './banner.vue'
import MostInNeed from './mostInNeed.vue'
import FeaturedVolunteer from './featuredVolunteer.vue'


    export default {
        components: { banner, mission, MostInNeed, FeaturedVolunteer },
        computed: {
            hidePage () {
                return this.$store.state.showMobileMenu
            }
        },  
    }
</script>

<style scoped>

</style>