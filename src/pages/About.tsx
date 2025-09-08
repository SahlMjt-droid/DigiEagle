import { useState } from 'react';
import './About.css';

export default function About() {
  const [currentProject, setCurrentProject] = useState(0);
  const totalProjects = 3;

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % totalProjects);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + totalProjects) % totalProjects);
  };


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
      <h2 className="section-title11">About Us </h2>
    </div>
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