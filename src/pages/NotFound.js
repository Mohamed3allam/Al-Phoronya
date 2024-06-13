import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { styled } from 'styled-components'
import 'animate.css';
import { useTranslation } from 'react-i18next';
import { mobile } from '../responsive';


const Container1 = styled.section`
    background: no-repeat cover center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    position: fixed;
    min-height: fit-content;
    height: 100%;
    width: 100%;
    backdrop-filter: brightness(0.5);
    overflow-x: hidden;
    overflow-y: scroll;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Left = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    padding-top: 15%;
`
const PageHeading = styled.h1`
    font-size: 100px;
    line-height: 100px;
    text-shadow: 0px 0px 10px black ; 
    font-weight: 900;
    color: var(--gold);

    ${mobile({
        fontSize:'50px',
        lineHeight:'50px'
    })}

    &::selection {
        background-color: rgba(63, 23, 0, 0.5);
    }
`
const PageHeading2 = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 70px;
    letter-spacing: 3px;
    font-family: "Montserrat", Sans-serif;

    ${mobile({
        fontSize:'35px',
    })}
`
const Paragraph = styled.p`
    font-family: "Montserrat", Sans-serif;
    padding-bottom: 4%;
`
const Button = styled.button`
    border-radius: 30px;
    border: none;
    background-color: var(--brown) !important;
    padding: 15px 20px;
    color: white;
    width: fit-content;
    text-align: center;
    font-weight: bold;

    &:hover {
        color: black;
        background-color: var(--gold) !important;
        transition: 0.2s all ease !important;
        box-shadow: 0px 0px 9px gold;
        -webkit-box-shadow: 0px 0px 9px gold;
    }
`
const Right = styled.div`
    flex: 4;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    ${mobile({
        display:'none'
    })}
`
const Image = styled.img`
    margin-bottom: -5%;
    width: 70%;
    
`
const NotFound = ({ images }) => {
    const { t, i18n } = useTranslation()

    return (
        <Container1 style={{backgroundImage:`url("${images['invertedBackground.jpg']}")`}}>
            <div className='backdrop'>
                <Container>
                    <Wrapper>
                        <h1 style={{fontSize:'60px'}}>
                            Oops..
                        </h1>
                        <h2 style={{fontSize:'40px'}}>
                            You must have entered wrong url
                        </h2>
                        <Button>
                            Home
                        </Button>
                    </Wrapper>
                </Container>
            </div>
        </Container1>
    )
}

export default NotFound
