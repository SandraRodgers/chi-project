<template>
  <landing 
    :missionFirstParagraph="missionFirstParagraph"
    :ourImpact="ourImpact" 
    :logo="logo"
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
    const queryLogo = groq`*[_type == 'landingBannerAndLogo']{imageFile}`
    const logo = await $sanity.fetch(queryLogo)

    return { missionFirstParagraph, ourImpact, logo}
        }, 
  }
</script>

<style>
.body {
  height: 150vh;
}

html {
  font-family: "Poppins";
  font-weight: 300;
}

.title {
    font-family: "Playfair Display";
}
</style>
