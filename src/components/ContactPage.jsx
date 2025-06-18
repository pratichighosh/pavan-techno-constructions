import React, { useState, useRef, useEffect } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.package || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields.',
        isError: true,
        isSubmitting: false
      });
      
      // Clear error message after 3 seconds
      setTimeout(() => {
        setFormStatus({
          message: '',
          isError: false,
          isSubmitting: false
        });
      }, 3000);
      return;
    }

    setFormStatus({
      message: '',
      isError: false,
      isSubmitting: true
    });
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setFormStatus({
        message: 'Thank you! Your message has been sent successfully.',
        isError: false,
        isSubmitting: false
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          message: '',
          isError: false,
          isSubmitting: false
        });
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <section className="contact-page" ref={sectionRef}>
        {/* Animated Background Elements */}
        <div className="animated-background">
          <div className="floating-shape circle-1"></div>
          <div className="floating-shape circle-2"></div>
          <div className="floating-shape circle-3"></div>
          <div className="floating-shape square-1"></div>
          <div className="floating-shape triangle-1"></div>
        </div>

        <div className="container">
          <div className="form-wrapper">
            <div className="contact-form-container">
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Let's discuss your project requirements</p>
              </div>
              
              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="package">Select Package</label>
                    <select
                      name="package"
                      id="package"
                      value={formData.package}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Choose a package</option>
                      <option value="basic">Basic Package</option>
                      <option value="premium">Premium Package</option>
                      <option value="luxury">Luxury Package</option>
                      <option value="custom">Custom Project</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell us about your project requirements"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <div className="form-status">
                  {formStatus.message && (
                    <div className={`status-message ${formStatus.isError ? 'error' : 'success'}`}>
                      {formStatus.message}
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={handleSubmit}
                  className="btn btn-primary" 
                  disabled={formStatus.isSubmitting}
                >
                  <span>{formStatus.isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .contact-page {
          padding: 3rem 0;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          opacity: 0.1;
        }

        .circle-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          border-radius: 50%;
          top: 10%;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #B79C5C, #8b7355);
          border-radius: 50%;
          top: 70%;
          right: 15%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #007bff, #4dabf7);
          border-radius: 50%;
          bottom: 30%;
          left: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .square-1 {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #B79C5C, #007bff);
          top: 40%;
          right: 10%;
          animation: rotate 10s linear infinite;
        }

        .triangle-1 {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(183, 156, 92, 0.3);
          top: 20%;
          right: 30%;
          animation: float 5s ease-in-out infinite;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .form-wrapper {
          display: flex;
          justify-content: center;
          opacity: 0;
          max-width: 600px;
          margin: 0 auto;
        }

        .section-visible .form-wrapper {
          animation: fadeIn 1s forwards 0.5s;
        }

        .contact-form-container {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(183, 156, 92, 0.05));
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(183, 156, 92, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          transform: translateY(30px);
          opacity: 0;
          width: 100%;
        }

        .section-visible .contact-form-container {
          animation: slideUp 0.8s forwards 0.8s;
        }

        .form-header {
          text-align: center;
          margin-bottom: 1.2rem;
        }

        .form-header h3 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #007bff;
          margin-bottom: 0.2rem;
          letter-spacing: 1px;
        }

        .form-header p {
          color: #B79C5C;
          font-size: 0.9rem;
          opacity: 0.9;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .form-group {
          position: relative;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.3rem;
          color: #B79C5C;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(183, 156, 92, 0.2);
          border-radius: 10px;
          color: #000;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          background: rgba(255, 255, 255, 1);
          border-color: #007bff;
          box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
        
        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23007bff' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 3rem;
        }
        
        .form-status {
          min-height: 30px;
          display: flex;
          align-items: center;
        }
        
        .status-message {
          padding: 0.6rem 0.8rem;
          border-radius: 10px;
          font-size: 0.85rem;
          width: 100%;
          text-align: center;
          font-weight: 500;
        }
        
        .status-message.error {
          background: rgba(220, 53, 69, 0.1);
          color: #dc3545;
          border: 1px solid rgba(220, 53, 69, 0.3);
        }
        
        .status-message.success {
          background: rgba(40, 167, 69, 0.1);
          color: #28a745;
          border: 1px solid rgba(40, 167, 69, 0.3);
        }
        
        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 0.8rem 1.8rem;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
          margin-top: 0.5rem;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transition: left 0.3s ease;
          z-index: -1;
        }
        
        .btn-primary:hover::before {
          left: 0;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.4);
        }
        
        .btn-primary:disabled {
          background: #6c757d;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .btn-primary:disabled::before {
          display: none;
        }

        /* Mobile Responsiveness */
        @media (max-width: 992px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0.8rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-page {
            padding: 2rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .contact-form-container {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .contact-page {
            padding: 1.5rem 0;
          }

          .contact-form-container {
            padding: 1.2rem;
          }
          
          .form-header h3 {
            font-size: 1.4rem;
          }

          .btn-primary {
            padding: 0.7rem 1.5rem;
            font-size: 0.9rem;
          }

          /* Disable complex animations on mobile */
          .floating-shape {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 0.5rem;
          }

          .contact-form-container {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;
