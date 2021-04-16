<template>
  <div>
    <mobile-menu/>
    <navbar/>
    <Nuxt 
    class="relative -top-12"
    :class="{'hidden': showMobileMenu, 'flex': !showMobileMenu}" 
    />
    <footer-main/>
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
}
</style>
