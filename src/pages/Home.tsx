import { useState } from 'react';
import './Home.css';

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);
  const totalProjects = 3;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
            Design studio<br />
              for the<br />
            <span className="highlight">web3 world</span>
          </h1>
          
          <div className="hero-phone">
           
            <img src="/assets/images/hero-phone.png" /> 
          </div>


          <div className="hero-subtitle">
            <span className="arrow-icon" style={{ transform: 'rotate(90deg)' }}>→</span>
            We help companies design their<br />
            products to be ready for web3 world
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
        <h2 className="section-title1">The Services we provide <br />
          for you</h2>
        <div className="service-grid">
          <div className="service-card">
            <img src="/assets/images/service-1.png" alt="Service 1" />
            <img src="/assets/images/service-2.png" alt="Service 2" />
            <img src="/assets/images/service-3.png" alt="Service 3" />
          </div>
        </div>
        <div className="service-grid">
          <div className="service-card1">
            <img src="/assets/images/service-4.png" alt="Service 4" />
            <img src="/assets/images/service-5.png" alt="Service 5" />
            <img src="/assets/images/service-6.png" alt="Service 6" />
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="projects-section">
        <h2 className="section-title3">Our Projects</h2>
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

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
        <h2 className="contact-title1"> \ Get In Touch \</h2>
          <h2 className="contact-title2"> Hey! Let's Talk</h2>
          <div className="contact-content">
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Name" className="form-input" />
                <input type="email" placeholder="Email" className="form-input" />
                <input type="text" placeholder="Phone" className="form-input" />
                <textarea placeholder="Your Message" className="form-textarea"></textarea>
                <button type="submit" className="submit-button">Send Now</button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-card">
                <h3>Call Anytime</h3>
                
                
                <div className="contact-item">
                  <span className="contact-icon"><img src="/assets/images/phone.png" alt="Email" /></span>
                  <span>+ 91 23678 27867<br />
                  + 91 67678 92878</span>
                </div>
                <h3>Send Email</h3>
                <div className="contact-item">
                  <span className="contact-icon"><img src="/assets/images/em.png" alt="Phone" /></span>
                  <span>connect@itfirms.com<br />
                  hello@itfirms.com</span>
                </div>
                <h3>Visit Us</h3>
                <div className="contact-item">
                  <span className="contact-icon"><img src="/assets/images/loc.png" alt="Location" /></span>
                  <span>20 Island Park Road,<br />
                  New Jersey, New York, USA</span>
                </div>
                <div className="social-links-text">Follow Us</div>
                <div className="social-links">
          
                  <a href="#" className="social-link"><img src="/assets/images/lin.png" alt="Facebook" /></a>  
                  <a href="#" className="social-link"><img src="/assets/images/int.png" alt="Twitter" /></a>
                  <a href="#" className="social-link"><img src="/assets/images/fb.png" alt="Instagram" /></a>
                  <a href="#" className="social-link"><img src="/assets/images/twit.png" alt="LinkedIn" /></a>
                </div>
              </div>
            </div>
          </div>
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
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Dribbble</a></li>
              <li><a href="#">LinkedIn</a></li>
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