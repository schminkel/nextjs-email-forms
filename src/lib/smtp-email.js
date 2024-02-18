import nodemailer from "nodemailer"

const smtpOptions = {
  host: process.env.SMTP_HOST || "",
  port: parseInt( process.env.SMTP_PORT || "" ),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASSWORD || "",
  },
}

export const sendMail = async ( data ) => {
  try {
    const transporter = nodemailer.createTransport( {
      ...smtpOptions,
    } )

    /**
     * Promise that sends an email with a timeout of 10 seconds
     */
    const sendMailWithTimeout = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('sendMail operation timed out'));
      }, 10000);

      return transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        ...data,
      }).then(resolve).catch(reject);
    });
    return await Promise.race([sendMailWithTimeout]);

  } catch ( error ) {
    console.log( "Error", error );
    return { ok: false, msg: "Failed to send email", error: error };
  }
}
