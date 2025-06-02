import React from "react";
import styles from "../Styles/Merchandise.module.css";
import "../Styles/Utility.css";

const Merchandise = () => {
  return (
    <section className={styles.merchandise} id="merchandise">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>Merchandise</div>
          <h2 className={styles.title}>Wear Your Faith</h2>
          <p className={styles.subtitle}>
            Show your support with our collection of
            faith-inspired merchandise.
          </p>
          <a href="#newsletter" className={styles.notifyButton}>
            Visit the store here!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
