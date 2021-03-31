const fetch = require('node-fetch')
const { URL } = require('url');

const api = new URL('http://www.omdbapi.com/?i=tt3896198&apikey='+ process.env.OMDB_API_KEY);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
}

exports.handler = async (event, context) => {
  const res = await fetch(api)
    .then((response) => response.text())
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify(data),
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }))
  return res
}
