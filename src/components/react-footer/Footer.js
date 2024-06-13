import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs'
import './footer.css'
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: right;
    gap: 10px;
`
const Button = styled.button`
    background-color: white;
    padding: 20px;
    font-weight: bold;
    color: black;
    border: none;
    border-radius: 30px;
    width: 100%;
    
    &:hover {
        background-color: var(--main-color);
        color: white;
    }
`
const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
`
const FacebookButton = styled.span`
    background-color: #3b5998;
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #253860;
    }
`
const InstagramButton = styled.span`
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 60%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #253860;
    }
`
const WhatsappButton = styled.span`
    background-color: #25d366;
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #1a9246;
    }
`
const SocialLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
`
const Footer = ({ images }) => {

const { t, i18n } = useTranslation()

  return (
    <MDBFooter style={{backgroundColor:'var(--dark-main-bg)'}} color='white' className='text-center text-lg-start pt-5'>
        <section>
            <MDBContainer className='text-center text-md-start'>
                <MDBRow>
                    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                        <img src={images['logo.png']} className='img-fluid'/>
                    </MDBCol>

                    <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>{t('navbar.links.1')}</h6>
                        <p>
                            <Link to='/mainland-company' className='text-reset'>
                                {t('navbar.dropdowns.1')}
                            </Link>
                        </p>
                        <p>
                            <Link to='/llc-company' className='text-reset'>
                                {t('navbar.dropdowns.2')}
                            </Link>
                        </p>
                        <p>
                            <Link to='/freezone-company' className='text-reset'>
                                {t('navbar.dropdowns.3')}
                            </Link>
                        </p>
                        <p>
                            <Link to='/offshore-company' className='text-reset'>
                                {t('navbar.dropdowns.4')}
                            </Link>
                        </p>
                    </MDBCol>

                    <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>{t('navbar.links.2')}</h6>
                        <p>
                            <Link to='/local-sponsor' className='text-reset'>
                                {t('navbar.dropdowns.5')}
                            </Link>
                        </p>
                        <p>
                            <Link to='pro-services' className='text-reset'>
                                {t('navbar.dropdowns.6')}
                            </Link>
                        </p>
                        <p>
                            <Link to='visa-services' className='text-reset'>
                                {t('navbar.dropdowns.7')}
                            </Link>
                        </p>
                        <p>
                            <Link to='translation-services' className='text-reset'>
                                {t('navbar.dropdowns.8')}  
                            </Link>
                        </p>
                        <p>
                            <Link to='attestation-services' className='text-reset'>
                                {t('navbar.dropdowns.9')}
                            </Link>
                        </p>
                        <p>
                            <Link to='liquidation-services' className='text-reset'>
                                {t('navbar.dropdowns.10')}
                            </Link>
                        </p>
                    </MDBCol>

                    <MDBCol style={{left:'auto'}} md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                        <Contact>
                            <Link className='footer-link' to='/contact-us' style={{textDecoration:'none',color:'unset'}}>
                                <Button>{t('footer.links.contact')}</Button>
                            </Link>
                            <SocialIcons>
                                <Link target='_blank' rel=' noopener noreferrer' to="https://web.facebook.com/people/AL-Phoronya/61551121641229/?mibextid=LQQJ4d" style={{textDecoration:'none', color:'unset'}}>
                                    <FacebookButton>
                                        <SocialLink>
                                                <BsFacebook />
                                        </SocialLink>
                                    </FacebookButton>
                                </Link>
                                {/* <InstagramButton>
                                    <SocialLink>
                                        <BsInstagram />
                                    </SocialLink>
                                </InstagramButton> */}
                                <Link target='_blank' rel=' noopener noreferrer' to="https://wa.me/971585250771" style={{textDecoration:'none', color:'unset'}}>
                                    <WhatsappButton>
                                        <SocialLink>
                                                <BsWhatsapp />
                                        </SocialLink>
                                    </WhatsappButton>
                                </Link>
                            </SocialIcons>
                            <Link style={{color:'white',textDecoration:'none'}} to='/privacy-policy'>{t('footer.links.privacy-policy')}</Link>
                        </Contact>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023 Al Phoronya. All rights reserved
        </div>
    </MDBFooter>
  )
}

export default Footer
