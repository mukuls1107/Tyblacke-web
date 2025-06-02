import styles from "../Styles/Navbar.module.css";

const ImageBar = ({ items }) => {
  return (
    <div className={styles.right}>
      <div className={styles.rightNav}>
        {items.map((item, idx) => (
          <a
            href={`https://www.${item.title.toLowerCase()}.com/@tyblacke`}
            className={styles.socialIcon}
            key={idx}
            target="_blank"
            rel={item.url ? "noopener noreferrer" : ""}
            aria-label={`Follow on ${item.title}`}
          >
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
                console.log(`Successfully loaded ${item.title} icons`);
              }}
            />
            {item.txtEnabled ? <span>{item.title}</span> : ""}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ImageBar;
