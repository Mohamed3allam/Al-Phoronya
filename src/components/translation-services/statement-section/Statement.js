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
                        {t('translation.paragraph1')}
                    </Paragraph>
                <SemiHeading>
                    {t('translation.semi-heading1')}
                </SemiHeading>
                    <Paragraph>
                        {t('translation.paragraph2')}
                    </Paragraph>
                <SemiHeading>
                    {t('translation.semi-heading2')}
                </SemiHeading>
                    <Paragraph>
                        {t('translation.paragraph3')}
                    </Paragraph>
                    <Paragraph>
                        {t('translation.paragraph4')}
                    </Paragraph>
                    <Paragraph>
                        {t('translation.paragraph5')}
                    </Paragraph>
                    <Paragraph>
                        {t('translation.paragraph6')}
                    </Paragraph>
                <SemiHeading>
                    {t('translation.semi-heading3')}
                </SemiHeading>
                    <Paragraph>
                        {t('translation.paragraph6')}
                    </Paragraph>
                <SemiHeading>
                    {t('translation.semi-heading4')}
                </SemiHeading>
                    <Paragraph>
                        {t('translation.paragraph8')}
                    </Paragraph>
                <SemiHeading>
                    {t('translation.semi-heading5')}
                </SemiHeading>
                    <Paragraph>
                        {t('translation.paragraph9')}
                    </Paragraph>
                    <Paragraph>
                        {t('translation.paragraph10')}
                    </Paragraph>
                <SemiHeading>
                    {t('translation.semi-heading6')}
                </SemiHeading>
                    <Paragraph>
                        {t('translation.paragraph11')}
                    </Paragraph>
                <SemiHeading>
                    {t('translation.semi-heading7')}
                </SemiHeading>
                    <Paragraph>
                        {t('translation.paragraph12')}
                    </Paragraph>
                <SemiHeading>
                    {t('translation.semi-heading8')}
                </SemiHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('translation.ul1.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('translation.ul1.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('translation.ul1.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('translation.ul1.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('translation.ul1.li5')}
                            </Paragraph>
                        </Li>
                    </Ul>


            </Wrapper>
        </Container>
    )
}

export default Statement
