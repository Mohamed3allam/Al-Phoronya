import { t } from 'i18next'
import React from 'react'
import { Container } from 'react-bootstrap'
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
    return (
        <Container>
            <Wrapper>
                    <Paragraph>
                        {t('local-sponsor.paragraph1')}
                    </Paragraph>
                    <Paragraph>
                        {t('local-sponsor.paragraph2')}
                    </Paragraph>
                    <Paragraph>
                        {t('local-sponsor.paragraph3')}
                    </Paragraph>
                    <Paragraph>
                        {t('local-sponsor.paragraph4')}
                    </Paragraph>
                <MiniHeading>
                    {t('local-sponsor.mini-heading1')}
                </MiniHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul1.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul1.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul1.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul1.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul1.li5')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul1.li6')}
                            </Paragraph>
                        </Li>
                    </Ul>

                <MiniHeading>
                    {t('local-sponsor.mini-heading2')}
                </MiniHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul2.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul2.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul2.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul2.li4')}
                            </Paragraph>
                        </Li>
                    </Ul>

                <SemiHeading>
                    {t('local-sponsor.semi-heading1')}
                </SemiHeading>
                    <Paragraph>
                        {t('local-sponsor.paragraph5')}
                    </Paragraph>
                <MiniHeading>
                    {t('local-sponsor.mini-heading3')}
                </MiniHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul3.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul3.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul3.li3')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul3.li4')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul3.li5')}
                            </Paragraph>
                        </Li>
                    </Ul>

                <MiniHeading>
                    {t('local-sponsor.mini-heading4')}
                </MiniHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul4.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul4.li2')}
                            </Paragraph>
                        </Li>
                    </Ul>

                <SemiHeading>
                    {t('local-sponsor.semi-heading2')}
                </SemiHeading>
                    <Paragraph>
                        {t('local-sponsor.paragraph6')}
                    </Paragraph>
                <MiniHeading>
                    {t('local-sponsor.mini-heading5')}
                </MiniHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul5.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul5.li2')}
                            </Paragraph>
                        </Li>
                    </Ul>

                <MiniHeading>
                    {t('local-sponsor.mini-heading6')}
                </MiniHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul6.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul6.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul6.li3')}
                            </Paragraph>
                        </Li>
                    </Ul>

                <SemiHeading>
                    {t('local-sponsor.semi-heading3')}
                </SemiHeading>
                <SemiHeading>
                    {t('local-sponsor.semi-heading4')}
                </SemiHeading>
                    <Paragraph>
                        {t('local-sponsor.paragraph7')}
                    </Paragraph>
                    <Paragraph>
                        {t('local-sponsor.paragraph8')}
                    </Paragraph>

                <SemiHeading>
                    {t('local-sponsor.semi-heading5')}
                </SemiHeading>
                    <Ul>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul7.li1')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul7.li2')}
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                {t('local-sponsor.ul7.li3')}
                            </Paragraph>
                        </Li>
                    </Ul>

                    
            </Wrapper>
        </Container>
    )
}

export default Statement
