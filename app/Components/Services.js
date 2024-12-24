"use client";

import { useState } from 'react';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import logo from '../images/logo.png';

export default function Services() {
  const services = {
    audits: [
      {
        title: 'PCI DSS Audits',
        description: 'Our team specializes in auditing Payment Card Industry Data Security Standard (PCI DSS) compliance, focusing on protecting cardholder data and securing payment systems.',
        image: logo,
      },
      {
        title: 'ISO Audit',
        description: 'We conduct ISO audits to ensure your organization complies with international standards for quality management, information security, and environmental management.',
        image: logo,
      },
      {
        title: 'IT General Control Audit',
        description: 'We assess IT general controls to ensure the reliability of your IT environment, covering areas such as change management, security, and data backup.',
        image: logo,
      },
      {
        title: 'Application Control Audits',
        description: 'We provide audits focused on controlling and securing applications, ensuring their alignment with business needs and compliance requirements.',
        image: logo,
      },
      {
        title: 'Compliance Audits',
        description: 'Our compliance audits ensure your organization adheres to local and international standards, such as GDPR, HIPAA, and industry-specific regulations, mitigating legal and financial risks.',
        image: logo,
      },
      {
        title: 'AML Audits',
        description: 'For Anti-Money Laundering (AML) audits, we focus on ensuring compliance within the online environment. Our tailored framework audits the AML aspects of a website to ensure it adheres to legal and security standards.',
        image: logo,
      },
      {
        title: 'SWIFT CSP Audits',
        description: 'We conduct SWIFT Customer Security Programme (CSP) audits, focusing on compliance and identifying vulnerabilities in financial messaging systems.',
        image: logo,
      },
    ],
    implementations: [
      {
        title: 'ISO Implementation',
        description: 'We assist organizations in implementing ISO standards, ensuring compliance with international best practices for quality, security, and environmental management.',
        image: logo,
      },
      {
        title: 'PCI DSS Implementation',
        description: 'Our experts help businesses implement PCI DSS standards to secure cardholder data and payment systems.',
        image: logo,
      },
      {
        title: 'IT Enterprise Architecture Implementation',
        description: 'We design and implement IT enterprise architectures to align technology infrastructure with business goals.',
        image: logo,
      },
      {
        title: 'SWIFT CSP Implementation',
        description: 'We provide end-to-end support for implementing the SWIFT Customer Security Programme, ensuring compliance and reducing cyber risks.',
        image: logo,
      },
      {
        title: 'Cyber and Information Security Risk Assessment and Management',
        description: 'We conduct comprehensive assessments and implement risk management strategies to protect against cyber threats and safeguard information.',
        image: logo,
      },
    ],
  };

  const [activeTab, setActiveTab] = useState('audits');

  return (
    <section className={styles.services}>
      <div className={styles.servicetitle}>
        <h2>Pick Your Service</h2>
        <h1>choose from the two categories below </h1>
      </div>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={activeTab === 'audits' ? styles.activeTab : ''}
          onClick={() => setActiveTab('audits')}
        >
          Internal Audits
        </button>
        <button
          className={activeTab === 'implementations' ? styles.activeTab : ''}
          onClick={() => setActiveTab('implementations')}
        >
          Implementations
        </button>
      </div>
      {/* Services */}
      <div className={styles.servicesGrid}>
        {services[activeTab].map((service, index) => (
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
            <div className={styles.cardHoverDetails}>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
