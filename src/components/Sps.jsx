import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Sps.css';
import { Pagination ,  Autoplay } from 'swiper/modules';
function Sps() {
  return (
    <>
      <Swiper
        
         modules={[Pagination ,  Autoplay]}
         className="mySwiper"
         slidesPerView={1}
         spaceBetween={30} // Add space between cards for better visual appeal
         breakpoints={{
         
          1024: {
            slidesPerView: 3,
            spaceBetween: 10 // Large screens
          },
        }}
         autoplay={{
          delay: 5000, // Set autoplay delay in milliseconds (adjust as needed)
          disableOnInteraction: false, // Allow user interaction to pause autoplay
        }}
      >
        
        <SwiperSlide><div className='swiper-card s'>
            <img src="./images/ss01.jpg" alt="" />
            
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/ss07.jpg" alt="" />
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/ss03.jpg" alt="" />
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/ss02.jpg" alt="" />
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/ss05.jpg" alt="" />
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card s'>
        <img src="./images/ss04.jpg" alt="" />
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card s'>
        <img src="./images/ss06.jpg" alt="" />
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card s'>
        <img src="./images/ss08.jpg" alt="" />
          </div></SwiperSlide>
       
      </Swiper>
    </>
    
  )
}

export default Sps