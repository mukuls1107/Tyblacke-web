import React from "react";
import styles from "../Styles/About.module.css";
import "../Styles/Utility.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textSection}>
            <div className={styles.badge}>About</div>
            <h2 className={styles.title}>Called to Share God's Love Through Music</h2>
            <p className={styles.description}>
              TY BLACKE is more than just a musician – he's a vessel for God's message of hope, 
              love, and redemption. Through powerful lyrics and soul-stirring melodies, 
              TY creates music that touches hearts and transforms lives.
            </p>
            <p className={styles.description}>
              Born with a passion for worship and a heart for ministry, TY has dedicated 
              his life to using his musical gifts to glorify God and inspire others. 
              His contemporary Christian sound blends modern production with timeless 
              spiritual truths, reaching audiences across all generations.
            </p>
            
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <h3>10+</h3>
                <p>Years in Ministry</p>
              </div>
              <div className={styles.highlight}>
                <h3>50K+</h3>
                <p>Lives Touched</p>
              </div>
              <div className={styles.highlight}>
                <h3>25+</h3>
                <p>Original Songs</p>
              </div>
            </div>

            <div className={styles.cta}>
              <a href="#prayer" className={styles.ctaButton}>
                Join Prayer Wall
              </a>
              <a href="#events" className={styles.secondaryButton}>
                Upcoming Events
              </a>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img 
                src="/assets/ty-piano.webp" 
                alt="TY BLACKE at piano"
                className={styles.aboutImage}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.playButton}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.68L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
                  </svg>
                </div>
                <p>Watch TY's Testimony</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
