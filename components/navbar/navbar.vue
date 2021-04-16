<template>
    <div class="w-screen flex flex-col sticky top-0 z-40" :class="{'hidden': showMobileMenu, 'flex': !showMobileMenu}">
<campaign/>
<nav-main/>
<nav-sub/>
    </div>
</template>

<script>
import campaign from './campaign.vue'
import NavMain from './nav-main.vue'
import NavSub from './nav-sub.vue'
    export default {
  components: { campaign, NavMain, NavSub },
  computed: {
            showMobileMenu () {
                return this.$store.state.showMobileMenu
            }
        },
     
    }
</script>

<style scoped>

</style>