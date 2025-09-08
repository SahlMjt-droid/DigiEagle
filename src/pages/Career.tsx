import { useState } from 'react';
import './Career.css';

export default function Career() {
  const [expandedVacancy, setExpandedVacancy] = useState<number | null>(null);

  const toggleVacancy = (index: number) => {
    setExpandedVacancy(expandedVacancy === index ? null : index);
  };

  const vacancies = [
    {
      id: 1,
      title: "3D MOTION DESIGNER",
      description: "We are looking for a talented 3D Motion Designer to join our creative team..."
    },
    {
      id: 2,
      title: "ACCOUNTANT", 
      description: "We are seeking a detail-oriented Accountant to manage our financial operations..."
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
      <section className="career-hero-section">
        <div className="career-hero-content">
          <h1 className="career-hero-title">
            Join<br />
            Our Team
          </h1>
          
          <p className="career-hero-description">
            WE'RE ALWAYS ON THE LOOKOUT FOR BRILLIANT MINDS AND BOLD IDEAS. CHECK OUT OUR VACANCIES<br />
            AND APPLY FOR THE ONE THAT SUITS YOU BEST!
          </p>
          
          <button className="career-apply-button">
            Join the Team By Applying To The Following Open Vacancies
          </button>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="vacancies-section">
        <h2 className="vacancies-title">Our Vacancies</h2>
        
        <div className="vacancies-list">
          {vacancies.map((vacancy, index) => (
            <div key={vacancy.id} className="vacancy-item">
              <div 
                className="vacancy-header"
                onClick={() => toggleVacancy(index)}
              >
                <h3 className="vacancy-title">{vacancy.title}</h3>
                <span className="vacancy-toggle">
                  {expandedVacancy === index ? '−' : '+'}
                </span>
              </div>
              {expandedVacancy === index && (
                <div className="vacancy-content">
                  <p>{vacancy.description}</p>
                </div>
              )}
            </div>
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