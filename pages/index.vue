<template>
  <landing
    class="" 
    :missionFirstParagraph="missionFirstParagraph"
    :ourImpact="ourImpact" 
    :mostInNeed="mostInNeed"
    :happyTailsLanding="happyTailsLanding"
  />
</template>

<script>
import groq from 'groq'

export default {

  async asyncData({ $sanity }) {
    //Mission First Paragraph
    const queryMissionFirstParagraph = groq`*[_type == 'information'&& name=='mission'][0] {description[0]}`
    const missionFirstParagraph = await $sanity.fetch(queryMissionFirstParagraph)

    //Our Impact
    const queryOurImpact = groq`*[_type == 'ourImpact'][0] {
      impactOneHeader, impactTwoHeader, impactThreeHeader, impactFourHeader,impactOneFact, impactTwoFact, impactThreeFact, impactFourFact,
      impactOneImage, impactTwoImage, impactThreeImage, impactFourImage, title
      }`
      const ourImpact = await $sanity.fetch(queryOurImpact)

    //Most in Need
    const queryMostInNeed = groq`*[_type == 'mostInNeed' && current==true]`
    const mostInNeed = await $sanity.fetch(queryMostInNeed)

    //HappyTails
    const queryHappyTailsLanding = groq`*[_type == "happyTails"][0]`
    const happyTailsLanding = await $sanity.fetch(queryHappyTailsLanding)

    return { missionFirstParagraph, ourImpact, mostInNeed, happyTailsLanding }
        },
    
    computed: {
            showMobileMenu () {
                return this.$store.state.showMobileMenu
            }
        },
        
  
  }
</script>

<style>
* {

}

.body {
}

html {
  background-color: black;
  font-family: "Poppins";
  font-weight: 300;
}

.title {
    font-family: "Poppins";
}
</style>
