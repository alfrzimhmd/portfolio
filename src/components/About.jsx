import { useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const personalInfo = [
    { label: 'Full Name', value: 'Muhammad Alfarizi' },
    { label: 'Location', value: 'Indonesia' },
    { label: 'Email', value: 'mhmdalfrzi.03@gmail.com' },
    { label: 'Education', value: 'Information Technology Student' }
  ];

  const coreSkills = [
    {
      name: 'Mobile Development',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      name: 'Web Development',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      name: 'UI/UX Design',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      name: 'Reverse Engineering',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
          <polyline points="2 7 2 17 12 22" />
          <polyline points="22 7 22 17 12 22" />
        </svg>
      )
    }
  ];

  const stats = [
    { 
      value: '15+', 
      label: 'Projects Completed',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    { 
      value: '8+', 
      label: 'Tech Stack',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    { 
      value: '100%', 
      label: 'Passion Code',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    },
    { 
      value: '24/7', 
      label: 'Learning Mode',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    }
  ];

  const handleDownloadCV = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      setShowModal(false);
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-subtitle">Who I Am</span>
          <h2 className="section-title">About <span className="title-highlight">Me</span></h2>
          <div className="title-line"></div>
        </div>

        <div className="about-content">
          <div className="about-description">
            <p>
              Hello! I'm <span className="highlight">Muhammad Alfarizi</span>, 
              a passionate <span className="highlight">Mobile & App Developer</span> 
              and <span className="highlight">UI/UX Designer</span> based in Indonesia.
            </p>
            <p>
              With a deep interest in <span className="highlight">Reverse Engineering</span>, 
              I enjoy exploring how applications work at their core, analyzing systems, 
              and understanding the intricate details that make technology function. 
              This curiosity complements my development skills, allowing me to build 
              more robust and optimized applications.
            </p>
            <p>
              As an <span className="highlight">Information Technology student</span>, 
              I am constantly learning and adapting to new technologies. My goal is 
              to create seamless digital experiences that are not only functional 
              but also visually appealing and user-centric. I believe in writing clean, 
              efficient code and designing interfaces that users love to interact with.
            </p>
            <p>
              Currently, I'm diving deep into <span className="highlight">Flutter</span> 
              for cross-platform mobile development while also exploring 
              <span className="highlight"> React Native</span> and modern web frameworks. 
              I'm always open to collaborating on exciting projects and taking on 
              new challenges that push my boundaries as a developer.
            </p>
          </div>

          <div className="about-info-grid">
            <h3 className="info-title">Personal Information</h3>
            <div className="info-grid">
              {personalInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-skills">
            <h3 className="skills-title">Core Skills</h3>
            <div className="skills-row">
              {coreSkills.map((skill, index) => (
                <div key={index} className="skill-card-horizontal">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <button onClick={handleDownloadCV} className="btn-cv">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Modal Popup CV */}
      {showModal && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal-content">
            <div className="modal-icon">
              <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 className="modal-title">CV Belum Tersedia</h3>
            <p className="modal-message">
              Maaf, file CV saya sedang dalam proses pembaruan. 
              Silakan hubungi saya melalui email atau media sosial 
              untuk mendapatkan CV terbaru.
            </p>
            <div className="modal-divider"></div>
            <div className="modal-contact">
              <p className="modal-contact-label">Hubungi Saya:</p>
              <div className="modal-contact-info">
                <span className="modal-email">mhmdalfrzi.03@gmail.com</span>
              </div>
            </div>
            <button onClick={closeModal} className="modal-btn-primary">
              Mengerti
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;