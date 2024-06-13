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
                        {t('visa.paragraph1')}
                    </Paragraph>

                    <Paragraph>
                        {t('visa.paragraph2')}
                    </Paragraph>
                <SemiHeading>
                    {t('visa.semi-heading1')}
                </SemiHeading>

                    <Paragraph>
                        {t('visa.paragraph3')}
                    </Paragraph>
                    <Paragraph>
                        {t('visa.paragraph16')}
                    </Paragraph>
                <MiniHeading>
                    {t('visa.mini-heading1')}
                </MiniHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('visa.ul1.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul1.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul1.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul1.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul1.li5')}
                            </Paragraph>
                        </Li>
                    </Ul>
                <SemiHeading>
                    {t('visa.semi-heading2')}
                </SemiHeading>
                    <Paragraph>
                        {t('visa.paragraph4')}
                    </Paragraph>
                <MiniHeading>
                    {t('visa.mini-heading2')}
                </MiniHeading>
                    <Paragraph>
                        {t('visa.paragraph5')}
                    </Paragraph>
                <MiniHeading>
                    {t('visa.mini-heading3')}
                </MiniHeading>
                    <Paragraph>
                        {t('visa.paragraph6')}
                    </Paragraph>
                <MiniHeading>
                    {t('visa.mini-heading4')}
                </MiniHeading>
                    <Paragraph>
                        {t('visa.paragraph7')}
                    </Paragraph>
                <SemiHeading>
                    {t('visa.semi-heading3')}
                </SemiHeading>
                    <Paragraph>
                        {t('visa.paragraph8')}
                    </Paragraph>
                <MiniHeading>
                    {t('visa.mini-heading5')}
                </MiniHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('visa.ul2.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul2.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul2.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul2.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul2.li5')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul2.li6')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul2.li7')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul2.li8')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul2.li9')}
                            </Paragraph>
                        </Li>
                    </Ul>
                <MiniHeading>
                    {t('visa.mini-heading6')}
                </MiniHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('visa.ul3.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul3.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul3.li3')}
                            </Paragraph>
                        </Li>
                    </Ul>
                    <Paragraph>
                        {t('visa.paragraph9')}
                    </Paragraph>
                <MiniHeading>
                    {t('visa.mini-heading7')}
                </MiniHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('visa.ul4.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul4.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul4.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul4.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul4.li5')}
                            </Paragraph>
                        </Li>
                    </Ul>
                    <Paragraph>
                        {t('visa.paragraph10')}
                    </Paragraph>
                <SemiHeading>
                    {t('visa.semi-heading4')}
                </SemiHeading>
                    <Paragraph>
                        {t('visa.paragraph11')}
                    </Paragraph>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('visa.ul5.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul5.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul5.li3')}
                            </Paragraph>
                        </Li>
                    </Ul>
                <SemiHeading>
                    {t('visa.semi-heading6')}
                </SemiHeading>
                    <Paragraph>
                        {t('visa.paragraph14')}
                    </Paragraph>
                    <Paragraph>
                        {t('visa.paragraph141')}
                    </Paragraph>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('visa.ul7.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul7.li2')}
                            </Paragraph>
                        </Li>
                    </Ul>
                    <Paragraph>
                        {t('visa.paragraph15')}
                    </Paragraph>
                <SemiHeading>
                    {t('visa.semi-heading5')}
                </SemiHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('visa.ul6.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul6.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul6.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul6.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul6.li5')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('visa.ul6.li6')}
                            </Paragraph>
                        </Li>
                    </Ul>
                    <Paragraph>
                        {t('visa.paragraph12')}
                    </Paragraph>
                    <Paragraph>
                        {t('visa.paragraph13')}
                    </Paragraph>

            </Wrapper>
        </Container>
    )
}

export default Statement
