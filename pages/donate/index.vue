<template>
  <div class="bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
    <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
            <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white pt-8 md:pt-6 lg:pt-8">Donate</h1>
    
      <p class="bg-white w-11/12 text-base lg:text-lg sm:text-base flex justify-center text-center pt-4 lg:pt-10 sm:pt-4">There are several ways to donate. You may donate by check, on our Facebook page, or right here on this page using your debit/credit card or Paypal.</p>
        <div class="title text-lg lg:text-2xl sm:text-lg pt-10 font-bold bg-white w-11/12 flex justify-center text-center">Check or Money Order</div>
        <p class="bg-white w-11/12 pt-4 text-base lg:text-lg sm:text-base flex justify-center text-center px-1 lg:px-10 sm:px-1">You can send a check by mail. All checks or money orders should be made out to CRT. Please be sure to include your email address so that we can send you an electronic tax receipt! Mail your check to the following address:</p>
        <div class="bg-white flex justify-center w-11/12 py-10 text-xl">
          <div class="flex flex-col font-semibold border border-black p-4">
            <div>CRT</div>
            <div>P.O. Box 2844</div>
            <div>Durham, NC  27715</div>
          </div>
        </div>
        
        <div class="flex justify-around items-center bg-white w-11/12">
          <img class="h-10 my-2" src="~assets/images/chi-sil-1-transparent.png"/>
          <img class="h-10 my-2 hidden lg:flex" src="~assets/images/chi-sil-2-transparent.png"/>
          <div class="title text-2xl my-2 font-bold">Credit/Debit</div>
          <img class="h-10 my-2" src="~assets/images/chi-sil-4-transparent.png"/>
          <img class="h-10 my-2 hidden lg:flex" src="~assets/images/chi-sil-5-transparent.png"/>
        </div>
        <div class="flex justify-center py-8 bg-white w-11/12">
          <iframe allowpaymentrequest="" frameborder="0" height="650px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/crt-donations" style="max-width: 400px; min-width: 250px;" width="100%"></iframe>
        </div>
      </div>
    <hr class="h-2 w-11/12 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
  </div>
</template>


<script src="https://donorbox.org/widget.js" paypalExpress="false"></script>

<script>
export default {

}
</script>

<style scoped>

</style>