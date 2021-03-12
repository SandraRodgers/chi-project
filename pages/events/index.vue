<template>
<div class="bg-alibaster pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <div class="flex justify-center pt-5 md:pt-14 lg:pt-16 w-11/12 md:w-11/12 lg:w-11/12">
            <hr class="bg-starCommandBlue h-2 w-7/12">
            <hr class="bg-tan h-2 w-7/12 bg-clip-padding">
        </div>
        <div class="flex justify-center bg-white w-11/12 pt-10">
            <h1 class="title text-xl md:text-xl lg:text-3xl">Upcoming Events</h1>
        </div>
        <div class="flex justify-center bg-white w-11/12 pt-10">
         <select @change="showRegion" v-model="region" class="border border-opacity-25 border-davysGrey px-2 py-4">
             <option value="" disabled selected>Select your region</option>
                <option v-for="(option, i) in options" :key="i" :value="option.value">
    {{ option.text }}
  </option>

            </select>
        </div>
        <div class="flex items-center justify-center flex-col bg-white w-11/12" v-for="event in events" :key="event.id">
            <div class="flex justify-center py-10 text-lg">
                <div class="w-1/4">
                <img :src="imageUrlFor(event.image)"/>
                </div>
                <div class="w-2/4 ml-10">
                    <div class="flex font-semibold">
                        <div class="pr-5">{{event.event}}</div>
                        <div>{{eventDate(event.date)}}</div>
                    </div>
                <div>{{event.address}}</div>
                <div class="flex">
                    <div class="pr-2">{{eventTime(event.startTime)}}</div>-<div class="pl-2">{{eventTime(event.endTime)}}</div>
                </div>
                <div>
            <block-content :blocks="event.description[0]" :key="event.description[0]._id" v-if="event.description.length" />
            </div>
          </div>
            </div>
        </div>
           
     
    
    <div class="flex justify-center w-11/12 md:w-11/12 lg:w-11/12">
        <hr class="bg-starCommandBlue h-2 w-7/12">
        <hr class="bg-tan h-2 w-7/12 bg-clip-padding">
    </div>
    </div>
</template>

<script>
import groq from 'groq'
import sanity from "../../sanityClient"
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);
import moment from 'moment';

export default {
    components: {
    },
    methods: {
        imageUrlFor(source) {
            return imageBuilder.image(source);
        },
        eventDate(date) {
            return moment(date).format('MM/DD/YYYY');
        },
        eventTime(date) {
            return moment(date).format('h:mm a');
        },
        showRegion(){
            console.log(this.region)
        },
    },
        
    data() {
        return {
            region:"",
            options: [
                { text: 'Midwest', value: 'midwest' },
                { text: 'Southeast', value: 'southeast' },
                { text: 'Southwest', value: 'southwest' }
            ],
            regionEvents: {}
        }
    },

    mounted() {

  },
    
    
    async asyncData({ $sanity }) { 
    const query = groq`*[_type == "event"]`
    const events = await $sanity.fetch(query)
    return { events }
  },

  


    }
</script>

<style scoped>
p {
 padding-bottom: 14px;
}




</style>