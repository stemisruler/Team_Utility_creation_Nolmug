import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let timer;

function SubHeader({ onSearch }) {
    const [isFocused, setFocused] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleSearch = (query) => {
        clearTimeout(timer); // 이전 타이머를 지움
        timer = setTimeout(() => {
            onSearch(`대전 ${query}`);
        }, 3000);
    };

    const handleChange = (e) => {
        const query = e.target.value;
        setSearchText(query);  // 실시간으로 입력값을 업데이트
        handleSearch(query);  // 디바운싱 적용하여 검색
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); // 기본 form 제출 동작을 막음 없을 땐 엔터치면 폼이 제출돼서 페이지가 리로드 돼서 네틀리파이에서 404 페이지로 가짐. /? 로 가서.
    };

    useEffect(() => {
        const handleFocus = () => setFocused(true);
        const handleBlur = () => setFocused(false);

        const inputElem = document.querySelector('.search-input');
        inputElem.addEventListener('focus', handleFocus);
        inputElem.addEventListener('blur', handleBlur);

        return () => {
            inputElem.removeEventListener('focus', handleFocus);
            inputElem.removeEventListener('blur', handleBlur);
        };
    }, []);

    return (
        <section className='subHeader'>
            <div className='subGnb'>
                <div className='subNav'>
                    <div className='subLogo'>
                        <Link to="/">
                            <img src='./nolmuglogo.png' alt='로고' />
                        </Link>
                    </div>
                    <div className='subSearch'>
                        <form onSubmit={handleFormSubmit}>
                            <i className={`fa fa-search search-icon ${isFocused ? 'focused' : ''}`}></i>
                            <input type='text' className='search-input'
                                value={searchText}
                                onChange={handleChange}
                            />

                        </form>
                    </div>
                    <div className='subLogin'>
                        <ul>
                            <li>
                                <Link to=''>
                                    로그인
                                </Link>
                            </li>
                            <li>
                                <Link to=''>
                                    회원가입
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SubHeader;

