"use client";

import styles from '../styles/home.module.css';
import logo from '../images/logo.png';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Logo" width={200} height={70} priority />
      </div>

      {/* Navigation */}
      <nav className={`${styles.navbar} ${isMenuOpen ? styles.navOpen : ''}`}>
        <a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#contactus" onClick={() => setIsMenuOpen(false)}>Contacts</a>
      </nav>

      {/* Hamburger Menu */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
    </header>
  );
}
