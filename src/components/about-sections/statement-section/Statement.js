import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    color: white;
    padding: 50px 0;
`
const Heading = styled.h5`
    color: var(--light-gold);
    text-align: center;
    font-weight: 600;
`
const SemiHeading = styled.h4`
    margin-top: 20px;
    font-weight: 600;
`
const MiniHeading = styled.h6`
    font-weight: bold;
    padding-top: 20px;
`
const Paragraph = styled.p`
    padding-top: 10px;
    font-weight: 400;
    line-height: 20px;
`

const Center = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    margin-top: 20px;
    background-color: #818a91;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    width: fit-content;
`

const Statement = ({ images }) => {

    const { t, i18n } = useTranslation()

    return (
        <Container>
            <Wrapper>
                <Heading>{t('about.centered-heading')}</Heading>
                <Paragraph>
                {t('about.paragraph1')}
                </Paragraph>
                <Paragraph>
                {t('about.paragraph2')}
                </Paragraph>
                <Paragraph>
                {t('about.paragraph3')}
                </Paragraph>
                <Paragraph>
                {t('about.paragraph4')}
                </Paragraph>
                <Paragraph>
                {t('about.paragraph5')}
                </Paragraph>

                <SemiHeading>
                    {t('about.semi-heading1')}
                </SemiHeading>
                <Paragraph>
                {t('about.paragraph6')}
                </Paragraph>

                <SemiHeading>
                {t('about.semi-heading2')}
                </SemiHeading>
                <Paragraph>
                {t('about.paragraph7')}
                </Paragraph>
                <Paragraph>
                {t('about.paragraph8')}
                </Paragraph>

                <Center>
                    <SemiHeading style={{fontSize:'30px'}}>
                    {t('about.semi-heading3')}
                    </SemiHeading>

                    <MiniHeading>
                        {t('about.mini-heading1')}
                    </MiniHeading>
                    <Paragraph>
                    {t('about.paragraph9')}
                    </Paragraph>
                    
                    <MiniHeading>
                        {t('about.mini-heading2')}
                    </MiniHeading>
                    <Paragraph>
                    {t('about.paragraph10')}
                    </Paragraph>

                    <MiniHeading>
                        {t('about.mini-heading3')}
                    </MiniHeading>
                    <Paragraph>
                    {t('about.paragraph11')}                   
                    </Paragraph>
                    <MiniHeading>
                        {t('about.mini-heading4')}
                    </MiniHeading>
                    <Paragraph>
                    {t('about.paragraph12')}
                    </Paragraph>

                    <SemiHeading style={{fontSize:'25px',paddingTop:'20px'}}>
                        {t('about.semi-heading4')}
                    </SemiHeading>
                    <Link to='/contact-us'>
                        <Button>
                            {t('about.contact')}
                        </Button>
                    </Link>
                </Center>
            </Wrapper>
        </Container>
    )
}

export default Statement
