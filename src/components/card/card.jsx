import React from "react";
import Link from "next/link";
import AddtoCart from "./addCartBtn";

const Card = ({ cardId, product }) => {
  const discount = Math.floor(Math.random() * 35) + 1;
  const rating =
    Math.floor(Math.random() * 4) + 3 > 5
      ? 5
      : Math.floor(Math.random() * 4) + 3;

  const image = `https://reding-balloons.pockethost.io/api/files/fymt38q4jnar1ec/${product.id}/${product.image}?thumb=155x0`;
  return (
    <Link href={"/"} key={cardId}>
      <div className="relative max-w-[180px] max-h-[297px] flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white">
        <div className="relative mx-3 mt-3 flex justify-center h-40 md:h-60 overflow-hidden rounded-xl">
          <img className="object-contain" src={image} alt="product image" />
        </div>
        <div className="mt-2  px-3  pb-3 ">
          <div>
            <h5 className="text-md tracking-tight text-slate-900 truncate ">
              {product.name}
            </h5>
          </div>
          <div className="mt-1 mb-3 flex items-center justify-between">
            <p>
              <span className="text-md font-bold text-slate-900">
                ₱ {product.price}
              </span>
            </p>
            <div className="flex items-center justify-start">
              {Array.from({ length: rating }).map((_, i) => (
                <svg
                  key={i}
                  aria-hidden="true"
                  className="h-4  w-4 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
          <AddtoCart product={product} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
