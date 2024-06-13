import i18next from 'i18next'
import React, { useEffect, useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Contact = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
`
const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: black;
    color: var(--light-gold);
    padding: 10px 20px;
    font-size: 20px;
`

const ContactSection = () => {

  const [ isEnglish, setIsEnglish ] = useState(true)
  const [ isArabic, setIsArabic ] = useState(false)

  useEffect(() => {
    const language = localStorage.getItem('i18nextLng')
    if (language === 'ar') {
      setIsArabic(true)
      setIsEnglish(false)
    } else {
      setIsEnglish(true)
      setIsArabic(false)
    }
  })

  const handleLanguageChange = async (lang) => {
    i18next.changeLanguage(lang)
    if (lang === 'ar') {
        setIsArabic(true)
        setIsEnglish(false)
        document.body.style.direction = 'rtl'
    } else {
        setIsArabic(false)
        setIsEnglish(true)
        document.body.style.direction = 'ltr'
    }
}
  return (
    <Contact>
      {
        isArabic && <Button onClick={()=>handleLanguageChange('en')}>English</Button>
      }
      {
        isEnglish && <Button onClick={()=>handleLanguageChange('ar')}>للغة العربية</Button>
      }
      <Link target='_blank' rel=' noopener noreferrer' to="https://wa.me/971585250771" style={{textDecoration:'none', color:'unset'}}>
        <Button>
          <BsWhatsapp />
        </Button>
      </Link>
    </Contact>
  )
}

export default ContactSection
