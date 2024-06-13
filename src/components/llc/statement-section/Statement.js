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
    const { t, i18n } = useTranslation()
    return (
        <Container>
            <Wrapper>
                <Paragraph>
                    {t('llc.paragraph1')}
                </Paragraph>
                <Paragraph>
                    {t('llc.paragraph2')}
                </Paragraph>

                <SemiHeading>
                    {t('llc.semi-heading1')}
                </SemiHeading>
                <Paragraph>
                    {t('llc.paragraph3')}
                </Paragraph>

                <SemiHeading>
                    {t('llc.semi-heading2')}
                </SemiHeading>
                <Paragraph>
                    {t('llc.paragraph4')}
                </Paragraph>

                <SemiHeading>
                    {t('llc.semi-heading3')}
                </SemiHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('llc.ul1.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul1.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul1.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul1.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul1.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul1.li6')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul1.li7')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul1.li8')}
                        </Paragraph>
                    </Li>
                </Ul>


                <SemiHeading>
                    {t('llc.semi-heading4')}
                </SemiHeading>
                <Paragraph>
                    {t('llc.paragraph5')}
                </Paragraph>

                <MiniHeading>
                    {t('llc.mini-heading1')}
                </MiniHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li6')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li7')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li8')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li9')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li10')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li11')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul2.li12')}
                        </Paragraph>
                    </Li>
                </Ul>
                
                <MiniHeading>
                    {t('llc.mini-heading2')}
                </MiniHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('llc.ul3.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul3.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul3.li3')}
                        </Paragraph>
                    </Li>
                </Ul>


                <SemiHeading>
                    {t('llc.semi-heading5')}
                </SemiHeading>
                <Paragraph>
                    {t('llc.paragraph6')}
                </Paragraph>

                <Ul>
                    <Li>
                        <Paragraph>
                            {t('llc.ul4.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul4.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul4.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul4.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul4.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul4.li6')}
                        </Paragraph>
                    </Li>
                </Ul>

                <Paragraph>
                    {t('llc.paragraph7')}
                </Paragraph>

                <SemiHeading>
                    {t('llc.semi-heading6')}
                </SemiHeading>
                <Paragraph>
                    {t('llc.paragraph8')}
                </Paragraph>
                
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('llc.ul5.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul5.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul5.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul5.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul5.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul5.li6')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul5.li7')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul5.li8')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul5.li9')}
                        </Paragraph>
                    </Li>
                </Ul>



                <SemiHeading>
                    {t('llc.semi-heading7')}
                </SemiHeading>
                <MiniHeading>
                    {t('llc.mini-heading3')}
                </MiniHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('llc.ul6.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul6.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul6.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul6.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul6.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul6.li6')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul6.li7')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul6.li8')}
                        </Paragraph>
                    </Li>
                </Ul>


                <MiniHeading>
                    {t('llc.mini-heading4')}
                </MiniHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('llc.ul7.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul7.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul7.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('llc.ul7.li4')}
                        </Paragraph>
                    </Li>
                </Ul>

                
                <Paragraph>
                    {t('llc.paragraph9')}
                </Paragraph>
                <Paragraph>
                    {t('llc.paragraph10')}
                </Paragraph>


                <Center>
                    <Image src={images['tabl2.png']} className='img-fluid' />
                </Center>
            </Wrapper>
        </Container>
    )
}

export default Statement
