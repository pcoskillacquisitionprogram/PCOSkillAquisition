'use client';

import { useState, useEffect } from 'react';
import { useApplyModal } from '@/app/context/ApplyModalContext';
import styles from './FeaturedSkills.module.css';

interface Skill {
  id: string;
  name: string;
  description: string;
  backgroundImage: string;
}

interface FeaturedSkillsProps {
  skills: Skill[];
}

export default function FeaturedSkills({ skills }: FeaturedSkillsProps) {
  const { openModal } = useApplyModal();
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayedSkills = isMobile ? skills.slice(0, 4) : skills.slice(0, 6);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Available Skill Training Programs</h2>
          <p className={styles.subtext}>
            Select a skill to begin your application for training.
          </p>
        </div>

        <div className={styles.grid}>
          {displayedSkills.map((skill) => (
            <article
              key={skill.id}
              className={styles.card}
              style={{ backgroundImage: `url(${skill.backgroundImage})` }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.skillName}>{skill.name}</h3>

                <p className={styles.description}>{skill.description}</p>

                <button
                  onClick={() => openModal(skill.name)}
                  className={styles.cta}
                >
                  Apply Now
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <button onClick={() => setShowAllSkills(true)} className={styles.viewAll}>
            View all skills →
          </button>
        </div>
      </div>

      {showAllSkills && (
        <div className={styles.modalOverlay} onClick={() => setShowAllSkills(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>All Skills</h2>
              <button
                className={styles.closeButton}
                onClick={() => setShowAllSkills(false)}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className={styles.modalGrid}>
              {skills.map((skill) => (
                <article
                  key={skill.id}
                  className={styles.card}
                  style={{ backgroundImage: `url(${skill.backgroundImage})` }}
                >
                  <div className={styles.cardContent}>
                    <h3 className={styles.skillName}>{skill.name}</h3>

                    <p className={styles.description}>{skill.description}</p>

                    <button
                      onClick={() => {
                        openModal(skill.name);
                        setShowAllSkills(false);
                      }}
                      className={styles.cta}
                    >
                      Apply Now
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}