import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./App (1).css"
import './style3.css';
import 'swiper/css/navigation';

import Sub_swiper from './Sub_swiper';

function Sub2() {
  return (

    <section className='subPage2'>
        <Sub_swiper/>
        <div className='mainSection inner3'>
            <div className='info0'>
            <div className='Logoimg'>
                <img src=''/>
            </div>
            <div className='subText'>
                <p className='subTitle'>경수네 파닭파닭</p>
                <p className='subPara'>치킨 전문점</p>
                <span className='subHas'>#치맥 #어캐참음</span>
            </div>
            </div>
            <div className='info1'>
                <div className='infoText'>
                    <p className='location'>대전광역시 동구 용전동</p>
                    <p className='vibe'>시끄러운 분위기, 회식</p>
                    <p className='nameTag'>술모임</p>
                </div>
                <div className='infoImg'>
                    <img src=''/>
                </div>
            </div>
            <div className='info2'>
                <div className='info2Clock'>
                    <p>영업시간</p>
                    <ul>
                        <li>월~금</li>
                    </ul>
                    <div>
                        <p>메뉴정보</p>
                        <ul>
                            <li>파닭파닭</li>
                        </ul>
                    </div>
                </div>
                <div className='info2Tag'>
                    <p>맛집 태그</p>
                </div>
            </div>
            <div className='info3'>
                <div className='cirBox'>소개</div>
                <p>
                잘 왔다. 빛의 아이야. 심연 속에서 익사해라. 혹은 그로부터 일어나라. 이리 와라, 아이들아··· 넌 찾고 찾고 또 찾을 뿐··· 지구는 불탄다. 태양들은 어두워진다. 너머를··· 보아라. 진실은 모든 곳에서, 상징한다, 존재한다, 구체화된다. 목격자는··· 빛의 추락을 본다. 사슬에서 풀려난··· 너를 엿본다. 경계. 진정 끝이 없는 잠재력. 해방된 지배력. 정말 지긋지긋하구나. 뒤집힌 것. 삼두 정치. 기회. 보존. 구원. 자격 있는 자는 돕고, 저항자는 압살할 것이다.
                </p>
            </div>
            <div className='info4'>
                <div className='cirBox'>주위사람들이<br/>
                    많이 찾는곳
                </div>
                {/* 이미지 */}
            </div>
            <div className='review'>
                <div className='cirBox'>블로그 리뷰</div>
                <div></div>
            </div>
        </div>
    </section>
  )
}
export default Sub2