import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const img = [
  {
    id: 1,
    src: "https://i.pinimg.com/564x/04/76/d1/0476d137ca99103ab994f71c2c5e5911.jpg",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/564x/ff/13/de/ff13deb6b8c16c34d7abd3805d0f59d4.jpg",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/564x/3a/00/e7/3a00e7d073c20a97e07f392a801fe577.jpg",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/564x/f6/7f/c3/f67fc3be8046d711fd302e8120e1dda3.jpg",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/564x/e5/f6/e1/e5f6e18a2ad35a0674b363f3e4a77048.jpg",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/564x/e6/a4/c1/e6a4c101277bd339ad2d5483fc3838fe.jpg",
  },
];

const SwiperCarousel = () => {
  return (
    <div>
      <div className="w-full ">
        <Swiper
          breakpoints={{
            300: {
              spaceBetween: 10,
            },
            640: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 40,
            },
            1024: {
              spaceBetween: 50,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
            clickableClass: "swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          direction="horizontal"
          modules={[Pagination, Autoplay]}
          slideClass="swiper-slide"
          slideActiveClass="swiper-slide-active"
        >
          {img.map((item) => (
            <div className="space-y-5 flex flex-col items-center text-center">
              <SwiperSlide className="mt-10 flex justify-center" key={item.id}>
                <div className="py-8">
                  <img src={item.src} />
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCarousel;
