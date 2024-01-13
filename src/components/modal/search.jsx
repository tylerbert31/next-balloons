"use client";
import React, { useState } from "react";

const SearchModal = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Search an item</h3>
          <div className="join mt-2">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SearchModal;
