import React from "react";
import styles from "../Styles/Footer.module.css";
import "../Styles/Utility.css";

const socialLinks = [
  { 
    svgImg: "/icons/instagram.svg", 
    title: "Instagram", 
    url: "https://instagram.com/tyblacke",
    hoverColor: "#E4405F"
  },
  { 
    svgImg: "/icons/spotify.svg", 
    title: "Spotify", 
    url: "https://spotify.com/artist/tyblacke",
    hoverColor: "#1DB954"
  },
  { 
    svgImg: "/icons/youtube.svg", 
    title: "YouTube", 
    url: "https://youtube.com/@tyblacke",
    hoverColor: "#FF0000"
  },
  { 
    svgImg: "/icons/soundcloud.svg", 
    title: "SoundCloud", 
    url: "https://soundcloud.com/tyblacke",
    hoverColor: "#FF5500"
  },
  { 
    svgImg: "/icons/twitter.svg", 
    title: "Twitter", 
    url: "https://twitter.com/tyblacke",
    hoverColor: "#1DA1F2"
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <div className={styles.logoImage}></div>
            </div>
            <h3 className={styles.brandName}>TY BLACKE</h3>
            <p className={styles.brandTagline}>
              Spreading faith through music and worship
            </p>
          </div>

          {/* Links Section */}
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Music</h4>
              <ul className={styles.linkList}>
                <li><a href="#latest">Latest Releases</a></li>
                <li><a href="#albums">Albums</a></li>
                <li><a href="#singles">Singles</a></li>
                <li><a href="#worship">Worship Songs</a></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Connect</h4>
              <ul className={styles.linkList}>
                <li><a href="#about">About</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#prayer">Prayer Wall</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Support</h4>
              <ul className={styles.linkList}>
                <li><a href="#merchandise">Merchandise</a></li>
                <li><a href="#donate">Donate</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
                <li><a href="#ministry">Ministry</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className={styles.socialSection}>
            <h4 className={styles.socialTitle}>Follow the Journey</h4>
            <div className={styles.socialIcons}>
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${link.title}`}
                  style={{'--hover-color': link.hoverColor}}
                >
                  <img
                    src={link.svgImg}
                    alt={link.title}
                    onError={(e) => {
                      console.error(`Failed to load ${link.title} icon:`, e.target.src);
                      e.target.style.display = "none";
                    }}
                  />
                  <span className={styles.socialLabel}>{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} TY BLACKE. All rights reserved.</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
