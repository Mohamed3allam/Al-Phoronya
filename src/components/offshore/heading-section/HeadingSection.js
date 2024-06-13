import React from 'react'
import { Container } from 'react-bootstrap'
import { BsWhatsapp } from 'react-icons/bs'
import { styled } from 'styled-components'
import ContactSection from '../../contact-section/ContactSection'
import { useTranslation } from 'react-i18next'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 0;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 20px;
`
const Heading = styled.h1`
    color: var(--light-gold);
    font-weight: 600;
    text-align: center;
`
const FullImage = styled.img`
    width: 120% !important;
    max-width: 100%;
    padding: 0;
`
const HeadingSection = ({ images }) => {
    const {t,i18n} = useTranslation()
    return (
        <Container>
            <Wrapper>
                <ContactSection />
                <Header>
                    <Heading>
                        {t('offshore.heading')}
                    </Heading>
                </Header>
                <FullImage src={images['creative.jpg']} />
            </Wrapper>
        </Container>
    )
}

export default HeadingSection
