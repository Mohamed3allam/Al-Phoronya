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
                    {t('mainland.paragraph1')}
                </Paragraph>

                <SemiHeading>
                    {t('mainland.semi-heading1')}
                </SemiHeading>
                <Paragraph>
                    {t('mainland.paragraph2')}
                </Paragraph>

                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul1.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul1.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul1.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul1.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul1.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul1.li6')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul1.li7')}
                        </Paragraph>
                    </Li>
                </Ul>
                <Paragraph>
                    {t('mainland.paragraph3')}
                </Paragraph>

                <SemiHeading>
                    {t('mainland.semi-heading2')}
                </SemiHeading>
                <Paragraph>
                    {t('mainland.paragraph4')}
                </Paragraph>

                <SemiHeading>
                    {t('mainland.semi-heading3')}
                </SemiHeading>
                <Paragraph>
                    {t('mainland.paragraph5')}
                </Paragraph>

                <SemiHeading>
                    {t('mainland.semi-heading4')}
                </SemiHeading>
                <Paragraph>
                    {t('mainland.paragraph6')}
                </Paragraph>

                <SemiHeading>
                    {t('mainland.semi-heading5')}
                </SemiHeading>
                <Paragraph>
                    {t('mainland.paragraph7')}
                </Paragraph>

                <Heading>
                    {t('mainland.centered-heading1')}
                </Heading>
                
                <SemiHeading>
                    {t('mainland.semi-heading6')}
                </SemiHeading>
                <Paragraph>
                    {t('mainland.paragraph8')}
                </Paragraph>

                <SemiHeading>
                    {t('mainland.semi-heading7')}
                </SemiHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul2.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul2.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul2.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul2.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul2.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul2.li6')}
                        </Paragraph>
                    </Li>
                </Ul>

                <SemiHeading>
                    {t('mainland.semi-heading8')}
                </SemiHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul3.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul3.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul3.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul3.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul3.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul3.li6')}
                        </Paragraph>
                    </Li>
                </Ul>


                <SemiHeading>
                    {t('mainland.semi-heading9')}
                </SemiHeading>
                <Paragraph>
                    {t('mainland.paragraph9')}
                </Paragraph>

                <SemiHeading>
                    {t('mainland.semi-heading10')}
                </SemiHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul4.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul4.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul4.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul4.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul4.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul4.li6')}
                        </Paragraph>
                    </Li>
                </Ul>

                <SemiHeading>
                    {t('mainland.semi-heading11')}
                </SemiHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul5.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul5.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul5.li3')}
                        </Paragraph>
                    </Li>
                </Ul>


                <SemiHeading>
                    {t('mainland.semi-heading12')}
                </SemiHeading>
                <Paragraph>
                    {t('mainland.paragraph10')}
                </Paragraph>

                <SemiHeading>
                    {t('mainland.semi-heading13')}
                </SemiHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul6.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul6.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul6.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul6.li4')}
                        </Paragraph>
                    </Li>
                </Ul>

                <SemiHeading>
                    {t('mainland.semi-heading14')}
                </SemiHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul7.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul7.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul7.li3')}
                        </Paragraph>
                    </Li>
                </Ul>


                <SemiHeading>
                    {t('mainland.semi-heading15')}
                </SemiHeading>
                <Paragraph>
                    {t('mainland.paragraph11')}
                </Paragraph>

                <SemiHeading>
                    {t('mainland.semi-heading16')}
                </SemiHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul8.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul8.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul8.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul8.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul8.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul8.li6')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul8.li7')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul8.li8')}
                        </Paragraph>
                    </Li>
                </Ul>

                <SemiHeading>
                    {t('mainland.semi-heading17')}
                </SemiHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul9.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul9.li2')}
                        </Paragraph>
                    </Li>
                </Ul>


                <SemiHeading>
                    {t('mainland.semi-heading18')}
                </SemiHeading>
                <Paragraph>
                    {t('mainland.paragraph12')}
                </Paragraph>

                <MiniHeading>
                    {t('mainland.mini-heading1')}
                </MiniHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul10.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul10.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul10.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul10.li4')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul10.li5')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul10.li6')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul10.li7')}
                        </Paragraph>
                    </Li>
                </Ul>


                <SemiHeading>
                    {t('mainland.semi-heading19')}
                </SemiHeading>
                <Paragraph>
                    {t('mainland.paragraph13')}
                </Paragraph>
                <Paragraph>
                    {t('mainland.paragraph14')}
                </Paragraph>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul11.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul11.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul11.li3')}
                        </Paragraph>
                    </Li>
                </Ul>
                <Paragraph>
                    {t('mainland.paragraph15')}
                </Paragraph>
                <Center>
                    <SemiHeading>
                    {t('mainland.centered-heading2')}
                    </SemiHeading>
                </Center>
                <SemiHeading>
                    {t('mainland.semi-heading20')}
                </SemiHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul12.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul12.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul12.li3')}
                        </Paragraph>
                    </Li>
                </Ul>
                <Paragraph>
                    {t('mainland.paragraph16')}
                </Paragraph>
                <MiniHeading>
                    {t('mainland.mini-heading2')}
                </MiniHeading>
                <Ul>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul13.li1')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul13.li2')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul13.li3')}
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            {t('mainland.ul13.li4')}
                        </Paragraph>
                    </Li>
                </Ul>
                <Paragraph>
                    {t('mainland.paragraph17')}
                </Paragraph>
                <Center>
                    <Image src={images['tabl1.png']} className='img-fluid' />
                </Center>
            </Wrapper>
        </Container>
    )
}

export default Statement
