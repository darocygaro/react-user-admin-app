import React, { useState } from 'react';
import '../styles/Main.css';

const Menu = (props) => {

    const [isHovered, setIsHovered] = useState(0);

    return (
        <div className="header-and-content header-and-content--one-row-offset">
            <header className="app-navigation">
                <div className="app-navigation--loaded app-navigation__container">
                    <div className="app-navigation__wrapper">
                        <div className="app-navigation__action-bar-wrapper">
                            <nav className="an-primary-links">
                                <ul className="an-primary-links__list">
                                    <li className="an-primary-links__list-item an-primary-links__list-item--home">
                                        <a href="#/" className="an-primary-links__link">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" color="#000" stroke="none" className="main-navigation__image">
                                                <path stroke="none" d="M28.7 5.3L24.4 1l-4 4.3L-.5 25.9l4.3 4.3L24.4 9.4l20.9 20.8 4.2-4.3z" ></path>
                                                <path stroke="none" d="M7.3 30.6V49h11.2V34.7h12.3V49h11.1V30.6L24.6 13.8z"></path>
                                            </svg>

                                        </a>
                                    </li>
                                    <li onMouseEnter={() => setIsHovered(1)} onMouseLeave={() => setIsHovered(0)} className={'an-primary-links__list-item ' + (isHovered === 1 ? 'an-primary-links__list-item--focus' : '')}>
                                        <a href="#/home" target="_self" className="an-primary-links__link">
                                            <span className={"spanClass " + (isHovered === 1 ? 'spanClass--focus' : '')}>Home</span>
                                        </a>
                                    </li>
                                    <li onMouseEnter={() => setIsHovered(2)} onMouseLeave={() => setIsHovered(0)} className={"an-primary-links__list-item " + (isHovered === 2 ? 'an-primary-links__list-item--focus' : '')}>
                                        <a href="#/userslist" target="_self" className="an-primary-links__link">
                                            <span className={"spanClass " + (isHovered === 2 ? 'spanClass--focus' : '')}>Manage users</span>
                                        </a>
                                    </li>
                                    <li onMouseEnter={() => setIsHovered(3)} onMouseLeave={() => setIsHovered(0)} className={"an-primary-links__list-item " + (isHovered === 3 ? 'an-primary-links__list-item--focus' : '')}>
                                        <a href="#/userslist" target="_self" className="an-primary-links__link">
                                            <span className={"spanClass " + (isHovered === 3 ? 'spanClass--focus' : '')}>Something else...</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Menu;