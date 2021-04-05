const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_URL, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS } = process.env
const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN, url: MAILGUN_URL })

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }

  const data = JSON.parse(event.body)
  if (!data.contactName || !data.contactEmail) {
    return { statusCode: 422, body: 'Name, email, and message are required.' }
  }

  const mailgunData = {
    from: FROM_EMAIL_ADDRESS,
    to: CONTACT_TO_EMAIL_ADDRESS,
    'h:Reply-To': data.contactEmail,
    subject: `New contact from ${data.contactName}`,
    // text: `Name: ${data.contactName}\nEmail: ${data.contactEmail}\nMessage: ${data.message}`
    html: `
    <p>Name: ${contactName}</p>
    <p>Email: ${contactEmail}</p>
    <p>Address First Line: ${contactAddressFirstLine}</p>
    <p>Address Second Line: ${contactAddressSecondLine}</p>
    <p>City: ${contactAddressCity}</p>
    <p>State: ${contactAddressState}</p>
    <p>Zipcode: ${contactAddressZipcode}</p>
    <p>Personal Phone Number: ${contactPersonalPhone}</p>
    <p>Work Phone Number: ${contactWorkPhone}</p>
    <p>Age: ${contactAge}</p>
    <p>Current Employer: ${contactEmployer}</p>
    <p>I have read the CRT About page: ${contactHasReadCRTAbout}</p>
    <p>I have read CRT's Policy and Procedures: ${contactHasReadCRTPolicy}</p>
    <p>Have you volunteered previously with a breed rescue group?: ${contactHasVolunteered}</p>
    <p>Have you fostered previously? ${contactHasFostered}</p>
    <p>Do you have any children in your household? ${contactHasChildren}</p>
    <p>Number of children and ages: ${contactChildrenAges}</p>
    <p>Long range plans within the next year? ${contactLongRangePlans}</p>
    <p>Residence Type: ${contactResidence}</p>
    <p>Own or rent? ${contactOwnOrRent}</p>
    <p>If renting, please provide landlord's name, address and telephone #: ${contactLandlordDetails}</p>
    <p>Fence type? ${contactFence}</p>
    <p>Size of living area: ${contactSizeOfLivingArea}</p>
    <p>Size of fenced area: ${contactSizeOfFencedArea}</p>
    <p>If there is not a fenced yard, will you provide leashed walks: ${contactWillProvideLeashedWalks}</p>
    <p>Please list the names of all non-related residents/Housemates: ${contactNamesNonRelatedResidents}</p>
    <p>Are you willing to permit a home check by a CRT representative? ${contactPermitHomeCheck}</p>
    <p>How many hours will the foster(s) be left alone per day? ${contactHoursAlone}</p>
    <p>Where will the dog be kept when alone during day? ${contactWhereKeptAloneDay}</p>
    <p>Where will the dog be kept when alone during night? ${contactWhereKeptAloneNight}</p>
    <p>Where will the dog be kept when alone when family is home? ${contactWhereKeptAloneFamilyHome}</p>
    <p>If there is any aspect of your home that a dog could affect (white carpet, antiques, etc.), please identify: ${contactAspectHome}</p>
    <p>What is the level of activity in your household? ${contactLevelActivity}</p>
    <p>Does anyone in your household have allergies to hair or dust? ${contactAllergies}</p>
    <p>Are you often away for extended periods? ${contactAwayExtendedPeriodsOne}</p>
    <p>If so, will you: ${contactAwayExtendedPeriodsTwo}</p>
    <p>Do you currently own any dogs? ${contactCurrentDogs}</p>
    <p>If so, please provide breed(s), sex(es), and age(s): ${contactCurrentDogsBreedSexAge}</p>
    <p>Do you currently own any cats? ${contactCats}</p>
    <p>If so, please provide sex(es), and age(s): ${contactCatsSexAge}</p>
    <p>Do you own any other type of pets? ${contactOtherPetsOne}</p>
    <p>If so, what kind? ${contactOtherPetsTwo}</p>
    <p>Are all your pets up to date on vaccines? ${contactCurrentPetsVaccines}</p>
    <p>Are all current pets spayed or neutered? ${contactCurrentPetsSpayedNeutered}</p>
    <p>Have you owned animals not listed above in the past? ${contactPastAnimals}</p>
    <p>If yes, please answer the following: ${contactPastAnimalsDisposition}</p>
    <p>Do you have a gender preference? ${contactGenderPreference}</p>
    <p>Any special circumstances CRT should be aware of? ${contactSpecialCircumstance}</p>
    <p>If so, please describe: ${contactSpecialCircumstanceTwo}</p>
    <p>Are you willing to groom the animal? ${contactWillingToGroom}</p>
    <p>Are you willing to foster an animal that has health problems? ${contactWillingHealthProblems}</p>
    <p>If yes, any problem not accepted? ${contactWillingHealthProblemsNotAccepted}</p>
    <p>What age are you willing to foster? ${contactAgePreference}</p>
    <p>Are you willing to provide basic training and socialization? ${contactWillingProvideTraining}</p>
    <p>If you have any children in the household, how much of the responsibility will your child be given in the care and management of the dog? ${contactChildrenResponsibility}</p>
    <p>How much adult supervision will the dog and child be provided? ${contactChildrenAdultSupervision}</p>
    <p>How many interactions will the dog have with neighborhood children? ${contactInteractionsNeighborhoodChildren}</p>
    <p>How would you encourage or reinforce the foster dog's appropriate (*good*) behavior? ${contactPositiveBehaviorReinforcement}</p>
    <p>How would you prevent or manage the foster dog's inappropriate (*not so good*) ill-timed behavior? ${contactInappropriateBehaviorManagement}</p>
    <p>Are all members of your household aware that you will be fostering? ${contactAllMembersAware}</p>
    <p>Do they all approve? ${contactAllMembersApprove}</p>
    <p>Are you prepared to keep the foster dog for an indefinite period of time, until the dog can be placed into an approved home? ${contactPreparedIndefiniteTime}</p>
    <p>Are you aware that you must notify the CRT Board of any routine medical care necessary for the dog BEFORE the medical care is performed? ${contactNotifyMedicalCare}</p>
    <p>Are you aware that your application must be approved before you are enlisted as a CRT volunteer? ${contactAwareApprova}</p>
    <p>Do you know another CRT volunteer whom we can contact for a reference? If not just put N/A. If so, please list their name and contact information below: ${contactCRTVolunteerReference}</p>
    <p>Do you work with any other rescue groups who we can contact for a reference? If so, please list group(s) and contact information below: ${contactOtherRescueReference}</p>
    <p>Please provide the name, address and phone number of the veterinarian for your pets. ${contactVetReference}</p>
    <p>Please provide name, address and phone number for your first personal reference who is not a relative. ${contactPersonalReferenceOne}</p>
    <p>Please provide name, address and phone number for your second personal reference who is not a relative. ${contactPersonalReferenceTwo}</p>
    `
  }

  return mailgun.messages().send(mailgunData).then(() => ({
    statusCode: 200,
    body: "Your message was sent successfully! We'll be in touch."
  })).catch(error => ({
    statusCode: 422,
    body: `Error: ${error}`
  }))
}