import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { styled } from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    color: black;
`
const Heading = styled.h2`
    color: var(--light-gold);
    text-align: center;
    font-weight: 700;
`
const SemiHeading = styled.h4`
    margin-top: 20px;
    font-weight: 600;
    color: var(--main-bg);
`
const MiniHeading = styled.h6`
    font-weight: bold;
    padding-top: 20px;
    color: var(--main-bg);

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
                <MiniHeading>
                    Privacy Policy
                </MiniHeading>
                <Paragraph>
                This privacy policy (“Policy”) describes how [al-phoronya.com] we collects, uses, and shares information about you when you use our website, [website name], and any other websites or online services that link to this Policy (collectively, the al-phoronya.com”).
                </Paragraph>

                <MiniHeading>
                    Information We Collect
                </MiniHeading>
                <Paragraph>
                    We may collect information about you in the following ways:
                </Paragraph>
                <Ul>
                    <Li>
                        <Paragraph>
                            Information you provide to us: We may collect information that you provide to us directly, such as when you create an account, fill out a form, or contact us. This information may include your name, email address, phone number, and any other information you choose to provide.
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            Information we collect automatically: When you visit the Sites, we may automatically collect information about your device and your activity on the Sites, such as your IP address, browser type, operating system, page views, and the dates and times of your visits.
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            Information we collect from third parties: We may receive information about you from third parties, such as social media platforms, marketing partners, and public databases.
                        </Paragraph>
                    </Li>
                </Ul>

                <MiniHeading>
                    How We Use Your Information
                </MiniHeading>
                <Paragraph>
                    We may use the information we collect about you for the following purposes:
                </Paragraph>
                <Ul>
                    
                    <Li>
                        <Paragraph>
                            To provide, maintain, and improve the Sites: We may use your information to operate, maintain, and improve the features and functionality of the Sites.
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            To communicate with you: We may use your information to communicate with you about the Sites, your account, and other matters.
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            To personalize your experience: We may use your information to personalize your experience on the Sites, such as by showing you content and advertisements that may be of interest to you.
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            For research and development: We may use your information for research and development purposes, such as to test and improve the features and functionality of the Sites.
                        </Paragraph>
                    </Li>
                    <Li>
                        <Paragraph>
                            For compliance and legal purposes: We may use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
                        </Paragraph>
                    </Li>
                </Ul>

                    <MiniHeading>
                        Sharing Your Information
                    </MiniHeading>
                    <Paragraph>
                        We may share your information with third parties in the following circumstances:
                    </Paragraph>
                    <Ul>                        
                        <Li>
                            <Paragraph>
                                With service providers: We may share your information with service providers that perform functions on our behalf, such as hosting, analytics, payment processing, and marketing.
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                With business partners: We may share your information with business partners for marketing and other purposes.
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                In connection with a sale or merger: If we sell or merge with another company, we may share your information with the other company as part of the transaction.
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                As required by law: We may share your information as required by law, such as in response to a subpoena or court order.
                            </Paragraph>
                        </Li>
                    </Ul>

                    <MiniHeading>
                        Your Choices
                    </MiniHeading>
                    <Paragraph>
                        You have the following choices regarding the information we collect and use:
                    </Paragraph>
                    <Ul>
                        <Li>
                            <Paragraph>
                                Opting out of marketing communications: You can opt out of receiving marketing communications from us by following the unsubscribe instructions in the communications or by contacting us.
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                Accessing and updating your information: You can access and update your account information at any time by logging into your account.
                            </Paragraph>
                        </Li>
                        <Li>
                            <Paragraph>
                                Deleting your account: You can delete your account at any time by contacting us. Please note that some information may remain in our records after you delete your account.
                            </Paragraph>
                        </Li>
                    </Ul>

                    <MiniHeading>
                        Data Security
                    </MiniHeading>
                    <Paragraph>
                        We take reasonable steps to protect the information we collect from loss, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is completely secure, and we cannot guarantee the security of your information.
                    </Paragraph>

                    <MiniHeading>
                        Changes to This Policy
                    </MiniHeading>
                    <Paragraph>
                        We may update this Policy from time to time
                    </Paragraph>
            </Wrapper>
        </Container>
    )
}

export default Statement
