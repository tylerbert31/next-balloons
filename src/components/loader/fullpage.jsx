import React from "react";

const FullPageLoader = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 bg-slate-50 min-w-full min-h-full z-50">
      <span className="loading loading-spinner text-error"></span>
    </div>
  );
};

export default FullPageLoader;
