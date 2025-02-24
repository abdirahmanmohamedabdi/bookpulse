"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid';
import SocialButtons from "../components/socialbuttons";

export default function Signup() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get('name');
      const email = formData.get('email');
      const password = formData.get('password');

      const response = await fetch('/api/register', 
        { method: 'POST', 
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ name, email, password })
        });

      if (response.status === 201) {
        setSuccess(true);
        setTimeout(() => {
          router.push('/signin');
        }, 2000);
      }

    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <>
      {success && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2">
          <div className="rounded-md bg-white p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium font-font text-two">Successfully signed up</p>
              </div>
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    type="button"
                    className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                    onClick={() => setSuccess(false)}
                  >
                    <span className="sr-only">Dismiss</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
     
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="/logo.png"
            alt="Workflo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold  font-font text-gray-900">Sign up for an account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="/signin" className="font-medium text-three font-font  hover:text-one">
              Sign in
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm  font-font font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm  font-font font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium  font-font text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4  font-font border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-three  hover:bg-one focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white font-font text-gray-500">Or continue with</span>
                </div>
              </div>
              <SocialButtons/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
