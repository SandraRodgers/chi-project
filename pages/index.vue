<template>
  <landing
    class="w-screen" 
    :missionFirstParagraph="missionFirstParagraph"
    :ourImpact="ourImpact" 
    :mostInNeed="mostInNeed"
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

    //Logo
    // const queryLogo = groq`*[_type == 'landingBannerAndLogo']{imageFile}`
    // const logo = await $sanity.fetch(queryLogo)

    //Most in Need
    const queryMostInNeed = groq`*[_type == 'mostInNeed' && current==true]`
    const mostInNeed = await $sanity.fetch(queryMostInNeed)

    return { missionFirstParagraph, ourImpact, mostInNeed}
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
  height: 150vh;
}

html {
  background-color: black;
  font-family: "Poppins";
  font-weight: 300;
  width: 100vw;

}

.title {
    font-family: "Poppins";
}
</style>
