import React from 'react'
import { useEffect,useState } from 'react';
import './css/reset.css';
import WeatherHeader from './component/WeatherHeader';
import Header_search from './Header_search';
import Main from './component/Main'
import MainVisual  from './MainVisual ';
import Maincontent2 from './Maincontent2';
import ContentsButtons from './component/ContentsButtons';

import Sidebar from './component/Sidebar'
import Footer from './component/Footer'


function Home() {
const [renderStatus, setRenderStatus] = useState(false);

const isRendering = () => {
  setRenderStatus(!renderStatus);
}
  return (
    <div className='home'>
           <Main />
       <div className='bodyWrap'>
        <WeatherHeader isOn={isRendering} />
        <Header_search/>
        <MainVisual />
        <ContentsButtons />
        <Maincontent2/>
        <Footer isOn={isRendering} />
      </div>
      <Sidebar classStatus={renderStatus} />
    </div>
  )
}

export default Home