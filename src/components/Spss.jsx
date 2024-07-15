import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Spss.css';
import { Pagination ,  Autoplay } from 'swiper/modules';
function Spss() {
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
            <img src="./images/hc01.jpg" alt="" />
            
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/hc02.jpg" alt="" />
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/hc03.jpg" alt="" />
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/hc04.jpg" alt="" />
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card s'>
        <img src="./images/hc05.jpg" alt="" />
          </div></SwiperSlide>
        
       
      </Swiper>
    </>
    
  )
}

export default Spss