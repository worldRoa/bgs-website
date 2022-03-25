import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll/modules';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    HeaderImg
} from'./NavbarElements';


export const Navbar = ({toggle}) => {
const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    });

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#000'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>BGS<HeaderImg /></NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='discover'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                >Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                >Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='donations'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                >Donate</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='signup'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                >Sign Up</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="signin"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                            >Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;