import React, { useState } from "react";
import styles from "../Styles/Newsletter.module.css";
import "../Styles/Utility.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the email to your backend
    console.log("Newsletter signup:", email);
    setIsSubmitted(true);
    setEmail("");
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };  return (
    <section className={styles.newsletter} id="newsletter">
      <div className={styles.container}>
        <h2 className={styles.title}>Stay Connected</h2>
        <p className={styles.subtitle}>
          Join our community and be the first to know about new music releases, 
          upcoming events, and ministry updates. Let's walk this faith journey together.
        </p>
        
        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <div className={styles.benefitIcon}>🎵</div>
            <div className={styles.benefitTitle}>New Music Releases</div>
            <div className={styles.benefitDescription}>Be first to hear new songs and albums</div>
          </div>
          <div className={styles.benefit}>
            <div className={styles.benefitIcon}>📅</div>
            <div className={styles.benefitTitle}>Event Announcements</div>
            <div className={styles.benefitDescription}>Get notified about concerts and appearances</div>
          </div>
          <div className={styles.benefit}>
            <div className={styles.benefitIcon}>🙏</div>
            <div className={styles.benefitTitle}>Prayer Requests</div>
            <div className={styles.benefitDescription}>Join our prayer community</div>
          </div>
          <div className={styles.benefit}>
            <div className={styles.benefitIcon}>✨</div>
            <div className={styles.benefitTitle}>Ministry Updates</div>
            <div className={styles.benefitDescription}>Stay connected with our mission</div>
          </div>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className={styles.input}
              />
              <button type="submit" className={styles.submitButton}>
                Subscribe
              </button>
            </div>
            <p className={styles.disclaimer}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        ) : (
          <div className={styles.successMessage}>
            <h4>Thank You!</h4>
            <p>Welcome to our community. You'll receive updates soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
