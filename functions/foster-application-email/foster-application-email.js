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
    <p>Name: ${data.contactName}</p>
    <p>Email: ${data.contactEmail}</p>
    <p>Address First Line: ${data.contactAddressFirstLine}</p>
    <p>Address Second Line: ${data.contactAddressSecondLine}</p>
    <p>City: ${data.contactAddressCity}</p>
    <p>State: ${data.contactAddressState}</p>
    <p>Zipcode: ${data.contactAddressZipcode}</p>
    <p>Personal Phone Number: ${data.contactPersonalPhone}</p>
    <p>Work Phone Number: ${data.contactWorkPhone}</p>
    <p>Age: ${data.contactAge}</p>
    <p>Current Employer: ${data.contactEmployer}</p>
    <p>I have read the CRT About page: ${data.contactHasReadCRTAbout}</p>
    <p>I have read CRT's Policy and Procedures: ${data.contactHasReadCRTPolicy}</p>
    <p>Have you volunteered previously with a breed rescue group?: ${data.contactHasVolunteered}</p>
    <p>Have you fostered previously? ${data.contactHasFostered}</p>
    <p>Do you have any children in your household? ${data.contactHasChildren}</p>
    <p>Number of children and ages: ${data.contactChildrenAges}</p>
    <p>Long range plans within the next year? ${data.contactLongRangePlans}</p>
    <p>Residence Type: ${data.contactResidence}</p>
    <p>Own or rent? ${data.contactOwnOrRent}</p>
    <p>If renting, please provide landlord's name, address and telephone #: ${data.contactLandlordDetails}</p>
    <p>Fence type? ${data.contactFence}</p>
    <p>Size of living area: ${data.contactSizeOfLivingArea}</p>
    <p>Size of fenced area: ${data.contactSizeOfFencedArea}</p>
    <p>If there is not a fenced yard, will you provide leashed walks: ${data.contactWillProvideLeashedWalks}</p>
    <p>Please list the names of all non-related residents/Housemates: ${data.contactNamesNonRelatedResidents}</p>
    <p>Are you willing to permit a home check by a CRT representative? ${data.contactPermitHomeCheck}</p>
    <p>How many hours will the foster(s) be left alone per day? ${data.contactHoursAlone}</p>
    <p>Where will the dog be kept when alone during day? ${data.contactWhereKeptAloneDay}</p>
    <p>Where will the dog be kept when alone during night? ${data.contactWhereKeptAloneNight}</p>
    <p>Where will the dog be kept when alone when family is home? ${data.contactWhereKeptAloneFamilyHome}</p>
    <p>If there is any aspect of your home that a dog could affect (white carpet, antiques, etc.), please identify: ${data.contactAspectHome}</p>
    <p>What is the level of activity in your household? ${data.contactLevelActivity}</p>
    <p>Does anyone in your household have allergies to hair or dust? ${data.contactAllergies}</p>
    <p>Are you often away for extended periods? ${data.contactAwayExtendedPeriodsOne}</p>
    <p>If so, will you: ${data.contactAwayExtendedPeriodsTwo}</p>
    <p>Do you currently own any dogs? ${data.contactCurrentDogs}</p>
    <p>If so, please provide breed(s), sex(es), and age(s): ${data.contactCurrentDogsBreedSexAge}</p>
    <p>Do you currently own any cats? ${data.contactCats}</p>
    <p>If so, please provide sex(es), and age(s): ${data.contactCatsSexAge}</p>
    <p>Do you own any other type of pets? ${data.contactOtherPetsOne}</p>
    <p>If so, what kind? ${data.contactOtherPetsTwo}</p>
    <p>Are all your pets up to date on vaccines? ${data.contactCurrentPetsVaccines}</p>
    <p>Are all current pets spayed or neutered? ${data.contactCurrentPetsSpayedNeutered}</p>
    <p>Have you owned animals not listed above in the past? ${data.contactPastAnimals}</p>
    <p>If yes, please answer the following: ${data.contactPastAnimalsDisposition}</p>
    <p>Do you have a gender preference? ${data.contactGenderPreference}</p>
    <p>Any special circumstances CRT should be aware of? ${data.contactSpecialCircumstance}</p>
    <p>If so, please describe: ${data.contactSpecialCircumstanceTwo}</p>
    <p>Are you willing to groom the animal? ${data.contactWillingToGroom}</p>
    <p>Are you willing to foster an animal that has health problems? ${data.contactWillingHealthProblems}</p>
    <p>If yes, any problem not accepted? ${data.contactWillingHealthProblemsNotAccepted}</p>
    <p>What age are you willing to foster? ${data.contactAgePreference}</p>
    <p>Are you willing to provide basic training and socialization? ${data.contactWillingProvideTraining}</p>
    <p>If you have any children in the household, how much of the responsibility will your child be given in the care and management of the dog? ${data.contactChildrenResponsibility}</p>
    <p>How much adult supervision will the dog and child be provided? ${data.contactChildrenAdultSupervision}</p>
    <p>How many interactions will the dog have with neighborhood children? ${data.contactInteractionsNeighborhoodChildren}</p>
    <p>How would you encourage or reinforce the foster dog's appropriate (*good*) behavior? ${data.contactPositiveBehaviorReinforcement}</p>
    <p>How would you prevent or manage the foster dog's inappropriate (*not so good*) ill-timed behavior? ${data.contactInappropriateBehaviorManagement}</p>
    <p>Are all members of your household aware that you will be fostering? ${data.contactAllMembersAware}</p>
    <p>Do they all approve? ${data.contactAllMembersApprove}</p>
    <p>Are you prepared to keep the foster dog for an indefinite period of time, until the dog can be placed into an approved home? ${data.contactPreparedIndefiniteTime}</p>
    <p>Are you aware that you must notify the CRT Board of any routine medical care necessary for the dog BEFORE the medical care is performed? ${data.contactNotifyMedicalCare}</p>
    <p>Are you aware that your application must be approved before you are enlisted as a CRT volunteer? ${data.contactAwareApprova}</p>
    <p>Do you know another CRT volunteer whom we can contact for a reference? If not just put N/A. If so, please list their name and contact information below: ${data.contactCRTVolunteerReference}</p>
    <p>Do you work with any other rescue groups who we can contact for a reference? If so, please list group(s) and contact information below: ${data.contactOtherRescueReference}</p>
    <p>Please provide the name, address and phone number of the veterinarian for your pets. ${data.contactVetReference}</p>
    <p>Please provide name, address and phone number for your first personal reference who is not a relative. ${data.contactPersonalReferenceOne}</p>
    <p>Please provide name, address and phone number for your second personal reference who is not a relative. ${data.contactPersonalReferenceTwo}</p>
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