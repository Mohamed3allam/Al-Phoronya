import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { styled } from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    color: white;
`
const Heading = styled.h2`
    color: var(--light-gold);
    text-align: center;
    font-weight: 700;
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
    font-weight: 500;
    line-height: 20px;
`
const Ul = styled.ul`
    line-height: 10px;
`
const OlHeading = styled.ol``
const Li = styled.li`
`
const LiHeading = styled.li`
    margin-top: 20px;
    font-weight: 600;
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
const Image = styled.img`
    margin-bottom: 40px;
`
const Statement = ({ images }) => {
    const {t,i18n} = useTranslation()
    return (
        <Container>
            <Wrapper>
                    <Paragraph>
                        {t('pro.paragraph1')}
                    </Paragraph>
                    <Paragraph>
                        {t('pro.paragraph2')}
                    </Paragraph>
                <SemiHeading>
                    {t('pro.semi-heading1')}
                </SemiHeading>
                    <Paragraph>
                        {t('pro.paragraph3')}
                    </Paragraph>
                <MiniHeading>
                    {t('pro.mini-heading1')}
                </MiniHeading>
                    <Paragraph>
                        {t('pro.paragraph4')}
                    </Paragraph>
                <MiniHeading>
                    {t('pro.mini-heading2')}
                </MiniHeading>
                    <Paragraph>
                        {t('pro.paragraph5')}
                    </Paragraph>
                    <Paragraph>
                        {t('pro.paragraph6')}
                    </Paragraph>
                <SemiHeading>
                    {t('pro.semi-heading2')}
                </SemiHeading>
                    <Paragraph>
                        {t('pro.paragraph7')}
                    </Paragraph>
                <MiniHeading>
                    {t('pro.mini-heading3')}
                </MiniHeading>
                    <Paragraph>
                        {t('pro.paragraph8')}
                    </Paragraph>
                <MiniHeading>
                    {t('pro.mini-heading4')}
                </MiniHeading>
                    <Paragraph>
                        {t('pro.paragraph9')}
                    </Paragraph>
                <MiniHeading>
                    {t('pro.mini-heading5')}
                </MiniHeading>
                    <Paragraph>
                        {t('pro.paragraph10')}
                    </Paragraph>
                <SemiHeading>
                    {t('pro.semi-heading3')}
                </SemiHeading>
                    <Paragraph>
                        {t('pro.paragraph11')}
                    </Paragraph>
                <MiniHeading>
                    {t('pro.mini-heading6')}
                </MiniHeading>
                    <Paragraph>
                        {t('pro.paragraph12')}
                    </Paragraph>
                <MiniHeading>
                    {t('pro.mini-heading7')}
                </MiniHeading>
                    <Paragraph>
                        {t('pro.paragraph13')}
                    </Paragraph>
                    <Paragraph>
                        {t('pro.paragraph14')}
                    </Paragraph>
                <MiniHeading>
                    {t('pro.mini-heading8')}
                </MiniHeading>
                    <Paragraph>
                        {t('pro.paragraph15')}
                    </Paragraph>
                <MiniHeading>
                    {t('pro.mini-heading9')}
                </MiniHeading>
                    <Paragraph>
                        {t('pro.paragraph16')}
                    </Paragraph>
                <SemiHeading>
                    {t('pro.semi-heading4')}
                </SemiHeading>
                    <Paragraph>
                        {t('pro.paragraph17')}
                    </Paragraph>
                <SemiHeading>
                    {t('pro.semi-heading5')}
                </SemiHeading>
                    <Paragraph>
                        {t('pro.paragraph18')}
                    </Paragraph>
                <SemiHeading>
                    {t('pro.semi-heading6')}
                </SemiHeading>
                    <Paragraph>
                        {t('pro.paragraph19')}
                    </Paragraph>
                <SemiHeading>
                    {t('pro.semi-heading7')}
                </SemiHeading>
                    <Paragraph>
                        {t('pro.paragraph20')}
                    </Paragraph>
                <SemiHeading>
                    {t('pro.semi-heading8')}
                </SemiHeading>
                    <Paragraph>
                        {t('pro.paragraph21')}
                    </Paragraph>
                <SemiHeading>
                    {t('pro.semi-heading9')}
                </SemiHeading>
                    <Paragraph>
                        {t('pro.paragraph22')}
                    </Paragraph>
                <SemiHeading>
                    {t('pro.semi-heading10')}
                </SemiHeading>
                    <Paragraph>
                        {t('pro.paragraph23')}
                    </Paragraph>

            </Wrapper>
        </Container>
    )
}

export default Statement
