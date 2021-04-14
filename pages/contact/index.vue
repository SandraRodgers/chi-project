<template>
  <div class="bg-whitesmoke pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center">
    <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
      <div class="flex items-center justify-center flex-col bg-white w-11/12">
        <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8">Contact Us</h1>
          <div class="flex flex-col px-4 w-11/12 bg-white">
            <div class="text-center py-4">
              <h2 class="font-semibold">Please fill out the form with your inquiry or message for CRT.</h2>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="flex flex-col items-center justify-center w-11/12 py-8">
            <h1 class="title text-2xl md:text-2xl lg:text-2xl font-bold">
              Contact Form
            </h1>

          <section class="contact-form w-9/12 py-4">
            <div class="field flex border border-gray-300 w-12/12 py-4 px-2">
              <label class="flex items-center label w-4/12 pl-4">Name:</label>
              <div class="control w-8/12">
                <input v-model="contactName" class="input w-full bg-gray-200 border border-gray-300 py-1 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-4 px-2">
              <label class="flex items-center label w-4/12 pl-4">Email</label>
              <div class="control w-8/12">
                <input v-model="contactEmail" class="input w-full bg-gray-200 border border-gray-300 py-1" type="email">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-4 px-2">
              <label class="flex items-center label w-4/12 pl-4">Phone Number</label>
              <div class="control w-8/12">
                <input v-model="contactPhone" class="input w-full bg-gray-200 border border-gray-300 py-1" type="tel">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-4 px-2">
              <label class="label w-4/12 pl-4">Your Message</label>
              <div class="control w-8/12">
                <textarea v-model="contactMessage" class="textarea w-full bg-gray-200 border border-gray-300 h-40" />
              </div>
            </div>

            <div class="field flex justify-around w-12/12 py-4 px-2 is-grouped">
            <div class="w-2/6 flex justify-around">
              <div class="control">
                <button class="button is-link bg-middleYellow text-sm p-1 md:p-2 lg:p-4 my-8 border rounded-sm border-middleYellow text-black hover:opacity-70" @click="sendMessage">
                  Send Message
                </button>
              </div>
              <div class="control">
                <button class="button is-text rounded-sm border border-carolinaBlue text-sm p-1 md:p-2 lg:p-4 my-8 text-black hover:opacity-70 hover:opacity-70" @click="cancelMessage">
                  Cancel
                </button>
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    <hr class="h-2 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
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
          contactMessage: ''
        }
      },
      methods: {
        sendMessage () {
          this.messages = []
          this.triggerSendMessageFunction()
        },
        cancelMessage (){

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
            this.$toast.show({
              type: 'success',
              title: 'Success',
              message: 'Message sent',
              classToast: 'bg-seaGreen-dark',
              classTitle: 'text-seaGreen-light',
              classMessage: 'text-seaGreen-light',
              classClose: 'text-seaGreen-light',
              classTimeout: 'bg-seaGreen',
            })
            this.resetForm()
            this.messages.push({ type: 'success', text: response })
          } catch (error) {
            this.$toast.show({
              type: 'danger',
              title: 'Error',
              message: 'Please Try Again',
              classToast: 'bg-red-600',
              classTitle: 'text-red-100',
              classMessage: 'text-red-100',
              classClose: 'text-red-100',
              classTimeout: 'bg-red-400'
            })
            this.messages.push({ type: 'error', text: error.response.data })
          }
        }
      }
  
  }
</script>

<style scoped>
p {
 padding-bottom: 14px;
 font-size: 18px;
}
</style>