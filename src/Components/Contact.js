// ContactForm.jsx

import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
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
        // Add logic to handle form submission here
        console.log(formData);
    };

    return (
        
        <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h1 className={styles.contactHeading}>Contact Us</h1>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
                Submit
            </button>
        </form>
    );
};

export default Contact;
