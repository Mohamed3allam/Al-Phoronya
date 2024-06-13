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
                        {t('liquidation.paragraph1')}
                    </Paragraph>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul1.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul1.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul1.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul1.li4')}
                            </Paragraph>
                        </Li>
                    </Ul>

                <SemiHeading>
                    {t('liquidation.semi-heading1')}
                </SemiHeading>
                    <Paragraph>
                        {t('liquidation.paragraph2')}
                    </Paragraph>
                <SemiHeading>
                    {t('liquidation.semi-heading2')}
                </SemiHeading>
                    <Paragraph>
                        {t('liquidation.paragraph3')}
                    </Paragraph>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul2.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul2.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul2.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul2.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul2.li5')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul2.li6')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul2.li7')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul2.li8')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul2.li9')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul2.li10')}
                            </Paragraph>
                        </Li>
                    </Ul>

                <SemiHeading>
                    {t('liquidation.semi-heading3')}
                </SemiHeading>
                    <Paragraph>
                        {t('liquidation.paragraph4')}
                    </Paragraph>
                    <Paragraph>
                        {t('liquidation.paragraph5')}
                    </Paragraph>
                <SemiHeading>
                    {t('liquidation.semi-heading4')}
                </SemiHeading>
                    <Paragraph>
                        {t('liquidation.paragraph6')}
                    </Paragraph>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul3.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul3.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul3.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul3.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul3.li5')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul3.li6')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul3.li7')}
                            </Paragraph>
                        </Li>
                    </Ul>

                <SemiHeading>
                    {t('liquidation.semi-heading5')}
                </SemiHeading>
                    <Paragraph>
                        {t('liquidation.paragraph7')}
                    </Paragraph>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul4.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul4.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul4.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul4.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul4.li5')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul4.li6')}
                            </Paragraph>
                        </Li>
                    </Ul>
                <SemiHeading>
                    {t('liquidation.semi-heading6')}
                </SemiHeading>
                    <Paragraph>
                        {t('liquidation.paragraph8')}
                    </Paragraph>
                <SemiHeading>
                    {t('liquidation.semi-heading7')}
                </SemiHeading>
                    <Paragraph>
                        {t('liquidation.paragraph9')}
                    </Paragraph>
                <MiniHeading>
                    {t('liquidation.mini-heading1')}
                </MiniHeading>
                    <Paragraph>
                        {t('liquidation.paragraph10')}
                    </Paragraph>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul5.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul5.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul5.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul5.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul5.li5')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('liquidation.ul5.li6')}
                            </Paragraph>
                        </Li>
                    </Ul>
                    <Paragraph>
                        {t('liquidation.paragraph11')}
                    </Paragraph>
                    <Paragraph>
                        {t('liquidation.paragraph12')}
                    </Paragraph>

            </Wrapper>
        </Container>
    )
}

export default Statement
