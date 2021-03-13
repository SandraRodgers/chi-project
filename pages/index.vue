<template>
  <landing :missionFirstParagraph="missionFirstParagraph"/>
</template>

<script>
import groq from 'groq'
import sanity from "../sanityClient"

export default {
  components: {  },

  async asyncData({ $sanity }) {
            const queryMissionFirstParagraph = groq`*[_type == 'information'&& name=='mission'][0] {description[0]}`
            const missionFirstParagraph = await $sanity.fetch(queryMissionFirstParagraph)
            return { missionFirstParagraph }
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
