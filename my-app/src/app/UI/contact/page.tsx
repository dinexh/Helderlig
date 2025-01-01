'use client';
import React, { useState, useEffect } from 'react';
import './contact.css';
import { contactInfo } from '@/app/data/contactInfo';
import { motion } from 'framer-motion';
import { getDatabase, ref, push } from 'firebase/database';
import { app } from '../../../config/firebase';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    toastr.options = {
      positionClass: 'toast-top-right',
      timeOut: 4000,
      progressBar: true,
      closeButton: true,
      preventDuplicates: true,
      newestOnTop: true,
      showDuration: 300,
      hideDuration: 1000,
      extendedTimeOut: 1000
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const db = getDatabase(app);
      const contactsRef = ref(db, 'contacts');
      
      const contactData = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      await push(contactsRef, contactData);
      toastr.info('Saving your message...', 'Processing');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }
      
      setFormData({ name: '', email: '', phone: '', message: '' });
      toastr.success('Your message has been sent and we will get back to you soon!', 'Success');
    } catch (error: Error | unknown) {
      console.error('Error submitting form:', error);
      if (error instanceof Error && error.message.includes('email')) {
        toastr.error('Could not send email notification. Please try again later.', 'Email Error');
      } else {
        toastr.error('Something went wrong. Please try again.', 'Error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon-wrapper">
                <FaEnvelope className="info-icon" />
              </div>
              <p><strong>Email:</strong> {contactInfo.email}</p>
            </div>
            <div className="info-item">
              <div className="info-icon-wrapper">
                <FaPhone className="info-icon" />
              </div>
              <p><strong>Phone:</strong> {contactInfo.phone}</p>
            </div>
            <div className="info-item">
              <div className="info-icon-wrapper">
                <FaMapMarkerAlt className="info-icon" />
              </div>
              <p><strong>Address:</strong> {contactInfo.address}</p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <BiMessageDetail className="input-icon" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={5}
            />
          </div>
          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact; 