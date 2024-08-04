import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from "react-icons/fa6"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Avatar } from "flowbite-react";

import ProPic from "../assets/profile.jpeg"
// import required modules
import { Pagination } from 'swiper/modules';
const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24 ">
      <h2 className="text-5xl font-bold text-center mb-10 ">Our customers</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                assumenda cumque facere labore dolor repudiandae sed dolorem
                commodi impedit. Incidunt eos voluptates adipisci modi molestias
                ipsum, sapiente a voluptatum officia.
              </p>
              <Avatar img={ProPic} alt="avatar of Jese" rounded />

            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Review
