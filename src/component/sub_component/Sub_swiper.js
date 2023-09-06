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
    id='sub'>
            <SwiperSlide className="sub">
            <img src='1_food/yuseong_bongmyeong/h/h1.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='1_food/yuseong_bongmyeong/h/h3.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='1_food/yuseong_bongmyeong/h/h4.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='1_food/yuseong_bongmyeong/h/h5.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='1_food/yuseong_bongmyeong/h/h6.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='1_food/yuseong_bongmyeong/h/h1.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='1_food/yuseong_bongmyeong/h/h3.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='1_food/yuseong_bongmyeong/h/h4.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='1_food/yuseong_bongmyeong/h/h5.jpg'/>
            </SwiperSlide>
            <SwiperSlide className="sub">
            <img src='1_food/yuseong_bongmyeong/h/h6.jpg'/>
            </SwiperSlide>
    </Swiper>
  )
}
export default Sub_swiper