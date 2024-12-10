import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className={styles.contactPage}>
      {/* Partikel sebagai latar belakang */}
      <Particles
        options={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            move: {
              speed: 1,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffd700', // Aksen warna partikel kuning
              opacity: 0.3,
            },
          },
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <div className={styles.contentWrapper}>
        <h1>Contact Us</h1>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

React

export default ContactPage;
