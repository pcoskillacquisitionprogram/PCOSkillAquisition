import React from 'react';
import styles from './style.module.css';
import FeaturedSkills from '@/sections/featured/FeaturedSkills';
import UpcomingEvents from '@/sections/upcoming/UpcomingEvents';

const WarriCampus: React.FC = () => {
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
            <h1 className={styles.heroTitle}>Warri Campus</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>About Warri Campus</h2>
            <p className={styles.description}>
              Warri Campus

              The Warri campus of Pastor Chris Oyakhilome Skill Acquisition is a newly established initiative, created to extend practical empowerment and spiritual impact within the city. Though still in its early stages, the campus has already begun making meaningful progress.

              So far, we have reached over 300 individuals, providing free training in practical, income-generating skills such as Graphic Design, Music Production, Tailoring, Bakery, Hair Dressing, and other vocational disciplines designed to promote self-reliance.

              In addition to skills training, participants are introduced to the Word of God and connected to a growing faith community, laying the foundation for continued spiritual growth and discipleship.

              The Warri campus marks the start of a growing impact, empowering lives through skills while building purpose-driven individuals.
            </p>
          </div>
        </div>
      </section>
      <FeaturedSkills skills={featuredSkills} />

      <UpcomingEvents />
    </main>
  );
};

export default WarriCampus;