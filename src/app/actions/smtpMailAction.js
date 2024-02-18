'use server'

import { sendMail } from "@/lib/smtp-email";
import { render } from "@react-email/render";
import WelcomeTemplate from "../../../emails/WelcomeTemplate";
import { z } from "zod";

const schema = z.object( {
  to: z
  .string( { invalid_type_error: "This field requires a string." } )
  .min( 1, { message: "This field has to be filled." } )
  .email( "This is not a valid email." ),
  subject: z
  .string( { invalid_type_error: "This field requires a string." } )
  .min( 1, { message: "This field has to be filled." } ),
  text: z
  .string( { invalid_type_error: "This field requires a string." } )
  .min( 1, { message: "This field has to be filled." } )
} )

export async function smtpMailAction( prevState, formData ) {

  const to = formData.get( "to" );
  const subject = formData.get( "subject" );
  const text = formData.get( "text" );

  // Validates the fields for an email message according to the given schema
  const validatedFields = schema.safeParse( {
    to: to,
    subject: subject,
    text: text
  } )

  // Return early if the form data is invalid
  if ( !validatedFields.success ) {
    return {
      message: "Invalid input field(s)!",
      response: JSON.stringify( validatedFields.error.flatten().fieldErrors ),
      error: true
    }
  }

  try {
    const response = await sendMail( {
      to: to,
      subject: subject,
      html: render( WelcomeTemplate( { text } ) ),
    } );

    let message;
    let error;
    if ( response.ok === false ) {
      message = "Unable to send E-Mail.";
      error = true;
    } else {
      message = "E-Mail sent successfully!"
      error = false;
    }

    return {
      message: message,
      response: JSON.stringify( response ),
      error: error
    }

  } catch ( error ) {

    console.error( 'Unable to send email', error );

    return {
      message: "Unable to send E-Mail.",
      response: error.toString(),
      error: true
    }
  }
}
