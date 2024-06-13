import React from 'react'
import FirstSection from '../components/home-sections/first-section/FirstSection'
import SecondSection from '../components/home-sections/second-section/SecondSection'
import ThirdSection from '../components/home-sections/third-section/ThirdSection'
import FourthSection from '../components/home-sections/fourth-section/FourthSection'
import FifthSection from '../components/home-sections/fifth-section/FifthSection'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../helpers/config'
import { getAnalytics } from 'firebase/analytics'
import { styled } from 'styled-components'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const IconBackground = styled.div`
    position: relative;
`
const Container = styled.div`
    overflow-x: hidden;
`
const Home = ({ images }) => {
    
    //Firebase initialization
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)

    return (
        <Container>
            <FirstSection images={images} />
            <SecondSection images={images} />
            <IconBackground>
                <RadioButtonUncheckedIcon style={{height:'70%',width:'60%', position:'absolute',zIndex:'1', opacity:0.8,pointerEvents:'none'}} />
                <ThirdSection images={images} />
                <FourthSection images={images} />
            </IconBackground>
            <FifthSection images={images} />
        </Container>
    )
}

export default Home
