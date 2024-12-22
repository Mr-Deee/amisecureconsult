import styles from '../styles/home.module.css';
import Image from 'next/image';
import logo from '../images/logo.png';

export default function Services() {
  const service = [
    { title: 'Swift', description: 'Laser Beam Dedicated Team', image:logo  },
    { title: 'AML Audit', description: 'Laser Beam Dedicated Team', image: logo},
    { title: 'ISO Audits', description: 'Laser Beam Dedicated Team', image: logo },
    { title: 'PCI DSS Audits', description: 'Laser Beam Dedicated Team', image: logo },
    { title: 'Applications Control', description: 'Laser Beam Dedicated Team', image: logo },
    { title: 'Information Security', description: 'Human Blockchain', image: logo },
    { title: 'Network Security', description: 'Ensuring robust and secure infrastructures', image: logo},
    { title: 'Compliance Audits', description: 'Aligning with global standards', image: logo},
  ];

  return (
    <section className={styles.services}>

      <div className={styles.servicetitle}>
        <h2>Pick Your Service</h2>
      </div>
      <div className={styles.servicesGrid}>
        {service.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.cardImageContainer}>
              <Image
                src={service.image}
                alt={`${service.title} image`}
                className={styles.cardImage}
                width={100}
                height={100}
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className={styles.cardHoverDetails}>
              <p>Learn more about {service.title}!</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
