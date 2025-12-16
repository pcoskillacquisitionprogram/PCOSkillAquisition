import React from 'react';
import styles from './style.module.css';
import FeaturedSkills from '@/sections/featured/FeaturedSkills';
import UpcomingEvents from '@/sections/upcoming/UpcomingEvents';

const SecondaryCampus: React.FC = () => {
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
            <h1 className={styles.heroTitle}>Secondary School Campus</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>About Secondary School Campus</h2>
            <p className={styles.description}>
              Pastor Chris Oyakhilome Skill Acquisition recently carried out a Secondary Schools Skill Acquisition Campaign, reaching students across over four secondary schools at the same time.

              Through this initiative, more than 500 students received hands-on exposure to practical skills such as Catering, Makeup, Soap Making, and Hair Styling, equipping them with early vocational knowledge and confidence for the future.

              This campaign reflects our strong commitment to expanding skill acquisition into schools and communities, empowering young minds early and laying the foundation for a productive, self-reliant generation.
            </p>
          </div>
        </div>
      </section>

      <FeaturedSkills skills={featuredSkills} />

      <UpcomingEvents />
    </main>
  );
};

export default SecondaryCampus;