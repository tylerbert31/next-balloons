import React from "react";

const Paginator = ({ pages, current }) => {
  return (
    <div className="join self-center p-4">
      {Array.from({ length: pages }).map((_, i) => (
        <button
          key={i}
          className={`join-item btn btn-md ${
            i + 1 == current ? "btn-active" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Paginator;
