import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [agreeToUpdates, setAgreeToUpdates] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home-container">
      <section id="contact" className="contact-section">
        <div className="contact-container">
        <h2 className="contact-title1"> Contact Us</h2>
         
          <div className="contact-content">
            <div className="contact-pic">
             <img src="/assets/images/mp.png" />
             <div className="map-card">
               <h3 className="map-title">zovadigitech</h3>
               <p className="map-address">
                 Fuel Studio Pottergate, Norwich<br />
                 NR2 1DX
               </p>
               <button 
                 className="map-button"
                 onClick={() => window.open('https://www.google.com/maps/search/Fuel+Studio+Pottergate+Norwich+NR2+1DX', '_blank')}
               >
                 View larger map
               </button>
               <button className="directions-button">
               <div className="ir-pic">
               <img src="/assets/images/ir.png" />
               
               
               </div>
               </button>
               <h3 className="iretitle">Directions</h3>
             </div>
            </div>
            <div className="contact-info2">
              <div className="contact-card">
                <form className="contact-form-new">
                  {/* Name Fields */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First name*</label>
                      <input 
                        type="text" 
                        className="form-input-new" 
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last name*</label>
                      <input 
                        type="text" 
                        className="form-input-new" 
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and LinkedIn Fields */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email*</label>
                      <input 
                        type="email" 
                        className="form-input-new" 
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">LinkedIn (if you have one)</label>
                      <input 
                        type="text" 
                        className="form-input-new" 
                        placeholder="LinkedIn URL"
                      />
                    </div>
                  </div>

                  {/* Residency Location */}
                  <div className="residency-section">
                    <h3 className="residency-title">SELECT A RESIDENCY LOCATION</h3>
                    <div className="country-buttons">
                      <button 
                        type="button" 
                        className={`country-btn ${selectedCountry === 'Asia Pacific' ? 'active' : ''}`}
                        onClick={() => setSelectedCountry('Asia Pacific')}
                      >
                        Asia Pacific
                      </button>
                      <button 
                        type="button" 
                        className={`country-btn ${selectedCountry === 'Americas' ? 'active' : ''}`}
                        onClick={() => setSelectedCountry('Americas')}
                      >
                        Americas
                      </button>
                      <button 
                        type="button" 
                        className={`country-btn ${selectedCountry === 'Europe' ? 'active' : ''}`}
                        onClick={() => setSelectedCountry('Europe')}
                      >
                        Europe
                      </button>
                      <button 
                        type="button" 
                        className={`country-btn ${selectedCountry === 'Middle East & Africa' ? 'active' : ''}`}
                        onClick={() => setSelectedCountry('Middle East & Africa')}
                      >
                        Middle East & Africa
                      </button>
                    </div>
                  </div>

                  <div className="agreement-section">
                    <label className="checkbox-container">
                      <input 
                        type="checkbox" 
                        className="agreement-checkbox"
                        checked={agreeToUpdates}
                        onChange={(e) => setAgreeToUpdates(e.target.checked)}
                      />
                      I agree to receive updates and communications from Antler.
                    </label>
                  </div>

                  <div className="privacy-section">
                    <p className="privacy-text">
                      By clicking submit, you agree to Antler's <span className="privacy-link">privacy policy</span>.
                    </p>
                  </div>

                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <div className="footer-content">
          <div className="footer-main">
            <h3>ZOVA DIGITECH</h3>
            <p>Feel free to reach out if you want to collaborate<br />
               with us, or simply have a chat.</p>
            <div className="footer-email">
              <span>info@zovadigitech.com</span>
            </div>
            <div className="footer-rights">© 2025 Cortix . All rights reserved.</div>
            <div className="footer-img"><img src="/assets/images/ll (2).png" alt="Zova Digitech" /></div>
          </div>
          <div className="footer-column">
            <h4>Site Links</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>Contact</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/career'); }}>Career</a></li>
            </ul>
          </div>
          <div className="footer-card">
            <div className="footer-card-icon">
              <img src="/assets/images/pl.png" alt="Globe" style={{width: '90px', height: '107px', objectFit: 'contain'}} />
            </div>
            <div className="footer-card-content">
              <div className="footer-card-title">Let's book a call</div>
            </div>
            <div className="footer-card-arrow" onClick={() => navigate('/contact')}>
              →
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
