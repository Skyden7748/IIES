import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Sp.css';
import { Pagination ,  Autoplay } from 'swiper/modules';
function Sp() {
  return (
    <>
      <Swiper
        
         modules={[Pagination ,  Autoplay]}
         className="mySwiper"
         slidesPerView={1}
         spaceBetween={30} // Add space between cards for better visual appeal
         breakpoints={{
         
          1024: {
            slidesPerView: 4, // Large screens
          },
        }}
         autoplay={{
          delay: 1500, // Set autoplay delay in milliseconds (adjust as needed)
          disableOnInteraction: false, // Allow user interaction to pause autoplay
        }}
      >
        <SwiperSlide>
          <div className='swiper-card'>
            <h1>Herbal Garden & Awareness</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className='swiper-card'>
            <h1>Promotion of SHG & MED</h1>
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card'>
            <h1>Herbal Garden & Awareness</h1>
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card'>
            <h1> Health Camp</h1>
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card'>
            <h1>HIV/AIDS Awareness Programme</h1>
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card'>
            <h1>Consumer Awareness Program</h1>
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card'>
            <h1>Environmental Awareness</h1>
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card'>
            <h1>Cultural Heritage Program</h1>
          </div></SwiperSlide>
        <SwiperSlide><div className='swiper-card'>
            <h1>Disaster Risk Management Programme</h1>
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card'>
            <h1>Water & Sanitation</h1>
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card'>
            <h1>Vocational Training</h1>
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card'>
            <h1> Mobile Repairing Training </h1>
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card'>
            <h1>Entrepreneurship Awareness Programme</h1>
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card'>
            <h1>Women Empowerment Programme</h1>
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card'>
            <h1>Awareness on Road Safety</h1>
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card'>
            <h1>Creche Programme</h1>
          </div></SwiperSlide>
          <SwiperSlide><div className='swiper-card'>
            <h1>Senior Citizens Home</h1>
          </div></SwiperSlide>
      </Swiper>
    </>
    
  )
}

export default Sp