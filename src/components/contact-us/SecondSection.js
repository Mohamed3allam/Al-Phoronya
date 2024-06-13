import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { styled } from 'styled-components'
import { mobile } from '../../responsive'

import { firebaseConfig } from '../../helpers/config';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { useTranslation } from 'react-i18next';


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px 0;
    align-items: center;

    ${mobile({
        flexDirection:'column'
    })}
`
const Left = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
`
const SemiHeadingDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const SemiHeading = styled.h5`
    font-size: 500;
    color: var(--light-gold);
    margin-left: 20px;
`
const Heading = styled.h1`
    font-weight: bold;
    color: var(--light-gold);
    font-size: 50px;
`
const Paragraph = styled.p`
    padding-top: 10px;
    font-weight: 500;
    line-height: 20px;
    color: white;
`
const Right = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 0;
    margin: 0;
    justify-content: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
`
const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #14283a;
    padding: 10px 0;
    color: white;

    &:focus {
        outline: none;
    }
    &:focus-visible {
        outline: none;
        border-bottom: 1px solid black ;
    }
`
const Button = styled.button`
    background-color: var(--gold);
    border: none;
    border-radius: 25px;
    color: black;
    box-shadow: -10px 10px 100px 5px var(--gold);
    font-weight: bold;
    padding :15px;
    width: 20%;
    margin-left: auto;

    &:hover {
        background-color: var(--main-bg);
        box-shadow: none;
        border: 2px solid white;
        color: white;
    }

    &:disabled {
        opacity: 0.1;
        box-shadow: none;
        background-color: var(--gold);
        color: black;
        border: none;
    }

    ${mobile({
        width:'100%'
    })}
`
const SecondSection = () => {

    const { t, i18n } = useTranslation()

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ website, setWebsite ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ isLoading, setIsloading ] = useState(false)
    const [ error, setError ] = useState('')
    const [ success, setSuccess ] = useState('')
    // TODO: Replace the following with your app's Firebase project configuration
    // See: https://support.google.com/firebase/answer/7015592
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsloading(true)
        try {
            if (!name || !email || !message || !website) {
                throw Error('All fields must be filled')
            }
            const docRef = await addDoc(collection(db, "messages"), {
                name: name,
                email: email,
                website: website,
                message:message
            });
            console.log("Document written with ID: ", docRef.id);
            setIsloading(false)
            setSuccess('Successfully Sent your message .. Expect an email soon!')
            setError(null)
          } catch (e) {
            console.error("Error adding document: ", e);
            setSuccess('')
            setError(e.message)
            setIsloading(false)
          }
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SemiHeadingDiv>
                        <hr style={{boxShadow:'0px 0px 5px var(--semi-gold)',width:'40px',backgroundImage:'linear-gradient(to right, var(--gold), var(--semi-gold))', height:'6px', opacity:1}}/>
                        <SemiHeading>
                            {t('contact.second-section.semi-heading')}
                        </SemiHeading>
                    </SemiHeadingDiv>
                    <Heading>
                    {t('contact.second-section.heading')}
                    </Heading>
                    <Paragraph>
                    {t('contact.second-section.paragraph1')}
                    </Paragraph>
                    <Paragraph>
                    {t('contact.second-section.paragraph2')}
                    </Paragraph>
                </Left>
                <Right>
                    <Form onSubmit={handleSubmit}>
                        <Input value={name} onChange={e=>setName(e.target.value)} type='text' placeholder={t('contact.second-section.input1')} required/>
                        <Input value={email} onChange={e=>setEmail(e.target.value)} type='text' placeholder={t('contact.second-section.input2')} required/>
                        <Input value={website} onChange={e=>setWebsite(e.target.value)} type='text' placeholder={t('contact.second-section.input3')} />
                        <Input value={message} onChange={e=>setMessage(e.target.value)} type='text' placeholder={t('contact.second-section.input4')} required/>
                        <Button disabled={isLoading}>{t('contact.second-section.submit')}</Button>
                        {
                            error && <div style={{color:'white',textShadow:'0px 0px 7px red', textAlign:'center'}}>{error}</div>
                            
                        }
                        {
                            success && <div style={{color:'white',textShadow:'0px 0px 7px green', textAlign:'center'}}>{success}</div>
                        }
                    </Form>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default SecondSection
