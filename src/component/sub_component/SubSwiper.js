import { Navigation } from 'swiper/modules';
import '../../css/sub_css/sub_swiper.css'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


function SubSwiper() {
  return (
    <Swiper className="mySwiper"
      slidesPerView={5}
      navigation={true}
      loop={true}
      modules={[Navigation]}
      id='sub'>
      <SwiperSlide className="sub">
        <img src='1_food/yuseong_bongmyeong/h/h1.jpg' alt='Food1' />
      </SwiperSlide>
      <SwiperSlide className="sub">
        <img src='1_food/yuseong_bongmyeong/h/h3.jpg' alt='Food2' />
      </SwiperSlide>
      <SwiperSlide className="sub">
        <img src='1_food/yuseong_bongmyeong/h/h4.jpg' alt='Food3' />
      </SwiperSlide>
      <SwiperSlide className="sub">
        <img src='1_food/yuseong_bongmyeong/h/h5.jpg' alt='Food4' />
      </SwiperSlide>
      <SwiperSlide className="sub">
        <img src='1_food/yuseong_bongmyeong/h/h6.jpg' alt='Food5' />
      </SwiperSlide>
      <SwiperSlide className="sub">
        <img src='1_food/yuseong_bongmyeong/h/h1.jpg' alt='Food6' />
      </SwiperSlide>
      <SwiperSlide className="sub">
        <img src='1_food/yuseong_bongmyeong/h/h3.jpg' alt='Food7' />
      </SwiperSlide>
      <SwiperSlide className="sub">
        <img src='1_food/yuseong_bongmyeong/h/h4.jpg' alt='Food8' />
      </SwiperSlide>
      <SwiperSlide className="sub">
        <img src='1_food/yuseong_bongmyeong/h/h5.jpg' alt='Food9' />
      </SwiperSlide>
      <SwiperSlide className="sub">
        <img src='1_food/yuseong_bongmyeong/h/h6.jpg' alt='Food10' />
      </SwiperSlide>
    </Swiper>
  )
}
export default SubSwiper