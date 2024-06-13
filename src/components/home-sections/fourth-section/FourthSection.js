import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { styled } from 'styled-components'
import './fourth-section.css'
import 'animate.css';
import { useTranslation } from 'react-i18next';
import { mobile } from '../../../responsive';
import { Link } from 'react-router-dom';


const Container1 = styled.section`
    background-color: var(--main-bg);
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
`
const Wrapper = styled.div`
    padding: 10px 0 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    z-index: 9;

    ${mobile({
        flexDirection:'column',
        gap:'20px'
    })}
`
const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    z-index: 9;
    gap: 15px;

    ${mobile({
        flexDirection:'column',
        gap:'20px'
    })}
`

const Heading = styled.h4`
    font-weight: bold;
    text-shadow: 0px 0px 10px black ; 
    color: var(--light-gold);
`
const Div = styled.div`
    flex: 1;
    padding: 30px 30px 25px 30px;
    border-top: 3px solid var(--main-bg);
    display: flex;
    flex-direction: column;
    background-color: var(--light-main-bg);

    &:hover {
        background-color: white;
        border-top: 3px solid var(--semi-gold);
        color: black !important;
    }
    &:hover ${Heading} {
        color: black !important;
    }
`
const Paragraph = styled.p`
    font-size: medium;
`
const SemiHeading = styled.p`
    color: var(--gold);
    font-weight: 600;
    z-index: 99;
    margin-bottom: 0;
`
const ServicesHeading = styled.h1`
    font-size: 50px;
    font-weight: bold;
    margin-top: 0;

    ${mobile({
        fontSize:'25px'
    })}
`
const Image = styled.img`
    border-radius: 5px;
    box-shadow: 0px 0px 30px 5px black;
`
const ImageHeading = styled.h3`
    padding-top: 10px;
    font-weight: bold;
`
const FourthSection = ({ images }) => {

    const { t, i18n } = useTranslation()

    return (
        <>
        <Container1>
            <div className='backdrop-fourth'>
                <Container>
                    <Wrapper>
                        <Row>
                            <Div>
                                <Heading>
                                    {t('home.fourth-section.box1.heading')}
                                </Heading>
                                <Paragraph>
                                    {t('home.fourth-section.box1.paragraph')}
                                </Paragraph>
                            </Div>
                            <Div>
                                <Heading>
                                {t('home.fourth-section.box2.heading')}
                                </Heading>
                                <Paragraph>
                                {t('home.fourth-section.box2.paragraph')}
                                </Paragraph>
                            </Div>
                        </Row>
                        <Row>
                            <Div>
                                <Heading>
                                {t('home.fourth-section.box3.heading')}
                                </Heading>
                                <Paragraph>
                                {t('home.fourth-section.box3.paragraph')}
                                </Paragraph>
                            </Div>
                            <Div>
                                <Heading>
                                {t('home.fourth-section.box4.heading')}
                                </Heading>
                                <Paragraph>
                                {t('home.fourth-section.box4.paragraph')}
                                </Paragraph>
                            </Div>
                        </Row>
                    </Wrapper>
                </Container>
            </div>
        </Container1>
        <Container1>
            <div className='backdrop-fourth'>
                <Container>
                    <Wrapper>
                        <SemiHeading>
                            {t('home.fourth-section.semi-heading')}
                        </SemiHeading>
                        <ServicesHeading>
                            {t('home.fourth-section.heading')}
                        </ServicesHeading>
                        <Row2>
                            <div className='col text-center'>
                                <Image src={images['left-egary.jpg']} className='img-fluid' />
                                <ImageHeading>
                                    {t('home.fourth-section.col3.heading')}
                                </ImageHeading>
                                <Paragraph>
                                    {t('home.fourth-section.col3.paragraph')}
                                </Paragraph>
                                <Link className='updated-link' to="/visa-services">
                                    {t('home.fourth-section.col1.button')}
                                </Link>
                            </div>
                            <div className='col text-center'>
                                <Image src={images['mid-egary.jpg']} className='img-fluid' />
                                <ImageHeading>
                                    {t('home.fourth-section.col2.heading')}
                                </ImageHeading>
                                <Paragraph>
                                    {t('home.fourth-section.col2.paragraph')}
                                </Paragraph>
                                <Link className='updated-link' to="/visa-services">
                                    {t('home.fourth-section.col1.button')}
                                </Link>
                            </div>
                            <div className='col text-center'>
                                <Image src={images['translation-home.jpg']} className='img-fluid' />
                                <ImageHeading>
                                    {t('home.fourth-section.col4.heading')}
                                </ImageHeading>
                                <Paragraph>
                                    {t('home.fourth-section.col4.paragraph')}
                                </Paragraph>
                                <Link className='updated-link' to="/translation-services">
                                    {t('home.fourth-section.col1.button')}
                                </Link>
                            </div>
                            <div className='col text-center'>
                                <Image src={images['egary.jpg']} className='img-fluid' />
                                <ImageHeading>
                                    {t('home.fourth-section.col1.heading')}
                                </ImageHeading>
                                <Paragraph>
                                    {t('home.fourth-section.col1.paragraph')}
                                </Paragraph>
                            </div>
                        </Row2>
                    </Wrapper>
                </Container>
            </div>
        </Container1>
        </>
    )
}

export default FourthSection
