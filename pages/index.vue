<template>
  <landing 
    :missionFirstParagraph="missionFirstParagraph"
    :ourImpact="ourImpact" 
  />
</template>

<script>
import groq from 'groq'
import sanity from "../sanityClient"

export default {
  components: {  },

  async asyncData({ $sanity }) {
    //Mission First Paragraph
    const queryMissionFirstParagraph = groq`*[_type == 'information'&& name=='mission'][0] {description[0]}`
    const missionFirstParagraph = await $sanity.fetch(queryMissionFirstParagraph)

    //Our Impact
    const queryOurImpact = groq`*[_type == 'ourImpact'][0] {
  impactOneHeader, impactTwoHeader, impactThreeHeader, impactFourHeader,
  impactOneFact, impactTwoFact, impactThreeFact, impactFourFact,
  impactOneImage, impactTwoImage, impactThreeImage, impactFourImage, title
}`
  const ourImpact = await $sanity.fetch(queryOurImpact)
    return { missionFirstParagraph, ourImpact}
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
