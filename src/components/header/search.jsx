"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const SearchButton = () => {
  if (typeof window !== "undefined") {
    if (window.localStorage.getItem("sessionId") === null) {
      window.localStorage.setItem("sessionId", uuidv4().substring(0, 8));
    }
  }
  return (
    <button
      className="btn btn-ghost btn-circle"
      onClick={() => document.getElementById("my_modal_3").showModal()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  );
};

export default SearchButton;
