import React, { useState, useEffect, useCallback } from 'react';
import { data } from '../../component/Data';
import KakaoMap from './KakaoMap';
import '../../css/sub_css/sub1.css'
import SubHeader from './SubHeader';

function Sub1() {
    const [visibleItems, setVisibleItems] = useState(6);
    const [isLoading, setIsLoading] = useState(false);
    const list = data.list;
    const [searchText, setSearchText] = useState("대전 맛집");

    const handleSearch = (text) => {
        setSearchText(text);
    }

    const handleRestaurantClick = (title) => {
        setSearchText(`대전 ${title}`);
      };
    

    const handleScroll = useCallback((e) => {
        const container = e.target;
        if (!isLoading && container.scrollHeight - container.scrollTop <= container.clientHeight + 200) {
            setIsLoading(true);
            setTimeout(() => {
                setVisibleItems(prevItems => {
                    const newCount = prevItems + 6;
                    return newCount;
                });
                setIsLoading(false);
            }, 500);
        }
    }, [isLoading]);

    useEffect(() => {
        const container = document.querySelector('.restaurant-container');
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, [handleScroll]);

    return (
        <>
            <SubHeader onSearch={handleSearch} />
            <div className="container">
                <div className="restaurant-container">
                    {list.slice(0, visibleItems).map(item => (
                        <div key={item.id} className="restaurant" onClick={() => handleRestaurantClick(item.title)} style={{cursor:'pointer'}}>
                            <img src={item.images[0]} alt='대표이미지' />
                            <div className="details">
                                <h2>{item.title}</h2>
                                <p>{item.menu ? item.menu.join(', ') : ''}</p>
                                <p className="description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mapping'>
                    <KakaoMap keyword={searchText}  />
                </div>
            </div>
        </>
    );
}

export default Sub1;
