import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { styled } from 'styled-components';
import './react-navbar.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LogoImg = styled.img`
    &:hover {
        filter: drop-shadow(0px 0px 4px darkorange);
    }
`

const ReactNavbar = ({ images }) => {
    const { t, i18n } = useTranslation()
    const [ isEnglish, setIsEnglish ] = useState(true)
    const [ isArabic, setIsArabic ] = useState(false)
    const [ isRussian, setIsRussian ] = useState(false)

    useEffect(() => {
        const language = localStorage.getItem('i18nextLng')
        if (language === 'ar') {
            setIsArabic(true)
            setIsEnglish(false)
            setIsRussian(false)
        } else if (language === 'en') {
            setIsEnglish(true)
            setIsArabic(false)
            setIsRussian(false)
        } else if (language === 'ru') {
            setIsRussian(true)
            setIsEnglish(false)
            setIsArabic(false)
        }
    }, [])

    const handleLanguageChange = async (lang) => {
        i18n.changeLanguage(lang)
        if (lang === 'ar') {
            setIsArabic(true)
            setIsEnglish(false)
            setIsRussian(false)
            document.body.style.direction = 'rtl'
        } else if (lang === 'en') {
            setIsArabic(false)
            setIsEnglish(true)
            setIsRussian(false)
            document.body.style.direction = 'ltr'
        } else if (lang === 'ru') {
            setIsRussian(true)
            setIsArabic(false)
            setIsEnglish(false)
            document.body.style.direction = 'ltr'
        }
    }

  return (
    <Navbar fixed='top' className='react-nav' data-bs-theme="dark" collapseOnSelect expand="lg" style={{backgroundColor:'var(--brown)',direction:"ltr"}}>
        <Container>
            <Link to="/" style={{padding:'10px 0'}}>
                <Navbar.Brand>
                    <LogoImg
                        src={images['logo.png']}
                        width="130"
                        className="d-inline-block align-top p-0 m-0"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav className='link-container' style={{color:'var(--main-text-color)'}}>
                    
                    <NavDropdown title={`${t('navbar.links.1')}`} id="collapsible-nav-dropdown">
                        <Link to='/mainland-company' className='navbar-link'>
                            <NavDropdown.Item href='/mainland-company' className='dropdown-link'>{t('navbar.dropdowns.1')}</NavDropdown.Item>
                        </Link>
                        <Link to='/llc-company' className='navbar-link'>
                            <NavDropdown.Item href='/llc-company' className='dropdown-link'>
                                {t('navbar.dropdowns.2')}
                            </NavDropdown.Item>
                        </Link>
                        <Link to='/freezone-company' className='navbar-link'>
                            <NavDropdown.Item href='/freezone-company' className='dropdown-link'>
                                {t('navbar.dropdowns.3')}
                            </NavDropdown.Item>
                        </Link>
                        <Link to='/offshore-company' className='navbar-link'>
                            <NavDropdown.Item href='/offshore-company' className='dropdown-link'>{t('navbar.dropdowns.4')}</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                    <NavDropdown title={`${t('navbar.links.2')}`} id="collapsible-nav-dropdown">
                        <Link to='/local-sponsor' className='navbar-link'>
                            <NavDropdown.Item href='/local-sponsor' className='dropdown-link'>{t('navbar.dropdowns.5')}</NavDropdown.Item>
                        </Link>
                        <Link to='/pro-services' className='navbar-link'>
                            <NavDropdown.Item href='/pro-services' className='dropdown-link'>
                                {t('navbar.dropdowns.6')}
                            </NavDropdown.Item>
                        </Link>
                        <Link to='/visa-services' className='navbar-link'>
                            <NavDropdown.Item href='/visa-services' className='dropdown-link'>{t('navbar.dropdowns.7')}</NavDropdown.Item>
                        </Link>
                        <Link to='/translation-services' className='navbar-link'>
                            <NavDropdown.Item href='/translation-services' className='dropdown-link'>
                                {t('navbar.dropdowns.8')}
                            </NavDropdown.Item>
                        </Link>
                        <Link to='/attestation-services' className='navbar-link'>
                            <NavDropdown.Item href='/attestation-services' className='dropdown-link'>
                                {t('navbar.dropdowns.9')}
                            </NavDropdown.Item>
                        </Link>
                        <Link to='/liquidation-services' className='navbar-link'>
                            <NavDropdown.Item href='/liquidation-services' className='dropdown-link'>
                                {t('navbar.dropdowns.10')}
                            </NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                    <Link to='/about-us' className='navbar-link'>
                        <Nav.Link href='/about-us' id='nav-link'>{t('navbar.links.3')}</Nav.Link>
                    </Link>
                    <Link to='/contact-us' className='navbar-link'>
                        <Nav.Link href='contact-us' id='nav-link'>{`${t('navbar.links.4')}`}</Nav.Link>
                    </Link>
                    <NavDropdown title={`${t('languages.language')}`} id="collapsible-nav-dropdown">
                        <Nav.Link id='nav-link' onClick={()=>handleLanguageChange('ar')}>{t('languages.ar')}</Nav.Link>
                        <Nav.Link id='nav-link' onClick={()=>handleLanguageChange('en')}>{t('languages.en')}</Nav.Link>
                        <Nav.Link id='nav-link' onClick={()=>handleLanguageChange('ru')}>{t('languages.ru')}</Nav.Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default ReactNavbar
