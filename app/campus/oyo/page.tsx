import React from 'react';
import styles from './style.module.css';
import UpcomingEvents from '@/sections/upcoming/UpcomingEvents';
import FeaturedSkills from '@/sections/featured/FeaturedSkills';

const OyoCampus: React.FC = () => {
   const featuredSkills = [
    {
      id: 'tailoring',
      name: 'Tailoring',
      description: 'Learn garment construction and clothing production for income or employment.',
      backgroundImage: '/images/skills/tailoring.jpg'
    },
    {
      id: 'catering',
      name: 'Catering & Food Service',
      description: 'Learn professional cooking and food preparation for events and business.',
      backgroundImage: '/images/skills/catering.jpg'
    },
    {
      id: 'hairdressing',
      name: 'Hair dressing',
      description: 'Professional training in hair care, styling, and salon management.',
      backgroundImage: '/images/skills/hairdressing.jpg'
    },
    {
      id: 'cosmetology',
      name: 'Cosmetology & Beauty',
      description: 'Professional training in hair, makeup, and skincare services.',
      backgroundImage: '/images/skills/cosmetology.jpg'
    },
    {
      id: 'soap-production',
      name: 'Soap and Air Freshener Production',
      description: 'Learn to produce quality soaps and air fresheners for business.',
      backgroundImage: '/images/skills/soap-production.jpg'
    },
    {
      id: 'web-design',
      name: 'Web Design',
      description: 'Master user interface and user experience design for websites.',
      backgroundImage: '/images/skills/web-design.jpg'
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Learn to build modern, responsive websites and web applications.',
      backgroundImage: '/images/skills/web-development.jpg'
    },
    {
      id: 'photography',
      name: 'Photography',
      description: 'Develop professional photography skills for events and business.',
      backgroundImage: '/images/skills/photography.jpg'
    },
    {
      id: 'graphics-design',
      name: 'Graphics Design',
      description: 'Create stunning visual content for print and digital media.',
      backgroundImage: '/images/skills/graphics-design.jpg'
    }
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Oyo Campus</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>About Oyo Campus</h2>
            <p className={styles.description}>
              Oyo Campus

              The Oyo campus of Pastor Chris Oyakhilome Skill Acquisition was established to serve individuals seeking practical skills, economic empowerment, and purpose-driven growth within the state. Oyo is home to a large population of youths and young adults with strong potential but limited access to structured, skill-based opportunities.

              Since its establishment, the Oyo campus has reached hundreds of participants, providing free training in Graphic Design, Tailoring, Bakery, Hair Dressing, and other vocational and digital skills that support self-reliance and financial independence.

              Beyond skills acquisition, participants are taught the Word of God and invited into church fellowship, where many continue to grow through discipleship and community engagement.

              The Oyo campus continues to stand as a center of transformation, equipping individuals with skills while nurturing purpose and character.
            </p>
          </div>
        </div>
      </section>

      <FeaturedSkills skills={featuredSkills} />

      <UpcomingEvents />
    </main>
  );
};

export default OyoCampus;