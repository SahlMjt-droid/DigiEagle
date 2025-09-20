import { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/assets/images/logol.png" />
          </div>
          <div className={`nav-links ${isMenuOpen ? 'visible' : ''}`}>
            <Link to="/" className="nav-link" onClick={handleNavClick}>Home</Link>
            <Link to="/about" className="nav-link" onClick={handleNavClick}>About</Link>
            <button onClick={handleContactClick} className="nav-link">Contact</button>
            <Link to="/career" className="nav-link" onClick={handleNavClick}>Career</Link>
          </div>
          <button className="menu-button" onClick={toggleMenu}>
            Menu | | |
          </button>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
