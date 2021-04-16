<template>
  <div class="">
    <mobile-menu/>
    <navbar/>
    <Nuxt 
    :class="{'hidden': showMobileMenu, 'flex': !showMobileMenu}" 
    />
    <!-- <footer-main/> -->
  </div>
</template>

<script>

export default {
  computed: {
            showMobileMenu () {
                return this.$store.state.showMobileMenu
            }
        },
  
  }
</script>

<style>
html {
  margin: 0;
  /* width: 100vw; */
}
</style>
