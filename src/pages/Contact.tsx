import { useEffect, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, phone, message } = formData;
    
    // Create email content
    const subject = 'New Project Idea';
    const body = `Hello,

I am interested in starting a new project with your team.

Project Details:
${message}

Contact Information:
Name: ${name}
Email: ${email}
Phone: ${phone}

Looking forward to hearing from you.

Best regards,
${name}`;

    // Create mailto link
    const mailtoLink = `mailto:info@eagledigitech.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home-container">
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
        <h2 className="contact-title1"> Let's Build Something Great Together!</h2>
         
          <div className="contact-content">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  className="form-input" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className="form-input" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="text" 
                  name="phone"
                  placeholder="Phone" 
                  className="form-input" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button type="submit" className="submit-button">Send Now</button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-card">
                <h3>Call Anytime</h3>
                
                
                <div className="contact-item">
                  <span className="contact-icon"><img src="/assets/images/phone.png" alt="Email" /></span>
                  <span>[+44 XXX XXX XXXX]</span>
                </div>
                <h3>Send Email</h3>
                <div className="contact-item">
                  <span className="contact-icon"><img src="/assets/images/em.png" alt="Phone" /></span>
                  <span>info@eagledigitech.co.uk
                 </span>
                </div>
                <h3>Visit Us</h3>
                <div className="contact-item">
                  <span className="contact-icon"><img src="/assets/images/loc.png" alt="Location" /></span>
                  <span> [Your UK office / virtual office address]</span>
                </div>
                <div className="social-links-text">Follow Us</div>
                <div className="social-links">
                  <a href="https://www.linkedin.com/company/zovadigitech/" target="_blank" rel="noopener noreferrer" className="social-link"><img src="/assets/images/lin.png" alt="LinkedIn" /></a>  
                  <a href="https://www.instagram.com/zovadigitech/" target="_blank" rel="noopener noreferrer" className="social-link"><img src="/assets/images/int.png" alt="Instagram" /></a>
                  <a href="https://www.facebook.com/zovadigitech/" target="_blank" rel="noopener noreferrer" className="social-link"><img src="/assets/images/fb.png" alt="Facebook" /></a>
                  <a href="https://www.tiktok.com/@eagleigroup" target="_blank" rel="noopener noreferrer" className="social-link"><img src="/assets/images/twit.png" alt="TikTok" /></a>
                </div>
              </div>
            </div>
          </div>
          <h2  className='contact-title2'>We’ll get back to you within 24 hours — because your project deserves our full attention.</h2>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
        <button className="footer-scroll-top" onClick={scrollToTop}>↑</button>
        <div className="footer-content">
          <div className="footer-main">
            <h3>DigiEagle</h3>
            <p>Your trusted partner for digital transformation. We deliver secure, scalable, and innovative digital solutions that transform challenges into measurable success.</p>
            <div className="footer-email">
              <span>info@eagledigitech.co.uk</span>
              <span className="footer-email-arrow">→</span>
            </div>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">E-commerce</a></li>
              <li><a href="#">AI & Data Science</a></li>
              <li><a href="#">IT Consultancy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
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
