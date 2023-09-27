import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/MainVisual.css";
function MainVisual() {
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





