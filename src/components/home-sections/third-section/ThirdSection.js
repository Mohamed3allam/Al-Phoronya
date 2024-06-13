import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { styled } from 'styled-components'
import './third-section.css'
import 'animate.css';
import { mobile } from '../../../responsive';
import { useTranslation } from 'react-i18next';

const Container1 = styled.section`
    background-color: var(--main-bg);
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    position: relative;

`
const Wrapper = styled.div`
    padding: 100px 0 0 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;

`
const SemiHeading = styled.p`
    color: var(--gold);
    font-weight: 600;
    z-index: 99;
`
const Heading = styled.h1`
    font-size: 50px;
    font-weight: bold;

    ${mobile({
        fontSize:'25px'
    })}
`
const ThirdSection = ({ images }) => {
    const {t,i18n} = useTranslation()
    return (
        <Container1>
            <div className='backdrop-third'>
                <Container>
                    <Wrapper>
                        <SemiHeading>
                        {t('home.third-section.semi-heading')}
                        </SemiHeading>
                        <Heading>
                            {t('home.third-section.heading')}
                        </Heading>
                    </Wrapper>
                </Container>
            </div>
        </Container1>
    )
}

export default ThirdSection
