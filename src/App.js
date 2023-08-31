import React, { useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import './css/reset.css';
import Home from './component/Home';
import Sub2 from './component/Sub2'
import Sub1 from './component/Sub1'

import { UserProvider, useUser } from './component/UserContext'; 
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  const [renderStatus, setRenderStatus] = useState(false);
  const { activeUser, setActiveUser, userProfiles } = useUser();

  // 배경색 변경
  useEffect(() => {
    if (activeUser && activeUser.backgroundColor) {
      document.body.style.backgroundColor = activeUser.backgroundColor;
    } else {
      // activeUser가 null인 경우, 기존 스타일을 유지하거나 초기화
      document.body.style.backgroundColor = '';  // 빈 문자열을 설정하면 inline 스타일이 제거됩니다.
    }
  }, [activeUser]);

  // 키보드 이벤트 핸들러
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'r') {
        setActiveUser(null);  // 'r'를 누르면 activeUser를 null로 설정
      } else {
        const newUser = userProfiles.find(user => user.name === key);
        if (newUser) {
          setActiveUser(newUser);
        }
      }
    };
      window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [userProfiles, setActiveUser]);
  const location = useLocation();

  return (
    
    <div className="App">
  {location.pathname === '/' && <Home />}
      <Routes>
        <Route path="/Sub1" element={<Sub1 />}/>
        <Route path="/Sub2" element={<Sub2 />}/>
      </Routes>
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

