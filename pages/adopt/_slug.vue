<template>
    <div class="bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center  justify-center w-full">
        <hr class="h-2 mt-10 w-11/12 rounded-t-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
        <!-- Southwest Chihuahuas -->
        <div v-if="chihuahua" class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
            <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8 text-center">{{chihuahua.chihuahua}}</h1>
            <div class="text-center text-sm lg:text-base py-4 w-10/12 lg:w-8/12">
                <h2 class="font-normal lg:font-semibold" v-if="chihuahua.region === 'southwest'">
                    This dog is being fostered in Dallas TX and must be adopted within the Dallas, North Central Texas or the southern Oklahoma area.
                </h2>
            </div>
            <div class="px-1 lg:px-14 md:px-14">
                <div class="flex items-start  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
                    <div class="flex flex-col px-2 w-6/6 sm:w-6/6 lg:w-4/6">
                        <div class="flex justify-center py-4">
                            <div class="w-full">
                                <div class="flex py-1">
                                    <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Name:</div>
                                    <div class="w-8/12 sm:w-8/12 lg:w-6/12 ml-4 md:ml-10 lg:ml-10">{{ chihuahua.chihuahua }}</div>
                                </div>
                                <div class="flex py-1">
                                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Gender:</div>
                                <div class="w-8/12 sm:w-8/12 w-6/12 sm:w-6/1 ml-4 md:ml-10 lg:ml-10">{{ chihuahua.gender }}</div>
                            </div>
                            <div class="flex py-1">
                                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Age:</div>
                                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{chihuahua.age }}</div>
                            </div>
                            <div class="flex py-1">
                                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Weight:</div>
                                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{chihuahua.weight }}</div>
                            </div>
                            <div class="flex py-1">
                                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Dogs/Cats:</div>
                                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{chihuahua.dogsCats }}</div>
                            </div>
                            <div class="flex py-1">
                                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Children:</div>
                                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{chihuahua.children }}</div>
                            </div>
                        </div>
                    </div>
                    <div v-if="chihuahua.mainImage" class="flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                        <img class="h-52 pb-4" :src="imageUrlFor(chihuahua.mainImage)"/>
                    </div>
                    <block-content :blocks="child" v-for="child in chihuahua.description" :key="child._id" />
                    <div v-if="chihuahua.imageTwo" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                        <img class="h-52 pb-4" :src="imageUrlFor(chihuahua.imageTwo)"/>
                    </div>
                    <div v-if="chihuahua.imageThree" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                        <img class="h-52 pb-4" :src="imageUrlFor(chihuahua.imageThree)"/>
                    </div>
                    <div v-if="chihuahua.imageFour" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                        <img class="h-52 pb-4" :src="imageUrlFor(chihuahua.imageFour)"/>
                    </div>
                    <div v-if="chihuahua.imageFive" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                        <img class="h-52 pb-4" :src="imageUrlFor(chihuahua.imageFive)"/>
                    </div>
                    <div v-if="chihuahua.imageSix" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                        <img class="h-52 pb-4" :src="imageUrlFor(chihuahua.imageSix)"/>
                    </div>
                </div>
                <div class="hidden sm:hidden md:flex lg:flex flex-col ml-2 items-end w-2/6">
                    <div v-if="chihuahua.mainImage" class="px-2 py-1">
                        <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahua.mainImage)"/>
                    </div>
                    <div v-if="chihuahua.imageTwo" class="px-2 py-1">
                        <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahua.imageTwo)"/>
                    </div>
                    <div v-if="chihuahua.imageThree" class="px-2 py-1">
                        <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahua.imageThree)"/>
                    </div>
                    <div v-if="chihuahua.imageFour" class="px-2 py-1">
                        <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahua.imageFour)"/>
                    </div>
                    <div v-if="chihuahua.imageFive" class="px-2 py-1">
                        <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahua.imageFive)"/>
                    </div>
                    <div v-if="chihuahua.imageSix" class="px-2 py-1">
                        <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahua.imageSix)"/>
                    </div>
                </div>
            </div>
        </div>
            <div class="flex justify-center mb-8">
                <button class="my-2 md:my-6 lg:my-10">
                    <nuxt-link class="bg-middleYellow text-sm md:text-sm lg:text-lg p-2 md:p-2 lg:p-4 sm:p-2 w-5/5 md:w-5/5 lg:w-5/5 text-black hover:opacity-70 rounded-sm" :to="{ path: `/adopt` }"> Adoption Application</nuxt-link>
                </button>
            </div>
        </div>
        <!-- Southeast Chihuahuas -->
        <div v-else-if="chihuahuaSE" class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
          <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8 text-center">{{chihuahuaSE.chihuahua}}</h1>
          <div class="text-center text-sm lg:text-base py-4 w-10/12 lg:w-8/12">
            <h2 class="font-normal lg:font-semibold" v-if="chihuahuaSE.region === 'southeast'">
              North Carolina, South Carolina, Virginia, Tennessee (Nashville Area), Alabama, Georgia and Maryland
            </h2>
          </div>
          <div class="px-1 lg:px-14 md:px-14">
            <div class="flex items-start  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
              <div class="flex flex-col px-2 w-6/6 sm:w-6/6 lg:w-4/6">
              <div class="flex justify-center py-4">
              <div class="w-full">
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Name:</div>
                <div class="w-8/12 sm:w-8/12 lg:w-6/12 ml-4 md:ml-10 lg:ml-10">{{chihuahuaSE.chihuahua}}</div>
              </div>
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Gender:</div>
                <div class="w-8/12 sm:w-8/12 w-6/12 sm:w-6/1 ml-4 md:ml-10 lg:ml-10">{{chihuahuaSE.gender}}</div>
              </div>
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Age:</div>
                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{chihuahuaSE.age}}</div>
              </div>
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Weight:</div>
                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{ chihuahuaSE.weight}}</div>
              </div>
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Dogs/Cats:</div>
                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{chihuahuaSE.dogsCats}}</div>
              </div>
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Children:</div>
                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{chihuahuaSE.children}}</div>
              </div>
            </div>
            </div>
            <div v-if="chihuahuaSE.mainImage" class="flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
              <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaSE.mainImage)"/>
            </div>
            <block-content :blocks="child" v-for="child in chihuahuaSE.description" :key="child._id" />
                <div v-if="chihuahuaSE.imageTwo" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                  <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaSE.imageTwo)"/>
                </div>
                <div v-if="chihuahuaSE.imageThree" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                  <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaSE.imageThree)"/>
                </div>
                <div v-if="chihuahuaSE.imageFour" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                  <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaSE.imageFour)"/>
                </div>
                <div v-if="chihuahuaSE.imageFive" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                  <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaSE.imageFive)"/>
                </div>
                <div v-if="chihuahuaSE.imageSix" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                  <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaSE.imageSix)"/>
                </div>
            </div>
              <div class="hidden sm:hidden md:flex lg:flex flex-col ml-2 items-end w-2/6">
                <div v-if="chihuahuaSE.mainImage" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaSE.mainImage)"/>
                </div>
                <div v-if="chihuahuaSE.imageTwo" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaSE.imageTwo)"/>
                </div>
                <div v-if="chihuahuaSE.imageThree" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaSE.imageThree)"/>
                </div>
                <div v-if="chihuahuaSE.imageFour" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaSE.imageFour)"/>
                </div>
                <div v-if="chihuahuaSE.imageFive" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaSE.imageFive)"/>
                </div>
                <div v-if="chihuahuaSE.imageSix" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaSE.imageSix)"/>
                </div>
              </div>
              </div>
            </div>
            <div class="flex justify-center mb-8">
                <button class="my-2 md:my-6 lg:my-10">
                    <nuxt-link class="bg-middleYellow text-sm md:text-sm lg:text-lg p-2 md:p-2 lg:p-4 sm:p-2 w-5/5 md:w-5/5 lg:w-5/5 text-black hover:opacity-70 rounded-sm" :to="{ path: `/adopt` }"> Adoption Application</nuxt-link>
                </button>
            </div>
        </div>

      <!-- Midwest Chihuahuas -->
        <div v-else-if="chihuahuaMW" class="flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl">
          <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8 text-center">{{chihuahuaMW.chihuahua}}</h1>
          <div class="text-center text-sm lg:text-base py-4 w-10/12 lg:w-8/12">
            <h2 class="font-normal lg:font-semibold" v-if="chihuahuaMW.region === 'midwest'">
              All dogs listed here are adoptable in the following Midwestern states (OH / KY/ IL / MI / WI/ MN/). We do transport! They are spread out throughout the Midwest in foster homes.
            </h2>
          </div>
          <div class="px-1 lg:px-14 md:px-14">
            <div class="flex items-start  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base">
              <div class="flex flex-col px-2 w-6/6 sm:w-6/6 lg:w-4/6">
              <div class="flex justify-center py-4">
              <div class="w-full">
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Name:</div>
                <div class="w-8/12 sm:w-8/12 lg:w-6/12 ml-4 md:ml-10 lg:ml-10">{{chihuahuaMW.chihuahua}}</div>
              </div>
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Gender:</div>
                <div class="w-8/12 sm:w-8/12 w-6/12 sm:w-6/1 ml-4 md:ml-10 lg:ml-10">{{chihuahuaMW.gender}}</div>
              </div>
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Age:</div>
                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{chihuahuaMW.age}}</div>
              </div>
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Weight:</div>
                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{ chihuahuaMW.weight}}</div>
              </div>
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Dogs/Cats:</div>
                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{chihuahuaMW.dogsCats}}</div>
              </div>
              <div class="flex py-1">
                <div class="w-4/12 sm:w-4/12 lg:w-28 md:w-18 font-medium">Children:</div>
                <div class="w-8/12 sm:w-8/12 ml-4 md:ml-10 lg:ml-10">{{chihuahuaMW.children}}</div>
              </div>
            </div>
            </div>
            <div v-if="chihuahuaMW.mainImage" class="flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
              <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaMW.mainImage)"/>
            </div>
            <block-content :blocks="child" v-for="child in chihuahuaMW.description" :key="child._id" />
                <div v-if="chihuahuaMW.imageTwo" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                  <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaMW.imageTwo)"/>
                </div>
                <div v-if="chihuahuaMW.imageThree" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                  <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaMW.imageThree)"/>
                </div>
                <div v-if="chihuahuaMW.imageFour" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                  <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaMW.imageFour)"/>
                </div>
                <div v-if="chihuahuaMW.imageFive" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                  <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaMW.imageFive)"/>
                </div>
                <div v-if="chihuahuaMW.imageSix" class="px-2 py-1 flex sm:flex lg:hidden md:hidden px-2 py-1 flex justify-center">
                  <img class="h-52 pb-4" :src="imageUrlFor(chihuahuaMW.imageSix)"/>
                </div>
            </div>
              <div class="hidden sm:hidden md:flex lg:flex flex-col ml-2 items-end w-2/6">
                <div v-if="chihuahuaMW.mainImage" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaMW.mainImage)"/>
                </div>
                <div v-if="chihuahuaMW.imageTwo" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaMW.imageTwo)"/>
                </div>
                <div v-if="chihuahuaMW.imageThree" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaMW.imageThree)"/>
                </div>
                <div v-if="chihuahuaMW.imageFour" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaMW.imageFour)"/>
                </div>
                <div v-if="chihuahuaMW.imageFive" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaMW.imageFive)"/>
                </div>
                <div v-if="chihuahuaMW.imageSix" class="px-2 py-1">
                  <img class="h-20 lg:h-80 sm:h-20" :src="imageUrlFor(chihuahuaMW.imageSix)"/>
                </div>
              </div>
              </div>
            </div>
            <div class="flex justify-center mb-8">
                <button class="my-2 md:my-6 lg:my-10">
                    <nuxt-link class="bg-middleYellow text-sm md:text-sm lg:text-lg p-2 md:p-2 lg:p-4 sm:p-2 w-5/5 md:w-5/5 lg:w-5/5 text-black hover:opacity-70 rounded-sm" :to="{ path: `/adopt` }"> Adoption Application</nuxt-link>
                </button>
            </div>
        </div>
        <div v-else class="text-2xl md:text-3xl lg:text-3xl font-bold text-red-600">Error - Please go back</div>
        <hr class="h-2 w-11/12 rounded-b-md" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
    </div>

</template>



<script>
import { groq } from '@nuxtjs/sanity'
import sanity from "../../sanityClient"
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

export default {
    methods: {
      imageUrlFor(source) {
        return imageBuilder.image(source);
      },
    },
    
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "chihuahua" && slug.current == "${params.slug}"][0]`
    const querySE = groq`*[_type == "chihuahuasSE" && slug.current == "${params.slug}"][0]`
    const queryMW = groq`*[_type == "chihuahuasMW" && slug.current == "${params.slug}"][0]`
    const chihuahua = await $sanity.fetch(query)
    const chihuahuaSE = await $sanity.fetch(querySE)
    const chihuahuaMW = await $sanity.fetch(queryMW)
    return { chihuahua, chihuahuaSE, chihuahuaMW }
  }
}
</script>

<style scoped>
p {
 padding-bottom: 14px;
}

</style>