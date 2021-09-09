import sanityClient from '@sanity/client'

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: '05mmi4eq',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
})