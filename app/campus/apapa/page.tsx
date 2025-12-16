import React from 'react';
import styles from './style.module.css';
import UpcomingEvents from '@/sections/upcoming/UpcomingEvents';
import FeaturedSkills from '@/sections/featured/FeaturedSkills';

const ApapaCampus: React.FC = () => {
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
            <h1 className={styles.heroTitle}>Apapa Campus</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>About Apapa Campus</h2>
            <p className={styles.description}>
              Apapa is a well-known community in Lagos with a diverse population, where many residents, particularly youths and women, face economic limitations, underemployment, and limited access to practical skill training despite living within a commercial hub.
              Pastor Chris Oyakhilome Skill Acquisition established its Apapa campus as a strategic response to these realities, bringing structured empowerment and opportunity directly into the community. Since our launch in 2023, the campus has served as a center of transformation, providing free, hands-on training that equips individuals with market-relevant and income-generating skills.
              From inception to date, the Apapa campus has empowered over 3,200 individuals, training participants in skills such as Graphic Design, Hair Dressing, Bakery, Tailoring, and other vocational and digital programs designed to promote self-reliance and economic stability.
              In addition to skills training, we are committed to holistic development. Participants are taught the Word of God, introduced to the gospel, and invited into church fellowship. A number of those trained have remained connected, becoming active members of the church and undergoing intentional discipleship that supports both their spiritual and personal growth.
              The Apapa campus continues to stand as a powerful expression of practical love, equipping individuals with skills, restoring hope, and raising purpose-driven men and women who are empowered to impact their families and communities.
            </p>
          </div>
        </div>
      </section>

      <FeaturedSkills skills={featuredSkills} />

      <UpcomingEvents />
    </main>
  );
};

export default ApapaCampus;