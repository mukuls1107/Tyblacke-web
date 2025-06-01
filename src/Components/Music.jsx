import React from "react";
import styles from "../Styles/Music.module.css";
import "../Styles/Utility.css";

const Music = () => {
  const featuredSongs = [
    {
      title: "Grace Abounds",
      description: "A powerful anthem of God's unending grace",
      image: "/assets/album1.jpg",
      duration: "4:32",
      featured: true
    },
    {
      title: "Faithful One",
      description: "Worship song celebrating God's faithfulness",
      image: "/assets/album2.jpg",
      duration: "3:45"
    },
    {
      title: "New Creation",
      description: "A song of transformation and renewal",
      image: "/assets/album3.jpg",
      duration: "4:12"
    },
    {
      title: "Heaven's Light",
      description: "Contemporary worship with gospel influences",
      image: "/assets/album4.jpg",
      duration: "5:01"
    }
  ];

  return (
    <section className={styles.music} id="music">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>Latest Music</div>
          <h2 className={styles.title}>Songs That Touch Hearts</h2>
          <p className={styles.subtitle}>
            Discover TY BLACKE's latest releases - contemporary Christian music 
            that inspires worship and draws hearts closer to God.
          </p>
        </div>

        <div className={styles.musicGrid}>
          {featuredSongs.map((song, index) => (
            <div 
              key={index} 
              className={`${styles.musicCard} ${song.featured ? styles.featured : ''}`}
            >
              <div className={styles.imageContainer}>
                <div className={styles.albumCover}>
                  <div className={styles.placeholder}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.playOverlay}>
                  <button className={styles.playButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.68L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className={styles.songInfo}>
                <h3 className={styles.songTitle}>{song.title}</h3>
                <p className={styles.songDescription}>{song.description}</p>
                <div className={styles.songMeta}>
                  <span className={styles.duration}>{song.duration}</span>
                  <div className={styles.actions}>
                    <button className={styles.actionButton}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                    </button>
                    <button className={styles.actionButton}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.platforms}>
          <h3 className={styles.platformsTitle}>Listen on Your Favorite Platform</h3>
          <div className={styles.platformLinks}>
            <a href="#" className={styles.platformLink} data-platform="spotify">
              <img src="/icons/spotify.svg" alt="Spotify" />
              <span>Spotify Music</span>
            </a>
            <a href="#" className={styles.platformLink} data-platform="youtube">
              <img src="/icons/youtube.svg" alt="YouTube Music" />
              <span>YouTube Music</span>
            </a>
            <a href="#" className={styles.platformLink} data-platform="soundcloud">
              <img src="/icons/soundcloud.svg" alt="SoundCloud" />
              <span>SoundCloud</span>
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
