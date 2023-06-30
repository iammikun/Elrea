import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Partners from './Pages/Partners/Partners';
import Team from "./Pages/Team/Team";
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Moji from './Components/Profiles/Moji/Moji';
import Timi from './Components/Profiles/Timi/Timi';
import Ben from './Components/Profiles/Benjamin/Ben';
import Akpan from './Components/Profiles/Akpan/Akpan';
import Tunde from './Components/Profiles/Tunde/Tunde';
import Kalu from './Components/Profiles/Kalu/Kalu';
import Ola from './Components/Profiles/Ola/Ola';
import Femi from './Components/Profiles/Femi/Femi';
import Olu from './Components/Profiles/Olu/Olu';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/moji_profile" element={<Moji />} />
        <Route path="/timi_profile" element={<Timi />} />
        <Route path="/benjamin_profile" element={<Ben />} />
        <Route path="/akpan_profile" element={<Akpan />} />
        <Route path="/tunde_profile" element={<Tunde />} />
        <Route path="/kalu_profile" element={<Kalu />} />
        <Route path="/ola_profile" element={<Ola />} />
        <Route path="/femi_profile" element={<Femi />} />
        <Route path="/olubunmi_profile" element={<Olu />} />
      </Routes>
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
}

export default App;
