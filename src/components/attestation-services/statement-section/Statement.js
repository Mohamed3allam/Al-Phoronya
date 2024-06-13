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
                        {t('attestation.paragraph1')}
                    </Paragraph>
                <SemiHeading>
                    {t('attestation.semi-heading1')}
                </SemiHeading>
                <SemiHeading>
                    {t('attestation.semi-heading2')}
                </SemiHeading>
                    <Paragraph>
                        {t('attestation.paragraph2')}
                    </Paragraph>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('attestation.ul1.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('attestation.ul1.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('attestation.ul1.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('attestation.ul1.li4')}
                            </Paragraph>
                        </Li>
                    </Ul>

                <SemiHeading>
                    {t('attestation.semi-heading3')}
                </SemiHeading>
                    <Paragraph>
                        {t('attestation.paragraph3')}
                    </Paragraph>
                    <MiniHeading>
                        {t('attestation.mini-heading1')}
                    </MiniHeading>
                    <Paragraph>
                        {t('attestation.paragraph4')}
                    </Paragraph>
                    <MiniHeading>
                        {t('attestation.mini-heading2')}
                    </MiniHeading>
                    <Paragraph>
                        {t('attestation.paragraph5')}
                    </Paragraph>
                    <MiniHeading>
                        {t('attestation.mini-heading3')}
                    </MiniHeading>
                    <Paragraph>
                        {t('attestation.paragraph6')}
                    </Paragraph>
                    <MiniHeading>
                        {t('attestation.mini-heading4')}
                    </MiniHeading>
                    <Paragraph>
                        {t('attestation.paragraph7')}
                    </Paragraph>
                    <MiniHeading>
                        {t('attestation.mini-heading5')}
                    </MiniHeading>
                    <Paragraph>
                        {t('attestation.paragraph8')}
                    </Paragraph>
                    <MiniHeading>
                        {t('attestation.mini-heading6')}
                    </MiniHeading>
                    <Paragraph>
                        {t('attestation.paragraph9')}
                    </Paragraph>
                <SemiHeading>
                    {t('attestation.semi-heading4')}
                </SemiHeading>
                    <Paragraph>
                        {t('attestation.paragraph10')}
                    </Paragraph>
                    <MiniHeading>
                        {t('attestation.mini-heading7')}
                    </MiniHeading>
                    <Paragraph>
                        {t('attestation.paragraph11')}
                    </Paragraph>
                    <MiniHeading>
                        {t('attestation.mini-heading8')}
                    </MiniHeading>
                    <Paragraph>
                        {t('attestation.paragraph12')}
                    </Paragraph>
                <SemiHeading>
                    {t('attestation.semi-heading5')}
                </SemiHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('attestation.ul2.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('attestation.ul2.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('attestation.ul2.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('attestation.ul2.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('attestation.ul2.li5')}
                            </Paragraph>
                        </Li>
                    </Ul>
                    <Paragraph>
                        {t('attestation.paragraph13')}
                    </Paragraph>

            </Wrapper>
        </Container>
    )
}

export default Statement
