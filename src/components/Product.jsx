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
             <div class="w-3/12 h-24 overflow-hidden mr-2	 "> <img src="Petran-logo-2.png" alt=""  /></div>
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-white"><span class="text-[#e35106] font-bold">PE</span>rformance - <span class="text-[#e35106] font-bold">TR</span>acking - <span class="text-[#e35106] font-bold">AN</span>alytics
</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">AI & IoT Enabled Asset Performance Management
</p>
              <p className="mt-6 text-lg leading-8 text-white mb-10">
              Petran offers an Asset Performance Management (APM) system that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable proactive maintenance strategies.

              </p>
              {/* <div class="flex"> */}
              <div class="flex ">
             <div>
                <button
                class="bg-transparent leading-5	text-base	 hover:bg- text-white font-sans font-semibold hover:text-black py-2 px-4 border border-white hover:border-secoondary  w-40 h-[3.5rem]"
                style={{borderRadius:'30px',}}
            >
                Schedule Call
            </button>
             </div>
          <div>
            <button
            type="button"
            class="ml-10 h-[3.5rem] w-[3.5rem]  inline-flex items-center rounded-full border border-white bg- p-3 text-white hover:text-black shadow-sm hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <PlayIcon className="h-7 w-7" aria-hidden="true" />
          </button>
          </div>
          <div class="ml-5 font-medium text-white	text-base	font-sans mt-4" >Watch Video</div>
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
