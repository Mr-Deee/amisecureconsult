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
    </>
    </div>
  );
}