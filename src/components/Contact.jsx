import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [selectedContact, setSelectedContact] = useState('email');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactOptions = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      color: '#25D366'
    },
    {
      id: 'email',
      title: 'Email',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      color: '#EA4335'
    }
  ];

  const handleSelectContact = (id) => {
    setSelectedContact(id);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      alert('Please fill in your name and message.');
      return;
    }

    if (selectedContact === 'whatsapp') {
      const waMessage = `Halo! Saya ${formData.name} ingin menghubungi Anda.\n\nPesan: ${formData.message}\n\nEmail saya: ${formData.email || '-'}`;
      const waUrl = `https://wa.me/6285292165080?text=${encodeURIComponent(waMessage)}`;
      window.open(waUrl, '_blank');
    } else if (selectedContact === 'email') {
      const subject = `Portfolio Inquiry from ${formData.name}`;
      const body = `Halo,\n\nSaya ${formData.name} ingin menghubungi Anda.\n\nPesan:\n${formData.message}\n\nEmail saya: ${formData.email || '-'}`;
      const emailUrl = `mailto:alfrzimhmd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(emailUrl, '_blank');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact <span className="title-highlight">Me</span></h2>
          <div className="title-line"></div>
          <p className="contact-subtitle">
            Choose your preferred contact method and send me a message.
          </p>
        </div>

        <div className="contact-options">
          {contactOptions.map((option) => (
            <button
              key={option.id}
              className={`contact-option-btn ${selectedContact === option.id ? 'active' : ''}`}
              onClick={() => handleSelectContact(option.id)}
              style={{
                borderColor: selectedContact === option.id ? option.color : 'rgba(255,255,255,0.1)',
                boxShadow: selectedContact === option.id ? `0 0 30px ${option.color}33` : 'none'
              }}
            >
              <div className="contact-option-icon" style={{ color: option.color }}>
                {option.icon}
              </div>
              <span className="contact-option-title">{option.title}</span>
            </button>
          ))}
        </div>

        <div className="contact-form-wrapper">
          <h3 className="form-title">
            Send via {selectedContact === 'whatsapp' ? 'WhatsApp' : 'Email'}
          </h3>
          <form onSubmit={handleSend} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email (optional)"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={selectedContact === 'whatsapp' ? 'Your message via WhatsApp...' : 'Your message via Email...'}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn-submit"
              style={{
                background: selectedContact === 'whatsapp' 
                  ? 'linear-gradient(135deg, #25D366, #128C7E)' 
                  : 'linear-gradient(135deg, #EA4335, #B31412)'
              }}
            >
              {selectedContact === 'whatsapp' ? (
                <>
                  Send via WhatsApp
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </>
              ) : (
                <>
                  Send via Email
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </>
              )}
            </button>

            <p className="form-footer">
              {selectedContact === 'whatsapp' 
                ? 'You will be redirected to WhatsApp Web to send the message.'
                : 'You will be redirected to your email client to send the message.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;