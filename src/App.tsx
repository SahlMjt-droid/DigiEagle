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
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/assets/images/logol.png" />
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <button onClick={handleContactClick} className="nav-link">Contact</button>
            <Link to="/career" className="nav-link">Career</Link>
          </div>
          <button className="menu-button" onClick={toggleMenu}>
            Menu | | |
          </button>
        </div>
        {isMenuOpen && (
          <div className="menu-dropdown">
            <Link to="/" className="menu-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="menu-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            <button className="menu-link" onClick={() => { handleContactClick(); setIsMenuOpen(false); }}>Contact</button>
            <Link to="/career" className="menu-link" onClick={() => setIsMenuOpen(false)}>Career</Link>
          </div>
        )}
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
