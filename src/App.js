import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ReactNavbar from './components/react-navbar/ReactNavbar';
import './app.css'
import 'animate.css';
import Footer from './components/react-footer/Footer';
import About from './pages/About';
import MainlandCompany from './pages/MainLandCompany';
import LLCCompany from './pages/LLCCompany';
import FreezoneCompany from './pages/FreezoneCompany';
import OffshoreCompany from './pages/OffshoreCompany';
import LocalSponsor from './pages/LocalSponsor';
import ProServices from './pages/ProServices';
import VisaServices from './pages/VisaServices';
import TranslationServices from './pages/TranslationServices';
import AttestationServices from './pages/AttestationServices';
import LiquidationServices from './pages/LiquidationServices';
import Contact from './pages/Contact';
import { useEffect } from 'react';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';


const App = () => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg|gif|mp4)$/));

  useEffect(() => {
    const language = localStorage.getItem('i18nextLng')
    if (language === 'ar') {
      document.body.style.direction = 'rtl'
    } else {
      document.body.style.direction = 'ltr'
    }
  }, [])
  return (
    <>
    <Router>
        <ReactNavbar images={images} />
        <Routes>
          <Route index element={ <Home images={images} /> }/>
          <Route path='/about-us' element={ <About images={images} /> }/>
          <Route path='/mainland-company' element={ <MainlandCompany images={images} /> }/>
          <Route path='/llc-company' element={ <LLCCompany images={images} /> }/>
          <Route path='/freezone-company' element={ <FreezoneCompany images={images} /> }/>
          <Route path='/offshore-company' element={ <OffshoreCompany images={images} /> }/>
          <Route path='/local-sponsor' element={ <LocalSponsor images={images} /> }/>
          <Route path='/pro-services' element={ <ProServices images={images} /> }/>
          <Route path='/visa-services' element={ <VisaServices images={images} /> }/>
          <Route path='/translation-services' element={ <TranslationServices images={images} /> }/>
          <Route path='/attestation-services' element={ <AttestationServices images={images} /> }/>
          <Route path='/liquidation-services' element={ <LiquidationServices images={images} /> }/>
          <Route path='/contact-us' element={ <Contact images={images} /> }/>
          <Route path='/privacy-policy' element={ <PrivacyPolicy />} />
          <Route path='*' element={ <NotFound images={images} />} />
        </Routes>
        <Footer images={images} />
    </Router>
    </>
  );
}

export default App;
