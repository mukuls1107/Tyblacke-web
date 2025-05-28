import React from "react";
import "../Styles/Utility.css";
import styles from "../Styles/Hero.module.css";
import tylerImage from "../assets/pfp.webp"
const Hero = () => {
  return (
    <section className="container hero" id="hero">
      <div className={styles.box}>
      <img src={tylerImage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
