<template>
<div class="bg-alibaster flex flex-col items-center w-screen">
    <h2 class="title text-black font-bold text-2xl md:text-3xl lg:text-4xl py-2">Chihuahuas most in need</h2>
    
    <div class="cards-container items-center md:justify-center lg:justify-center  py-3 flex flex-col md:flex-row lg:flex-row xl:flex-row w-4/6 md:w-5/6 sm-6/6 lg:w-screen">
        
        <div class="card w-6/6 md:w-2/6 lg:w-2/6 flex flex-col mx-10 m-6 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <img class="img rounded-t h-40 object-cover" style="filter: contrast(110%);"  src="~assets/images/chi_tongueout.jpg">
            <div class="rounded-b flex flex-col justify-around items-center card-text bg-white h-36">
                <p class="card-text-description text-sm"> Riley had rough start to life.</p>
                <button class="text-sm w-5/6 text-davysGrey font-extralight border border-opacity-25 border-davysGrey py-1 px-2">Read More</button>
            </div>
        </div>

        <div class="card w-6/6 md:w-2/6 lg:w-2/6 flex flex-col mx-10 m-6 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <img class="img rounded-t h-40 object-cover" style="filter: contrast(110%);" src="~assets/images/chi_fleece.jpg">
            <div class="rounded-b flex flex-col justify-around items-center card-text bg-white h-36">
            <p class="card-text-description text-sm">Chester is on his way to a healthy life.</p>
            <button class="text-sm w-5/6 text-davysGrey font-extralight border border-opacity-25 border-davysGrey py-1 px-2">Read More</button>
            </div>
        </div>

        <div class="card w-6/6 md:w-2/6 lg:w-2/6 flex flex-col mx-10 m-6 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <img class="img rounded-t h-40 object-cover" style="filter: contrast(110%);" src="~assets/images/chihuahua-sidewalk.jpeg">
            <div class="rounded-b flex flex-col justify-around items-center card-text bg-white h-36">
            <p class="card-text-description text-sm"> Lucy is a little love who needs your help.</p>
            <button class="text-sm w-5/6 text-davysGrey font-extralight border border-opacity-25 border-davysGrey py-1 px-2">Read More</button>
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