import React from "react";

const CardSkeletons = () => {
  return (
    <div>
      <div className="relative max-w-[180px] max-h-[297px] flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white">
        <a
          className="relative mx-3 mt-3 flex h-40 md:h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <div className="skeleton h-48 w-full"></div>
        </a>
        <div className="mt-2 md:mt-4 px-3 md:px-5 pb-3 md:pb-5">
          <a href="#">
            <h5 className="text-md md:text-md tracking-tight text-slate-900 truncate ">
              <div className="skeleton h-6 w-full"></div>
            </h5>
          </a>
          <div className="mt-1 md:mt-2 mb-3 md:mb-5 flex items-center justify-between">
            <span className="text-md md:text-xl font-bold text-slate-900">
              <div className="skeleton h-6 w-12"></div>
            </span>
            <div className="flex items-center justify-start"></div>
          </div>
          <div className="skeleton h-10 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeletons;
