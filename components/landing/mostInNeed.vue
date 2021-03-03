<template>
<div class="bg-alibaster flex flex-col items-center w-screen">
    <h2 class="text-starCommandBlue font-bold text-2xl md:text-3xl lg:text-4xl py-2">Chihuahuas most in need</h2>
    
    <div class="cards-container items-center md:justify-center lg:justify-center  py-3 flex flex-col md:flex-row lg:flex-row xl:flex-row w-4/6 md:w-4/6 lg:w-screen">
        <div class="card w-6/6 md:w-1/6 lg:w-1/6 flex flex-col m-3">
            <img class="img h-44 object-cover" src="~assets/images/chi_tongueout.jpg">
            <div class="flex flex-col items-center card-text bg-white h-20">
            <p class="card-text-description text-sm"> Lucy is a little love who needs your help.</p>
            </div>
        </div>

        <div class="card w-6/6 md:w-1/6 lg:w-1/6 flex flex-col m-3">
            <img class="img h-44 object-cover" src="~assets/images/chi_fleece.jpg">
            <div class="flex flex-col items-center card-text bg-white h-20">
            <p class="card-text-description text-sm"> Lucy is a little love who needs your help.</p>
            </div>
        </div>

        <div class="card w-6/6 md:w-1/6 lg:w-1/6 flex flex-col m-3">
            <img class="img h-44 object-cover" src="~assets/images/chihuahua-sidewalk.jpeg">
            <div class="flex flex-col items-center card-text bg-white h-20">
            <p class="card-text-description text-sm"> Lucy is a little love who needs your help.</p>
            </div>
        </div>
       
    </div>
    


</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

img {
    /* height: 250px; */
    /* object-fit: cover; */
}

.card-text {
    /* height: 150px; */
    
    padding: 20px;
}

.card-text-description {
overflow: scroll;
}



</style>