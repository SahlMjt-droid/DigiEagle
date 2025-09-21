import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

export default function About() {
  const navigate = useNavigate();
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

  return (
    <div className="about-container">
      <section className="web3-studio-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="section-title11">With global expertise in start-ups<br />
            and enterprises, we excel in<br />
            building high performing digital<br />
            products and teams.</h2>  
            <h2 className="section-title12">About us</h2> 
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

      <section className="service-section">
        <h2 className="section-title1">OUR SERVICES</h2>
        <div className="services-carousel">
          <div className="services-track">
            <img src="/assets/images/Container (2)1.png" alt="UI/UX Design" />
            <img src="/assets/images/Container (2)2.png" alt="Web Development" />
            <img src="/assets/images/Container (2)3.png" alt="Mobile Development" />
          </div>
        </div>
      </section>

      <section className="projects-section">
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

      <div className="cre-title">
        <div className="cre-image">
          <img src="/assets/images/llm.png" alt="Creating Innovative Solutions" />
        </div>
      </div>

      <div className="cre-title1">
        <h1 className="section-title33">We believe design is about creating<br />
        clarity. Our edge? A team of<br />
        thinkers, makers, and partners who<br />
        bring rigor to every collaboration.</h1>
        <div className="cre-image1">
          <img src="/assets/images/crim.png" alt="Creating Innovative Solutions" />
        </div>
      </div>

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