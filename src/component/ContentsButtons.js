import React, { useState, useEffect, useRef } from 'react';
import '../css/contentsbuttons.css';
import { data } from './Data'; // Data.js 파일을 import
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../thunks/weatherThunks';

// 매핑 객체 추가
const categoryMapping = {

  //음식점에 해당하는 매핑 카테고리 (버튼 이름에 해당하는 카테고리)
  // <일식, 중식, 한식, 양식, 밥, 해산물, 술, 해외여행, 가성비, 힙해, 감성,고기>
  // #밥이좋아 버튼을 더울 땐 시원한 음식을 추천하는 카테고리로, 비올 땐, 비올 때 좋은 음식으로 추천해준다. 각각 (시원한 거! -시원, #비와 함께 - 비올 때 좋은 막걸리 집) 추천한다.

  "#NOLMUG 강추": "TOP9",
  "#밥이좋아": "밥",
  "#술이최고지": "술",
  "#분위기좀있네": "감성",
  "#음식으로해외여행": "해외여행",
  "#인스타사진맛집": "힙해",
  "#시원한 거!" : "시원",
  "#비와 함께" : "비",

  //카페(디저트)에 해당하는 매핑 카테고리 
  //<식물, 모던한, 촉촉한(비 올 때 용), 힙해, 가성비, 넓은, 아담한, 우드톤, 여행느낌, 빵 >
  //초록초록해를 더울 때, 비올 때를 각각 -나무야 햇빛 가려줘! 와 비와 카페로 바꾼다

  "#카페로해외여행": "여행느낌",
  "#나무나무해": "우드톤",
  "#예술적이야!": "힙해",
  "#모던함": "모던한",
  "#널찍하니좋네": "넓은",
  "#작지만조용해": "아담한",
  "#나무야햇빛가려줘!": "식물",
  "#비올 때 예쁜": "촉촉한",

  //관광명소에 해당하는 매핑 카테고리
  //야외, 실내, 스포츠, 자연, 대피(더울 때나 비올 때 스페셜 버튼으로 보여줄 것 -> 실내로 처리), 야경, 공원, 자연, 예술
  //너무 더워!, 비가 싫어는 '걷기 좋아'를 대체한다.
  "#이색적인 재미": "예술",
  "#너무더워!": "실내",
  "#비가싫어": "실내",
  "#나는자연인이다": "자연",
  "#걷기좋아": "공원",
  "#야경맛집": "야경",
  "#응원가부를래?": "스포츠",

};

const ContentsButtons = () => {

  const dispatch = useDispatch();
  const { location } = useSelector(state => state.userLocation);
  const { weatherName, currentTemp } = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);
  
  const [activeTab, setActiveTab] = useState('음식');
  const [subCategories, setSubCategories] = useState(['#NOLMUG 강추', '#밥이좋아', '#술이최고지', '#분위기좀있네', '#음식으로해외여행', '#인스타사진맛집']);
  const [selectedCategories, setSelectedCategories] = useState(['#NOLMUG 강추']);
  let filteredData = data.list;

  const tabMapping = {
    '음식': 'food',
    '카페/디저트': 'cafe',
    '핫플레이스': 'hotplace'
  };
  filteredData = filteredData.filter(item => item.id.startsWith(tabMapping[activeTab] || ''));
  
  // selectedCategories가 비어 있거나 '#NOLMUG 강추'만 포함하고 있으면 'TOP9'를 가진 데이터만 필터링
  if (selectedCategories.length === 0 || (selectedCategories.length === 1 && selectedCategories[0] === '#NOLMUG 강추')) {
    filteredData = filteredData.filter(item => item.categories.includes('TOP9'));
  } else {
    // 매핑 객체를 참조하여 필터링, '#을 뺄 필요 없음'
    filteredData = filteredData.filter(item =>
      selectedCategories.every(category =>
        item.categories.includes(categoryMapping[category] || category)
      )
    );
  }

  // 날씨에 따라 기존의 버튼을 특별 버튼으로 대체하는 함수. 각각 온도가 35도 넘는 폭염일 떄와 비가 올때의 경우의 수다.
  const getDynamicButtonLabel = (defaultLabel) => {
    if (currentTemp >= 35) {
      switch (defaultLabel) {
        case '#밥이좋아':
          return '#시원한 거!';
        case '#초록초록해':
          return '#나무야햇빛가려줘!';
        case '#걷기좋아':
          return '#너무더워!';
        default:
          return defaultLabel;
      }
    } // 이 부분에 중괄호 추가

    if (weatherName === '비') {
      switch (defaultLabel) {
        case '#밥이좋아':
          return '#비와 함께';
        case '#초록초록해':
          return '#비올 때 예쁜';
        case '#걷기좋아':
          return '#비가싫어';
        default:
          return defaultLabel;
      }
    }
    return defaultLabel;
  };
  // handleTabClick 함수 리팩터링
  const newSubCategoryMapping = {
    '음식': ['#NOLMUG 강추', '#밥이좋아', '#술이최고지', '#분위기좀있네', '#음식으로해외여행', '#인스타사진맛집'],
    '카페/디저트': ['#NOLMUG 강추', '#카페로해외여행', '#초록초록해', '#예술적이야!', '#모던함', '#널찍하니좋네'],
    '핫플레이스': ['#NOLMUG 강추', '#이색적인 재미', '#나는자연인이다', '#걷기좋아', '#야경맛집', '#응원가부를래?']
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const newSubCategories = newSubCategoryMapping[tabName] || [];

    // 새로운 서브 카테고리 설정
    setSubCategories(newSubCategories);
    // 첫 번째 서브 카테고리를 활성화
    setSelectedCategories([newSubCategories[0]]);
  };


  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories([]);  // 이미 선택된 카테고리면 배열을 비움
    } else {
      setSelectedCategories([category]);  // 새로운 카테고리를 선택하면 그것만 배열에 넣음
    }
  };

  // 위치 정보를 추가로 고려한 필터링
  if (activeTab === '음식' || activeTab === '카페/디저트') {
  filteredData = filteredData.filter(item => {
    return item.id.startsWith(tabMapping[activeTab] || '') && item.id.includes(location);
  });
}

  // 팝업 창과 관련된 상태
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageArray, setCurrentImageArray] = useState([]);

  const popupRef = useRef(null);

  // 이미지를 클릭했을 때 팝업을 여는 함수
  const openPopup = (imageArray, index) => {
    setIsPopupOpen(true);
    setCurrentImageIndex(index);
    setCurrentImageArray(imageArray);
    document.querySelector('.contentsGrid').classList.add('blur-bg');
    document.querySelector('.contentsGrid').style.pointerEvents = 'none';
  };

  // 팝업을 닫는 함수
  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentImageIndex(0);
    setCurrentImageArray([]);
    document.querySelector('.contentsGrid').classList.remove('blur-bg');
    document.querySelector('.contentsGrid').style.pointerEvents = 'auto';
  };

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  // 좌우 화살표 클릭 이벤트
  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + currentImageArray.length) % currentImageArray.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % currentImageArray.length;
    setCurrentImageIndex(newIndex);
  };

  const slicedFilteredData = filteredData.slice(0, 9);  // 처음 9개의 데이터만 선택

  const tabs = ['음식', '카페/디저트', '핫플레이스'];

  return (
    <section className='contentsButtons' style={{ borderTop: '1px solid #E9E9E9', borderBottom: '1px solid #E9E9E9' }}>
      <div className='contentsTop'>
        {tabs.map(tab => (
        <h4
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={activeTab === tab ? 'active' : ''}
        >
          {tab}
        </h4>
      ))}
        <div className={`underline ${activeTab}`} />

      </div>
      <div className='contentsBottom'>
      {subCategories.map((category, index) => {
          const dynamicLabel = getDynamicButtonLabel(category);
          return (
            <button
              key={index}
              className={`${
                weatherName === '비' 
                  ? (selectedCategories.includes(dynamicLabel) ? 'selectedRainy' : 'unselected')
                  : (selectedCategories.includes(dynamicLabel) ? 'selected' : 'unselected')
              }`}
                onClick={() => handleCategoryClick(dynamicLabel)}
            >
              {dynamicLabel}
            </button>
          );
        })}

      </div>
      <div className='concon_box'>
        <div className='ContentsTextBox'>
          <h2>NOLUMUG BEST</h2>
        </div>
        <div className='contentsGrid'>
          {slicedFilteredData.map((item) => (
            <div key={item.id} style={{ cursor: 'pointer' }}>
              {/* 모든 경우에서 첫 번째 이미지만 출력 */}
              <img src={item.images[0]} alt={item.title}
                onClick={() => openPopup(item.images, 0)}
              />
              <span className='item_box'>

              </span>
              <div className='item' onClick={() => openPopup(item.images, 0)}>
                <p>{item.title}</p>
                <p>{item.menu?.[0]}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}

        </div>
        {/* 팝업 창 */}
        {isPopupOpen && (
          <div className="popup" ref={popupRef}>
            <div className='prev_box' onClick={(e) => { prevImage(); e.stopPropagation(); }}><img src="/prev.png" alt="Prev" className="prev-btn" /></div>
            <div className='next_box' onClick={(e) => { nextImage(); e.stopPropagation(); }}>
              <img src="/next.png" alt="Next" className="next-btn" />
            </div>
            <img src={currentImageArray[currentImageIndex]} alt="popup" className="popupImage" />

            {/* 자세히보기 및 airplane.png */}
            <div className="detail-view">
              <Link to="Sub2"><span>자세히보기</span></Link>
              <img src="./img/airplane.png" alt="Airplane" />
            </div>
          </div>
        )}
      </div>
    </section>
  );

};

export default ContentsButtons;