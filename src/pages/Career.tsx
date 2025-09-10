import { useEffect, useState } from 'react';
import './Career.css';

export default function Career() {
  const [expandedVacancy, setExpandedVacancy] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleVacancy = (index: number) => {
    setExpandedVacancy(expandedVacancy === index ? null : index);
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="career-hero-section">
        <div className="career-hero-content">
          <h1 className="career-hero-title">
            Join Us<br />
             Build the Future<br />
              Anywhere in the World
          </h1>
          
          <p className="career-hero-description">
            "At Zova Digitech, we believe talent has no borders. We're a global team of developers, designers,<br />
            and innovators creating technology that empowers businesses everywhere."
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="why-work-section">
        <h2 className="why-work-title">Why Work With Us:</h2>
        <ul className="why-work-list">
          <li>Global opportunities</li>
          <li>Remote-first culture</li>
          <li>Career growth in cutting-edge technologies</li>
          <li>Collaborative, supportive team</li>
          <li>Future visa sponsorship pathways for key roles</li>
        </ul>
      </section>

      {/* Sample Roles Section */}
      <section className="sample-roles-section">
        <h2 className="sample-roles-title">Sample Roles:</h2>
        <div className="roles-list">
          <div className="role-item">
            <div 
              className="role-header"
              onClick={() => toggleVacancy(0)}
            >
              <h3 className="role-title">Full-Stack Developer</h3>
              <span className="role-toggle">
                {expandedVacancy === 0 ? '−' : '+'}
              </span>
            </div>
            {expandedVacancy === 0 && (
              <div className="role-content">
                <p>Remote – Global</p>
              </div>
            )}
          </div>
          <div className="role-item">
            <div 
              className="role-header"
              onClick={() => toggleVacancy(1)}
            >
              <h3 className="role-title">UI/UX Designer</h3>
              <span className="role-toggle">
                {expandedVacancy === 1 ? '−' : '+'}
              </span>
            </div>
            {expandedVacancy === 1 && (
              <div className="role-content">
                <p>Remote – Global</p>
              </div>
            )}
          </div>
          <div className="role-item">
            <div 
              className="role-header"
              onClick={() => toggleVacancy(2)}
            >
              <h3 className="role-title">Business Development Executive</h3>
              <span className="role-toggle">
                {expandedVacancy === 2 ? '−' : '+'}
              </span>
            </div>
            {expandedVacancy === 2 && (
              <div className="role-content">
                <p>Remote – Global</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="apply-section">
        <h2 className="apply-title">How to Apply:</h2>
        <p className="apply-text">
          Send your CV + portfolio to <a href="mailto:careers@eagledigitech.co.uk" className="apply-email">careers@eagledigitech.co.uk</a>
        </p>
      </section>

      {/* Final Tagline Section */}
      <section className="tagline-section">
        <p className="final-tagline">
          "At Zova Digitech, talent knows no borders — join us and create technology that impacts the world."
        </p>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
        <button className="footer-scroll-top" onClick={scrollToTop}>↑</button>

        
        <div className="footer-content">
          <div className="footer-main">
            <h3>Web3 product studio</h3>
            <p>Feel free to reach out if you want to collaborate<br />
               with us, or simply have a chat.</p>
            <div className="footer-email">
              <span>hello@thirdweb.studio</span>
              <span className="footer-email-arrow">→</span>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Our projects</h4>
            <ul>
              <li><a href="#">WingRiders</a></li>
              <li><a href="#">Trackee</a></li>
              <li><a href="#">Worldcoin</a></li>
              <li><a href="#">Audience+</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Follow us</h4>
            <ul>
              <li><a href="https://www.facebook.com/zovadigitech/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/zovadigitech/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@eagleigroup" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="https://www.linkedin.com/company/zovadigitech/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-shapes">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3"></div>
        </div>
      </section>
    </div>
  );
}