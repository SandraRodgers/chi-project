<template functional>
    <div>
        <ul class="nested" v-if="props.nested">
            <li><slot /></li>
        </ul>
        
        <li v-else><slot /></li>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('mounted')
    }
}

</script>

<style>

</style>