<template>
  <landing
    :missionFirstParagraph="missionFirstParagraph"
    :ourImpact="ourImpact" 
    :mostInNeed="mostInNeed"
    :happyTailsLanding="happyTailsLanding"
    :adoptableDogs="adoptableDogs"
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
    const queryMostInNeed = groq`*[_type == 'mostInNeed' && landing==true]`
    const mostInNeed = await $sanity.fetch(queryMostInNeed)

    //HappyTails
    const queryHappyTailsLanding = groq`*[_type == "happyTails"][0] | order(order asc)`
    const happyTailsLanding = await $sanity.fetch(queryHappyTailsLanding)

    //Adoptable Dogs
    const queryAdoptableDogs = groq`*[_type == 'adoptableDogs'][0]`
    const adoptableDogs = await $sanity.fetch(queryAdoptableDogs)

    return { missionFirstParagraph, ourImpact, mostInNeed, happyTailsLanding, adoptableDogs }
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
