import React from 'react'
import { Link } from 'react-router-dom'

function SubHeader() {
    return (
        <section className='subHeader'>
            <div className='subGnb'>
                <div className='subNav'>
                    <div className='subLogo'>
                        <Link to="/">
                            <img src='' />
                        </Link>
                    </div>
                    <div className='subSearch'>
                        <form>
                            <input type='text' />
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
    )
}

export default SubHeader