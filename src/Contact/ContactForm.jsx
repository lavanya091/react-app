// src/ContactForm.js
import React, { useState } from 'react';
import styles from './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    console.log('Form submitted:', formData);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label}>Name:</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className={styles.label}>Email:</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className={styles.label}>Message:</label>
        <textarea
          className={styles.textarea}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
