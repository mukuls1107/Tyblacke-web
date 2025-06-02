import React, { useState } from "react";
import ImageBar from "./ImageBar";
import styles from "../Styles/Navbar.module.css";

const myData = [
  { svgImg: "/icons/instagram.svg", title: "Instagram" ,},
  { svgImg: "/icons/spotify.svg", title: "Spotify" },
  { svgImg: "/icons/youtube.svg", title: "Youtube" },
 
  { svgImg: "/icons/twitter.svg", title: "Twitter" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={styles.navbar}>
        {/* Left Navigation - Desktop only */}
        <div className={styles.left}>
          <div className={styles.leftNav}>
            <a href="#home">
              {" "}
              <p>Home</p>
            </a>
            <a href="#about">
              {" "}
              <p>About</p>
            </a>
            <a href="#blog">
              {" "}
              <p>Blog</p>
            </a>
            <a href="#prayer">
              {" "}
              <p>Prayer Wall</p>
            </a>
            <a href="#merchandise">
              {" "}
              <p>Merchandise</p>
            </a>
          </div>
        </div>

        {/* Center Logo */}
        <div className={styles.center}>
          <div className={styles.logo}></div>
        </div>

        {/* Right Social Icons - Desktop only */}
        <ImageBar items={myData}></ImageBar>

        {/* Hamburger Menu Button - Mobile only */}
        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.mobileNavLinks}>
          <p onClick={() => setIsMenuOpen(false)}>Home</p>
          <p onClick={() => setIsMenuOpen(false)}>About</p>
          <p onClick={() => setIsMenuOpen(false)}>Blog</p>
          <p onClick={() => setIsMenuOpen(false)}>Prayer Wall</p>
          <p onClick={() => setIsMenuOpen(false)}>Merchandise</p>
        </div>

        <div className={styles.mobileSocialIcons}>
          {myData.map((item, idx) => (
            <div
              className={styles.socialIcon}
              key={idx}
              onClick={() => setIsMenuOpen(false)}
            >
              {/* <img src={item.svgImg} alt={item.title} /> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
