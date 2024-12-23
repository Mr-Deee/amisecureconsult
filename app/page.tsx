import Image from 'next/image';
import styles from './styles/home.module.css';
import Head from 'next/head';
import Header from './Components/Header';
import Contactus from './Components/Contactus';

import Hero from './Components/Hero';
import Services from './Components/Services';


export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>amiconsult</title>
        <meta name="description" content="Amplify your blockchain team" /> */}
        <>
           
      <Header />
      <main>
        <section id="hero">
          <Hero/>
        </section>
        <section id="services">
          <Services/>
        </section>
        
        <section id="contactus">
          <Contactus/>
        </section>
        
        {/* <section id="portfolio">
          <Portfolio />
        </section> */}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; {new Date().getFullYear()} AMI Consult. All rights reserved.</p>
          <p>
            <a href="/privacy-policy">Privacy Policy</a> |{' '}
            <a href="/terms-of-service">Terms of Service</a>
          </p>
          {/* <p>Follow us: 
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </p> */}
        </div>
      </footer>
    </>
    </div>
  );
}