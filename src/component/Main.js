import React from 'react'
import '../css/sub_css/sub2.css'

function Main() {
    return (
        <section className='backG'>
            <div className='back'>
                <div className='search'>
                    <h1 className='title'>
                        놀땐 놀고
                    </h1>
                    <h1 className='title2'>
                        먹을땐 먹고
                    </h1>
                    <form>
                        <input type={'text'} className='titleText' placeholder={'검색어를 입력하세요.'} />
                        <img src='./img/돋보기(하얀색).png' className='finderIcon' alt='돋보기' />
                    </form>
                </div>
                <img src='https://blog.kakaocdn.net/dn/bQFbux/btrFPZ7o3Th/A9qptOdoBXGutz64ylvxiK/img.jpg' className='mainImg' alt='메인 배경' />
            </div>
        </section>
    )
}

export default Main