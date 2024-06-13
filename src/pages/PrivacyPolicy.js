import React from 'react'
import { styled } from 'styled-components'
import Statement from '../components/privacy-policy/Statement'

import { firebaseConfig } from '../helpers/config'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const Container = styled.div`
    background-color: white;
    padding: 30px 0;
`
const PrivacyPolicy = () => {
    
    //Firebase initialization
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)

    return (
        <Container>
            <Statement />
        </Container>
    )
}

export default PrivacyPolicy
