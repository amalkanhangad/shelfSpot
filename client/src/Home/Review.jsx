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
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-x-6'>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'> 
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                  assumenda cumque facere labore dolor repudiandae sed dolorem
                  commodi impedit. Incidunt eos voluptates adipisci modi
                  molestias ipsum, sapiente a voluptatum officia.
                </p>
                <Avatar
                  img={ProPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 "
                />
                <h5 className="text-lg">Mark Ping</h5>
                <p className="text-base">CEO, 123 Company </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-x-6'>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'> 
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                  assumenda cumque facere labore dolor repudiandae sed dolorem
                  commodi impedit. Incidunt eos voluptates adipisci modi
                  molestias ipsum, sapiente a voluptatum officia.
                </p>
                <Avatar
                  img={ProPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 "
                />
                <h5 className="text-lg">Mark Ping</h5>
                <p className="text-base">CEO, 123 Company </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-x-6'>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'> 
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                  assumenda cumque facere labore dolor repudiandae sed dolorem
                  commodi impedit. Incidunt eos voluptates adipisci modi
                  molestias ipsum, sapiente a voluptatum officia.
                </p>
                <Avatar
                  img={ProPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 "
                />
                <h5 className="text-lg">Mark Ping</h5>
                <p className="text-base">CEO, 123 Company </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-x-6'>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'> 
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                  assumenda cumque facere labore dolor repudiandae sed dolorem
                  commodi impedit. Incidunt eos voluptates adipisci modi
                  molestias ipsum, sapiente a voluptatum officia.
                </p>
                <Avatar
                  img={ProPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 "
                />
                <h5 className="text-lg">Mark Ping</h5>
                <p className="text-base">CEO, 123 Company </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-x-6'>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'> 
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                  assumenda cumque facere labore dolor repudiandae sed dolorem
                  commodi impedit. Incidunt eos voluptates adipisci modi
                  molestias ipsum, sapiente a voluptatum officia.
                </p>
                <Avatar
                  img={ProPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 "
                />
                <h5 className="text-lg">Mark Ping</h5>
                <p className="text-base">CEO, 123 Company </p>
              </div>
            </div>
          </SwiperSlide>
          
          
        </Swiper>
      </div>
    </div>
  );
}

export default Review
