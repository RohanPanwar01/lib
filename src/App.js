import logo from './logo.svg';
import { Helmet } from "react-helmet-async";
import { Routes, Route } from 'react-router-dom';
import Price from './components/price';
import Faq from './components/FAQ/Faq';
import AmenitiesLayout from './components/Faci/Faci';
import HeroSectionWithForm from './components/Home/Home';
import ContactUs from './components/contact us/Contactus';
import './App.css';
import Aboutus from './components/Aboutus/Aboutus';
import LibraryGallery from './components/Gallery/Gallery';
import Team from './components/Team/Team';

import ScrollToTop from './components/Footer/ScrollToTop';

import Chatbot from './components/Chatbot/Chatbot';

function App() {
  return (
    <>
     <Helmet>
        <title>Best Library in Nasrullaganj | Self Study Library</title>
        <meta
          name="description"
          content="Self Study Library in Nasrullaganj offers AC reading halls, Wi-Fi, power backup, lockers and a quiet environment. Open daily 8AM–8PM near HDFC Bank, Bherunda."
        />
        <link rel="canonical" href="https://self-study-library.onrender.com/" />
      </Helmet>

    <ScrollToTop />
      <Routes>
        <Route path='/' element={<HeroSectionWithForm />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/pacakages' element={<Price />} />
        <Route path='/facilities' element={<AmenitiesLayout />} />
        <Route path='/gallery' element={<LibraryGallery />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/team' element={<Team />} />

      </Routes>
      {/* <Chatbot /> */}
    </>
  );
}

export default App;
