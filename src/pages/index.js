// pages/index.js
import styles from '../styles/Home.module.css';

const channels = [
  { title: 'About Me', link: '/mii', imageUrl: '/images/mii.png' },
  { title: 'YouTube', link: '/youtube', imageUrl: '/images/youtube.PNG' },
  { title: 'PittCSC', link: '/cs-club', imageUrl: '/images/Pitt_CSC_Logo.png' },
  { title: 'Teaching', link: '/teaching', imageUrl: '/images/steelhacks.JPG' }
  // Add more as needed
];

export default function Home() {
  return (
    <div className={styles.container}>
      {channels.map((channel, index) => (
        <a href={channel.link} key={index} className={styles.channel} style={{ backgroundImage: `url(${channel.imageUrl})` }}>
          <div className={styles.textOverlay}>
            {channel.title}
          </div>
        </a>
      ))}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerButton}>Wii</div>
          <div className={styles.footerButton}>SD</div>
        </div>
        <div className={styles.footerCenter}>
          <span className={styles.footerText}>Wii Menu</span>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerPointer}>🖱️</div>
        </div>
      </footer>
    </div>
  );
}
