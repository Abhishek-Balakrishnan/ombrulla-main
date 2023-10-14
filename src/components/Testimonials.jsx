// /*
//   This example requires some changes to your config:
  
//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/aspect-ratio'),
//     ],
//   }
//   ```
// */
// export default function Example() {
//   return (
//     <div className="bg- pt-16 lg:py-24">
//       <div className="bg- pb-16 lg:relative lg:z-10 lg:pb-0">
//         <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-8 lg:px-8">
//           <div className="relative lg:-my-8">
//             <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
//             <div className="mx-auto max-w-md px-6 sm:max-w-[32.375rem] lg:h-full lg:p-0 mt-16">
//               <div className="  overflow-hidden rounded-xl shadow-xl   lg:h-96">
//                 <img
//                   className="object-cover lg:h-full lg:w-full"
//                   src="https://wptf.themepul.co/tronix/wp-content/uploads/2023/06/bg.jpg"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 lg:col-span-1 lg:m-0 lg:pl-8">
//             <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
//               <blockquote>
//                 <div>
//                   <span className="font-medium leading-4	text-base	">MORE ABOUT OUR COMPANY</span>
//                   <h2 className="text-5xl	leading-10	font-medium mt-5	">What They’re Saying</h2>
//                   <p className="mt-6 text-base	 font-medium text-slate-400	">
                    
//                   “We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.                         James Joseph 
//                         Managing Director, Terranz Dubai, UAE” 
//                   </p>
//                 </div>
//                 <footer className="mt-6">
//                   <p className="text-base font-medium text-slate-400">Judith Black</p>
//                   <p className="text-base font-medium text-indigo-100">CEO at PureInsights</p>
//                 </footer>
//               </blockquote>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function Example() {
  return (
    <section className="bg-blue-950	 h-7xl p-5">
     <div className="ml-16 text-white ">
    <div className="flex" >
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0000FF" class="w-4 h-4 mt-11">
    <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clip-rule="evenodd" />
  </svg>
  
          <h4 className=" text-base font-medium mt-10 ml-2	">Our Testimonials</h4>
    </div>
        <h2 className="font-medium	text-3xl mt-5">About Our Customer Stories</h2>
     </div>
      <div className="mx-auto max-w-7xl h- md:grid md:grid-cols-2 md:px-6 lg:px-8 py-10 ">
        
        <div className="py- px- md:flex md:flex-col   md:py-1 md:pl-0 md:pr-5 lg:">
          {/* <div className="md:flex-shrink-0">
            <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" />
          </div> */}
          <blockquote className="mt-6 md:flex  md:flex-grow md:flex-col bg-white rounded-lg">
            <div className="relative text-lg font-medium text- md:flex-grow p-10 text-slate-500	">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
              We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us
              </p>
            </div>
            <footer className="mt-8 bg-slate-300	 py-5  px-5">
              <div className="flex items-start">
                <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium ">Judith Black</div>
                  <div className="text-base font-medium text-indigo-400">CEO, Tuple</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="py- px- md:flex md:flex-col   md:py-1 md:pl-0 md:pr-10 lg:">
          {/* <div className="md:flex-shrink-0">
            <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" />
          </div> */}
          <blockquote className="mt-6 md:flex  md:flex-grow md:flex-col bg-white rounded-lg">
            <div className="relative text-lg font-medium text- md:flex-grow p-10 text-slate-500	">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">

              Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives              </p>
            </div>
            <footer className="mt-8 bg-slate-300	 py-5  px-5">
              <div className="flex items-start">
                <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium ">Janet Thomas</div>
                  <div className="text-base font-medium text-indigo-400">Managing Director, Terranz Dubai, UAE</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

