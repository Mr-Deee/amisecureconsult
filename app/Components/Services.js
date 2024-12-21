import styles from '../styles/home.module.css';

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Services</h2>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Internal Audits</h3>
          <p>Laser Beam Dedicated Team</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Information Security Implementation</h3>
          <p>Human Blockchain</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Network Security</h3>
          <p>Ensuring robust and secure infrastructures</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Compliance Audits</h3>
          <p>Aligning with global standards</p>
        </div>
      </div>
    </section>
  );
}
