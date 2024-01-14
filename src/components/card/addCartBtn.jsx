"use client";
import React from "react";

const AddtoCart = ({ product }) => {
  const add = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cardContain = cart.some((item) => item.name == product.name);

    if (!cardContain) {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in the cart!`);
    }
  };
  return (
    <div
      className="flex max-h-[40px] items-center justify-center rounded-md bg-slate-900 px-4 md:px-5 py-2.5 text-center text-sm  text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      onClick={(e) => {
        e.preventDefault();
        add();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-5 w-5 text-white"
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
    </div>
  );
};

export default AddtoCart;
