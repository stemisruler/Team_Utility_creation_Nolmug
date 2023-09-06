import React, { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './css/reset.css';
import WeatherHeader from './component/WeatherHeader';
import HeaderSearch from './HeaderSearch';
import Main from './component/Main'
import MainVisual  from './MainVisual ';
import Maincontent2 from './Maincontent2';
import ContentsButtons from './component/ContentsButtons';

import Sidebar from './component/Sidebar'
import Footer from './component/Footer'
import Sub2 from './component/sub_component/Sub2'
import Sub1 from './component/sub_component/Sub1'

import { UserProvider, useUser } from './component/UserContext'; 

function App() {
  const [renderStatus, setRenderStatus] = useState(false);

  const isRendering = () => {
    setRenderStatus(!renderStatus);
  }
 
  const { activeUser, setActiveUser, userProfiles } = useUser();

  // // 배경색 변경
  // useEffect(() => {
  //   if (activeUser && activeUser.backgroundColor) {
  //     document.body.style.backgroundColor = activeUser.backgroundColor;
  //   } else {
  //     // activeUser가 null인 경우, 기존 스타일을 유지하거나 초기화
  //     document.body.style.backgroundColor = '';  // 빈 문자열을 설정하면 inline 스타일이 제거됩니다.
  //   }
  // }, [activeUser]);

  // // 키보드 이벤트 핸들러
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     const key = e.key.toLowerCase();
  //     if (key === 'r') {
  //       setActiveUser(null);  // 'r'를 누르면 activeUser를 null로 설정
  //     } else {
  //       const newUser = userProfiles.find(user => user.name === key);
  //       if (newUser) {
  //         setActiveUser(newUser);
  //       }
  //     }
  //   };
  //     window.addEventListener('keydown', handleKeyDown);

  //   // Cleanup
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [userProfiles, setActiveUser]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Main />
              <div className='bodyWrap'>
                <WeatherHeader isOn={isRendering} />
                <HeaderSearch />
                <MainVisual />
                <ContentsButtons />
                <Maincontent2 />
                <Footer isOn={isRendering} />
              </div>
              <Sidebar classStatus={renderStatus} />
            </>
          } />
          <Route path="/sub1" element={<Sub1 />} />
          <Route path="/sub2" element={<Sub2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
