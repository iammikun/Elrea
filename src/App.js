import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Subscribe from './Components/Subscribe/Subscribe';
import Header from './Components/Header/Header';
import Portfolio from './Pages/Portfolio/Portfolio';
import Partners from './Pages/Partners/Partners';
import Team from "./Pages/Team/Team";
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
