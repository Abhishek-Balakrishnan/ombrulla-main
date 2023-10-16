import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { PlayIcon } from '@heroicons/react/24/solid';

// const features = [
//   {
//     name: 'Push to deploy.',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: 'SSL certificates.',
//     description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Database backups.',
//     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//     icon: ServerIcon,
//   },
// ]

export default function Example() {
  return (
    <div className="overflow-hidden bg-blue-700	 py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-white">PErformance - TRacking - ANalytics
</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">AI & IoT Enabled Asset Performance Software
</p>
              <p className="mt-6 text-lg leading-8 text-white">
              An Asset Management system that leverages artificial intelligence and the
Internet of Things for data-driven decision-making and proactive maintenance
strategies.

              </p>
            <div class="flex">
                <div>
                  <button
            type="button"
            className="inline-flex items-center rounded-full	mt-3 border border-white bg-blue-700 px-6 py-3 text-base font-medium text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <PlayIcon className="-ml-1 mr- h-6 w" aria-hidden="true" />
            
          </button>
                </div>
        <div>
          <button
                        type="submit"
                        className="flex w-26 items-center justify-center rounded-md border border-white bg-transparent py-1.5 px-3 ml-4 mt-4 text-base font-semibold leading-7 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6"
                      >
                        Book a demo
                      </button>
        </div>
            </div>
              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
          <img
            src="petranGroup-1.png"
            alt="Product screenshot"
            className="w-[42.813rem] max-w-none rounded-xl   sm:w-[42.813] md:-ml- lg:-ml-10"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
