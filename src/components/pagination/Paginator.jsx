import React from "react";

const Paginator = ({ pages, current }) => {
  return (
    <div className="join self-center p-4">
      <button className="join-item btn">«</button>
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
      <button className="join-item btn">»</button>
    </div>
  );
};

export default Paginator;
