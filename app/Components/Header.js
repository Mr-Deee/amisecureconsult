import styles from '../styles/home.module.css';
import logo from '../images/logo.png';
import Image from 'next/image';
export default function Header() {
  return (
    <header className={styles.header}>
            {/* Backdrop */}
            <div className={styles.heroBackdrop}></div>
            <Image src={logo} alt="Logo" width={200} height={400} />

      {/* <div className={styles.logo}>Ami-Secure Consult</div> */}
      <nav className={styles.navbar}>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Team</a>
        <a href="#">Blog</a>
        <a href="#">Contacts</a>
      </nav>
    </header>
  );
}
