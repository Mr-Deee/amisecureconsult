import styles from '../styles/home.module.css';
import logo from '../images/illustration.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      
      <div className={styles.heroContent}>
        <h1>Empowering Businesses with </h1>
          <h1>Secure Solutions

</h1>
        <p>Tailored IT, Cybersecurity, and Auditß Services for the Digital Age</p>
      </div>
      <div className={styles.heroImage}>
      <Image src={logo} alt="Logo" width={500} height={400} />

      </div>
    </section>
  );
}
