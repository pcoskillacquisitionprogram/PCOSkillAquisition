import React, { useState, useEffect, useRef } from 'react';
import styles from './AboutFoundation.module.css';

interface Stat {
  value: string;
  label: string;
  isNumber?: boolean;
}

const AboutFoundation: React.FC = () => {
  const [participantsCount, setParticipantsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { value: '2023', label: 'Founded' },
    { value: '5,000+', label: 'Participants', isNumber: true },
    { value: 'Nationwide', label: 'Reach' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const target = 5000;
    const duration = 2000;
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setParticipantsCount(target);
        clearInterval(timer);
      } else {
        setParticipantsCount(Math.floor(current));
      }
    }, 16);
  };

  return (
    <section id="about" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>About the Pastor Chris Oyakhilome skill aqusition program</h2>
          <p className={styles.subheading}>
            A brief overview of our mission and commitment to skill development.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.textColumn}>
            <p className={styles.paragraph}>
              Founded in 2023, Pastor Chris Oyakhilome Skill Acquisition was established in 
              response to a clear vision to demonstrate practical love by equipping 
              individuals with relevant, real‑world skills.
            </p>
            
            <p className={styles.paragraph}>
              Through free vocational and digital skill programs, the foundation 
              helps people become self‑reliant, purpose‑driven, and financially 
              independent.
            </p>
            
            <p className={styles.paragraph}>
              What began as a single vision has grown into a nationwide empowerment 
              movement, positively impacting individuals and communities.
            </p>

            <div className={styles.statsContainer}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statValue}>
                    {stat.isNumber 
                      ? `${participantsCount.toLocaleString()}+`
                      : stat.value
                    }
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imagePlaceholder}>
              <img 
                src="/image6.jpg" 
                alt="Foundation team and participants" 
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFoundation;