import React from "react";
import "../Styles/Utility.css";
import styles from "../Styles/Hero.module.css";
// import tylerImage from "../assets/pfp.webp";
const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className={styles.box}>
        {" "}
        <div className={styles.content}>
          <h1 className={styles.name}>Ty Blacke</h1>
          <p className={styles.subtitle}> Musician & Artist</p>

          <div className={styles.listenBox}>
            <a
              href="https://www.youtube.com/@tyblacke"
              target="_blank"
              className={styles.ctaButton}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.68L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
              </svg>
              <span className={styles.txt}>Listen Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
