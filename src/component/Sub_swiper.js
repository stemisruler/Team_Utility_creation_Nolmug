import { Navigation } from 'swiper/modules';
import './style3.css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


function Sub_swiper() {
  return (
    <Swiper className="mySwiper"        
    slidesPerView={5} 
    navigation={true}
    loop = {true}
    modules={[Navigation]}
    initialSlide={3} 
    id='sub'>
            <SwiperSlide className="sub">
            <img src='img/slide_food.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='img/slide_food.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='img/slide_food.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='img/slide_food.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='img/slide_food.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='img/slide_food.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='img/slide_food.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='img/slide_food.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='img/slide_food.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='img/slide_food.jpg'/>
            </SwiperSlide>
    
    </Swiper>
  )
}
export default Sub_swiper