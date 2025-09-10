import { useEffect } from 'react';
import './About.css';

export default function About() {
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


<section className="web3-studio-section">
  <div className="content-wrapper">
    <div className="text-content">
      <h2 className="section-title11">Building Trust Through Technology</h2>  
      <p className="about-description">
        " Zova Digitech is a global software company dedicated to delivering innovative, scalable, and reliable digital solutions.<br />
         We don't just write code — we solve problems, build partnerships, and help businesses succeed in the digital age. "
      </p>
      <div className="mission-section">
        <h4 className="mission-title">Mission:</h4>
        <p className="mission-text">"To empower businesses worldwide with secure, scalable, and innovative technology that drives growth and builds trust."</p>
      </div>
      <div className="why-choose-section">
        <h4 className="why-choose-title">Why Choose Us:</h4>
        <ul className="why-choose-list">
          <li>Global reach with local reliability</li>
          <li>Secure and scalable technology</li>
          <li>Long-term partnerships, not one-off projects</li>
          <li>Future-ready solutions (AI, automation, and beyond)</li>
        </ul>
      </div>
    </div>
  </div>
</section>




      {/* Our Services Section */}
      <section className="service-section">
        <h2 className="section-title1">Services Preview</h2>
        <div className="services-preview-content">
          <div className="service-item">
            <h3>Web & Software Development</h3>
            <p>From business websites to complex platforms, we build secure and scalable software tailored to your needs.</p>
          </div>
          <div className="service-item">
            <h3>Mobile Apps (iOS & Android)</h3>
            <p>Future-ready mobile apps for iOS and Android that keep your business connected, anywhere in the world.</p>
          </div>
          <div className="service-item">
            <h3>E-commerce Solutions</h3>
            <p>Powerful online stores on Shopify, WooCommerce, or custom builds — designed to grow your brand and boost sales.</p>
          </div>
          </div>
          <div className="services-preview-content1">
        
        <div className="service-item">
            <h3>AI & Data Science</h3>
            <p>Turning data into decisions — we design intelligent AI systems and analytics dashboards that deliver real business impact.</p>
          </div>
          <div className="service-item">
            <h3>IT Consultancy</h3>
            <p>Your digital growth partner — helping you choose the right strategy, technology, and tools for success.</p>
          </div>
          
          </div>
      </section>

      {/* Portfolio / Case Studies Section */}
      <section className="projects-section">
        <h2 className="section-title3">Portfolio / Case Studies</h2>
        <p className="portfolio-description">
          Every project we deliver is built on trust, innovation, and measurable results. Here's a glimpse of what we do:
        </p>
        <div className="portfolio-list">
          <div className="portfolio-item">
            <h4 className="portfolio-title">Smart Taxi Booking Platform</h4>
            <p className="portfolio-description-item">End-to-end ride-hailing app with real-time tracking and payments.</p>
          </div>
          <div className="portfolio-item">
            <h4 className="portfolio-title">Restaurant Discovery App</h4>
            <p className="portfolio-description-item">Location-based app integrating video content from TikTok & YouTube.</p>
          </div>
          <div className="portfolio-item">
            <h4 className="portfolio-title">Global E-commerce Store</h4>
            <p className="portfolio-description-item">Scalable Shopify solution integrated with advanced analytics.</p>
          </div>
          <div className="portfolio-item">
            <h4 className="portfolio-title">AI Analytics Dashboard</h4>
            <p className="portfolio-description-item">Real-time insights for better business decisions.</p>
          </div>
        </div>
      </section>

      <div className="process-image">
        <img src="/assets/images/pic6.png" alt="Process Image" />
        </div>


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