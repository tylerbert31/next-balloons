import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const Carousel = ({ images }) => {
  return (
    <Swiper
      slidesPerView={3}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      pagination={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <Link href={image.url}>
            <img src={image.url} alt={image.alt} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
