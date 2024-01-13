import React from "react";

const Dropdown = () => {
  return (
    <details className="dropdown max-h-[36px]">
      <summary className="btn btn-sm min-h-[36px] shadow-none">
        Categories
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 flex justify-around">
        <li>
          <a>Balloons</a>
        </li>
        <li>
          <a>Decorations</a>
        </li>
        <li>
          <a>Candles and Topper</a>
        </li>
        <li>
          <a>Miscellaneous</a>
        </li>
        <li>
          <a>Party Tools</a>
        </li>
      </ul>
    </details>
  );
};

export default Dropdown;
