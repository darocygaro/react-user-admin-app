import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const Footer = (props) => {

    let isActive = true;

    /*const [isHovered, setIsHovered] = useState(Number(localStorage.getItem("ishovered")));
    const [isActive, setIsActive] = useState(Number(localStorage.getItem("isactive")));

    console.log('Is active: ' + isActive)
    console.log('Is hovered: ' + isHovered)

    useEffect(() => {
        localStorage.setItem("isactive", isActive);
        localStorage.setItem("ishovered", isHovered);
    }, [isActive, isHovered])

    const isActiveClicked = (passedValue) => {
        setIsActive(passedValue);
    }*/

    return (
        <div className="footer-container fixed no-sticky-footer">
            <div className="upm-footer">
                <div className="upm-footer__row">
                    <div className="upm-footer__bottom-wrap">
                        <div className="upm-footer__bottom-list-container">
                            <ul>
                                <li>Copyright&nbsp;© 2020 UPM. All rights reserved.</li>
                                <li><a href="https://www.upm.com/legal-notice/" rel="noopener">Legal Notice</a></li>
                                <li><a href="https://privacy.upm.com/" target="_blank" rel="noopener">Privacy Policy</a></li>
                            </ul>
                            <a data-v-63ff81fc="" href="javascript:void()" className="cookie-policy-toggle">Cookie policy settings</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;