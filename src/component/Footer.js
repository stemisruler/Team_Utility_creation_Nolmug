import React, { useState } from 'react';
import '../css/footer.css';
import '../css/reset.css';

function Footer(props) {
  const [activeMenu, setActiveMenu] = useState('');

  const navText = {
    hamburger: '메뉴',
    user: '마이페이지',
    home: '홈',
    heart: '찜',
    view: '최근본목록'
  };

  const handleClick = (type) => {
    setActiveMenu(activeMenu === type ? '' : type);
  };

  const { isOn } = props;

  return (
    <>
  <footer>
    <div className='footerNav' onClick={isOn} key='hamburger'>
      <div className='footerIcon'>
        <div className={`hamburgerMenu${props.classStatus ? 'on' : ''}`}>
          <div className={`ham ${activeMenu === 'hamburger' ? 'active' : ''}`} onClick={() => handleClick('hamburger')}>
          <span></span>
          <span></span>
          <span></span>
          </div>
        </div>
      </div>
      <div className='footerText1'>메뉴</div>
    </div>
    {['user', 'home', 'heart', 'view'].map((type) => (
      <div className='footerNav' onClick={() => handleClick(type)} key={type}>
        <div className='footerIcon'>
          <img src={`/img/${type}${activeMenu === type ? '2' : '1'}.png`} alt={`${type} icon`} />
        </div>
        <div className='footerText'>{navText[type]}</div>
      </div>
    ))}
  </footer>
</>

  );
}

export default Footer;
