import React, { useState, useEffect, useRef } from 'react';
import '../css/contentsbuttons.css';
import { data } from './Data'; // Data.js 파일을 import
import {Link} from 'react-router-dom';

// 매핑 객체 추가
const categoryMapping = {

  //음식점에 해당하는 매핑 카테고리 (버튼 이름에 해당하는 카테고리)
  // <일식, 중식, 한식, 양식, 밥, 해산물, 술, 해외여행, 가성비, 힙해, 감성,고기>
  "#NOLMUG 강추": "TOP9",
  "#밥이좋아": "밥",
  "#술이최고지": "술",
  "#분위기좀있네": "감성",
  "#음식으로해외여행": "해외여행",
  "#인스타사진맛집" : "힙해",

  //카페(디저트)에 해당하는 매핑 카테고리 
  //<식물, 모던한, 술도 파는, 힙해, 가성비, 넓은, 아담한, 우드톤, 여행느낌, 빵 >
  "#카페로해외여행" : "여행느낌",
  "#초록초록해" : "식물",
  "#예술적이야!" : "힙해",
  "#모던함" : "모던한",
  "#널찍하니좋네" : "넓은",
  "#작지만조용해" : "아담한",
  "#나무야햇빛가려줘!" : "우드톤",
  "#비올땐.." :"술도 파는",

  //관광명소에 해당하는 매핑 카테고리
  //야외, 실내, 스포츠, 자연, 대피(더울 때나 비올 때 스페셜 버튼으로 보여줄 것), 야경, 공원, 자연, 예술
  "#이색적인 재미" : "예술",
  "#너무더워!" : "대피",
  "#비가싫어" : "대피",
  "#나는자연인이다" : "자연",
  "#걷기좋아" : "공원",
  "#야경맛집" : "야경",
  "#응원가부를래?" : "스포츠",

};

const ContentsButtons = () => {

  const [activeTab, setActiveTab] = useState('음식');
  const [subCategories, setSubCategories] = useState(['#NOLMUG 강추','#밥이좋아', '#술이최고지', '#분위기좀있네','#음식으로해외여행', '#인스타사진맛집']);
  const [selectedCategories, setSelectedCategories] = useState(['#NOLMUG 강추']);
  let filteredData = data.list;

  // 활성 탭이 '음식'이면 id가 'food'로 시작하는 데이터만 필터링
  if (activeTab === '음식') {
    filteredData = filteredData.filter(item => item.id.startsWith('food'));
  }

  // 활성 탭이 '음식'이면 id가 'cafe'로 시작하는 데이터만 필터링
  if (activeTab === '카페/디저트') {
    filteredData = filteredData.filter(item => item.id.startsWith('cafe'));
  }

  // 활성 탭이 '핫플레이스'이면 id가 'hotplace'로 시작하는 데이터만 필터링
  if (activeTab === '핫플레이스') {
    filteredData = filteredData.filter(item => item.id.startsWith('hotplace'));
  }

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
  
  const handleClick = (tabName) => {
    setActiveTab(tabName);
    let newSubCategories = [];

    switch (tabName) {
      case '음식':
        newSubCategories = ['#NOLMUG 강추','#밥이좋아', '#술이최고지', '#분위기좀있네','#음식으로해외여행', '#인스타사진맛집'];
        break;
      case '카페/디저트':
        newSubCategories = ['#NOLMUG 강추','#카페로해외여행', '#초록초록해', '#예술적이야!', '#모던함','#널찍하니좋네'];
        break;
      case '핫플레이스':
        newSubCategories = ['#NOLMUG 강추','#이색적인 재미', '#나는자연인이다', '#걷기좋아','#야경맛집','#응원가부를래?'];
        break;
      default:
        break;
    }
    
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
    
  return (
    <section className='contentsButtons' style={{ border : '1px solid black'}}>
      <div className='contentsTop'>
        <h4
          onClick={(e) => handleClick('음식')}
          className={activeTab === '음식' ? 'active' : ''}
        >
          음식
        </h4>
        <h4
          onClick={() => handleClick('카페/디저트')}
          className={activeTab === '카페/디저트' ? 'active' : ''}
        >
          카페/디저트
        </h4>
        <h4
          onClick={() => handleClick('핫플레이스')}
          className={activeTab === '핫플레이스' ? 'active' : ''}
        >
          핫플레이스
        </h4>
        <div className={`underline ${activeTab}`} />

      </div>
      <div className='contentsBottom'>
          {subCategories.map((category, index) => (
      <button 
        key={index} 
        onClick={() => handleCategoryClick(category)}
        className={selectedCategories.includes(category) ? 'selected' : 'unselected'}
        style={{
          backgroundColor: selectedCategories.includes(category) ? 'red' : '#E9E9E9',
          cursor: 'pointer'
        }}
        >
    {category}
      </button>
    ))}
      </div>
      <div className='concon_box'>
      <div className='ContentsTextBox'> 
        <h2>NOLUMUG BEST</h2>
      </div>
      <div className='contentsGrid'>
        {slicedFilteredData.map((item) => (
          <div key={item.id} style={{cursor:'pointer'}}>
            {/* 모든 경우에서 첫 번째 이미지만 출력 */}
            <img src={item.images[0]} alt={item.title}
            onClick={() => openPopup(item.images, 0)}  // 여기 수정
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
              <div className='prev_box'  onClick={(e) => { prevImage(); e.stopPropagation(); }}><img src="/prev.png" alt="Prev" className="prev-btn" /></div>
              <div className='next_box' onClick={(e) => { nextImage(); e.stopPropagation(); }}>
              <img src="/next.png" alt="Next" className="next-btn"  />
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