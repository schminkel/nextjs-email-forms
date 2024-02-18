'use server'

import Image from "next/image";
import { SESForm } from "@/components/SESForm";
import { SMTPForm } from "@/components/SMTPForm";
import { Footer } from "@/components/Footer"
import { TableCellsIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

export default async function Home() {

  return (
      <main
          className="flex min-h-screen flex-col items-center justify-start mt-24">

        <div className="flex flex-col sm:flex-row items-center">

          <div
              className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={ 180 }
                height={ 37 }
                priority
            />
          </div>
          <div className="p-3 mt-1">+</div>
          <EnvelopeIcon className="w-14"/>
          <div className="p-3 mt-1">+</div>
          <TableCellsIcon className="w-14"/>
        </div>

        <div className="flex flex-col sm:flex-row items-center mt-5">
          <div className="opacity-50 text-base">
            Demo Project with
          </div>
          &nbsp;
          <div className="opacity-50 text-base">
            Next.js + E-Mail + Forms
          </div>
        </div>

          <SESForm/>

          <SMTPForm/>

          <div className="mt-8"/>

          <Footer/>

      </main>
);
}
