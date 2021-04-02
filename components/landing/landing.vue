<template>
    <div :class="{'hidden': hidePage, 'flex flex-col': !hidePage}" class="pt-24 bg-whitesmoke w-full">
        <banner/>
        <mission 
            :missionFirstParagraph="missionFirstParagraph"
        />
        <most-in-need
            :mostInNeed="mostInNeed"
        />
        <happytails-landing/>
        <our-impact
            :ourImpact="ourImpact" 
        />
        <footer/>
    </div>
</template>

<script>
import mission from './mission.vue'
import banner from './banner.vue'
import MostInNeed from './mostInNeed.vue'
import happytailsLanding from './happytails-landing'
import ourImpact from './our-impact'

    export default {
        components: { banner, mission, MostInNeed, happytailsLanding, ourImpact },
        props: ['missionFirstParagraph', 'ourImpact', 'logo', 'mostInNeed'],
        computed: {
            hidePage () {
                return this.$store.state.showMobileMenu
            }
        }, 
        mounted(){
            this.$store.commit('setLogo', this.logo)
        } 
    }
</script>

<style scoped>

</style>