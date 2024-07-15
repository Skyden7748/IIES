import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './spsss.css';
import { Pagination ,  Autoplay } from 'swiper/modules';
function Spsss() {
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
          delay: 6000, // Set autoplay delay in milliseconds (adjust as needed)
          disableOnInteraction: false, // Allow user interaction to pause autoplay
        }}
      >
        
        <SwiperSlide><div className='swiper-card s'>
            <img src="./images/sb01.jpg" alt="" />
            
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/sb02.jpg" alt="" />
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/sb03.jpg" alt="" />
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/sb04.jpg" alt="" />
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/sb05.jpg" alt="" />
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card s'>
        <img src="./images/sb06.jpg" alt="" />
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card s'>
        <img src="./images/sb07.jpg" alt="" />
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card s'>
        <img src="./images/sb08.jpg" alt="" />
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card s'>
        <img src="./images/sb09.jpg" alt="" />
          </div></SwiperSlide>
        
       
      </Swiper>
    </>
    
  )
}

export default Spsss