<template>
  <div class="bg-whitesmoke pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full">
    <hr class="h-2 mt-10 w-11/12" style="background: linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%);">
      <div class="flex items-center justify-center flex-col bg-white w-11/12">
        <h1 class="title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8">{{fosterInfo[0].subtitle}}</h1>
          <div class="flex flex-col px-4 w-11/12 bg-white">
            <div class="text-center py-4">
              <h2 class="font-semibold">If you would like to help CRT by fostering chihuahuas, please read the following information.</h2>
            </div>
            <block-content :blocks="child" v-for="child in fosterInfo[0].description" :key="child._id" />
          </div>
          
          <!-- Foster Application Form -->
          <div class="flex flex-col items-center justify-center w-12/12 py-8">
            <h1 class="title text-2xl md:text-2xl lg:text-2xl font-bold">
              Foster Application Form
            </h1>

          <section class="contact-form w-11/12 py-4">
            
            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Name:</label>
              <div class="control w-8/12">
                <input v-model="contactName" class="input w-full bg-gray-200 border border-gray-300 py-1 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Email</label>
              <div class="control w-8/12">
                <input v-model="contactEmail" class="input w-full bg-gray-200 border border-gray-300 py-1" type="email">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Address First Line</label>
              <div class="control w-8/12">
                <input v-model="contactAddressFirstLine" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Address Second Line</label>
              <div class="control w-8/12">
                <input v-model="contactAddressSecondLine" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">City</label>
              <div class="control w-8/12">
                <input v-model="contactAddressCity" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">State</label>
              <div class="control w-8/12">
                <input v-model="contactAddressState" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Zipcode</label>
              <div class="control w-8/12">
                <input v-model="contactAddressZipcode" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Personal Phone Number</label>
              <div class="control w-8/12">
                <input v-model="contactPersonalPhone" class="input w-full bg-gray-200 border border-gray-300 py-1" type="tel">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Work Phone Number</label>
              <div class="control w-8/12">
                <input v-model="contactWorkPhone" class="input w-full bg-gray-200 border border-gray-300 py-1" type="tel">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Age</label>
              <div class="control w-8/12">
                <input v-model="contactAge" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Current Employer</label>
              <div class="control w-8/12">
                <input v-model="contactEmployer" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">I have read the CRT About page</label>
              <div class="control w-8/12">
                <select v-model="contactHasReadCRTAbout" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">I have read CRT's Policy and Procedures</label>
              <div class="control w-8/12">
                <select v-model="contactHasReadCRTPolicy" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Have you volunteered previously with a breed rescue group?</label>
              <div class="control w-8/12">
                <select v-model="contactHasVolunteered" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Have you fostered previously?</label>
              <div class="control w-8/12">
                <select v-model="contactHasFostered" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Do you have any children in your household?</label>
              <div class="control w-8/12">
                <select v-model="contactHasChildren" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Number of children and ages</label>
              <div class="control w-8/12">
                <input v-model="contactChildrenAges" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Long range plans within the next year?</label>
              <div class="control w-8/12">
                <textarea v-model="contactLongRangePlans" class="input w-full bg-gray-200 border border-gray-300 py-1"/>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Residence Type</label>
              <div class="control w-8/12">
                <select v-model="contactResidence" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Apt/Condo</option>
                  <option>Townhouse</option>
                  <option>Trailer</option>
                  <option>Single Family Dwelling</option>
                  <option>Farm</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Own or rent?</label>
              <div class="control w-8/12">
                <select v-model="contactOwnOrRent" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Own</option>
                  <option>Rent</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">If renting, please provide landlord's name, address and telephone #</label>
              <div class="control w-8/12">
                <textarea v-model="contactLandlordDetails" class="w-full bg-gray-200 border border-gray-300 py-1"/>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Fence type?</label>
              <div class="control w-8/12">
                <select v-model="contactFence" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>No Fence</option>
                  <option>Wooden Fence</option>
                  <option>Chain Fence</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Size of living area</label>
              <div class="control w-8/12">
                <input v-model="contactSizeOfLivingArea" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Size of fenced area</label>
              <div class="control w-8/12">
                <input v-model="contactSizeOfFencedArea" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">If there is not a fenced yard, will you provide leashed walks</label>
              <div class="control w-8/12">
                <select v-model="contactWillProvideLeashedWalks" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Frequently</option>
                  <option>Occasionally</option>
                  <option>None</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Please list the names of all non-related residents/Housemates</label>
              <div class="control w-8/12">
                <textarea v-model="contactNamesNonRelatedResidents" class="w-full bg-gray-200 border border-gray-300 py-1"/>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Are you willing to permit a home check by a CRT representative?</label>
              <div class="control w-8/12">
                <select v-model="contactPermitHomeCheck" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">How many hours will the foster(s) be left alone per day?</label>
              <div class="control w-8/12">
                <input v-model="contactHoursAlone" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Where will the dog be kept when alone during day?</label>
              <div class="control w-8/12">
                <input v-model="contactWhereKeptAloneDay" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Where will the dog be kept when alone during night?</label>
              <div class="control w-8/12">
                <input v-model="contactWhereKeptAloneNight" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Where will the dog be kept when alone when family is home?</label>
              <div class="control w-8/12">
                <input v-model="contactWhereKeptAloneFamilyHome" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">If there is any aspect of your home that a dog could affect (white carpet, antiques, etc.), please identify:</label>
              <div class="control w-8/12">
                <input v-model="contactAspectHome" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">What is the level of activity in your household?</label>
              <div class="control w-8/12">
                <select v-model="contactLevelActivity" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Laid Back</option>
                  <option>Constantly on the run</option>
                  <option>Athletic/Jogger type</option>
                  <option>Physically Handicapped</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Does anyone in your household have allergies to hair or dust?</label>
              <div class="control w-8/12">
                <select v-model="contactAllergies" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Are you often away for extended periods?</label>
              <div class="control w-8/12">
                <select v-model="contactAwayExtendedPeriodsOne" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">If so, will you:</label>
              <div class="control w-8/12">
                <select v-model="contactAwayExtendedPeriodsTwo" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Board</option>
                  <option>Hire a pet sitter</option>
                  <option>Take the animal with you</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Do you currently own any dogs?</label>
              <div class="control w-8/12">
                <select v-model="contactCurrentDogs" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">If so, please provide breed(s), sex(es), and age(s)</label>
              <div class="control w-8/12">
                <input v-model="contactCurrentDogsBreedSexAge" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Do you currently own any cats?</label>
              <div class="control w-8/12">
                <select v-model="contactCatsSexAge" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">If so, please provide sex(es), and age(s):</label>
              <div class="control w-8/12">
                <input v-model="contactCatsSexAge" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Do you own any other type of pets?</label>
              <div class="control w-8/12">
                <select v-model="contactOtherPetsOne" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">If so, what kind?</label>
              <div class="control w-8/12">
                <input v-model="contactOtherPetsTwo" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Are all your pets up to date on vaccines?</label>
              <div class="control w-8/12">
                <select v-model="contactCurrentPetsVaccines" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Are all current pets spayed or neutered?</label>
              <div class="control w-8/12">
                <select v-model="contactCurrentPetsSpayedNeutered" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Have you owned animals not listed above in the past?</label>
              <div class="control w-8/12">
                <select v-model="contactPastAnimals" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">If yes, please answer the following:</label>
              <div class="control w-8/12">
                <select v-model="contactPastAnimalsDisposition" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Ran away</option>
                  <option>Stolen</option>
                  <option>Sold</option>
                  <option>Lost</option>
                  <option>Given away</option>
                  <option>Given up for adoption to a rescue organization</option>
                  <option>Given up to an animal shelter</option>
                  <option>Euthanized</option>
                  <option>Died</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Do you have a gender preference?</label>
              <div class="control w-8/12">
                <select v-model="contactGenderPreference" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Any special circumstances CRT should be aware of?</label>
              <div class="control w-8/12">
                <select v-model="contactSpecialCircumstance" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">If so, please describe</label>
              <div class="control w-8/12">
                <textarea v-model="contactSpecialCircumstanceTwo" class="input w-full bg-gray-200 border border-gray-300 py-1"/>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Are you willing to groom the animal?</label>
              <div class="control w-8/12">
                <select v-model="contactWillingToGroom" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Are you willing to foster an animal that has health problems?</label>
              <div class="control w-8/12">
                <select v-model="contactWillingHealthProblemsNotAccepted" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">If yes, any problem not accepted?</label>
              <div class="control w-8/12">
                <input v-model="contactWillingHealthProblemsNotAccepted" class="input w-full bg-gray-200 border border-gray-300 py-1" type="text">
              </div>
            </div>

           <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">What age are you willing to foster?</label>
              <div class="control w-8/12">
                <select v-model="contactAgePreference" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Any age</option>
                  <option>Adult</option>
                  <option>Puppy</option>
                  <option>Senior</option>
                </select>
              </div>
            </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="flex items-center label w-4/12 pl-4">Are you willing to provide basic training and socialization?</label>
              <div class="control w-8/12">
                <select v-model="contactWillingProvideTraining" class="w-full bg-gray-200 border border-gray-300 py-1">
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">If you have any children in the household, how much of the responsibility will your child be given in the care and management of the dog?</label>
            <div class="control w-8/12">
              <select v-model="contactChildrenResponsibility" class="w-full bg-gray-200 border border-gray-300 py-1">
                <option></option>
                <option>Maximum</option>
                <option>Some</option>
                <option>Minimal</option>
                <option>None</option>
              </select>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">How much adult supervision will the dog and child be provided?</label>
            <div class="control w-8/12">
              <select v-model="contactChildrenAdultSupervision" class="w-full bg-gray-200 border border-gray-300 py-1">
                <option></option>
                <option>Maximum</option>
                <option>Some</option>
                <option>Minimal</option>
                <option>None</option>
              </select>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">How many interactions will the dog have with neighborhood children?</label>
            <div class="control w-8/12">
              <select v-model="contactInteractionsNeighborhoodChildren" class="w-full bg-gray-200 border border-gray-300 py-1">
                <option></option>
                <option>Maximum</option>
                <option>Some</option>
                <option>Minimal</option>
                <option>None</option>
              </select>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">How would you encourage or reinforce the foster dog's appropriate (*good*) behavior?</label>
            <div class="control w-8/12">
              <textarea v-model="contactPositiveBehaviorReinforcement" class="w-full bg-gray-200 border border-gray-300 py-1"/>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">How would you prevent or manage the foster dog's inappropriate (*not so good*) ill-timed behavior?</label>
            <div class="control w-8/12">
              <textarea v-model="contactInappropriateBehaviorManagement" class="w-full bg-gray-200 border border-gray-300 py-1"/>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">Are all members of your household aware that you will be fostering?</label>
            <div class="control w-8/12">
              <select v-model="contactAllMembersAware" class="w-full bg-gray-200 border border-gray-300 py-1">
                <option></option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">Do they all approve?</label>
            <div class="control w-8/12">
              <select v-model="contactAllMembersApprove" class="w-full bg-gray-200 border border-gray-300 py-1">
                <option></option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">Are you prepared to keep the foster dog for an indefinite period of time, until the dog can be placed into an approved home?</label>
            <div class="control w-8/12">
              <select v-model="contactPreparedIndefiniteTime" class="w-full bg-gray-200 border border-gray-300 py-1">
                <option></option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">Are you aware that you must notify the CRT Board of any routine medical care necessary for the dog BEFORE the medical care is performed?</label>
            <div class="control w-8/12">
              <select v-model="contactNotifyMedicalCare" class="w-full bg-gray-200 border border-gray-300 py-1">
                <option></option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">Are you aware that your application must be approved before you are enlisted as a CRT volunteer?</label>
            <div class="control w-8/12">
              <select v-model="contactAwareApproval" class="w-full bg-gray-200 border border-gray-300 py-1">
                <option></option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">Do you know another CRT volunteer whom we can contact for a reference? If not just put N/A. If so, please list their name and contact information below:</label>
            <div class="control w-8/12">
              <textarea v-model="contactCRTVolunteerReference" class="w-full bg-gray-200 border border-gray-300 py-1"/>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">Do you work with any other rescue groups who we can contact for a reference? If so, please list group(s) and contact information below</label>
            <div class="control w-8/12">
              <textarea v-model="contactOtherRescueReference" class="w-full bg-gray-200 border border-gray-300 py-1"/>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">Please provide the name, address and phone number of the veterinarian for your pets.</label>
            <div class="control w-8/12">
              <textarea v-model="contactVetReference" class="w-full bg-gray-200 border border-gray-300 py-1"/>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">Please provide name, address and phone number for your first personal reference who is not a relative.</label>
            <div class="control w-8/12">
              <textarea v-model="contactPersonalReferenceOne" class="w-full bg-gray-200 border border-gray-300 py-1"/>
            </div>
          </div>

          <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
            <label class="flex items-center label w-4/12 pl-4">Please provide name, address and phone number for your second personal reference who is not a relative.</label>
            <div class="control w-8/12">
              <textarea v-model="contactPersonalReferenceTwo" class="w-full bg-gray-200 border border-gray-300 py-1"/>
            </div>
          </div>

            <!-- <div class="field flex border border-gray-300 w-12/12 py-2 px-2">
              <label class="label w-4/12 pl-4">Your Message</label>
              <div class="control w-8/12">
                <textarea v-model="contactMessage" class="textarea w-full bg-gray-200 border border-gray-300" />
              </div>
            </div> -->

            <div class="field flex justify-around border border-gray-300 w-12/12 py-2 px-2 is-grouped">
            <div class="w-2/6 flex justify-around">
              <div class="control">
                <button class="button is-link bg-middleYellow text-sm p-1 md:p-2 lg:p-4 my-8 border border-middleYellow  text-black" @click="sendMessage">
                  Send Message
                </button>
              </div>
              <div class="control">
                <button class="button is-text border border-carolinaBlue text-sm p-1 md:p-2 lg:p-4 my-8  text-black" @click="cancelMessage">
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
import groq from 'groq'


export default {

  //Queries
  async asyncData({ $sanity }) {
  const queryFoster = groq`*[_type == 'information'&& name=='foster-process']`
  const fosterInfo = await $sanity.fetch(queryFoster)
  return { fosterInfo }
  },

  data () {
        return {
          messages: [],
          contactName: '',
          contactEmail: '',
          contactAddressFirstLine: '',
          contactAddressSecondLine: '',
          contactAddressCity: '',
          contactAddressState: '',
          contactAddressZipcode: '',
          contactPersonalPhone: '',
          contactWorkPhone: '',
          contactAge: '',
          contactEmployer: '',
          contactHasReadCRTAbout: '',
          contactHasReadCRTPolicy: '',
          contactHasVolunteered: '',
          contactHasFostered: '',
          contactHasChildren: '',
          contactChildrenAges: '',
          contactLongRangePlans: '',
          contactResidence: '',
          contactOwnOrRent: '',
          contactLandlordDetails: '',
          contactFence: '',
          contactSizeOfLivingArea: '',
          contactSizeOfFencedArea: '',
          contactWillProvideLeashedWalks: '',
          contactNamesNonRelatedResidents: '',
          contactPermitHomeCheck: '',
          contactHoursAlone: '',
          contactWhereKeptAloneDay: '',
          contactWhereKeptAloneNight: '',
          contactWhereKeptAloneFamilyHome: '',
          contactAspectHome: '',
          contactLevelActivity: '',
          contactAllergies: '',
          contactAwayExtendedPeriodsOne: '',
          contactAwayExtendedPeriodsTwo: '',
          contactCurrentDogs: '',
          contactCurrentDogsBreedSexAge: '',
          contactCats: '',
          contactCatsSexAge: '',
          contactOtherPetsOne: '',
          contactOtherPetsTwo: '',
          contactCurrentPetsVaccines: '',
          contactCurrentPetsSpayedNeutered: '',
          contactPastAnimals: '',
          contactPastAnimalsDisposition: '',
          contactGenderPreference: '',
          contactSpecialCircumstance: '',
          contactSpecialCircumstanceTwo: '',
          contactWillingToGroom: '',
          contactWillingHealthProblems: '',
          contactWillingHealthProblemsNotAccepted: '',
          contactAgePreference: '',
          contactWillingProvideTraining: '',
          contactChildrenResponsibility: '',
          contactChildrenAdultSupervision: '',
          contactInteractionsNeighborhoodChildren: '',
          contactPositiveBehaviorReinforcement: '',
          contactInappropriateBehaviorManagement: '',
          contactAllMembersAware: '',
          contactAllMembersApprove: '',
          contactPreparedIndefiniteTime: '',
          contactNotifyMedicalCare: '',
          contactAwareApproval: '',
          contactCRTVolunteerReference: '',
          contactOtherRescueReference: '',
          contactVetReference: '',
          contactPersonalReferenceOne: '',
          contactPersonalReferenceTwo: '',
          // contactMessage: ''
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
          this.contactAddressFirstLine = ''
          this.contactAddressSecondLine = ''
          this.contactAddressCity = ''
          this.contactAddressState = ''
          this.contactAddressZipcode = ''
          this.contactPersonalPhone = ''
          this.contactWorkPhone = ''
          this.contactAge = ''
          this.contactEmployer = ''
          this.contactHasReadCRTAbout = ''
          this.contactHasReadCRTPolicy = ''
          this.contactHasVolunteered = ''
          this.contactHasFostered = ''
          this.contactHasChildren = ''
          this.contactChildrenAges = ''
          this.contactLongRangePlans = ''
          this.contactResidence = ''
          this.contactOwnOrRent = ''
          this.contactLandlordDetails = ''
          this.contactFence = ''
          this.contactSizeOfLivingArea = ''
          this.contactSizeOfFencedArea = ''
          this.contactWillProvideLeashedWalks = ''
          this.contactNamesNonRelatedResidents = ''
          this.contactPermitHomeCheck = ''
          this.contactHoursAlone = ''
          this.contactWhereKeptAloneDay = ''
          this.contactWhereKeptAloneNight = ''
          this.contactWhereKeptAloneFamilyHome = ''
          this.contactAspectHome = ''
          this.contactLevelActivity = ''
          this.contactAllergies = ''
          this.contactAwayExtendedPeriodsOne = ''
          this.contactAwayExtendedPeriodsTwo = ''
          this.contactCurrentDogs = ''
          this.contactCurrentDogsBreedSexAge = ''
          this.contactCats = ''
          this.contactCatsSexAge = ''
          this.contactOtherPetsOne = ''
          this.contactOtherPetsTwo = ''
          this.contactCurrentPetsVaccines = ''
          this.contactCurrentPetsSpayedNeutered = ''
          this.contactPastAnimals = ''
          this.contactPastAnimalsDisposition = ''
          this.contactGenderPreference = ''
          this.contactSpecialCircumstance = ''
          this.contactSpecialCircumstanceTwo = ''
          this.contactWillingToGroom = ''
          this.contactWillingHealthProblems = ''
          this.contactWillingHealthProblemsNotAccepted = ''
          this.contactAgePreference = ''
          this.contactWillingProvideTraining = ''
          this.contactChildrenResponsibility = ''
          this.contactChildrenAdultSupervision = ''
          this.contactInteractionsNeighborhoodChildren = ''
          this.contactPositiveBehaviorReinforcement = ''
          this.contactInappropriateBehaviorManagement = ''
          this.contactAllMembersAware = ''
          this.contactAllMembersApprove = ''
          this.contactPreparedIndefiniteTime = ''
          this.contactNotifyMedicalCare = ''
          this.contactAwareApproval= ''
          this.contactCRTVolunteerReference = ''
          this.contactOtherRescueReference = ''
          this.contactVetReference = ''
          this.contactPersonalReferenceOne = ''
          this.contactPersonalReferenceTwo = ''
          // this.contactMessage = ''
        },
        async triggerSendMessageFunction () {
          try {
            const response = await this.$axios.$post('/.netlify/functions/foster-application-email', {
              contactName: this.contactName,
              contactEmail: this.contactEmail,
              contactAddressFirstLine: this.contactAddressFirstLine,
              contactAddressSecondLine: this.contactAddressSecondLine,
              contactAddressCity: this.contactAddressCity,
              contactAddressState: this.contactAddressState,
              contactAddressZipcode: this.contactAddressZipcode,
              contactPersonalPhone: this.contactPersonalPhone,
              contactWorkPhone: this.contactWorkPhone,
              contactAge: this.contactAge,
              contactEmployer: this.contactEmployer,
              contactHasReadCRTAbout: this.contactHasReadCRTAbout,
              contactHasReadCRTPolicy: this.contactHasReadCRTPolicy,
              contactHasVolunteered: this.contactHasVolunteered,
              contactHasFostered: this.contactHasFostered,
              contactHasChildren: this.contactHasChildren,
              contactChildrenAges: this.contactChildrenAges,
              contactLongRangePlans: this.contactLongRangePlans,
              contactResidence: this.contactResidence,
              contactOwnOrRent: this.contactOwnOrRent,
              contactLandlordDetails: this.contactLandlordDetails,
              contactFence: this.contactFence,
              contactSizeOfLivingArea: this.contactSizeOfLivingArea,
              contactSizeOfFencedArea: this.contactSizeOfFencedArea,
              contactWillProvideLeashedWalks: this.contactWillProvideLeashedWalks,
              contactNamesNonRelatedResidents: this.contactNamesNonRelatedResidents,
              contactPermitHomeCheck: this.contactPermitHomeCheck,
              contactHoursAlone: this.contactHoursAlone,
              contactWhereKeptAloneDay: this.contactWhereKeptAloneDay,
              contactWhereKeptAloneNight: this.contactWhereKeptAloneNight,
              contactWhereKeptAloneFamilyHome: this.contactWhereKeptAloneFamilyHome,
              contactAspectHome: this.contactAspectHome,
              contactLevelActivity: this.contactLevelActivity,
              contactAllergies: this.contactAllergies,
              contactAwayExtendedPeriodsOne: this.contactAwayExtendedPeriodsOne,
              contactAwayExtendedPeriodsTwo: this.contactAwayExtendedPeriodsTwo,
              contactCurrentDogs: this.contactCurrentDogs,
              contactCurrentDogsBreedSexAge: this.contactCurrentDogsBreedSexAge,
              contactCats: this.contactCats,
              contactCatsSexAge: this.contactCatsSexAge,
              contactOtherPetsOne: this.contactOtherPetsOne,
              contactOtherPetsTwo: this.contactOtherPetsTwo,
              contactCurrentPetsVaccines: this.contactCurrentPetsVaccines,
              contactCurrentPetsSpayedNeutered: this.contactCurrentPetsSpayedNeutered,
              contactPastAnimals: this.contactPastAnimals,
              contactPastAnimalsDisposition: this.contactPastAnimalsDisposition,
              contactGenderPreference: this.contactGenderPreference,
              contactSpecialCircumstance: this.contactSpecialCircumstance,
              contactSpecialCircumstanceTwo: this.contactSpecialCircumstanceTwo,
              contactWillingToGroom: this.contactWillingToGroom,
              contactWillingHealthProblems: this.contactWillingHealthProblems,
              contactWillingHealthProblemsNotAccepted: this.contactWillingHealthProblemsNotAccepted,
              contactAgePreference: this.contactAgePreference,
              contactWillingProvideTraining: this.contactWillingProvideTraining,
              contactChildrenResponsibility: this.contactChildrenResponsibility,
              contactChildrenAdultSupervision: this.contactChildrenAdultSupervision,
              contactInteractionsNeighborhoodChildren: this.contactInteractionsNeighborhoodChildren,
              contactPositiveBehaviorReinforcement: this.contactPositiveBehaviorReinforcement,
              contactInappropriateBehaviorManagement: this.contactInappropriateBehaviorManagement,
              contactAllMembersAware: this.contactAllMembersAware,
              contactAllMembersApprove: this.contactAllMembersApprove,
              contactPreparedIndefiniteTime: this.contactPreparedIndefiniteTime,
              contactNotifyMedicalCare: this.contactNotifyMedicalCare,
              contactAwareApproval: this.contactAwareApproval,
              contactCRTVolunteerReference: this.contactCRTVolunteerReference,
              contactOtherRescueReference: this.contactOtherRescueReference,
              contactVetReference: this.contactVetReference,
              contactPersonalReferenceOne: this.contactPersonalReferenceOne,
              contactPersonalReferenceTwo: this.contactPersonalReferenceTwo,
              // message: this.contactMessage
            })
            this.resetForm()
            this.messages.push({ type: 'success', text: response })
          } catch (error) {
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