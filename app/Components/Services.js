import styles from '../styles/home.module.css';
import Image from 'next/image';
import logo from '../images/logo.png';

export default function Services() {
  const service = [
    { 
      title: 'Swift', 
      description: 'We conduct SWIFT (Society for Worldwide Interbank Financial Telecommunication) audits, focusing on ensuring compliance with the SWIFT Customer Security Programme (CSP) and identifying vulnerabilities in financial messaging systems.', 
      image: logo 
    },
    { 
      title: 'AML Audit', 
      description: 'For Anti-Money Laundering (AML) audits, we focus on ensuring compliance within the online environment. Our tailored framework audits the AML aspects of a website to ensure it adheres to legal and security standards.', 
      image: logo 
    },
    { 
      title: 'ISO Audits', 
      description: 'We conduct ISO audits to ensure your organization complies with international standards for various aspects, including quality management, information security, and environmental management.', 
      image: logo 
    },
    { 
      title: 'PCI DSS Audits', 
      description: 'Our team specializes in auditing Payment Card Industry Data Security Standard (PCI DSS) compliance, focusing on protecting cardholder data and securing payment systems.', 
      image: logo 
    },
    { 
      title: 'Applications Control', 
      description: 'We provide audits focused on controlling and securing applications, ensuring their alignment with business needs and compliance requirements.', 
      image: logo 
    },
    { 
      title: 'Information Security', 
      description: 'We offer comprehensive audits on information security, focusing on safeguarding data and protecting against cyber threats, using frameworks such as NIST and ISO 27001.', 
      image: logo 
    },
    { 
      title: 'Network Security', 
      description: 'We ensure robust and secure infrastructures through audits that assess vulnerabilities in your network and recommend measures to protect against external and internal threats.', 
      image: logo 
    },
    { 
      title: 'Compliance Audits', 
      description: 'Our compliance audits ensure your organization adheres to local and international standards, such as GDPR, HIPAA, and industry-specific regulations, mitigating legal and financial risks.', 
      image: logo 
    },
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
            <p>                  </p>
            <div className={styles.cardHoverDetails}>
              <p> {service.description}!</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
