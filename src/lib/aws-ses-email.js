import { SES } from '@aws-sdk/client-ses';

const ses = new SES( {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  region: process.env.AWS_REGION || ""
} )

export const sendMail = async ( { from, to, subject, html } ) => {
  try {
    const params = {
      Destination: {
        ToAddresses: [ to ]
      }, Message: {
        Body: {
          Html: {
            Charset: "UTF-8", Data: html
          },
        }, Subject: {
          Charset: 'UTF-8', Data: subject
        },
      }, Source: from,
    };

    return await ses.sendEmail( params );

  } catch ( error ) {
    console.log( "### Error", error );
    return { ok: false, msg: "Failed to send email", error: error };
  }
}

