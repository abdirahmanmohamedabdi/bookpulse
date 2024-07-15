import React from 'react'
import { doNextlogout } from '../actions/app'

const Logout = () => {
  return (
    <form action={doNextlogout}>
<div className="flex items-center md:ml-12">
    <button
              
                className="ml-5  items-center  px-4 py-2 border border-transparent rounded-md shadow-sm  font-font text-white bg-one hover:bg-gray-500"
                type="submit"
              >
                Log out
              
              </button>
              </div>
              
    </form>
  )
}

export default Logout