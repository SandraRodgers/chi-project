const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_URL, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS } = process.env
const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN, url: MAILGUN_URL })

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }

  const data = JSON.parse(event.body)
  if (!data.entireMessage.contactName || !data.entireMessage.contactEmail) {
    return { statusCode: 422, body: 'Name, email, and message are required.' }
  }

  const mailgunData = {
    //From address is CRT:
    from: CONTACT_TO_EMAIL_ADDRESS,
    //Send copy to applicant:
    to: data.entireMessage.contactEmail,
    'h:Reply-To': CONTACT_TO_EMAIL_ADDRESS,
    subject: `New contact from ${data.entireMessage.contactName}`,
    html: `
    <p>Name: ${data.entireMessage.contactName}</p>
    <p>Email: ${data.entireMessage.contactEmail}</p>
    <p>Address First Line: ${data.entireMessage.contactAddressFirstLine}</p>
    <p>Address Second Line: ${data.entireMessage.contactAddressSecondLine}</p>
    <p>City: ${data.entireMessage.contactAddressCity}</p>
    <p>State: ${data.entireMessage.contactAddressState}</p>
    <p>Zipcode: ${data.entireMessage.contactAddressZipcode}</p>
    <p>Personal Phone Number: ${data.entireMessage.contactPersonalPhone}</p>
    <p>Work Phone Number: ${data.entireMessage.contactWorkPhone}</p>
    <p>Age: ${data.entireMessage.contactAge}</p>
    <p>Current Employer: ${data.entireMessage.contactEmployer}</p>
    <p>I have read the CRT About page: ${data.entireMessage.contactHasReadCRTAbout}</p>
    <p>I have read CRT's Policy and Procedures: ${data.entireMessage.contactHasReadCRTPolicy}</p>
    <p>Have you volunteered previously with a breed rescue group?: ${data.entireMessage.contactHasVolunteered}</p>
    <p>Have you fostered previously? ${data.entireMessage.contactHasFostered}</p>
    <p>Do you have any children in your household? ${data.entireMessage.contactHasChildren}</p>
    <p>Number of children and ages: ${data.entireMessage.contactChildrenAges}</p>
    <p>Long range plans within the next year? ${data.entireMessage.contactLongRangePlans}</p>
    <p>Residence Type: ${data.entireMessage.contactResidence}</p>
    <p>Own or rent? ${data.entireMessage.contactOwnOrRent}</p>
    <p>If renting, please provide landlord's name, address and telephone #: ${data.entireMessage.contactLandlordDetails}</p>
    <p>Fence type? ${data.entireMessage.contactFence}</p>
    <p>Size of living area: ${data.entireMessage.contactSizeOfLivingArea}</p>
    <p>Size of fenced area: ${data.entireMessage.contactSizeOfFencedArea}</p>
    <p>If there is not a fenced yard, will you provide leashed walks: ${data.entireMessage.contactWillProvideLeashedWalks}</p>
    <p>Please list the names of all non-related residents/Housemates: ${data.entireMessage.contactNamesNonRelatedResidents}</p>
    <p>Are you willing to permit a home check by a CRT representative? ${data.entireMessage.contactPermitHomeCheck}</p>
    <p>How many hours will the foster(s) be left alone per day? ${data.entireMessage.contactHoursAlone}</p>
    <p>Where will the dog be kept when alone during day? ${data.entireMessage.contactWhereKeptAloneDay}</p>
    <p>Where will the dog be kept when alone during night? ${data.entireMessage.contactWhereKeptAloneNight}</p>
    <p>Where will the dog be kept when alone when family is home? ${data.entireMessage.contactWhereKeptAloneFamilyHome}</p>
    <p>If there is any aspect of your home that a dog could affect (white carpet, antiques, etc.), please identify: ${data.entireMessage.contactAspectHome}</p>
    <p>What is the level of activity in your household? ${data.entireMessage.contactLevelActivity}</p>
    <p>Does anyone in your household have allergies to hair or dust? ${data.entireMessage.contactAllergies}</p>
    <p>Are you often away for extended periods? ${data.entireMessage.contactAwayExtendedPeriodsOne}</p>
    <p>If so, will you: ${data.entireMessage.contactAwayExtendedPeriodsTwo}</p>
    <p>Do you currently own any dogs? ${data.entireMessage.contactCurrentDogs}</p>
    <p>If so, please provide breed(s), sex(es), and age(s): ${data.entireMessage.contactCurrentDogsBreedSexAge}</p>
    <p>Do you currently own any cats? ${data.entireMessage.contactCats}</p>
    <p>If so, please provide sex(es), and age(s): ${data.entireMessage.contactCatsSexAge}</p>
    <p>Do you own any other type of pets? ${data.entireMessage.contactOtherPetsOne}</p>
    <p>If so, what kind? ${data.entireMessage.contactOtherPetsTwo}</p>
    <p>Are all your pets up to date on vaccines? ${data.entireMessage.contactCurrentPetsVaccines}</p>
    <p>Are all current pets spayed or neutered? ${data.entireMessage.contactCurrentPetsSpayedNeutered}</p>
    <p>Have you owned animals not listed above in the past? ${data.entireMessage.contactPastAnimals}</p>
    <p>If yes, please answer the following: ${data.entireMessage.contactPastAnimalsDisposition}</p>
    <p>Do you have a gender preference? ${data.entireMessage.contactGenderPreference}</p>
    <p>Any special circumstances CRT should be aware of? ${data.entireMessage.contactSpecialCircumstance}</p>
    <p>If so, please describe: ${data.entireMessage.contactSpecialCircumstanceTwo}</p>
    <p>Are you willing to groom the animal? ${data.entireMessage.contactWillingToGroom}</p>
    <p>Are you willing to foster an animal that has health problems? ${data.entireMessage.contactWillingHealthProblems}</p>
    <p>If yes, any problem not accepted? ${data.entireMessage.contactWillingHealthProblemsNotAccepted}</p>
    <p>What age are you willing to foster? ${data.entireMessage.contactAgePreference}</p>
    <p>Are you willing to provide basic training and socialization? ${data.entireMessage.contactWillingProvideTraining}</p>
    <p>If you have any children in the household, how much of the responsibility will your child be given in the care and management of the dog? ${data.entireMessage.contactChildrenResponsibility}</p>
    <p>How much adult supervision will the dog and child be provided? ${data.entireMessage.contactChildrenAdultSupervision}</p>
    <p>How many interactions will the dog have with neighborhood children? ${data.entireMessage.contactInteractionsNeighborhoodChildren}</p>
    <p>How would you encourage or reinforce the foster dog's appropriate (*good*) behavior? ${data.entireMessage.contactPositiveBehaviorReinforcement}</p>
    <p>How would you prevent or manage the foster dog's inappropriate (*not so good*) ill-timed behavior? ${data.entireMessage.contactInappropriateBehaviorManagement}</p>
    <p>Are all members of your household aware that you will be fostering? ${data.entireMessage.contactAllMembersAware}</p>
    <p>Do they all approve? ${data.entireMessage.contactAllMembersApprove}</p>
    <p>Are you prepared to keep the foster dog for an indefinite period of time, until the dog can be placed into an approved home? ${data.entireMessage.contactPreparedIndefiniteTime}</p>
    <p>Are you aware that you must notify the CRT Board of any routine medical care necessary for the dog BEFORE the medical care is performed? ${data.entireMessage.contactNotifyMedicalCare}</p>
    <p>Are you aware that your application must be approved before you are enlisted as a CRT volunteer? ${data.entireMessage.contactAwareApprova}</p>
    <p>Do you know another CRT volunteer whom we can contact for a reference? If not just put N/A. If so, please list their name and contact information below: ${data.entireMessage.contactCRTVolunteerReference}</p>
    <p>Do you work with any other rescue groups who we can contact for a reference? If so, please list group(s) and contact information below: ${data.entireMessage.contactOtherRescueReference}</p>
    <p>Please provide the name, address and phone number of the veterinarian for your pets. ${data.entireMessage.contactVetReference}</p>
    <p>Please provide name, address and phone number for your first personal reference who is not a relative. ${data.entireMessage.contactPersonalReferenceOne}</p>
    <p>Please provide name, address and phone number for your second personal reference who is not a relative. ${data.entireMessage.contactPersonalReferenceTwo}</p>
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
