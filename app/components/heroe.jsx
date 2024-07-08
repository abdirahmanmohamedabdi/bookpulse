import React from 'react'
import { ExternalLinkIcon } from '@heroicons/react/solid'

export default function Heroe()  {
  return (
    <div className="relative bg-th">
    <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img
        className="w-full h-full object-cover"
        src="/background.png"
        alt=""
      />
    </div>
    <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="md:ml-auto md:w-1/2 md:pl-10">
        <h2 className="text-base font-bold uppercase tracking-wider text-one font-font ">Bookpulse</h2>
        <p className="mt-2 text-four text-3xl font-extrabold tracking-tight font-font text-three sm:text-4xl">Your Next Great Read is Just a Pulse Away</p>
        <p className="mt-3 text-lg text-three font-font">
        Find your next favorite book effortlessly with BookPulse. Our platform makes discovering great reads quick and enjoyable.
        </p>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-one text-font bg-white font-font hover:bg-gray-50"
            >
              Get Started
              <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-one" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
