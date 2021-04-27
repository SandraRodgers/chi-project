<template>
  <div class="bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center">
    <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
      <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
        <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8 text-center">Contact Us</h1>
          <div class="flex flex-col px-4 lg:px-4 sm:px-4 w-11/12 lg:w-11/12 sm:w-11/12 bg-white">
            <div class="text-center py-4">
              <h2 class="font-semibold">Please fill out the form with your inquiry or message for CRT.</h2>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="flex flex-col items-center justify-center w-full py-4 lg:py-8 sm:py-4">
            <h1 class="title text-xl md:text-2xl lg:text-2xl sm:text-xl font-bold text-center">
              Contact Form
            </h1>

          <section class="contact-form w-12/12 lg:w-8/12 md:10/12 sm:w-12/12 py-4">
            <div class="field flex border border-gray-300 w-12/12 py-2 px-1 lg:px-2 sm:px-1">
              <label class="flex items-center label w-4/12 pl-1 lg:pl-4 sm:pl-1 text-xs lg:text-base sm:text-xs">Name:</label>
              <div class="control w-8/12">
                <input v-model="contactName" class="input w-full bg-gray-200 border border-gray-300 py-1 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-1 lg:px-2 sm:px-1">
              <label class="flex items-center label w-4/12 pl-1 lg:pl-4 sm:pl-1 text-xs lg:text-base sm:text-xs">Email</label>
              <div class="control w-8/12">
                <input v-model="contactEmail" class="input w-full bg-gray-200 border border-gray-300 py-1" type="email">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-1 lg:px-2 sm:px-1">
              <label class="flex items-center label w-4/12 pl-1 lg:pl-4 sm:pl-1 text-xs lg:text-base sm:text-xs">Phone Number</label>
              <div class="control w-8/12">
                <input v-model="contactPhone" class="input w-full bg-gray-200 border border-gray-300 py-1" type="tel">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-1 lg:px-2 sm:px-1">
              <label class="flex items-center label w-4/12 pl-1 lg:pl-4 sm:pl-1 text-xs lg:text-base sm:text-xs">Your Message</label>
              <div class="control w-8/12">
                <textarea v-model="contactMessage" class="textarea w-full bg-gray-200 border border-gray-300 h-40" />
              </div>
            </div>

            <div class="field flex justify-around w-12/12 py-2 px-2 is-grouped">
            <div class="w-5/6 lg:w-2/6 sm:w-5/6 flex justify-around">
              <div class="flex flex-col items-center">
                  <button class="button is-link bg-middleYellow text-sm p-2 md:p-2 lg:p-4 sm:p-2 my-8 border rounded-sm border-middleYellow hover:opacity-70" @click="sendMessage">
                    Send Message
                  </button>
                  <div v-if="error" class="text-lg text-center text-red-600 font-bold animate-bounce">{{errorMessage}}</div>
                  <div v-if="success" class="text-lg text-center text-green-600 font-bold animate-bounce">{{successMessage}}</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    <hr class="h-2 w-11/12 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
  </div>
</template>

<script>


export default {

  data () {
        return {
          messages: [],
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          contactMessage: '',
          error: false,
          errorMessage: "Error. Please try again.",
          success: false,
          successMessage: "Success! Application submitted"
        }
      },
      methods: {
        sendMessage () {
          this.messages = []
          this.triggerSendMessageFunction()
        },
        resetForm () {
          this.messages = []
          this.contactName = ''
          this.contactEmail = ''
          this.contactPhone = ''
          this.contactMessage = ''
        },
        async triggerSendMessageFunction () {
          try {
            const response = await this.$axios.$post('/.netlify/functions/contact-form-email', {
              contactName: this.contactName,
              contactEmail: this.contactEmail,
              contactPhone: this.contactPhone,
              contactMessage: this.contactMessage
            })
            this.resetForm()
            this.messages.push({ type: 'success', text: response })
            this.error = false;
            this.success = true;
            setTimeout(()=>{
              this.success = false;
            }, 5000)
            contactName= "";
            contactEmail= "";
            contactPhone= "";
            contactMessage= "";
          } catch (error) {
            this.messages.push({ type: 'error', text: error.response.data })
            this.error = true;
            setTimeout(()=>{
              this.error = false;
            }, 5000)
          }
        }
      },
      watch: {
        error(){
          if(this.error === true){
            this.success = false;
          }
        },
        success(){
          if(this.success === true){
            this.error = false;
          }
        }
      }
  }
</script>

<style scoped>
p {
 padding-bottom: 14px;
}
</style>