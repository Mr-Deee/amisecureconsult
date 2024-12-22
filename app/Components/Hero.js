import styles from '../styles/home.module.css';
import logo from '../images/IMG_0288-removebg-preview.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      
      <div className={styles.heroContent}>
        <h1>Empowering Businesses with </h1>
          <h1>Secure Solutions</h1>
        <p>Tailored IT, Cybersecurity, and Audit  ß Services for the Digital Age</p>

        <button className={styles.buttonexplore}>Explore</button>
        </div>

      <div className={styles.heroImage}>
      <Image src={logo} alt="Logo" width={600} height={600} />

      </div>
    </section>
  );
}
