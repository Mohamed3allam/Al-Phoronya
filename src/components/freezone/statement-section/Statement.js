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
                    {t('freezone.paragraph1')}
                </Paragraph>
                <Paragraph>
                    {t('freezone.paragraph2')}
                </Paragraph>

                <SemiHeading>
                    {t('freezone.semi-heading1')}
                </SemiHeading>
                <Paragraph>
                    {t('freezone.paragraph3')}
                </Paragraph>
                <Paragraph>
                    {t('freezone.paragraph4')}
                </Paragraph>

                <SemiHeading>
                    {t('freezone.semi-heading2')}
                </SemiHeading>
                <Paragraph>
                    {t('freezone.paragraph5')}
                </Paragraph>

                <SemiHeading>
                    {t('freezone.semi-heading3')}
                </SemiHeading>

                <MiniHeading>
                    {t('freezone.mini-heading1')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph6')}
                </Paragraph>

                <MiniHeading>
                    {t('freezone.mini-heading2')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph7')}
                </Paragraph>
                
                <MiniHeading>
                    {t('freezone.mini-heading3')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph8')}
                </Paragraph>

                <MiniHeading>
                    {t('freezone.mini-heading4')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph9')}
                </Paragraph>

                <MiniHeading>
                    {t('freezone.mini-heading5')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph10')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading6')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph11')}
                </Paragraph>
                <Paragraph>
                    {t('freezone.paragraph12')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading7')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph13')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading8')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph14')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading9')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph15')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading10')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph16')}
                </Paragraph>
                <Paragraph>
                    {t('freezone.paragraph17')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading11')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph18')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading12')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph19')}
                </Paragraph>



                <SemiHeading>
                    {t('freezone.semi-heading4')}
                </SemiHeading>

                <MiniHeading>
                    {t('freezone.mini-heading13')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph20')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading14')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph21')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading15')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph22')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading16')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph23')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading17')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph24')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading18')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph25')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading19')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph26')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading20')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph27')}
                </Paragraph>




                <SemiHeading>
                    {t('freezone.semi-heading5')}
                </SemiHeading>

                <MiniHeading>
                    {t('freezone.mini-heading21')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph28')}
                </Paragraph>
                <MiniHeading>
                    {t('freezone.mini-heading22')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph29')}
                </Paragraph>


                <SemiHeading>
                    {t('freezone.semi-heading6')}
                </SemiHeading>

                <MiniHeading>
                    {t('freezone.mini-heading23')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph30')}
                </Paragraph>


                <SemiHeading>
                    {t('freezone.semi-heading7')}
                </SemiHeading>

                <MiniHeading>
                    {t('freezone.mini-heading24')}
                </MiniHeading>
                <Paragraph>
                    {t('freezone.paragraph31')}
                </Paragraph>


                <SemiHeading>
                    {t('freezone.semi-heading8')}
                </SemiHeading>
                <Paragraph>
                    {t('freezone.paragraph32')}
                </Paragraph>
                <Paragraph>
                    {t('freezone.paragraph33')}
                </Paragraph>

                <Ul>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul1.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul1.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul1.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul1.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul1.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul1.li6')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul1.li7')}
                        </Paragraph>
                    </Li>
                </Ul>

                <MiniHeading>
                    {t('freezone.mini-heading25')}
                </MiniHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul2.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul2.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul2.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul2.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul2.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul2.li6')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul2.li7')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul2.li8')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('freezone.ul2.li9')}
                        </Paragraph>
                    </Li>
                </Ul>
            </Wrapper>
        </Container>
    )
}

export default Statement
