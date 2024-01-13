"use client";
import React, { useState, useEffect } from "react";
import Carousel from "@/components/carousel/carousel";
import Sections from "@/components/sections/sections";
import FullPageLoader from "@/components/loader/fullpage";
const Body = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=5")
      .then((res) => res.json())
      .then((data) => {
        setImages(data?.photos);
      });
  }, []);

  // if (images?.length > 0) {
  //   console.log(images);
  // }

  return (
    <div className=" flex-grow bg-gray-200">
      {images?.length > 0 ? (
        <Carousel images={images} />
      ) : (
        <div className="flex flex-col max-h-[107px]">
          <div className="skeleton w-32 h-32"></div>
          <div className="skeleton w-32 h-32"></div>
          <div className="skeleton w-32 h-32"></div>
        </div>
      )}

      <div className="flex flex-col justify-center p-2">
        <Sections />
      </div>
      {images?.length < 1 && <FullPageLoader />}
    </div>
  );
};

export default Body;
