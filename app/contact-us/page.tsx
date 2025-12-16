'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './style.module.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroSubtitle}>
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Contact Info */}
            <div className={styles.infoSection}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <p className={styles.sectionDescription}>
                Reach out to us through any of these channels.
              </p>

              <div className={styles.contactMethods}>
                <a href="https://kingschat.online/user/ce_bigchurch" target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <Image src="/kingschat-logo.png" alt="" width={24} height={24} />
                  </div>
                  <div className={styles.contactDetails}>
                    <h3 className={styles.contactLabel}>KingsChat</h3>
                    <p className={styles.contactValue}>@ce_bigchurch</p>
                  </div>
                </a>

                <a href="https://www.instagram.com/pco_skill_acquisition_program/" target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <Image src="/instagram-logo.png" alt="" width={24} height={24} />
                  </div>
                  <div className={styles.contactDetails}>
                    <h3 className={styles.contactLabel}>Instagram</h3>
                    <p className={styles.contactValue}>@pco_skill_acquisition_program</p>
                  </div>
                </a>

                <a href="tel:+1234567890" className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className={styles.contactDetails}>
                    <h3 className={styles.contactLabel}>Phone</h3>
                    <p className={styles.contactValue}>+1 (234) 567-890</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formSection}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows={5}
                    required
                  />
                </div>

                {status === 'success' && (
                  <div className={styles.successMessage}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className={styles.errorMessage}>
                    Failed to send message. Please try again.
                  </div>
                )}

                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}