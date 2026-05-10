import styles from "./styles/home.module.css";
import Header from "./Components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.grid}></div>

        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            CYBERSECURITY · IT AUDIT · COMPLIANCE
          </div>

          <h1 className={styles.title}>
            Securing Systems.
            <br />
            <span>Strengthening</span>
            <br />
            Controls.
            <br />
            <span>Enabling</span> Compliance.
          </h1>

          <p className={styles.description}>
            We help financial institutions, fintechs, and growing
            organizations strengthen governance, manage technology risk,
            and achieve regulatory and certification readiness.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Schedule a Consultation
            </button>

            <button className={styles.secondaryBtn}>
              Explore Services
            </button>
          </div>

        
        </div>
      </section>

      {/* STATS SECTION */}
      <section className={styles.stats}>
        <div className={styles.statCard}>
          <h2>50+</h2>
          <p>Organizations Served</p>
        </div>

        <div className={styles.statCard}>
          <h2>100+</h2>
          <p>Audit & Assessment Projects</p>
        </div>

        <div className={styles.statCard}>
          <h2>15+</h2>
          <p>ISO Certifications Supported</p>
        </div>

        <div className={styles.statCard}>
          <h2>10+</h2>
          <p>Years of Experience</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.about}>
        <div className={styles.left}>
          <p className={styles.smallTitle}>WHO WE ARE</p>

          <h2>
            Your Trusted Partner in
            <br />
            Cybersecurity, Audit &
            <br />
            Compliance
          </h2>

          <div className={styles.line}></div>

          <p>
            AMI-SecureCore Consult is a specialized cybersecurity,
            IT assurance, and compliance consulting firm headquartered
            in Ghana, serving clients across the financial sector and beyond.
          </p>

          <p>
            We provide end-to-end services spanning cybersecurity strategy,
            IT audit and assurance, ISO management systems, regulatory
            compliance, payment security, and managed compliance support.
          </p>

          <p>
            Our mission is simple: help organizations build secure,
            compliant, and resilient digital environments.
          </p>
        </div>

        <div className={styles.right}>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="about"
          />

          <div className={styles.card}>
            <h4>Certified & Experienced</h4>
            <p>CISA · ISO 27001 Lead Implementer & Auditor</p>
          </div>
        </div>
      </section>
    </div>
  );
}