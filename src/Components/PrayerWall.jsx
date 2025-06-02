import React, { useState } from "react";
import styles from "../Styles/PrayerWall.module.css";
import "../Styles/Utility.css";

const PrayerWall = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    prayer: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.prayer.trim()) {
      alert('Please fill in your name and prayer request.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({ name: '', contact: '', prayer: '' });
    } catch (error) {
      console.error('Error submitting prayer request:', error);
      alert('There was an error submitting your prayer request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className={styles.prayerWall} id="prayer">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>🙏</div>
              <h3>Prayer Request Submitted</h3>
              <p>Thank you for sharing your prayer request with our community. We believe that prayer changes everything.</p>
              <div className={styles.verse}>
                <em>"And this is the confidence that we have toward him, that if we ask anything according to his will he hears us." - 1 John 5:14</em>
              </div>
              <button 
                className={styles.backButton}
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Prayer
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.prayerWall} id="prayer">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.badge}>Prayer Wall</div>
            <h2 className={styles.title}>Share Your Prayer Requests</h2>
            <p className={styles.subtitle}>
              Join our community in prayer. Share your requests and lift others up in faith.
            </p>
          </div>
          
          <form className={styles.prayerForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact" className={styles.label}>
                Contact Information <span className={styles.optional}>(Optional)</span>
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Email or phone number (optional)"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="prayer" className={styles.label}>
                Prayer Request <span className={styles.required}>*</span>
              </label>
              <textarea
                id="prayer"
                name="prayer"
                value={formData.prayer}
                onChange={handleInputChange}
                className={styles.textarea}
                placeholder="Share your prayer request with our community..."
                rows="6"
                required
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  Submitting...
                </>
              ) : (
                'Submit Prayer Request'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PrayerWall;
