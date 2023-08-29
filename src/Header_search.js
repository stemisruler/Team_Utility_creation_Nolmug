import React from 'react'
import { Routes, Route,Link } from "react-router-dom"

function Header() {
  return (
    <section className='search_h'>
        <h1>NOLMUG</h1>
          <div className='searchItem'>
            <input type="text" placeholder='검색어를 입력하세요'/>
              <img src='img/search_white.png'></img>
          </div>
    </section>
  )
}

export default Header