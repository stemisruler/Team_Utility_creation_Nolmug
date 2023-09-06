import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from './UserContext';

import {useEffect } from "react";
import axios from "axios";
import defaultIcon from '../icons/clear-sky.png'
import clearSky from '../icons/clear-sky.png';
import clearSkyNight from '../icons/clear-sky-night.png';
import fewClouds from '../icons/few-clouds.png';
import fewCloudsNight from '../icons/few-clouds-night.png';
import clouds from '../icons/clouds.png';
import rain from '../icons/rain.png';


const weatherIcons = {
    '01d': clearSky,
    '01n': clearSkyNight,
    '02d': fewClouds,
    '02n': fewCloudsNight,
    '03d': fewClouds, //mostlyClouds
    '03n': fewCloudsNight, //mostlyCloudsNight
    '04d': clouds,
    '04n': clouds,
    '09d': rain,
    '09n': rain,
    '10d': rain, // 가벼운 비와 비의 아이콘이 같은 경우
    '10n': rain, // 가벼운 비와 비의 아이콘이 같은 경우
  };

 const weatherNamesInKorean = {
    '01d': '맑음',
    '01n': '맑음(밤)',
    '02d': '구름 조금',
    '02n': '구름 조금(밤)',
    '03d': '구름 많음',
    '03n': '구름 많음(밤)',
    '04d': '흐림',
    '04n': '흐림(밤)',
    '09d': '비',
    '09n': '비(밤)',
    '10d': '가벼운 비',
    '10n': '가벼운 비(밤)'
};


function Sidebar(props) {
    const [acco, setAcco] = useState(false);
    const accon = () => {
        setAcco(!acco);
    }

    const [acco2, setAcco2] = useState(false);
    const accon2 = () => {
        setAcco2(!acco2);
    }

    const [weatherName, setWeatherName] = useState('');
     
        const { activeUser } = useUser(); // UserContext에서 activeUser를 가져옴
        const [currentTemp, setCurrentTemp] = useState(null);
        const [icon, setIcon] = useState(null);
      
        useEffect(() => {
          if (activeUser) { // 테스트 유저(a, b, c 중 하나)
            // activeUser의 정보를 사용하여 날씨를 설정
            setCurrentTemp(activeUser.currentTemp);
            setIcon(weatherIcons[activeUser.weather] || defaultIcon);
        
            // ... (tempMin과 tempMax도 설정 가능)
          } else { 
          const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
          const city = "Daejeon";
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      
          axios.get(url)
            .then((response) => {
              setCurrentTemp(Math.round(response.data.main.temp));
              setIcon(response.data.weather[0].icon);
              const weatherIconCode = response.data.weather[0].icon;
              setIcon(weatherIcons[weatherIconCode] || defaultIcon);
              setWeatherName(weatherNamesInKorean[weatherIconCode] || '정보 없음');
      
            })
            .catch((error) => console.error("에러 발생:", error));
          }
        }, [activeUser]);
      

    return (
        <section className={`gnb ${props.classStatus ? 'on' : ''}`}>
            <div className='nav'>
                <ul className='firUl'>
                    <li>로그인</li>
                    <li>회원가입</li>
                    <li>최근 본 목록</li>
                </ul>
                <hr />
                <ul className='secUl'>
                    <li className='food' onClick={accon}>음식
                        <img src='./img/아코디언 화살표.png' />
                    </li>
                    {acco &&
                        <ul className='foodUl' style={{
                            display: 'block', padding: '0.5rem 1rem',
                            height: '180px'
                        }}>
                            <li>둔산동</li>
                            <li>은행동</li>
                            <li>봉명동</li>
                        </ul>
                    }
                    <li className='cafe' onClick={accon2}>카페
                        <img src='./img/아코디언 화살표.png' />
                    </li>
                    {acco2 &&
                        <ul className='cafeUl' style={{
                            display: 'block', padding: '0.5rem 1rem',
                            height: '180px'
                        }}>
                            <li>둔산동</li>
                            <li>은행동</li>
                            <li>봉명동</li>
                        </ul>
                    }
                    <li className='hotPlace'>핫플레이스</li>
                    <hr />
                </ul>
                <ul className='thrUl'>
                    <li>
                        <Link to='Sub1'>여기 좀 괜찮을 '지도'</Link>
                    </li>
                    <li>공지사항</li>
                    <li>NOLMUG 활용 꿀팁</li>
                    <li>문의</li>
                    <hr />
                </ul>
                <ul className='forUl'>
                    <li>
                    <img src={icon} style={{width:'40px', height:'40px'}}/>
                    </li>
                    <li>{`${weatherName}`}</li>
                    <li>{`${currentTemp}°C`}</li>
                </ul>
            </div>
        </section>
    )
}

export default Sidebar