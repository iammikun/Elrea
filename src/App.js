import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
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
        <Route path="/partners" element={<Partners />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
}

export default App;
