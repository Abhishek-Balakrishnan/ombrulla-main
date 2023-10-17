const incentives = [
  {
    name: 'Job Grading & Evaluation',
    imageSrc: 'job-profiler.png',
    description: "Job evaluation assesses and ranks job roles in an organization based on responsibilities and skills, often for compensation and structuring purposes.",
    button:"Free Trail"
  },
  {
    name: 'Compensation Management',
    imageSrc: 'Comp360.png',
    description: "Software systems used by HR departments to streamline and automate the processes related to employee compensation, including salary planning, bonuses, benefits, and overall compensation strategy management.",
    button:"Book For Demo"
 },
  // {
  //   name: 'Exchanges',
  //   imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
  //   description:
  //     "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  // },
]

export default function Example() {
  return (
    <div className="px-[] font-sans">
      <div className="   px-[] py-24 sm:px- lg:px-">
        <div className=" px-[vh]  h-[32rem]   py-16 ">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className=" mt- grid max-w-fit grid-cols-1  gap-y- gap-x- sm:max-w-none lg:grid-cols-3">
            <div className="text-center sm:flex sm:text-left lg:block  ">
                  <div className="sm:flex-shrink-0 ">
                  <div className="flex ml-10" >
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0000FF" class="w-3 h-3 mt-11">
    <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clip-rule="evenodd" />
  </svg>
  
          <h4 className=" text-base font-medium font-sans mt-10 ml-2	">PRODUCTS</h4>
    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-9 ">
                    <h3 className="text-5xl	 font-medium leading-4 text-gray-900 ">OUR HR TOOLS <br /><br /></h3>
                    <p className="mt-8  text-base	leading-6	 text-gray-500">Our job grading and evaluation tool, combined with compensation management tool, is a highly effective SaaS-based solution. It greatly assists HR consultants and managers in carrying out their roles with efficiency and precision <br /><br /> <br /></p>
                    {/* <h3 className="leading-6	font-medium">Learn More</h3> */}
                  </div>
                </div>
              {incentives.map((incentive) => (
                <div key={incentive.name} className="bg-[#eff1f5]	h-[65vh] ml-5 w-96 p-9 gap- rounded-2xl	  sm:flex sm:text-left lg:block ">
                  <div className="sm:flex-shrink-0 ml-">
                    <div className="flow-root ">
                      <h4 className="	 font-medium font-sans text-2xl	 leading-8	 ">{incentive.name}</h4>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-">
                    {/* {incentive.imageSrc} */}
                    {/* <p className="mt-2 text-sm text-gray-500"></p> */}
                  </div>
                  <div>
                  <p className="mt-2 text-base	leading-7	 text-gray-500 ">{incentive.description}</p>
                  </div>
                  <div className="w-[9.5rem]  ml-[25%]"><img src={incentive.imageSrc} alt="" className={incentive.imageSrc === "Comp360.png" ? "mt-11 mb-10" : ""}/></div>
                  {/* <button
            class="bg-[#0000FF] hover:bg-black text-white   font-sans  ml-[30%] font-bold hover:text-white py-2 px-4 border  hover:border-secoondary rounded-full	 w-30"
        >
            Free Trail
        </button> */}
        <div className="flex"><div><a href="http://" className="text-base	font-medium" class={incentive.button === "Free Trail" ? " mb-10" : ""}>{incentive.button}</a></div>
       <div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 font-bold text-[#0000FF]">
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
