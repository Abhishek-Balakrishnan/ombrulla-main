const incentives = [
  {
    name: 'Job Grading & Evaluation',
    imageSrc: 'https://static.wixstatic.com/media/3cca7a_856f4a34…o/3cca7a_856f4a342a004972a45e9beeb7d0da5c~mv2.png',
    description: "Our job evaluation and grading tool assesses and ranks job roles within an organization based on factors like responsibilities and skills, typically for compensation and organizational structuring.",
  },
  {
    name: 'Compensation Management',
    imageSrc: 'https://static.wixstatic.com/media/3cca7a_856f4a34…o/3cca7a_856f4a342a004972a45e9beeb7d0da5c~mv2.png',
    description: "Software systems used by HR departments to streamline and automate the processes related to employee compensation, including salary planning, bonuses, benefits, and overall compensation strategy management.",
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
    <div className="px-[]">
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
  
          <h4 className=" text-base font-medium mt-10 ml-2	">Products</h4>
    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-9 ">
                    <h3 className="text-5xl	 font-medium leading-4 text-gray-900 ">OUR HR TOOLS <br /><br /></h3>
                    <p className="mt-8  text-base	leading-6	 text-gray-500">HR Tools: Streamline compensation management and job profiling to attract,
retain, and engage top talent <br /><br /> <br /></p>
                    <h3 className="leading-6	font-medium">Learn More</h3>
                  </div>
                </div>
              {incentives.map((incentive) => (
                <div key={incentive.name} className="bg-[#eff1f5]	h-[65vh] ml-5 w-96 p-10 gap- rounded-2xl	  sm:flex sm:text-left lg:block ">
                  <div className="sm:flex-shrink-0 ml-">
                    <div className="flow-root ">
                      <h3 className="text-base	 font-medium ">{incentive.name}</h3>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-">
                    {/* {incentive.imageSrc} */}
                    {/* <p className="mt-2 text-sm text-gray-500"></p> */}
                  </div>
                  <div>
                  <p className="mt-2 text-base	leading-6	 text-gray-500 ">{incentive.description}</p>
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
