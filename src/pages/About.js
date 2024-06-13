import React from 'react'
import HeadingSection from '../components/about-sections/heading-section/HeadingSection'
import { styled } from 'styled-components'
import Statement from '../components/about-sections/statement-section/Statement'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../helpers/config'
import { getAnalytics } from 'firebase/analytics'

const Container = styled.div`
    background-color: var(--main-bg);
`
const About = ({ images }) => {

    //Firebase initialization
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)

    return (
        <Container>
            <HeadingSection images={images} />
            <Statement images={images} />
        </Container>
    )
}

export default About
