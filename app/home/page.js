'use client'
import React from 'react'
import { auth } from '../auth'
import { redirect } from 'next/navigation'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Homepage = async  () => {

    const session = await auth();

    if (!session?.user) redirect("/");
  return (
    <div>
    
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-semibold">MyApp</span>
        <div className="flex items-center">
          {/* <img src={session?.user?.image} alt="User" className="h-10 w-10 rounded-full mr-2" />
          <span>{session?.user?.name}</span> */}
        </div>
      </div>
    </nav>
    </div>
  )

}

export default Homepage