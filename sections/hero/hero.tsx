'use client';

import React from 'react';
import Link from 'next/link';
import { useApplyModal } from '@/app/context/ApplyModalContext';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const { openModal } = useApplyModal();
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        {/* Background image set via CSS */}
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Empowering Youths with Skills for Independence and Impact
          </h1>

          <p className={styles.subtext}>
            Pastor Chris Oyakhilome Skill Acquisition is an initiative birthed by Pastor Chris Oyakhilome to equip youths with free, practical skills that promote self-reliance, productivity, and positive contribution to society.
          </p>

          <div className={styles.ctaGroup}>
            <button onClick={() => openModal()} className={styles.primaryCta}>
              Apply Now
            </button>

            <Link href="#how-it-works" className={styles.secondaryCta}>
              How It Works
            </Link>
          </div>

          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Trusted by 1,000+ applicants</span>
            </div>
            <div className={styles.trustItem}>
              <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Offline training • Verified instructors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;