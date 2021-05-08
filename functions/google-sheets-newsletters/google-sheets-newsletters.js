const { GOOGLE_SPREADSHEET_ID_FROM_URL, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env

// required env vars
if (!GOOGLE_SERVICE_ACCOUNT_EMAIL)
  throw new Error('no GOOGLE_SERVICE_ACCOUNT_EMAIL env var set');
if (!GOOGLE_PRIVATE_KEY)
  throw new Error('no GOOGLE_PRIVATE_KEY env var set');
if (!GOOGLE_SPREADSHEET_ID_FROM_URL)
  throw new Error('no GOOGLE_SPREADSHEET_ID_FROM_URL env var set');

const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event) => {
  const UserIP = event.headers['x-nf-client-connection-ip']; 
  const doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID_FROM_URL);

  await doc.useServiceAccountAuth({
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  });
  
  await doc.loadInfo(); // loads document properties and worksheets. required.
  const sheet = doc.sheetsByIndex[0]; 
 

  try {
    switch (event.httpMethod) {
      
      /* POST /.netlify/functions/google-spreadsheet-fn */
      case 'POST':
        /* parse the string body into a useable JS object */
        console.log(event.body)
        const data = [event.body];
        data.UserIP = UserIP;
        // console.log('`POST` invoked', data);
        const addedRow = await sheet.addRow(data);
        // console.log({ addedRow });
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: `POST Success - added row ${addedRow._rowNumber - 1}`,
            rowNumber: addedRow._rowNumber - 1 // minus the header row
          })
        };

      /* Fallthrough case */
      default:
        return {
          statusCode: 500,
          body: 'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE'
        };
    }
  } catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
};
