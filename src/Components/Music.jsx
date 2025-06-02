import React from "react";
import styles from "../Styles/Music.module.css";
import "../Styles/Utility.css";

const Music = () => {
  const featuredSongs = [
    {
      title: "Manna for the Soul",
      description:
        "To equip and empower believers to be fully dependent on the Lord in times of strife and joy and encourage them to think biblically in their day-to-day lives.",
      image: "/mannaforthesoul.jpeg",
      duration: "8 Eps",
      featured: true,
    },
    {
      title: "Hope on the Air",
      description:
        "The mission is to inspire others to be hopeful, courageous, and a light in a dark world. By sharing our personal experiences and diving into Scripture, we seek to reveal what true, lasting hope looks like.",
      image: "/hopeonair.jpeg",
      duration: "11 Eps",
    },
  ];

  return (
    <section className={styles.music} id="music">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>Latest Podcast</div>
          <h2 className={styles.title}>Songs That Touch Hearts</h2>
          <p className={styles.subtitle}>
            Discover TY BLACKE's latest releases - contemporary podcasts that
            inspires worship and draws hearts closer to God.
          </p>
        </div>

        <div className={styles.musicGrid}>
          {featuredSongs.map((song, index) => (
            <div
              key={index}
              className={`${styles.musicCard} ${
                song.featured ? styles.featured : ""
              }`}
            >
              {" "}
              <div className={styles.imageContainer}>
                <div className={styles.albumCover}>
                  <div className={styles.placeholder}>
                    <img
                      src={song.image}
                      alt={song.title}
                      className={styles.albumImage}
                    />
                  </div>
                </div>
                <div className={styles.playOverlay}>
                  <button className={styles.playButton}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.68L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={styles.songInfo}>
                <h3 className={styles.songTitle}>{song.title}</h3>
                <p className={styles.songDescription}>{song.description}</p>
                <div className={styles.songMeta}>
                  <span className={styles.duration}>{song.duration}</span>{" "}
                  <div className={styles.actions}>
                    <button
                      className={styles.actionButton}
                      title="Listen on Spotify"
                    >
                      <img src="/icons/spotify.svg" alt="Spotify" />
                    </button>
                    <button
                      className={styles.actionButton}
                      title="Listen on Apple Music"
                    >
                      <img src="/icons/apple-music.svg" alt="Apple Music" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.platforms}>
          <h3 className={styles.platformsTitle}>
            Listen on Your Favorite Platform
          </h3>
          <div className={styles.platformLinks}>
            <a
              href="https://open.spotify.com/show/64AhuKWtC7ARHzasoIemtK"
              className={styles.platformLink}
              data-platform="spotify"
            >
              <img src="/icons/spotify.svg" alt="Spotify" />
              <span>Spotify Music</span>
            </a>
            <a
              href="https://youtube.com/@tyblacke"
              className={styles.platformLink}
              data-platform="youtube"
            >
              <img src="/icons/youtube.svg" alt="YouTube Music" />
              <span>YouTube Music</span>
            </a>
          </div>
        </div>

        <div className={styles.cta}>
          <a href="#newsletter" className={styles.ctaButton}>
            Get Notified of New Releases
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;
