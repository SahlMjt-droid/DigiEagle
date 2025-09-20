import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Career.css';

export default function Career() {
  const [expandedVacancy, setExpandedVacancy] = useState<number | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolioLink: '',
    message: ''
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleVacancy = (index: number) => {
    setExpandedVacancy(expandedVacancy === index ? null : index);
  };

  const handleApplyClick = (roleName: string) => {
    setSelectedRole(roleName);
    setShowApplicationModal(true);
  };

  const closeModal = () => {
    setShowApplicationModal(false);
    setSelectedRole('');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      portfolioLink: '',
      message: ''
    });
    setUploadedFile(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setFormData(prev => ({
        ...prev,
        portfolioLink: file.name
      }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Job application for ${selectedRole}`;
    const body = `Dear Hiring Team,

I am writing to apply for the ${selectedRole} position at your company.

Application Details:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Portfolio/CV: ${formData.portfolioLink || 'Not provided'}
${formData.message ? `Message: ${formData.message}` : ''}

${uploadedFile ? `I have attached my CV/Portfolio file: ${uploadedFile.name}` : ''}

Thank you for considering my application. I look forward to hearing from you.

Best regards,
${formData.fullName}`;

    // Create mailto link
    const mailtoLink = `mailto:careers@eagledigitech.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Close modal after opening email
    closeModal();
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
          JOIN OUR TEAM NOW! 
          </p>
        </div>
      </section>



      {/* Sample Roles Section */}
      <section className="sample-roles-section">
        <h2 className="sample-roles-title">Our Vacancies</h2>
        <div className="roles-list">
          <div className={`role-item ${expandedVacancy === 0 ? 'expanded' : ''}`}>
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
                <div className="role-details">
                  <div className="role-info-row">
                    <div className="role-info-item">
                      <h4 className="role-info-label">LOCATION</h4>
                      <p className="role-info-value">Remote</p>
                    </div>
                    <div className="role-info-item">
                      <h4 className="role-info-label">EMPLOYMENT TYPE</h4>
                      <p className="role-info-value">Full-time</p>
                    </div>
                  </div>
                  <div className="role-description">
                    <h4 className="role-info-label">ABOUT THE ROLE</h4>
                    <p className="role-description-text">
                      You'll be responsible for developing end-to-end web applications using modern technologies. 
                      Working with both frontend frameworks like React, Vue, or Angular and backend technologies 
                      like Node.js, Python, or Java. You'll collaborate with cross-functional teams to deliver 
                      scalable, high-performance applications that meet business requirements and provide exceptional user experiences.
                    </p>
                  </div>
                  <button className="apply-button" onClick={() => handleApplyClick('Full-Stack Developer')}>Apply</button>
                </div>
              </div>
            )}
          </div>
          <div className={`role-item ${expandedVacancy === 1 ? 'expanded' : ''}`}>
            <div 
              className="role-header"
              onClick={() => toggleVacancy(1)}
            >
              <h3 className="role-title">AI ENGINEER</h3>
              <span className="role-toggle">
                {expandedVacancy === 1 ? '−' : '+'}
              </span>
            </div>
            {expandedVacancy === 1 && (
              <div className="role-content">
                <div className="role-details">
                  <div className="role-info-row">
                    <div className="role-info-item">
                      <h4 className="role-info-label">LOCATION</h4>
                      <p className="role-info-value">Remote</p>
                    </div>
                    <div className="role-info-item">
                      <h4 className="role-info-label">EMPLOYMENT TYPE</h4>
                      <p className="role-info-value">Full-time</p>
                    </div>
                  </div>
                  <div className="role-description">
                    <h4 className="role-info-label">ABOUT THE ROLE</h4>
                    <p className="role-description-text">
                      You'll be responsible for designing, developing, and implementing AI solutions and machine learning models. 
                      Working with cutting-edge technologies like TensorFlow, PyTorch, and cloud AI services to create intelligent 
                      systems. You'll collaborate with data scientists and engineers to deploy scalable AI applications that solve 
                      complex business problems and drive innovation across various domains.
                    </p>
                  </div>
                  <button className="apply-button" onClick={() => handleApplyClick('AI Engineer')}>Apply</button>
                </div>
              </div>
            )}
          </div>
          <div className={`role-item ${expandedVacancy === 2 ? 'expanded' : ''}`}>
            <div 
              className="role-header"
              onClick={() => toggleVacancy(2)}
            >
              <h3 className="role-title">UI/UX Designer</h3>
              <span className="role-toggle">
                {expandedVacancy === 2 ? '−' : '+'}
              </span>
            </div>
            {expandedVacancy === 2 && (
              <div className="role-content">
                <div className="role-details">
                  <div className="role-info-row">
                    <div className="role-info-item">
                      <h4 className="role-info-label">LOCATION</h4>
                      <p className="role-info-value">Remote</p>
                    </div>
                    <div className="role-info-item">
                      <h4 className="role-info-label">EMPLOYMENT TYPE</h4>
                      <p className="role-info-value">Full-time</p>
                    </div>
                  </div>
                  <div className="role-description">
                    <h4 className="role-info-label">ABOUT THE ROLE</h4>
                    <p className="role-description-text">
                      You'll be responsible for creating intuitive and visually appealing user interfaces and experiences. 
                      Working with design tools like Figma, Sketch, and Adobe Creative Suite to craft user-centered designs. 
                      You'll collaborate with product teams and developers to ensure seamless user journeys, conduct user research, 
                      and create wireframes, prototypes, and design systems that enhance user satisfaction and engagement.
                    </p>
                  </div>
                  <button className="apply-button" onClick={() => handleApplyClick('UI/UX Designer')}>Apply</button>
                </div>
              </div>
            )}
          </div>
          <div className={`role-item ${expandedVacancy === 3 ? 'expanded' : ''}`}>
            <div 
              className="role-header"
              onClick={() => toggleVacancy(3)}
            >
              <h3 className="role-title">Business Development Executive</h3>
              <span className="role-toggle">
                {expandedVacancy === 3 ? '−' : '+'}
              </span>
            </div>
            {expandedVacancy === 3 && (
              <div className="role-content">
                <div className="role-details">
                  <div className="role-info-row">
                    <div className="role-info-item">
                      <h4 className="role-info-label">LOCATION</h4>
                      <p className="role-info-value">Remote</p>
                    </div>
                    <div className="role-info-item">
                      <h4 className="role-info-label">EMPLOYMENT TYPE</h4>
                      <p className="role-info-value">Full-time</p>
                    </div>
                  </div>
                  <div className="role-description">
                    <h4 className="role-info-label">ABOUT THE ROLE</h4>
                    <p className="role-description-text">
                      You'll be responsible for identifying new business opportunities and building strategic partnerships. 
                      Working with potential clients to understand their needs and present tailored solutions. You'll develop 
                      and execute sales strategies, manage client relationships, negotiate contracts, and drive revenue growth 
                      while representing our company's values and maintaining long-term business relationships.
                    </p>
                  </div>
                  <button className="apply-button" onClick={() => handleApplyClick('Business Development Executive')}>Apply</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    

      {/* Final Tagline Section */}
        <section className="tagline-section">
          <p className="final-tagline">
           "AT ZOVA DIGITECH, TALENT KNOWS NO BORDERS <br />
           -- JOIN US AND CREATE TECHNOLOGY THAT IMPACTS THE WORLD."
           
          </p>
        </section>

        <section className="antler-residencies-section">
          <div className="antler-background">
            <img src="/assets/images/antler-background.jpg" alt="Antler Residencies" />
            <div className="antler-overlay">
              <h2 className="antler-title">Browse upcoming Antler Residencies</h2>
              <p className="antler-description">
                We facilitate Antler Residencies in over 20 locations across the globe.<br />
                Check here to find your closest program and when the next start date is.
              </p>
              <button className="antler-button">Cohort start dates</button>
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

      {showApplicationModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{selectedRole.toUpperCase()}</h2>
            
            <form className="application-form" onSubmit={handleFormSubmit}>
              <div className="form-field">
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Full Name *" 
                  className="modal-input"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-field">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email *" 
                  className="modal-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-field">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number. +971..." 
                  className="modal-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-field file-upload-field">
                <input 
                  type="text" 
                  placeholder={uploadedFile ? uploadedFile.name : "Portfolio link / CV"} 
                  className="modal-input file-input"
                  value={formData.portfolioLink}
                  readOnly
                />
                <input 
                  type="file"
                  id="file-upload"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                />
                <button 
                  type="button" 
                  className="upload-button"
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  Upload File
                </button>
              </div>
              
              <div className="form-field">
                <textarea 
                  name="message"
                  placeholder="Message (optional)" 
                  className="modal-textarea"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <div className="modal-buttons">
                <button type="submit" className="modal-apply-btn">Apply</button>
                <button type="button" className="modal-cancel-btn" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}