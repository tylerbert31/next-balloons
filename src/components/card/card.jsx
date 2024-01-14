import React from "react";

const Card = ({ cardId }) => {
  const discount = Math.floor(Math.random() * 35) + 1;
  const rating =
    Math.floor(Math.random() * 4) + 3 > 5
      ? 5
      : Math.floor(Math.random() * 4) + 3;
  return (
    <div key={cardId}>
      <div className="relative max-w-[180px] max-h-[297px] flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white">
        <a
          className="relative mx-3 mt-3 flex h-40 md:h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-xs font-medium text-white">
            {discount}% OFF
          </span>
        </a>
        <div className="mt-2 md:mt-4 px-3 md:px-5 pb-3 md:pb-5">
          <a href="#">
            <h5 className="text-md md:text-md tracking-tight text-slate-900 truncate ">
              Nike Air MX Super 2500 - Red
            </h5>
          </a>
          <div className="mt-1 md:mt-2 mb-3 md:mb-5 flex items-center justify-between">
            <p>
              <span className="text-md md:text-xl font-bold text-slate-900">
                $449
              </span>
            </p>
            <div className="flex items-center justify-start">
              {Array.from({ length: rating }).map((_, i) => (
                <svg
                  key={i}
                  aria-hidden="true"
                  className="h-4 md:h-5 w-4 md:w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
          <a
            href="#"
            className="flex items-center justify-center rounded-md bg-slate-900 px-4 md:px-5 py-2.5 text-center text-sm md:text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 md:h-6 w-5 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
