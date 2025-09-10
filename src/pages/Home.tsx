import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(0);
  const totalProjects = 3;
  const [currentTestimonial, setCurrentTestimonial] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % totalProjects);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const testimonials = [
    {
      id: 1,
      avatar: "/assets/images/testimonial-1.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
      name: "Samuel Karl",
      title: "CEO"
    },
    {
      id: 2,
      avatar: "/assets/images/testimonial-2.png", 
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
      name: "Samuel Karl",
      title: "CEO"
    },
    {
      id: 3,
      avatar: "/assets/images/testimonial-3.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
      name: "Daria Linney",
      title: "CEO"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Your Trusted<br />
            Partner for <br />
               Digital <br />
               Transformation.</span>
          </h1>
          
          <div className="hero-phone">
            <img src="/assets/images/hero-phone.png" alt="Phone" /> 
          </div>

          <div className="hero-subtitle">
            <span className="arrow-icon" style={{ transform: 'rotate(90deg)' }}>→</span>
            From startups to enterprises, we deliver secure, scalable, and
            innovative digital solutions that transform challenges into measurable success.
          </div>

          <div className="hero-buttons">
            <button className="hero-btn primary" onClick={() => navigate('/contact')}>Start Your Project</button>
            <button className="hero-btn secondary" onClick={() => {
              const portfolioSection = document.getElementById('portfolio');
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>See Our Work</button>
          </div>

          <div className="trust-line">
            <span>Trusted by businesses worldwide</span>
            <span>•</span>
            <span>100% commitment to project delivery</span>
            <span>•</span>
            <span>Experts in Software, AI & IT Solutions</span>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
      <div className="partner-text">Our clients are backed by:</div>
        <div className="partners-grid">
    
          <img src="/assets/images/logo-cointelligence.png" alt="CoinTelligence" className="partner-logo1" />
          <img src="/assets/images/logo-coinbase.png" alt="Coinbase" className="partner-logo2" />
          <img src="/assets/images/logo-aloz.png" alt="Aloz" className="partner-logo3" />
          <img src="/assets/images/logo-blockchain.png" alt="Blockchain" className="partner-logo4" />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section">
        <div className="about-preview-content">
          <h2 className="about-preview-title">About Zova Digitech</h2>
          <p className="about-preview-text">
            Zova Digitech is more than a software house — we are the trusted engine powering businesses to grow faster, smarter, and stronger in the digital world. With a global team of experts, we combine innovation and reliability to create results you can depend on.
          </p>
        </div>
      </section>

      {/* What is Web3 Studio Section */}
      <section className="web3-studio-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="section-title">What is Web3 studio?</h2>
            <p className="section-description">
            Things around crypto, NFTs and web3 as a whole are <br />
            unbelievably interesting. Unfortunately, the overall usability <br />
             as well as the quality of the UI is often still not up to the <br />
              task. To achieve mass adoption, overcoming those hurdles <br />
              will be key. And this is where our story begins.
            </p>
          </div>
          <div className="infinity-loop">
            <img src="/assets/images/div.png" alt="CoinTelligence" className="partner-logo" />
          </div>
        </div>
        <div className="infinity-picture">
        <img src="/assets/images/div (1).png" />
        </div>

      </section>

      {/* Our Services Section */}
      <section className="service-section">
        <h2 className="section-title1">Services Preview</h2>
        <div className="services-preview-content">
          <div className="service-item">
            <h3>Web & Software Development</h3>
            <p>Secure, scalable, and built for your business.</p>
          </div>
          <div className="service-item">
            <h3>Mobile Apps (iOS & Android)</h3>
            <p>Future-ready apps that connect you with customers worldwide.</p>
          </div>
          <div className="service-item">
            <h3>E-commerce Solutions</h3>
            <p>Online stores designed to grow your brand and boost sales.</p>
          </div>
          </div>
          <div className="services-preview-content1">
        
        <div className="service-item">
            <h3>AI & Data Science</h3>
            <p>Turning data into decisions with intelligent, trustworthy solutions.</p>
          </div>
          <div className="service-item">
            <h3>IT Consultancy</h3>
            <p>Strategies and technology you can depend on.</p>
          </div>
          
          </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="projects-section">
        <h2 className="section-title3">Portfolio </h2>
        <p className="portfolio-preview-text">From business websites to advanced AI platforms, we've delivered projects that drive measurable growth. Explore how we turn ideas into digital reality.</p>
        <div className="projects-grid">
          <div className={`project-card ${currentProject === 0 ? 'active' : ''}`}>
            <img src="/assets/images/project-1.png" alt="Project 1" />
          </div>
          <div className={`project-card ${currentProject === 1 ? 'active' : ''}`}>
            <img src="/assets/images/project-2.png" alt="Project 2" />
          </div>
          <div className={`project-card ${currentProject === 2 ? 'active' : ''}`}>
            <img src="/assets/images/project-3.png" alt="Project 3" />
          </div>
        </div>
        <div className="projects-navigation">
          <div className="nav-indicators">
            <div 
              className={`nav-dash ${currentProject === 0 ? 'active' : ''}`}
              onClick={() => setCurrentProject(0)}
            ></div>
            <div 
              className={`nav-dash ${currentProject === 1 ? 'active' : ''}`}
              onClick={() => setCurrentProject(1)}
            ></div>
            <div 
              className={`nav-dash ${currentProject === 2 ? 'active' : ''}`}
              onClick={() => setCurrentProject(2)}
            ></div>
          </div>
          <div className="nav-arrows">
            <button 
              className="nav-arrow"
              onClick={prevProject}
              disabled={currentProject === 0}
            >
              ‹
            </button>
            <button 
              className="nav-arrow"
              onClick={nextProject}
              disabled={currentProject === totalProjects - 1}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="process-section">
       <div className='process-image'>
        <img src="/assets/images/Process.png" alt="Process Image" />
       </div>
      </section>

      {/* Careers Preview Section */}
      <section className="careers-preview-section">
        <div className="careers-preview-content">
          <h2 className="careers-preview-title">Careers Preview</h2>
          <p className="careers-preview-text">
            Talent knows no borders at Zova Digitech. Join our global team of innovators and help us build technology that shapes the future.
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Let's turn your idea into a digital success story.</h2>
          <button className="cta-button" onClick={() => navigate('/contact')}>Contact Us Today</button>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <div className="testimonials-subtitle">\ From our Customers \</div>
          <h2 className="testimonials-title">Testimonials</h2>
        </div>
        
        <div className="testimonials-slider">
          <div 
            className="testimonials-track" 
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-slide">
                {/* Left side card (if exists) */}
                {index > 0 && (
                  <div className="testimonial-card side">
                    <div className="testimonial-avatar">
                      <img src={testimonials[index - 1].avatar} alt={testimonials[index - 1].name} />
                    </div>
                    <div className="testimonial-quote"><img src="/assets/images/quote.png" alt="Quote" /></div>
                    <div className="testimonial-content">
                      <p>{testimonials[index - 1].text}</p>
                      <div className="testimonial-author">
                        <span className="name">{testimonials[index - 1].name}</span>
                        <span className="title">{testimonials[index - 1].title}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Center card (current) */}
                <div className="testimonial-card center">
                  <div className="testimonial-avatar">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-quote"><img src="/assets/images/quote.png" alt="Quote" /></div>
                  <div className="testimonial-content">
                    <p>{testimonial.text}</p>
                    <div className="testimonial-author">
                      <span className="name">{testimonial.name}</span>
                      <span className="title">{testimonial.title}</span>
                    </div>
                  </div>
                </div>
                
                {/* Right side card (if exists) */}
                {index < testimonials.length - 1 && (
                  <div className="testimonial-card side">
                    <div className="testimonial-avatar">
                      <img src={testimonials[index + 1].avatar} alt={testimonials[index + 1].name} />
                    </div>
                    <div className="testimonial-quote"><img src="/assets/images/quote.png" alt="Quote" /></div>
                    <div className="testimonial-content">
                      <p>{testimonials[index + 1].text}</p>
                      <div className="testimonial-author">
                        <span className="name">{testimonials[index + 1].name}</span>
                        <span className="title">{testimonials[index + 1].title}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="testimonials-navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${currentTestimonial === index ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
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