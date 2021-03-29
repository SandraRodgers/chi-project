<template>
<div class="bg-whitesmoke pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        
        <div class="h-screen bg-white w-11/12 flex justify-center pt-10">Donate</div>

        <hr class="h-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    </div>

</template>

<script>

export default {
    async fetch() {
    this.test = await fetch('https://distracted-ardinghelli-630150.netlify.app/.netlify/functions/test?name=John%20You%27re%20Dumb').then(res => res.json())
    
  },
  data: () => ({ test: '' }),
  mounted(){
    console.log(this.test)
  }

  }
</script>

<style scoped>

</style>