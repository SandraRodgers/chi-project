<template>
    <div :class="{'hidden': hidePage, 'flex flex-col': !hidePage}" class="pt-24 bg-whitesmoke">
        <banner/>
        <mission 
            :missionFirstParagraph="missionFirstParagraph"
        />
        <most-in-need/>
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

    export default {
        components: { banner, mission, MostInNeed },
        props: ['missionFirstParagraph', 'ourImpact', 'logo'],
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