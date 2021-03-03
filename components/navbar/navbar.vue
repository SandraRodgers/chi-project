<template>
    <div>
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
        
    }
</script>

<style scoped>

</style>