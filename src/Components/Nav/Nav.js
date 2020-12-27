import React from 'react'
import {Link} from 'react-router-dom';
import {MenuItems} from './Data'
import './Nav.css'
function Nav() {
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__branding">
                        <h2>haidee.<span>hermac</span></h2>
                        <h3>Photography</h3>

                    </div>
                <nav className="header__nav">
                    <ul className="nav__item">
                        {
                            MenuItems.map((item, index)=>{
                                return  (
                                    <li className={item.clsName} key={index}>
                                    <Link to={item.url}>
                                        {item.text}
                                    </Link>
                                </li>
                                )
                            
                            })
                        }   
                    </ul>    
                </nav> 
                   
                </div>
               
            </div>
        </header>
        </>
    )
}

export default Nav
