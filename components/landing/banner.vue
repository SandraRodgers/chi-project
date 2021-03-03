<template>
    <div>
        <!-- banner mobile -->
        <div class="banner-mobile sm:hidden flex justify-content">
            <div class="banner-image-mobile-container sm:hidden">
                <img class="banner-image-mobile flex" src="~assets/images/chi_tongueout_outline.png"/>
            </div>
            <div class="banner-text-mobile flex flex-col justify-center items-center">
                <p class="banner-text-mobile-main text-center text-2xl text-gray-900 bold p-1 mr-2 mt-4">Saving chihuahuas</p>
                <p class="text-md">for 25 years</p>
                <button class="bg-yellowCrayola text-sm p-2 mt-4 text-black w-32 font-bold">DONATE NOW</button>
            </div>
        </div>
        <!-- banner desktop -->
        <div class="banner-desktop relative z-0 hidden sm:flex justify-center border-b border-opacity-25 border-davysGrey">
            <div class="banner-image-container flex justify-end">
            <img class="banner-image" src="~assets/images/chi_tongueout_outline.png"/>
            </div>
            <div class="banner-text flex flex-col justify-center items-center">
                <p class="banner-main-text text-center sm:text-4xl md:text-4xl lg:text-7xl xl:text-7xl text-gray-900 p-4 mt-10">Saving chihuahuas</p>
                <p class="text-3xl">for 25 years</p>
                <button class="bg-yellowCrayola text-lg p-1 mt-4 text-black w-40 font-bold">DONATE NOW</button>
            </div>
        </div>
    
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.banner-desktop {
    background: radial-gradient(circle, hsla(340, 27%, 98%, 1) 0%, hsla(33, 33%, 94%, 1) 54%, hsla(180, 2%, 91%, 1) 83%);

    height: 65vh;
    /* width:100vw; */
}

.banner-mobile {
        background: radial-gradient(circle, hsla(340, 27%, 98%, 1) 0%, hsla(33, 33%, 94%, 1) 54%, hsla(180, 2%, 91%, 1) 83%);
        /* width: 100vw; */
        

}

.banner-image-container {
    height: 100%;

    width: 40vw;
    /* width: 45vw; */
    /* width: 70%; */
    /* padding-left: 5vw; */
}

.banner-image {
    height: 100%;
   
}

.banner-text {
    font-family: "Lato"
}


.banner-main-text {
    
    /* padding-right: 2vw; */
    /* width: 50vw; */
    font-family: "Roboto Slab";
    font-weight: 500;
    /* padding-:10vh; */
}

.banner-text-mobile-main {
    font-family: "Roboto Slab";
    font-weight: 500;
}

.banner-text-mobile {
    font-family: "Lato"
}

.banner-image-mobile-container {
    /* width: 100vw; */
    height: 35vh;
}

.banner-image-mobile{
    /* height:100%; */

}


</style>