import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../thunks/weatherThunks';
import { setUserLocation } from '../actions/userLocationActions';
import '../css/Sidebar.css'

function Sidebar(props) {
    const [acco, setAcco] = useState(false);
    const accon = () => {
        setAcco(!acco);
    }

    const [acco2, setAcco2] = useState(false);
    const accon2 = () => {
        setAcco2(!acco2);
    }

    /* redux-thunk 이용 날씨 정보 뿌리기 */
    const dispatch = useDispatch();
    const { currentTemp, icon, weatherName } = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    /* redux로 관리되는 유저 위치 정보 바꾸려고 만드는 함수*/
    const changeLocation = (location) => {
        dispatch(setUserLocation(location));
      };
      
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
                        <img src='./img/아코디언 화살표.png' alt='아코디언 화살표' />
                    </li>
                    {acco &&
                        <ul className='foodUl' style={{
                            display: 'block', padding: '0.5rem 1rem',
                            height: '180px'
                        }}>
                            <li onClick={() => changeLocation('dunsan')} className='locationItem'>둔산동</li>
                            <li onClick={() => changeLocation('eunhang')} className='locationItem'>은행동</li>
                            <li onClick={() => changeLocation('bongmyeong')} className='locationItem'>봉명동</li>
                        </ul>
                    }
                    <li className='cafe' onClick={accon2}>카페
                        <img src='./img/아코디언 화살표.png' alt='아코디언 화살표' />
                    </li>
                    {acco2 &&
                        <ul className='cafeUl' style={{
                            display: 'block', padding: '0.5rem 1rem',
                            height: '180px'
                        }}>
                            <li onClick={() => changeLocation('dunsan')} className='locationItem'>둔산동</li>
                            <li onClick={() => changeLocation('eunhang')} className='locationItem'>은행동</li>
                            <li onClick={() => changeLocation('bongmyeong')} className='locationItem'>봉명동</li>
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
                        <img src={icon} style={{ width: '40px', height: '40px' }} alt='날짜 아이콘' />
                    </li>
                    <li>{`${weatherName}`}</li>
                    <li>{`${currentTemp}°C`}</li>
                </ul>
            </div>
        </section>
    )
}

export default Sidebar