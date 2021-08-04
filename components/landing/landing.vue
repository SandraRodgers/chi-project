<template>
    <div :class="{'hidden': hidePage, 'flex flex-col': !hidePage}" class="relative z-10 top-0 bg-whitesmoke w-screen relative -top-12">
        <banner/>
        <banner-sub/>
        <adoptable-dogs
            :adoptableDogs="adoptableDogs"
        />
        <mission 
            :missionFirstParagraph="missionFirstParagraph"
        />
        <shop-to-support></shop-to-support>
        <happytails-landing :happyTailsLanding="happyTailsLanding"/>
        <most-in-need
            :mostInNeed="mostInNeed"
        />
        <our-impact
            :ourImpact="ourImpact" 
        />
        <!-- <footer/> -->
    </div>
</template>

<script>
import mission from './mission.vue'
import banner from './banner.vue'
import bannerSub from './banner-sub.vue'
import MostInNeed from './mostInNeed.vue'
import happytailsLanding from './happytails-landing'
import ourImpact from './our-impact'
import AdoptableDogs from './adoptable-dogs.vue'
import ShopToSupport from './shop-to-support.vue'

    export default {
        components: { banner, bannerSub, mission, MostInNeed, happytailsLanding, ourImpact, AdoptableDogs, ShopToSupport },
        props: ['missionFirstParagraph', 'ourImpact', 'logo', 'mostInNeed', 'happyTailsLanding', 'adoptableDogs'],
        computed: {
            hidePage () {
                return this.$store.state.showMobileMenu
            }
        },
    }
</script>

<style scoped>

</style>