export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
        <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0000FF" className="w-3 h-3 mt-11">
            <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
          </svg>
          <h4 className="text-center text-sm font-medium mt-8 p-2">BRANDS WE WORK WITH</h4>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0000FF" className="w-3 h-3 mt-11">
            <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-center text-5xl font-semibold mt-3">Trusted by Thousands of Businesses</h2>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img
              className="h-16"
              src="partner-1.png"
              alt="Workcation"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img className="h-16" src="partner-2.png" alt="Mirage" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img className="h-16" src="partner-3.png" alt="Tuple" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img className="h-16" src="partner-4.png" alt="Laravel" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img
              className="h-16"
              src="partner-5.png"
              alt="StaticKit"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img
              className="h-16"
              src="partner-6.png"
              alt="Statamic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
