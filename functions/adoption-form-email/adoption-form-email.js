const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_URL, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS } = process.env
const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN, url: MAILGUN_URL })

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }

  const data = JSON.parse(event.body)
  if ( !data.Name || !data.Email) {
    return { statusCode: 422, body: 'Name, email, and message are required.' }
  }

  let messages = [];

  Object.entries(data).forEach(([key, value]) => {
    messages.push(`<b>${key }:</b> ` + `<div>${ value}</div>`);
  })

  const mailgunData = {
    from: data.Email,
    to: `${CONTACT_TO_EMAIL_ADDRESS}, ${data.Email}`,
    'h:Reply-To': data.Email,
    subject: `New Adoption Application from ${data.Name}`,
    html: messages
  }

  return mailgun.messages().send(mailgunData).then(() => ({
    statusCode: 200,
    body: "Your message was sent successfully! We'll be in touch."
  })).catch(error => ({
    statusCode: 422,
    body: `Error: ${error}`
  }))
}