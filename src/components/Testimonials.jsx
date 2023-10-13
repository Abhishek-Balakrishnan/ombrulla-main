/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <div className="bg- pt-16 lg:py-24">
      <div className="bg- pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-6 sm:max-w-[32.375rem] lg:h-full lg:p-0 mt-16">
              <div className="  overflow-hidden rounded-xl shadow-xl   lg:h-96">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://wptf.themepul.co/tronix/wp-content/uploads/2023/06/bg.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-1 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <span className="font-medium leading-4	text-base	">MORE ABOUT OUR COMPANY</span>
                  <h2 className="text-5xl	leading-10	font-medium mt-5	">What They’re Saying</h2>
                  <p className="mt-6 text-base	 font-medium text-slate-400	">
                    
                  “We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.                         James Joseph 
                        Managing Director, Terranz Dubai, UAE” 
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-slate-400">Judith Black</p>
                  <p className="text-base font-medium text-indigo-100">CEO at PureInsights</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
