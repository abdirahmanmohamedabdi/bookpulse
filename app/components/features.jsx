/* This example requires Tailwind CSS v2.0+ */
import { BookOpenIcon, SearchIcon, FlagIcon } from '@heroicons/react/outline'

const features = [
  {
    id: 1,
    name: 'Track Reading Progress',
    description:
      'Easily track your reading progress and manage your reading activities. See your current reads, track your progress with visual indicators, and organize your books.',
    icon: BookOpenIcon,
  },
  {
    id: 2,
    name: 'Discover New Books',
    description:
      'Discover new books and find exciting new titles to add to your reading list. Get personalized recommendations and explore curated lists based on your interests.',
    icon: SearchIcon,
  },
  {
    id: 3,
    name: 'Set and Achieve Reading Goals',
    description:
      'Set personalized reading goals and milestones. Stay motivated with reminders and progress updates as you work towards achieving your reading goals.',
    icon: FlagIcon,
  },
]

export default function Example() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl font-font leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Enhance Your Reading Experience with BookPulse
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center font-font text-xl text-gray-500">
            Track your reading progress, discover new books, and set and achieve your reading goals all in one place.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 font-font tracking-tight sm:text-3xl">
              Key Features
            </h3>
            <p className="mt-3 text-lg font-font text-gray-500">
              BookPulse offers a range of features to help you manage your reading activities and stay motivated.
            </p>

            <dl className="mt-10 space-y-10">
              {features.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-three text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium font-font text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base font-font text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src="/features.png"
              alt="Feature illustration"
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

      </div>
    </div>
  )
}
