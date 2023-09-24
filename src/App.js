import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './css/reset.css';
import WeatherHeader from './component/WeatherHeader';
import HeaderSearch from './HeaderSearch';
import Main from './component/Main';
import MainVisual from './MainVisual';
import Maincontent2 from './Maincontent2';
import ContentsButtons from './component/ContentsButtons';

import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import Sub2 from './component/sub_component/Sub2';
import Sub1 from './component/sub_component/Sub1';

function App() {
  const [renderStatus, setRenderStatus] = useState(false);

  const isRendering = () => {
    setRenderStatus(!renderStatus);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <div className="bodyWrap">
                  <WeatherHeader isOn={isRendering} />
                  <HeaderSearch />
                  <MainVisual />
                  <ContentsButtons />
                  <Maincontent2 />
                  <Footer isOn={isRendering} />
                </div>
                <Sidebar classStatus={renderStatus} />
              </>
            }
          />
          <Route path="/sub1" element={<Sub1 />} />
          <Route path="/sub2" element={<Sub2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
