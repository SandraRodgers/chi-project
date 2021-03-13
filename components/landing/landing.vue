<template>
    <div :class="{'hidden': hidePage, 'flex flex-col': !hidePage}" class="pt-24 bg-white">
        <banner/>
        <mission :missionFirstParagraph="missionFirstParagraph"/>
        <most-in-need/>
        <happytails-landing/>
        <footer/>
    </div>
</template>

<script>
import mission from './mission.vue'
import banner from './banner.vue'
import MostInNeed from './mostInNeed.vue'


    export default {
        components: { banner, mission, MostInNeed },
        props: ['missionFirstParagraph'],
        computed: {
            hidePage () {
                return this.$store.state.showMobileMenu
            }
        },  
    }
</script>

<style scoped>

</style>