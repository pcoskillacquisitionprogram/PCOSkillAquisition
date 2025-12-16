import React from 'react';
import { FileText, UserCheck, GraduationCap } from 'lucide-react';
import styles from './HowItWorks.module.css';
import { useApplyModal } from '@/app/context/ApplyModalContext';

interface Step {
  number: number;
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const HowItWorksSection: React.FC = () => {
  const { openModal } = useApplyModal();
  const steps: Step[] = [
    {
      number: 1,
      title: 'Submit Your Application',
      description: [
        'Fill out the online form',
      ],
      icon: <FileText className={styles.icon} />
    },
    {
      number: 2,
      title: 'Review & Matching',
      description: [
        'Applications are reviewed by the foundation',
      ],
      icon: <UserCheck className={styles.icon} />
    },
    {
      number: 3,
      title: 'Training Begins',
      description: [
        'You are contacted with next steps',
      ],
      icon: <GraduationCap className={styles.icon} />
    }
  ];

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>How It Works</h2>
          <p className={styles.subheading}>
            Our process is simple, transparent, and handled offline after you apply.
          </p>
        </div>

        {/* Mobile: Icons in a row at the top */}
        <div className={styles.mobileIconsRow}>
          {steps.map((step) => (
            <div key={step.number} className={styles.mobileIconWrapper}>
              <div className={styles.iconContainer}>
                {step.icon}
                <div className={styles.stepNumber}>{step.number}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.stepWrapper}>
              {index < steps.length - 1 && (
                <div className={styles.connector} />
              )}

              <div className={styles.stepCard}>
                <div className={styles.iconContainer}>
                  {step.icon}
                  <div className={styles.stepNumber}>{step.number}</div>
                </div>

                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <ul className={styles.descriptionList}>
                    {step.description.map((line, i) => (
                      <li key={i} className={styles.descriptionItem}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.reassurance}>
          You will be contacted within 48–72 hours after your application is reviewed.
        </p>

        <div className={styles.ctaContainer}>
          <button onClick={() => openModal()} className={styles.ctaButton}>Start Application</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;