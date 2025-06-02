import React from "react";
import styles from "../Styles/About.module.css";
import "../Styles/Utility.css";
import tyPiano from "../assets/ty-piano.webp";
const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textSection}>
            <div className={styles.badge}>About</div>
            <h2 className={styles.title}>
              Called to Share God's Love Through Music
            </h2>
            <p className={styles.description}>
            I'm Ty Blacke, a musician passionate about playing the piano, singing, and songwriting. My heart is set on creating worship music and jazz, blending my love for melody with a deep sense of purpose. Above all, I love the Lord with all my heart, and I am incredibly grateful for the work He’s doing in my life.
            </p>
   

            {/* <div className={styles.highlights}>
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
            </div> */}

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
                src={tyPiano}
                alt="TY BLACKE at piano"
                className={styles.aboutImage}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.playButton}>
                  <a
                    href="https://youtu.be/zu8PWPyf2-E?si=rsamUFomjuiDtU0y"
                    target="_blank"
                  >
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.68L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                    </svg>
                  </a>
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
