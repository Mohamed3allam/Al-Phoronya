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
                <SemiHeading>
                    {t('offshore.semi-heading1')}
                </SemiHeading>
                    <Paragraph>
                        {t('offshore.paragraph1')}
                    </Paragraph>
                    <Paragraph>
                        {t('offshore.paragraph2')}
                    </Paragraph>
                <SemiHeading>
                    {t('offshore.semi-heading2')}
                </SemiHeading>
                    <Paragraph>
                        {t('offshore.paragraph3')}
                    </Paragraph>
                <SemiHeading>
                    {t('offshore.semi-heading3')}
                </SemiHeading>
                    <Paragraph>
                        {t('offshore.paragraph4')}
                    </Paragraph>
                <SemiHeading>
                    {t('offshore.semi-heading4')}
                </SemiHeading>
                    <Paragraph>
                        {t('offshore.paragraph5')}
                    </Paragraph>
                <SemiHeading>
                    {t('offshore.semi-heading5')}
                </SemiHeading>
                    <Paragraph>
                        {t('offshore.paragraph6')}
                    </Paragraph>
                <SemiHeading>
                    {t('offshore.semi-heading6')}
                </SemiHeading>
                    <Paragraph>
                        {t('offshore.paragraph7')}
                    </Paragraph>
                <SemiHeading>
                    {t('offshore.semi-heading7')}
                </SemiHeading>
                    <Paragraph>
                        {t('offshore.paragraph8')}
                    </Paragraph>


                    <MiniHeading>
                        {t('offshore.mini-heading1')}
                    </MiniHeading>
                        <Ul>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul1.li1')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul1.li2')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul1.li3')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul1.li4')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul1.li5')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul1.li6')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul1.li7')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul1.li8')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul1.li9')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul1.li10')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul1.li11')}
                                </Paragraph>
                            </Li>
                        </Ul>

                    <MiniHeading>
                        {t('offshore.mini-heading2')}
                    </MiniHeading>
                        <Ul>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul2.li1')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul2.li2')}
                                </Paragraph>
                            </Li>
                        </Ul>

                <SemiHeading>
                    {t('offshore.semi-heading8')}
                </SemiHeading>
                    <MiniHeading>
                        {t('offshore.mini-heading3')}
                    </MiniHeading>
                        <Ul>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul3.li1')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul3.li2')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul3.li3')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul3.li4')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul3.li5')}
                                </Paragraph>
                            </Li>
                        </Ul>

                    <MiniHeading>
                        {t('offshore.mini-heading4')}
                    </MiniHeading>
                        <Ul>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul4.li1')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul4.li2')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul4.li3')}
                                </Paragraph>
                            </Li>
                            <Li>
                                <Paragraph>
                                    {t('offshore.ul4.li4')}
                                </Paragraph>
                            </Li>
                        </Ul>

                        <Paragraph>
                            {t('offshore.paragraph9')}
                        </Paragraph>
                        <Paragraph>
                            {t('offshore.paragraph10')}
                        </Paragraph>
            </Wrapper>
        </Container>
    )
}

export default Statement
