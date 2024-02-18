'use client'

import React from "react";
import clsx from 'clsx';
import { useFormStatus } from 'react-dom'

export function SubmitButton( props ) {
  const { pending } = useFormStatus();

  return <button
      type="submit"
      disabled={ pending }
      aria-disabled={ pending }
      className={ clsx(
          "block w-full mt-12 items-center gap-x-2 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-sky-600",
          {
            "hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600": !pending
          } ) + " " + props.className }
  >
    { props.children }
    { pending && "..." }
  </button>
}
