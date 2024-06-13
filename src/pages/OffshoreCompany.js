import React from 'react'
import { styled } from 'styled-components'
import Statement from '../components/offshore/statement-section/Statement'
import HeadingSection from '../components/offshore/heading-section/HeadingSection'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../helpers/config'
import { getAnalytics } from 'firebase/analytics'

const Container = styled.div`
    background-color: var(--main-bg);
`
const OffshoreCompany = ({ images }) => {
    
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

export default OffshoreCompany
