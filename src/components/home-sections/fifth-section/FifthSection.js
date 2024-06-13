import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { styled } from 'styled-components'
import './fifth-section.css'
import { useTranslation } from 'react-i18next'
import { mobile } from '../../../responsive'


const Container1 = styled.section`
    background-color: var(--light-main-bg);
    height: 100%;
    width: 100%;
    overflow: hidden;
`
const Wrapper = styled.div`
    padding: 10px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const SemiHeading = styled.p`
    color: var(--light-gold);
    font-weight: 600;
    text-shadow: 0px 0px 10px black ; 

`
const Heading = styled.h1`
    font-size: 50px;
    font-weight: bold;
    text-align: center;

    ${mobile({
        fontSize:'30px'
    })}
`
const FifthSection = ({ images }) => {

    const { t, i18n } = useTranslation()

    return (
        <Container1>
            <div className='backdrop-fifth'>
                <Container>
                    <Wrapper>
                        <hr style={{boxShadow:'0px 0px 5px var(--semi-gold)',width:'40px',backgroundImage:'linear-gradient(to right, var(--gold), var(--semi-gold))', height:'6px', opacity:1}}/>
                        <SemiHeading>
                        {t('home.fifth-section.semi-heading')}
                        </SemiHeading>
                        <Heading>
                        {t('home.fifth-section.heading')}
                        </Heading>
                    </Wrapper>
                </Container>
            </div>
        </Container1>
    )
}

export default FifthSection
