import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/about/AboutUs';
import CompanyProfile from './pages/about/CompanyProfile';
import OurTeam from './pages/about/OurTeam';
import EasternTibet from './pages/tibetTour/EasternTibet';
import Header from './components/Header';
import Footer from './components/Footer';
import LhasaCityTour from './pages/tibetTour/LhasaCityTour';
import KailashKora from './pages/tibetTour/KailashKora';
import LhasaDayTrip from './pages/tibetTour/LhasaDayTrip';
import LhasaEverestBase from './pages/tibetTour/LhasaEverestBase';
import LhasaEverestNmatso from './pages/tibetTour/LhasaEverestNmatso';
import LhasaKailash from './pages/tibetTour/LhasaKailash';
import SpringTibet from './pages/tibetTour/SpringTibet';
import TibetTrekking from './pages/tibetTour/TibetTrekking';
import SpecialKhamTour from './pages/amdo-Kham/SpecialKhamTour';
import KailashLhasa from './pages/tibetTour/Kailash-Lhasa';
import AmdoCultural from './pages/amdo-Kham/AmdoCultural';
import JungleSafari from './pages/Nepal/JungleSafari';
import RiverRafting from './pages/Nepal/RiverRafting';
import Pokhara from './pages/Nepal/Pokhara';
import KathmanduValley from './pages/Nepal/KathmanduValley';
import AnapurnaBase from './pages/Nepal/Trekking/AnapurnaBase';
import MustangTrek from './pages/Nepal/Trekking/MustangTrek';
import LangtangGosainkunda from './pages/Nepal/Trekking/LangtangGosainkunda';
import Bhutancultural from './pages/Bhutancultural';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/companyProfile" element={<CompanyProfile />} />
          <Route path="/ourTeam" element={<OurTeam />} />

          <Route path="/lhasaCityTour" element={<LhasaCityTour />} />
          <Route path="/kailashKora" element={<KailashKora/>} />
          <Route path="/lhasaDayTrip" element={<LhasaDayTrip/>} />
          <Route path="/lhasaEverestBase" element={<LhasaEverestBase/>} />
          <Route path="/lhasaEverestNmatso" element={<LhasaEverestNmatso/>} />
          <Route path="/easternTibet" element={<EasternTibet />} />
          <Route path="/lhasaKailash" element={<LhasaKailash />} />
          <Route path="/springTibet" element={<SpringTibet />} />
          <Route path="/tibetTrekking" element={<TibetTrekking />} />
          <Route path="/kailashLhasa" element={<KailashLhasa />} />

          <Route path="/specialKhamTour" element={<SpecialKhamTour />} />
          <Route path="/amdoCultural" element={<AmdoCultural />} />


          <Route path="/jungleSafari" element={<JungleSafari />} />
          <Route path="/riverRafting" element={<RiverRafting />} />
          <Route path="/pokhara" element={<Pokhara />} />
          <Route path="/kathmanduValley" element={<KathmanduValley />} />

          <Route path="/anapurnaBase" element={<AnapurnaBase />} />
          <Route path="/mustangTrek" element={<MustangTrek />} />
          <Route path="/langtangGosainkunda" element={<LangtangGosainkunda />} />

          <Route path="/bhutancultural" element={<Bhutancultural />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       <Footer/>  
      </div>
    </Router>
  );
}

export default App;
