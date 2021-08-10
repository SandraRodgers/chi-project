<template>
  <div class="bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
    <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
      <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
      <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8 text-center">{{adoptInfo[0].title}}</h1>
        <h3 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-lg md:text-lg lg:text-lg font-semi-bold bg-white text-center">{{adoptInfo[0].subtitle}}</h3>
        <div class="flex flex-col px-4 lg:px-4 sm:px-4 w-11/12 lg:w-11/12 sm:w-11/12 bg-white">
          <div class="text-center py-4">
            <p class="font-semibold">View current dogs:</p>
            <div class="flex justify-center bg-white pt-2">
            <select v-model="region" v-on:change="changeRoute" class="border border-opacity-25 border-starCommandBlue px-4 mb-8 py-2 text-sm md:text-md lg:text-md">
                <option value="" disabled selected>Select your region</option>
                <option v-for="(option, i) in options" :key="i" :value="option.value">
                  {{ option.text }}
                </option>
            </select>
        </div>
            <h2 class="font-semibold">If you would like to adopt a CRT rescue, please read the following information.</h2>
          </div>
          <div class="text-xs lg:text-base sm:text-xs prose">
            <SanityContent :blocks="adoptInfo[0].description" />
          </div>
          
          </div>

          <!-- Adoption Application Form -->
          <div class="flex flex-col items-center justify-center w-12/12 py-4 lg:py-8 sm:py-4">
            <h1 class="title text-xl md:text-2xl lg:text-2xl sm:text-xl font-bold text-center">
              Adoption Application Form
            </h1>
          
          <section class="contact-form w-12/12 lg:w-9/12 sm:w-12/12 py-4">
          <div v-for="(formQuestion) in adoptApplicationQuestions" :key="formQuestion.id">
      
          <div v-if="formQuestion.type === 'input'">
            <div class="field flex border border-gray-300 w-12/12 py-2 px-1 lg:px-2 sm:px-1">
              <label class="flex items-center label w-4/12 pl-1 lg:pl-4 sm:pl-1 text-xs lg:text-base sm:text-xs">{{formQuestion.question}}</label>
              <div class="w-8/12">
                <input v-model="response[formQuestion.order]" class="input w-full bg-gray-200 border border-gray-300 py-1 py-1" type="text">
              </div>
            </div>
          </div>
          <div v-else>
            <div class="field flex border border-gray-300 w-12/12 py-2 px-1 lg:px-2 sm:px-1">
              <label class="flex items-center label w-4/12 pl-1 lg:pl-4 sm:pl-1 text-xs lg:text-base sm:text-xs">{{formQuestion.question}}</label>
              <div class="w-8/12">
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
            <div class="field flex justify-around w-12/12 py-2 px-2">
              <div class="w-5/6 lg:w-2/6 sm:w-5/6 flex justify-around">
                <div class="flex flex-col items-center">
                  <button class="button is-link bg-middleYellow text-sm p-2 md:p-2 lg:p-4 sm:p-2 my-8 border rounded-sm border-middleYellow hover:opacity-70" @click="sendMessage">
                    Send Application
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
import { groq } from '@nuxtjs/sanity'
// import Links from '~/components/serializers/Links.vue'
// import Nested from '~/components/serializers/NestedBullets.vue'

// const serializers = {
//         types: {
//           },
//         marks: {
//           link: Links,
//         },
//         listItem: Nested 
// }

    export default {
      async asyncData({ $sanity }) {
        const queryAdopt = groq`*[_type == 'information'&& name=='adoption-process']`
        const queryAdoptApplication = groq `*[_type == 'formQuestionAdoptionApplication'] | order(order asc)`
        const adoptInfo = await $sanity.fetch(queryAdopt)
        const adoptApplicationQuestions = await $sanity.fetch(queryAdoptApplication)
        return { adoptInfo, adoptApplicationQuestions }
      },
      data(){
        return {
          response: [],
          adoptInfo: '',
          adoptApplicationQuestions: '',
          messages: [],
          applicationArr: [],
          applicationObj: {},
          error: false,
          errorMessage: "Error. Please try again.",
          success: false,
          successMessage: "Success! Application submitted",
          region:"",
            options: [
                { text: 'Midwest', value: 'midwest' },
                { text: 'Southeast', value: 'southeast' },
                { text: 'Southwest', value: 'southwest' }
            ],
          // serializers: serializers
        }
      },  
      methods:{
        changeRoute(e){
           this.$router.push({path:`/adopt/${e.target.value}/`})
        },
        createMessage(){
          this.response.forEach((response, i) => {
            this.applicationArr.push([
              this.adoptApplicationQuestions[i].question,response
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
            const response = await this.$axios.$post('/.netlify/functions/adoption-form-email', this.applicationObj)
            this.resetForm()
            this.messages.push({ type: 'success', text: response })
            this.applicationObj = {};
            this.error = false;
            this.success = true;
            setTimeout(()=>{
              this.success = false;
            }, 5000)
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

.prose {
  color: black;
  max-width: none !important;
}

/* li > span {
  background-color: gray;
  
} */

/* .c-richt-text ol {
    @apply list-decimal;
    }

.c-richt-text ul {
    @apply list-disc;
  } */

 
</style>