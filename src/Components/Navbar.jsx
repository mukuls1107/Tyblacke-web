import React, { useState } from "react";
import styles from "../Styles/Navbar.module.css";
import "../Styles/Utility.css";
import ImageBar from "./ImageBar";

const myData = [
  { svgImg: "/icons/instagram.svg", title: "Instagram", url: "https://instagram.com/tyblacke" },
  { svgImg: "/icons/spotify.svg", title: "Spotify", url: "https://spotify.com/artist/tyblacke" },
  { svgImg: "/icons/youtube.svg", title: "YouTube", url: "https://youtube.com/@tyblacke" },
  { svgImg: "/icons/soundcloud.svg", title: "SoundCloud", url: "https://soundcloud.com/tyblacke" },
  { svgImg: "/icons/twitter.svg", title: "Twitter", url: "https://twitter.com/tyblacke" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="container">
      <div className={styles.box}>
        {/* Left: Navigation Links */}
        <div className={styles.left}>
          <div className={styles.leftNav}>
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
            <a href="#music" onClick={(e) => { e.preventDefault(); handleNavClick('music'); }}>Music</a>
            <a href="#prayer" onClick={(e) => { e.preventDefault(); handleNavClick('prayer'); }}>Prayer Wall</a>
            <a href="#merchandise" onClick={(e) => { e.preventDefault(); handleNavClick('merchandise'); }}>Merchandise</a>
            <a href="#newsletter" onClick={(e) => { e.preventDefault(); handleNavClick('newsletter'); }}>Newsletter</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
          </div>
          
          {/* Mobile hamburger menu */}
          <button 
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
          </button>
        </div>

        {/* Center: Logo */}
        <div className={styles.center}>
          <div className={styles.image} onClick={() => handleNavClick('hero')}></div>
        </div>

        {/* Right: Social Icons */}
        <div className={styles.right}>
          <ImageBar items={myData} />
        </div>
        
        {/* Mobile menu overlay */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileMenuContent}>
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
            <a href="#music" onClick={(e) => { e.preventDefault(); handleNavClick('music'); }}>Music</a>
            <a href="#prayer" onClick={(e) => { e.preventDefault(); handleNavClick('prayer'); }}>Prayer Wall</a>
            <a href="#merchandise" onClick={(e) => { e.preventDefault(); handleNavClick('merchandise'); }}>Merchandise</a>
            <a href="#newsletter" onClick={(e) => { e.preventDefault(); handleNavClick('newsletter'); }}>Newsletter</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
