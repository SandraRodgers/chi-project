<template>
  <div class="bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
    <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
      <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
        <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8 text-center">{{fosterInfo[0].subtitle}}</h1>
        <div class="flex flex-col px-4 lg:px-4 sm:px-4 w-11/12 lg:w-11/12 sm:w-11/12 bg-white">
          <div class="text-center py-4">
            <h2 class="font-semibold">If you would like to help by fostering a CRT rescue, please read the following information.</h2>
          </div>
          <div class="text-xs lg:text-base sm:text-xs">
          <block-content :blocks="child" v-for="child in fosterInfo[0].description" :key="child._id" />
          </div>
          </div>

          <!-- Foster Application Form -->
          <div class="flex flex-col items-center justify-center w-12/12 py-4 lg:py-8 sm:py-4">
            <h1 class="title text-xl md:text-2xl lg:text-2xl sm:text-xl font-bold text-center">
              Foster Application Form
            </h1>
          
          <section class="contact-form w-12/12 lg:w-9/12 sm:w-12/12 py-4">
          <div v-for="(formQuestion) in fosterApplicationQuestions" :key="formQuestion.id">
      
          <div v-if="formQuestion.type === 'input'">
            <div class="field flex border border-gray-300 w-12/12 py-2 px-1 lg:px-2 sm:px-1">
              <label class="flex items-center label w-4/12 pl-1 lg:pl-4 sm:pl-1 text-xs lg:text-base sm:text-xs">{{formQuestion.question}}</label>
              <div class="control w-8/12">
                <input v-model="response[formQuestion.order]" class="input w-full bg-gray-200 border border-gray-300 py-1 py-1" type="text">
              </div>
            </div>
          </div>
          
          <div v-else>
            <div class="field flex border border-gray-300 w-12/12 py-2 px-1 lg:px-2 sm:px-1">
              <label class="flex items-center label w-4/12 pl-1 lg:pl-4 sm:pl-1 text-xs lg:text-base sm:text-xs">{{formQuestion.question}}</label>
              <div class="control w-8/12">
                <select v-model="response[formQuestion.order]" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option v-if="formQuestion.selectOptionOne">{{formQuestion.selectOptionOne}}</option>   
                  <option v-if="formQuestion.selectOptionTwo">{{formQuestion.selectOptionTwo}}</option>
                  <option v-if="formQuestion.selectOptionThree">{{formQuestion.selectOptionThree}}</option>
                  <option v-if="formQuestion.selectOptionFour">{{formQuestion.selectOptionFour}}</option>
                  <option v-if="formQuestion.selectOptionFive">{{formQuestion.selectOptionFive}}</option>
                  <option v-if="formQuestion.selectOptionSix">{{formQuestion.selectOptionSix}}</option>
                  <option v-if="formQuestion.selectOptionSeven">{{formQuestion.selectOptionSeven}}</option>
                  <option v-if="formQuestion.selectOptionEight">{{formQuestion.selectOptionEight}}</option>
                  <option v-if="formQuestion.selectOptionNine">{{formQuestion.selectOptionNine}}</option>
                  <option v-if="formQuestion.selectOptionTen">{{formQuestion.selectOptionTen}}</option>
                </select>
              </div>
            </div>
          </div>
          </div>
            <div class="field flex justify-around w-12/12 py-2 px-2 is-grouped">
            <div class="w-5/6 lg:w-2/6 sm:w-5/6 flex justify-around">
              <div class="control">
                <button class="button is-link bg-middleYellow text-sm p-2 md:p-2 lg:p-4 sm:p-2 my-8 border rounded-sm border-middleYellow text-black hover:opacity-70" @click="sendMessage">
                  Send Message
                </button>
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
import { groq } from '@nuxtjs/sanity'
const queryFoster = groq`*[_type == 'information'&& name=='foster-process']`
const queryFosterApplication = groq `*[_type == 'formQuestionFosterApplication'] | order(order asc)`

    export default {
      async fetch() {
        this.fosterInfo = await this.$sanity.fetch(queryFoster)
        this.fosterApplicationQuestions = await this.$sanity.fetch(queryFosterApplication)
        },
      data(){
        return {
          response: [],
          fosterInfo: '',
          fosterApplicationQuestions: '',
          messages: [],
          applicationArr: [],
          applicationObj: {}
        }
      },  
      methods:{
        createMessage(){
          this.response.forEach((response, i) => {
            this.applicationArr.push([
              this.fosterApplicationQuestions[i].question,response
              ])
            const entries = new Map(this.applicationArr)
            this.applicationObj = Object.fromEntries(entries);
          })
        },
        sendMessage () {
          this.createMessage()
          this.messages = []
          this.triggerSendMessageFunction()
        },
        resetForm () {
          this.response = []
        },
        async triggerSendMessageFunction () {
          try {
            const response = await this.$axios.$post('/.netlify/functions/foster-application-email', this.applicationObj)
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
      },
      watch: {
        applicationArr(){
          console.log(this.application)
        },
        applicationObj(){
          console.log(this.applicationObj)
        }
      },
    }
</script>

<style scoped>
p {
 padding-bottom: 14px;
 
}
</style>