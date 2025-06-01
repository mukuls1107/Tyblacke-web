import React from "react";
import styles from "../Styles/PrayerWall.module.css";
import "../Styles/Utility.css";

const PrayerWall = () => {
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
          
          <div className={styles.comingSoon}>
            <div className={styles.iconContainer}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
              </svg>
            </div>
            <h3>Coming Soon</h3>
            <p>
              We're building an interactive prayer wall where our community can 
              share prayer requests, testimonies, and support one another in faith.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span>🙏</span>
                <p>Submit Prayer Requests</p>
              </div>
              <div className={styles.feature}>
                <span>✨</span>
                <p>Share Testimonies</p>
              </div>
              <div className={styles.feature}>
                <span>💝</span>
                <p>Pray for Others</p>
              </div>
            </div>
            <a href="#newsletter" className={styles.notifyButton}>
              Get Notified When It's Ready
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerWall;
