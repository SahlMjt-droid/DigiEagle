import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const totalProjects = 3;
  const [currentTestimonial, setCurrentTestimonial] = useState(1);
  const [currentService, setCurrentService] = useState(0);
  const totalServices = 2;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectCards = entry.target.querySelectorAll('.project-card');
          projectCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('unblur');
            }, index * 1000);
          });
        }
      });
    }, {
      threshold: 0.3
    });

    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number');
      
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + '+';
          }
        };
        
        updateCounter();
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    const counterSection = document.querySelector('.stats-counter-section');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);


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
      client: "AstroPay",
      name: "Matías Lumainsky",
      text: "Flexxi has been game-changing for us. They enabled us to completely change how we think about our experience and approach to building our product. From redesigning our app, updating our Design System, and empowering our team to be design-centric.",
      avatar: "/assets/images/testimonial-2.png",
      title: "head of product"
    },
    {
      id: 3,
      client: "Clara Health",
      avatar: "/assets/images/testimonial-3.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
      name: "Tal Hoffman",
      title: "CEO"
    }
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Your Trusted<br />
            Partner for <br />
               digital <br />
               transformation.</span>
          </h1>
          <div className="hero-subtitle">
            <span className="arrow-icon" style={{ transform: 'rotate(90deg)' }}>→</span>
            From startups to enterprises, we <br />
            deliver secure, scalable, and<br />
            innovative digital solutions that <br />
            transform challenges into measurable <br />
            success.
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

      <section className="partners-section">
        <div className="partner-text">Our Team has collaborated with:</div>
        <div className="partners-grid">
          <div className="partners-track">
            <img src="/assets/images/eu.png" alt="CoinTelligence" className="partner-logo" />
            <img src="/assets/images/ucm.png" alt="Coinbase" className="partner-logo" />
            <img src="/assets/images/micro.png" alt="Aloz" className="partner-logo" />
            <img src="/assets/images/gcl.png" alt="Blockchain" className="partner-logo" />
            <img src="/assets/images/ctp.png" alt="Blockchain" className="partner-logo" />
            <img src="/assets/images/bbb.png" alt="Blockchain" className="partner-logo" />
            <img src="/assets/images/eu.png" alt="CoinTelligence" className="partner-logo" />
            <img src="/assets/images/ucm.png" alt="Coinbase" className="partner-logo" />
            <img src="/assets/images/micro.png" alt="Aloz" className="partner-logo" />
            <img src="/assets/images/gcl.png" alt="Blockchain" className="partner-logo" />
            <img src="/assets/images/ctp.png" alt="Blockchain" className="partner-logo" />
            <img src="/assets/images/bbb.png" alt="Blockchain" className="partner-logo" />
          </div>
        </div>
      </section>

      <section className="web3-studio-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="section-title">About Zova Digitech</h2>
            <p className="section-description">
            Zova Digitech is more than a software house — we are the <br />
            trusted engine powering businesses to grow faster, smarter, <br />
            and stronger in the digital world. With a global team of <br />
            experts, we combine innovation and reliability to create <br />
            results you can depend on.
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

      <section className="stats-counter-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number" data-target="10">0</div>
            <div className="stat-label">Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="3">0</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="20">0</div>
            <div className="stat-label">Employees</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="100">0</div>
            <div className="stat-label">Projects</div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="section-title1">OUR SERVICES</h2>
        <div className="services-images">
          <img 
            src="/assets/images/Container.png" 
            alt="UI/UX Design" 
            className={`service-image ${currentService === 0 ? 'active' : ''}`}
            onClick={() => setCurrentService(0)}
          />
          <img 
            src="/assets/images/Container (1).png" 
            alt="Web Development" 
            className={`service-image ${currentService === 1 ? 'active' : ''}`}
            onClick={() => setCurrentService(1)}
          />
        </div>
        <div className="services-navigation">
          <div className="nav-indicators">
            {[...Array(totalServices)].map((_, index) => (
              <div
                key={index}
                className={`nav-dash ${currentService === index ? 'active' : ''}`}
                onClick={() => setCurrentService(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="working-worldwide-section">
        <div className="video-container">
          <video autoPlay muted loop playsInline>
            <source src="/assets/videos/chewpr.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-overlay">
          <h1 className="working-text">WORKING</h1>
          <h1 className="worldwide-text">WORLDWIDE</h1>
        </div>
      </section>

      <section id="portfolio" className="projects-section">
        <h2 className="section-title3">OUR PROJECTS</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/assets/images/Listitem → Link (1).png" alt="Silent Talk - Sign Language to Text Conversion Application" />
          </div>
          <div className="project-card">
            <img src="/assets/images/Listitem → Link.png" alt="Getting Help Doesn't Have To Suck: The New AstroPay Help Center" />
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What our clients say</h2>
        </div>
        <div className="testimonials-slider">
          <div 
            className="testimonials-track" 
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-slide">
                {index > 0 && (
                  <div className="testimonial-card side" onClick={() => setCurrentTestimonial(index - 1)}>
                    <div className="testimonial-client">
                      <span>{testimonials[index - 1].client}</span>
                    </div>
                    <div className="testimonial-content">
                      <p>{testimonials[index - 1].text}</p>
                      <div className="testimonial-author">
                        <span className="name">{testimonials[index - 1].name}</span>
                        <span className="title">{testimonials[index - 1].title}</span>
                      </div>
                      <div className="testimonial-avatar">
                        <img src={testimonials[index - 1].avatar} alt={testimonials[index - 1].name} />
                      </div>
                    </div>
                  </div>
                )}
                <div className="testimonial-card center" onClick={() => setCurrentTestimonial(index)}>
                  <div className="testimonial-client">
                    <span>{testimonials[index].client}</span>
                  </div>
                  <div className="testimonial-content">
                    <p>{testimonial.text}</p>
                    <div className="testimonial-author">
                      <span className="name">{testimonial.name}</span>
                      <span className="title">{testimonial.title}</span>
                    </div>
                    <div className="testimonial-avatar">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                  </div>
                </div>
                {index < testimonials.length - 1 && (
                  <div className="testimonial-card side" onClick={() => setCurrentTestimonial(index + 1)}>
                    <div className="testimonial-client">
                      <span>{testimonials[index + 1].client}</span>
                    </div>
                    <div className="testimonial-content">
                      <p>{testimonials[index + 1].text}</p>
                      <div className="testimonial-author">
                        <span className="name">{testimonials[index + 1].name}</span>
                        <span className="title">{testimonials[index + 1].title}</span>
                      </div>
                      <div className="testimonial-avatar">
                        <img src={testimonials[index + 1].avatar} alt={testimonials[index + 1].name} />
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
              className={`testimonial-dash ${currentTestimonial === index ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title1">Hey!, Let's Talk</h2>
          <div className="contact-content">
            <div className="contact-form">
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const message = formData.get('message');
                
                const subject = 'New project idea';
                const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`;
                const mailtoLink = `mailto:info@eagledigitech.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.open(mailtoLink);
              }}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  className="form-input" 
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className="form-input" 
                  required
                />
                <input 
                  type="text" 
                  name="phone"
                  placeholder="Phone" 
                  className="form-input" 
                  required
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  className="form-textarea"
                  required
                ></textarea>
                <button type="submit" className="submit-button">Send Now</button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-card">
                <h3>Call Anytime</h3>
                <div className="contact-item">
                  <span className="contact-icon"><img src="/assets/images/phone (2).png" alt="Email" /></span>
                  <span>+ 91 67678 92878</span>
                </div>
                <h3>Send Email</h3>
                <div className="contact-item">
                  <span className="contact-icon"><img src="/assets/images/em (2).png" alt="Phone" /></span>
                  <span>info@zovadigitech.com</span>
                </div>
                <h3>Visit Us</h3>
                <div className="contact-item">
                  <span className="contact-icon"><img src="/assets/images/loc (2).png" alt="Location" /></span>
                  <span>20 Island Park Road</span>
                </div>
                <div className="social-links-text">Follow Us</div>
                <div className="social-links">
                  <a href="https://www.linkedin.com/company/zovadigitech/" target="_blank" rel="noopener noreferrer" className="social-link"><img src="/assets/images/in2.png" alt="LinkedIn" /></a>  
                  <a href="https://www.instagram.com/zovadigitech/" target="_blank" rel="noopener noreferrer" className="social-link"><img src="/assets/images/in22.png" alt="Instagram" /></a>
                  <a href="https://www.facebook.com/zovadigitech/" target="_blank" rel="noopener noreferrer" className="social-link"><img src="/assets/images/in222.png" alt="Facebook" /></a>
                  <a href="https://www.tiktok.com/@eagleigroup" target="_blank" rel="noopener noreferrer" className="social-link"><img src="/assets/images/in2222.png" alt="TikTok" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Let's Create Tomorrow<br />
          Hand in Hand!</h2>
          <h2 className="cta-title2">It is a long established fact that a reader will be distracted by the<br />
            readable content of a page looking at its layout.</h2>
          <button className="cta-button" onClick={() => navigate('/contact')}>Free Consultation</button>
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