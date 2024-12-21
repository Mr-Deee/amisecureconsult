import styles from '../styles/home.module.css';
import logo from '../images/illustration.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1></h1>
        <p></p>
      </div>
      <div className={styles.heroImage}>
      <Image src={logo} alt="Logo" width={500} height={400} />

      </div>
    </section>
  );
}
