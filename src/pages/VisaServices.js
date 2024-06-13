import React from 'react'
import { styled } from 'styled-components'
import Statement from '../components/visa-services/statement-section/Statement'
import HeadingSection from '../components/visa-services/heading-section/HeadingSection'
import { firebaseConfig } from '../helpers/config'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const Container = styled.div`
    background-color: var(--main-bg);
`
const VisaServices = ({ images }) => {
    
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

export default VisaServices
