import React from 'react'
import { Container } from 'react-bootstrap'
import { styled } from 'styled-components'
import { mobile } from '../../responsive'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;

    ${mobile({
        flexDirection:'column'
    })}
`

const ContactHeadingDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const ContactHeading = styled.h5`
    text-align: center;
    color: var(--light-gold);
    font-weight: bold;
    width: 100%;
`
const ContactDiv = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 270px;
    transition: 0.5s all ease;
    color: white;
    text-align: center;
    justify-content: center;
    position: relative;

    &:hover {
        backdrop-filter: brightness(3.5);
    }

    &:hover ${ContactHeading} {
        color: white;
    }
`
const Paragraph = styled.p`
    padding-top: 10px;
    font-weight: 500;
    line-height: 20px;
`
const FirstSection = () => {

    const { t, i18n } = useTranslation()

    return (
        <Container>
            <Wrapper>
                <ContactDiv className='animate__animated animate__fadeInRight animate__faster'>
                    <LocationOnIcon style={{color:'var(--main-bg)', position:'absolute',right:0,bottom:0,width:'80px',height:'80px',aspectRatio:'1/1'}} />
                    <ContactHeadingDiv>
                        <hr style={{height:'30px', backgroundImage:'linear-gradient(to bottom, var(--gold), var(--semi-gold))',opacity:1 ,width:'5px',boxShadow:'0px 0px 3px gold'}}/>
                        <ContactHeading>
                            {t('contact.first-section.address.heading')}
                        </ContactHeading>
                    </ContactHeadingDiv>
                    <Paragraph>
                        {t('contact.first-section.address.desc')}
                    </Paragraph>
                </ContactDiv>
                <ContactDiv className='animate__animated animate__fadeInRight'>
                    <EmailIcon style={{color:'var(--main-bg)', position:'absolute',right:0,bottom:0,width:'80px',height:'80px',aspectRatio:'1/1'}} />
                    <ContactHeadingDiv>
                        <hr style={{height:'30px', backgroundImage:'linear-gradient(to bottom, var(--gold), var(--semi-gold))',opacity:1 ,width:'5px',boxShadow:'0px 0px 3px gold'}}/>
                        <ContactHeading>
                        {t('contact.first-section.contact.heading')}
                        </ContactHeading>
                    </ContactHeadingDiv>
                    <Paragraph>
                        <Link style={{color:'white'}} to="mailto:info@al-phoronya.com">info@al-phoronya.com</Link> <br />
                        +971585250771 <br />
                        +97142520360
                    </Paragraph>
                </ContactDiv>
                <ContactDiv className='animate__animated animate__fadeInRight animate__slower'>
                    <AccessAlarmIcon style={{color:'var(--main-bg)', position:'absolute',right:0,bottom:0,width:'80px',height:'80px',aspectRatio:'1/1'}} />
                    <ContactHeadingDiv>
                        <hr style={{height:'30px', backgroundImage:'linear-gradient(to bottom, var(--gold), var(--semi-gold))',opacity:1 ,width:'5px',boxShadow:'0px 0px 3px gold'}}/>
                        <ContactHeading>
                        {t('contact.first-section.opening-hours.heading')}
                        </ContactHeading>
                    </ContactHeadingDiv>
                    <Paragraph>
                    {t('contact.first-section.opening-hours.desc')}
                    </Paragraph>
                </ContactDiv>
            </Wrapper>
        </Container>
    )
}

export default FirstSection
