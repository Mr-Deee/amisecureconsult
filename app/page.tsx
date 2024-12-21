import Image from 'next/image';
import styles from './styles/home.module.css';
import Head from 'next/head';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';


export default function Home() {
  return (
    <div>
      <Head>
        <title>amiconsult</title>
        <meta name="description" content="Amplify your blockchain team" />
      </Head>
      <Header />
      <Hero />
      <Services />
      {/* <Portfolio /> */}
    </div>
  );
}