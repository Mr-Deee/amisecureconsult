import styles from '../styles/home.module.css';
import logo from '../images/IMG_0288-removebg-preview.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Empowering Businesses with <span className={styles.highlight}>Secure Solutions</span>
        </h1>
        <p className={styles.heroDescription}>
          Tailored IT, Cybersecurity, and Audit Services for the Digital Age
        </p>
        <button className={styles.buttonExplore}>Explore</button>
      </div>
      <div className={styles.heroImage}>
        <Image src={logo} alt="Logo" width={600} height={600} priority />
      </div>
    </section>
  );
}
