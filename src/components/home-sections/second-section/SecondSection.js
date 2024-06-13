import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { styled } from 'styled-components'
import './second-section.css'
import 'animate.css';
import { mobile } from '../../../responsive';
import { useTranslation } from 'react-i18next';


const Container1 = styled.section`
    background-color: var(--main-bg);
    height: fit-content;
    width: 100%;
    padding-bottom: 0;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
    width: 100%;

    ${mobile({
        flexDirection:'column'
    })}
`
const Left = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0;
    margin: 0;
`
const Image = styled.img`
    width: 80%;
    background-color: rgba(255, 217, 0, 0.782);
`
const FloatingImage = styled.img`
    position: absolute;
    /* margin-bottom: -30%; */
    bottom: 0;
    right: 0;
    width: 70%;
`
const Right = styled.div`
    flex: 4;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 30px;

    ${mobile({
        padding:0
    })}
`
const SemiHeading = styled.h5`
    font-size: 20px;
    color: #efe195;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 20px;
`
const Heading = styled.h2`
    font-size: 50px;
    font-weight: bold;

    ${mobile({
        fontSize:'30px'
    })}
`
const Paragraph = styled.p`
    margin: 40px 0;
    font-weight: 400;
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
`
const Numbers = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`
const NumberDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: min-content;
`
const MainNumber = styled.h2`
    color: var(--gold);
    font-size: 50px;
    font-weight: 700;
    font-family: 'Poppins' ;
    ${mobile({
        fontSize:'35px'
    })}
`
const NumberDesc = styled.p`
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 20px;
    ${mobile({
        fontSize:'12px'
    })}
`

const SecondSection = ({ images }) => {

    const { t, i18n } = useTranslation()

    return (
        <Container1>
            <div className='backdrop-second'>
                <Container>
                    <Wrapper>
                        <Left className=''>
                            <Image src={images['secondSectionLeftImage.png']} className='img-fluid'/>
                            <FloatingImage src={images['three-businessmen.jpg']} className=' img-fluid animate__animated animate__fadeInUp' />
                        </Left>
                        <Right>
                            <SemiHeading className='animate__animated animate__fadeInUp'>
                                <hr style={{boxShadow:'0px 0px 5px var(--semi-gold)',width:'40px',backgroundImage:'linear-gradient(to right, var(--gold), var(--semi-gold))', height:'6px', opacity:1}}/>
                                <span>
                                    &nbsp;{t('home.second-section.about-alphoronya')}
                                </span>
                            </SemiHeading>
                            <Heading className='animate__animated animate__fadeInUp'>
                                {t('home.second-section.heading')}
                            </Heading>
                            <Paragraph className='animate__animated animate__fadeInUp'>
                                {t('home.second-section.paragraph1')}
                            </Paragraph>
                            <Paragraph className='animate__animated animate__fadeInUp' style={{marginLeft:'3%'}}>
                                <hr style={{height:'100px', backgroundImage:'linear-gradient(to bottom, var(--gold), var(--semi-gold))',opacity:1 ,width:'14px',boxShadow:'0px 0px 3px gold'}}/>
                                <span>
                                    {t('home.second-section.paragraph2')}
                                </span>
                            </Paragraph>
                            <Numbers className='animate__animated animate__fadeInRight'>
                                <NumberDiv>
                                    <MainNumber>
                                        53
                                    </MainNumber>
                                    <NumberDesc>
                                        {t('home.second-section.number1')}
                                    </NumberDesc>
                                </NumberDiv>
                                <NumberDiv>
                                    <MainNumber>
                                        10
                                    </MainNumber>
                                    <NumberDesc>
                                        {t('home.second-section.number2')}
                                    </NumberDesc>
                                </NumberDiv>
                                <NumberDiv>
                                    <MainNumber>
                                        12
                                    </MainNumber>
                                    <NumberDesc>
                                        {t('home.second-section.number3')}
                                    </NumberDesc>
                                </NumberDiv>
                            </Numbers>
                        </Right>
                    </Wrapper>
                </Container>
            </div>
        </Container1>
    )
}

export default SecondSection
