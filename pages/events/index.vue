<template>
    <div class="bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
        <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <div class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
        <div class="flex justify-center bg-white w-11/12 pt-10">
            <h1 class="title font-bold text-xl md:text-xl lg:text-3xl">Upcoming Events</h1>
        </div>
        <div class="flex justify-center bg-white w-11/12 pt-10">
            <select v-model="region" class="border border-opacity-25 border-davysGrey px-2 py-4">
                <option value="" disabled selected>Select your region</option>
                <option v-for="(option, i) in options" :key="i" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
        </div>
        
        <div class="bg-white h-screen w-11/12">
        <!-- Midwest -->
        <div class="flex items-center justify-center flex-col bg-white w-11/12" v-for="event in midWestEvents" :key="event.id">
            <div v-if="region === 'midwest'" class="flex justify-center py-10 text-lg">
                <div class="w-1/4">
                    <img :src="imageUrlFor(event.image)"/>
                </div>
                <div class="w-3/4 lg:w-2/4 sm:w-3/4 ml-4 lg:ml-10 sm:ml-4 text-base lg:text-md md:text-base sm:text-base">
                    <div class="w-4/4 flex flex-col lg:flex-row md:flex-row sm:flex-col font-semibold">
                        <div class="pr-0 sm:pr-0 md:pr-5 lg:pr-5 pb-2">{{event.event}}</div>
                        <div class="w-2/4 flex justify-end pb-2">{{eventDate(event.date)}}</div>
                    </div>
                <div class="pb-2">{{event.address}}</div>
                <div class="flex">
                    <div class="pr-2 pb-2">{{eventTime(event.startTime)}}</div>-<div class="pl-2 pb-2">{{eventTime(event.endTime)}}</div>
                </div>
                <div>
                    <block-content :blocks="event.description[0]" :key="event.description[0]._id" v-if="event.description.length" />
                </div>
            </div>
        </div>
        </div>
        <!-- Southeast -->
        <div class="flex items-center justify-center flex-col bg-white w-11/12" v-for="event in southEastEvents" :key="event.id">
            <div v-if="region === 'southeast'" class="flex justify-center py-10 text-lg">
                <div class="w-1/4">
                    <img :src="imageUrlFor(event.image)"/>
                </div>
                <div class="w-3/4 lg:w-2/4 sm:w-3/4 ml-4 lg:ml-10 sm:ml-4 text-base lg:text-md md:text-base sm:text-base">
                    <div class="w-4/4 flex flex-col lg:flex-row md:flex-row sm:flex-col font-semibold">
                        <div class="pr-0 sm:pr-0 md:pr-5 lg:pr-5 pb-2">{{event.event}}</div>
                        <div class="w-2/4 flex justify-end pb-2">{{eventDate(event.date)}}</div>
                    </div>
                <div class="pb-2">{{event.address}}</div>
                <div class="flex">
                    <div class="pr-2 pb-2">{{eventTime(event.startTime)}}</div>-<div class="pl-2 pb-2">{{eventTime(event.endTime)}}</div>
                </div>
                <div>
                    <block-content :blocks="event.description[0]" :key="event.description[0]._id" v-if="event.description.length" />
                </div>
            </div>
        </div>
        </div>
        <!-- Southwest -->
        <div class="flex items-center justify-center flex-col bg-white w-11/12" v-for="event in southWestEvents" :key="event.id">
            <div v-if="region === 'southwest'" class="flex justify-center py-10 text-lg">
                <div class="w-1/4">
                    <img :src="imageUrlFor(event.image)"/>
                </div>
                <div class="w-3/4 lg:w-2/4 sm:w-3/4 ml-4 lg:ml-10 sm:ml-4 text-base lg:text-md md:text-base sm:text-base">
                    <div class="w-4/4 flex flex-col lg:flex-row md:flex-row sm:flex-col font-semibold">
                        <div class="pr-0 sm:pr-0 md:pr-5 lg:pr-5 pb-2">{{event.event}}</div>
                        <div class="w-2/4 flex justify-end pb-2">{{eventDate(event.date)}}</div>
                    </div>
                <div class="pb-2">{{event.address}}</div>
                <div class="flex">
                    <div class="pr-2 pb-2">{{eventTime(event.startTime)}}</div>-<div class="pl-2 pb-2">{{eventTime(event.endTime)}}</div>
                </div>
                <div>
                    <block-content :blocks="event.description[0]" :key="event.description[0]._id" v-if="event.description.length" />
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <hr class="h-2 w-11/12 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    </div>
</template>

<script>
import groq from 'groq'
import sanity from "../../sanityClient"
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);
import moment from 'moment';

export default {

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
    },
        
    data() {
        return {
            region:"",
            options: [
                { text: 'Midwest', value: 'midwest' },
                { text: 'Southeast', value: 'southeast' },
                { text: 'Southwest', value: 'southwest' }
            ],
        }
    },
    
    async asyncData({ $sanity }) {
        const querySouthwest = groq`*[_type == 'event'&& region=='southwest']`
        const queryMidwest = groq`*[_type == 'event'&& region=='midwest']`
        const querySoutheast = groq`*[_type == 'event'&& region=='southeast']`
        const midWestEvents = await $sanity.fetch(queryMidwest)
        const southWestEvents = await $sanity.fetch(querySouthwest)
        const southEastEvents = await $sanity.fetch(querySoutheast)
        return { southWestEvents, midWestEvents, southEastEvents }
    },
}
</script>

<style scoped>
p {
    padding-bottom: 14px;
}

</style>