import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Example() {
  const totalItems = 9;
  const visibleItems = 7;

  const carouselItems = Array.from({ length: totalItems }, (_, index) => (
    <div key={index} className="flex-none p-2">
      <img
        src={`customer-${index + 1}.png`}
        alt={`customer-${index + 1}`}
        style={{ width: "150px",padding:"20px", height: "px !important" }}
      />
    </div>
  ));

  const numSlides = Math.ceil(totalItems / visibleItems);

  return (
    <div className="bg-white  py-[3rem]">
      <div className="mx-auto max-w-7xl py- px-6 sm:py-20 lg:px-8">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0000FF"
            className="w-2 h-2 mt-2"
          >
            <path
              fillRule="evenodd"
              d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
              clipRule="evenodd"
            />
          </svg>
          <h4 className="text-center text-sm font-medium mt- font-sans mb-[1.125rem] p- mx-2">
            OUR CUSTOMERS
          </h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0000FF"
            className="w-2 h-2 mt-2"
          >
            <path
              fillRule="evenodd"
              d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-5xl font-medium text-center  font-sans tracking-tight mb-[1.125rem]">
          They Trust Us
        </h2>
        <div className="mt-8 flow-root lg:mt-10">
          <div className="mx-6">
            <Carousel
              showArrows={true}
              emulateTouch={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              // emulateTouch={true}
              stopOnHover={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
            >
              {Array.from({ length: numSlides }, (_, index) => (
                <div key={index} className="flex">
                  {carouselItems.slice(
                    index * visibleItems,
                    index * visibleItems + visibleItems
                  )}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
