import React from 'react'
import { styled } from 'styled-components'
import FirstSection from '../components/contact-us/FirstSection'
import SecondSection from '../components/contact-us/SecondSection'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../helpers/config'
import { getAnalytics } from 'firebase/analytics'

const Container = styled.div`
    background-color: var(--main-bg);
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 30px 0;
    overflow-x: hidden;

`
const Contact = ({ images }) => {
    
    //Firebase initialization
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)

    return (
        <Container>
            <FirstSection images={images} />
            <SecondSection images={images} />
        </Container>
    )
}

export default Contact
