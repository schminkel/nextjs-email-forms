'use client'

import React from "react";
import clsx from 'clsx';
import { sesMailAction } from "@/app/actions/sesMailAction";
import { useFormState } from "react-dom"
import { SubmitButton } from "@/components/SubmitButton";

const initialState = {
  message: "--",
  response: "",
  error: undefined
}

export function SESForm() {

  const [ state, formAction ] = useFormState( sesMailAction, initialState );

  return (
      <form className="w-[300px] sm:w-[560px]" action={ formAction }>

        <div className="text-center mt-32">
          <h2 className="text-xl font-medium tracking-tight text-gray-900 sm:text-3xl dark:text-white">
            AWS SES
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-500">
            Send a test E-Mail from Next.js via AWS SES.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          <div>
            <label htmlFor="from"
                   className="block text-sm font-semibold leading-6 text-gray-900">
              From
            </label>
            <div className="mt-2.5">
              <input
                  defaultValue="thorsten@schminkel.de"
                  type="text"
                  name="from"
                  id="from"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="to"
                   className="block text-sm font-semibold leading-6 text-gray-900">
              To
            </label>
            <div className="mt-2.5">
              <input
                  defaultValue="thorsten@schminkel.de"
                  type="text"
                  name="to"
                  id="to"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="subject"
                   className="block text-sm font-semibold leading-6 text-gray-900">
              Subject
            </label>
            <div className="mt-2.5">
              <input
                  defaultValue="Test E-Mail send from Next.js via AWS-SES"
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="text"
                   className="block text-sm font-semibold leading-6 text-gray-900">
              Text
            </label>
            <div className="mt-2.5">
              <textarea
                  name="text"
                  id="text"
                  rows={ 4 }
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  defaultValue="This text will be inserted to the E-Mail template using a variable!"
              />
            </div>
          </div>

        </div>

        <SubmitButton className="">
          Send E-Mail via AWS SES
        </SubmitButton>

        <div className={ "text-center mt-4 text-green-700" + clsx( " ",
            { "text-red-700": state?.error } ) }>
          <div className="mt-8 text-center">{ state?.message }</div>
          <div
              className="mt-2 text-2xs text-center break-all">{ state?.response }</div>
          { state?.error !== undefined && (
              <div className="mt-2 text-2xs text-center break-all">
                Error: { JSON.stringify( state?.error ) }
              </div>
          ) }
        </div>

      </form>
  )
}

