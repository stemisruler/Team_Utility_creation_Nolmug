import React from 'react'
import { useRef,useParams, useState } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css/pagination';
import "swiper/css";
import "./css/style2.css";

import { Pagination } from 'swiper/modules';

function Maincontent2() {
  const [counter1 , setCounter1] = React.useState(0);
  const [counter2 , setCounter2] = React.useState(0);
  const [counter3 , setCounter3] = React.useState(0);
  const [counter4 , setCounter4] = React.useState(0);
  const [counter5 , setCounter5] = React.useState(0);
  const [counter6 , setCounter6] = React.useState(0);
  const [counter7 , setCounter7] = React.useState(0);
  const [counter8 , setCounter8] = React.useState(0);

  function onClick(){
    if (counter1 > 0) {
      setCounter1(counter1 - 1);
    } else if (counter1 === 0) {
      setCounter1(counter1);
    }
  }
  function onClick1(){
    if (counter2 > 0) {
      setCounter2(counter2 - 1);
    } else if (counter2 === 0) {
      setCounter2(counter2);
    }
  }
  function onClick2(){
    if (counter3 > 0) {
      setCounter3(counter3 - 1);
    } else if (counter3 === 0) {
      setCounter3(counter3);
    }
  }
  function onClick3(){
    if (counter4 > 0) {
      setCounter4(counter4 - 1);
    } else if (counter4 === 0) {
      setCounter4(counter4);
    }
  }
  function onClick4(){
    if (counter5 > 0) {
      setCounter5(counter5 - 1);
    } else if (counter5 === 0) {
      setCounter5(counter5);
    }
  }
  function onClick5(){
    if (counter6 > 0) {
      setCounter6(counter6 - 1);
    } else if (counter6 === 0) {
      setCounter6(counter6);
    }
  }
  function onClick6(){
    if (counter7 > 0) {
      setCounter7(counter7 - 1);
    } else if (counter7 === 0) {
      setCounter7(counter7);
    }
  }
  function onClick7(){
    if (counter8 > 0) {
      setCounter8(counter8 - 1);
    } else if (counter8 === 0) {
      setCounter8(counter8);
    }
  }
  return (
    <section className='Maincontent2'>
      <Swiper className="mySwiper" pagination={true} modules={[Pagination]} >
        <SwiperSlide>
      <h4>오늘 이 식당 어때요</h4>
      <p className='tt'>둔산동 청사광장</p>
      <img src='https://emmaru.com/matzip/include/pics/2021/12/15/m_91389G221602_8.jpg' className='a'/>
      <span className='s'></span>
      <div className='imgbx'>
      <div>
        <img src='./img/how is it_f1.png' />
        <nav  className='text_box'>
          <p>생목살 숯불 바베큐&셀러드</p>
          <p>29000원</p>
        </nav>
        <div className='btn_box'>
        <button className='btn1' onClick={onClick}>-</button>
        {counter1}
        <button className='btn2'    onClick={() => {
                setCounter1(counter1 + 1);
              }}>+</button>
        </div>
      </div>
      <div>
        <img src='./img/how is it_f2.png' />
        <nav  className='text_box'>
          <p>통골뱅이 소면</p>
          <p>22000원</p>
        </nav>
        <div className='btn_box1'>
        <button className='btn1'  onClick={onClick1}>-</button>
        {counter2}
        <button className='btn2' onClick={() => {
                setCounter2(counter2 + 1);
              }}>+</button>
        </div>
      </div>
      <div>
        <img src='./img/how is it_f3.png' />
        <nav  className='text_box'>
          <p>깐풍칠리치킨</p>
          <p>20000원</p>
        </nav>
          <div className='btn_box2'>
        <button className='btn1'  onClick={onClick2}>-</button>
        {counter3}
        <button className='btn2' onClick={() => {
                setCounter3(counter3 + 1);
              }}>+</button>
        </div>
      </div>
      </div>
      <button  className='btne'>예약하기</button>
        </SwiperSlide>
        <SwiperSlide>
        <h4>오늘 이 카페 어때요</h4>
        <p className='tt'>봉명동 아케이드커피</p>
        <img src='https://mblogthumb-phinf.pstatic.net/MjAyMjEwMTZfNzcg/MDAxNjY1OTEyMDMzMjI5.36IBgtWy78teX7EIIldmbmuJqlsYQ29sQX4meTcHPHEg.LV48sT2K7eOIUK8YsHHT2kXua1Kw5ESPsGvnVTwSaBkg.JPEG.beth1223/IMG_7170.JPG?type=w800'  className='a'/>
        <span className='s'></span>
        <div  className='imgbx'>
        <div>
        <img src='./img/Deep Black.png' />
        <nav  className='text_box'>
          <p>딥블랙 Deep Black</p>
          <p>6500원</p>
        </nav>
        <div className='btn_box'>
        <button className='btn1' onClick={onClick3}>-</button>
        {counter4}
        <button className='btn2' onClick={() => {
                setCounter4(counter4 + 1);
              }}>+</button>
        </div>
      </div>
      <div>
        <img src='./img/Latte.png' />
        <nav className='text_box'>
          <p>라떼 Latte</p>
          <p>6000원</p>
        </nav>
        <div className='btn_box1'>
        <button className='btn1' onClick={onClick4}>-</button>
        {counter5}
        <button className='btn2' onClick={() => {
                setCounter5(counter5 + 1);
              }}>+</button>
        </div>
      </div>
      <div>
        <img src='./img/Milk Tea.png' />
        <nav  className='text_box'>
          <p>밀크티 Milk Tea</p>
          <p>6500원</p>
        </nav>
        <div className='btn_box2'>
        <button className='btn1' onClick={onClick5}>-</button>
        {counter6}
        <button className='btn2' onClick={() => {
                setCounter6(counter6 + 1);
              }}>+</button>
        </div>
      </div>
      </div>
      <button className='btne'>예약하기</button>
        </SwiperSlide>
        <SwiperSlide>
        <h4>오늘 이 장소 어때요</h4>
        <img src='https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220518_261%2F1652851841361roYC9_JPEG%2FKakaoTalk_20220518_142308270_21.jpg'  className='a'/>
        <p className='tt'>대전 엑스포 아쿠아리움</p>
        <span className='s'></span>
      <div  className='imgbx1'>
      <div>
        <img src='./img/expo1.png' />
        <nav  className='text_box'>
          <p>엑스포 아쿠아리움 입장권</p>
          <p>21500~24900원</p>
        </nav>
        <div className='btn_box'>
        <button className='btn1' onClick={onClick6}>-</button>
        {counter7}
        <button className='btn2' onClick={() => {
                setCounter7(counter7 + 1);
              }}>+</button>
        </div>
      </div>
      <div>
        <img src='./img/expo2.png' />
        <nav  className='text_box'>
          <p>엑스포 아쿠아리움+오월드 패키지권</p>
          <p>31000~43000원</p>
        </nav>
        <div className='btn_box1'>
        <button className='btn1' onClick={onClick7}>-</button>
        {counter8}
        <button className='btn2' onClick={() => {
                setCounter8(counter8 + 1);
              }}>+</button>
        </div>
      </div>
      </div>
      <button className='btne'>예약하기</button>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Maincontent2