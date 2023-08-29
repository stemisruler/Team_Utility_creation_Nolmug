import React from 'react'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./css/style.css";
function MainVisual () {
  return (
    <section className='MainVisual'>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <p>NOLMUG에서 선정한 식당 리스트</p>
        </SwiperSlide>
        <SwiperSlide>
        <p>NOLMUG에서 선정한 카페 리스트</p>
        </SwiperSlide>
        <SwiperSlide>
        <p>NOLMUG에서 선정한 핫플 리스트</p>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
export default MainVisual





