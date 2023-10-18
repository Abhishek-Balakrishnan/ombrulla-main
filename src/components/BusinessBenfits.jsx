const incentives = [
    {
      name: 'Accuracy',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: " Our AI Quality Inspection excels at real-time defect detection, ensuring top product quality.",
    },
    {
      name: 'Speed',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "AI inspection, accelerates data processing, reducing inspection times and boosting production speed.      ",
    },
    {
      name: 'Cost Saving',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "AI Defect Detection automates quality control, minimizes defects, optimizes efficiency, and results in significant cost savings.        ",
    },
    {
        name: 'Predictive Maintenance',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
          "Our AI Visual Inspection with predictive maintenance prevents costly downtime and boosts production efficiency.",
      },
  
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-16 py-24 sm:px- lg:px-">
          <div className="  px- py-16 sm:p-">
            <div className="mx-auto max-w-xl lg:max-w-none">
              {/* <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  We built our business on customer service
                </h2>
              </div> */}
              <div className="mx-auto mt-12  grid max-w-sm grid-cols-1 h-96  gap-y- gap-x-7 sm:max-w-none lg:grid-cols-4 ga  ">
                {incentives.map((incentive) => (
                  <div key={incentive.name} className=" bg-white  rounded-2xl sm:flex sm:text-left lg:block lg:text- ">
                    <div className="sm:flex-shrink-0">
                      <div className="flow-root h-[8rem]">
                        {/* <img className="mx-auto h-16 w-16" src={incentive.imageSrc} alt="" /> */}
                      </div>
                    </div>
                    <div className="p-5 mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                      <h3 className="font-medium font-sans text-2xl mb-5	 leading-8 text-gray-900">{incentive.name}</h3>
                      <p className="mt-2 text-sm text-gray-500 mb-6">{incentive.description}</p>
                      <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 font-extrabold text-[#0000FF]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  