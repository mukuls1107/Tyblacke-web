import React from "react";
import styles from "../Styles/Navbar.module.css";
import "../Styles/Utility.css";

const myData = [
  { svgImg: "/icons/instagram.svg", title: "Instagram" },
  { svgImg: "/icons/spotify.svg", title: "Spotify" },
  { svgImg: "/icons/youtube.svg", title: "Youtube" },
  { svgImg: "/icons/soundcloud.svg", title: "Soundcloud" },
  { svgImg: "/icons/twitter.svg", title: "Twitter" },
];

const Navbar = () => {
  return (
    <div className="container">
      <div className={styles.box}>

        
        <div className={styles.left}>
          <div className={styles.leftNav}>
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Prayer Wall</p>
            <p>Merchandise</p>
          </div>
        </div>

        <div className={styles.image}></div>

        <ImageBar items={myData} />
      </div>
    </div>
  );
};

const ImageBar = ({ items }) => {
  return (
    <div className={styles.right}>
      <div className={styles.rightNav}>
        {items.map((item, idx) => (
          <div className={styles.socialIcon} key={idx}>
            <img
              src={item.svgImg}
              alt={item.title}
              onError={(e) => {
                console.error(
                  `Failed to load ${item.title} icon:`,
                  e.target.src
                );
                e.target.style.display = "none";
              }}
              onLoad={() => {
                console.log(`Successfully loaded ${item.title} icon`);
              }}
            />
            {/* <span>{item.title}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
