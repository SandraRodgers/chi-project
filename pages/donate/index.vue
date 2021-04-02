<template>
<div class="bg-whitesmoke pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <hr class="h-2 mt-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <div class="title text-4xl pt-10 font-bold bg-white w-11/12 flex justify-center">Donate</div>
        <p class="bg-white w-11/12 text-lg flex justify-center text-center pt-10">There are several ways to donate. You may donate by check, on our Facebook page, or right here on this page using your debit/credit card or Paypal.
        </p>
        <div class="title text-2xl pt-10 font-bold bg-white w-11/12 flex justify-center">Check or Money Order</div>
        <p class="bg-white w-11/12 pt-4 text-lg flex justify-center px-10">You can send a check by mail. All checks or money orders should be made out to CRT, Inc. Please be sure to include your email address so that we can send you an electronic tax receipt! Mail your check to the following address:</p>
        <div class="bg-white flex justify-center w-11/12 py-10 text-lg">
        <div class="flex flex-col font-semibold">
          <div>CRT</div>
          <div>P.O. Box 2844</div>
          <div>Durham, NC  27715</div>
          <div class="font-normal">(Make checks out to CRT)</div>
        </div>
        </div>
        <div class="title text-2xl pt-4 font-bold bg-white w-11/12 flex justify-center">Credit/Debit</div>
        <div class="flex py-8 bg-white w-11/12">
        <div class="flex flex-col mt-16 items-center w-3/6">
        <div class="flex justify-center text-center w-6/6">
          <div class="title text-xl font-bold mb-10 w-4/6">Dexter thanks you for your donation!</div>
          </div>
          <img class="w-3/6" src="@/assets/images/chihuahua-sidewalk.jpeg"/>
        </div>
        <iframe allowpaymentrequest="" frameborder="0" height="900px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/crt-donations" style="max-width: 500px; min-width: 250px; max-height:none!important" width="100%"></iframe>
        </div>

        <hr class="h-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    </div>


</template>
<script src="https://donorbox.org/widget.js" paypalExpress="false"></script>

<script>



export default {

}
</script>

<style scoped>

.donation-widget.tabs {
  max-width: 2000px !important;
}

</style>