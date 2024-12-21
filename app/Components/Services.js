import styles from '../styles/home.module.css';

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Services</h2>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>23 Engineers</h3>
          <p>Laser Beam Dedicated Team</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>15 Projects</h3>
          <p>Human Blockchain</p>
        </div>
        {/* Add more service cards here */}
      </div>
    </section>
  );
}
