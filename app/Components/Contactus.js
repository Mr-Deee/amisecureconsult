"use client";

import React, { useState } from 'react';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import contact from '../images/contact.png';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form submitted:', formData);
      setSuccessMessage('Thank you for contacting us! We will get back to you shortly.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className={styles.Contact}>
      <div className={styles.contactPage}>
        <h1>Contact Us</h1>
        <div className={styles.contactContainer}>
          <div className={styles.imageSection}>
            <Image src={contact} alt="Contact Us" className={styles.contactImage} />
          </div>
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={styles.textarea}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
