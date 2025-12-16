import React from 'react';
import styles from './style.module.css';
import UpcomingEvents from '@/sections/upcoming/UpcomingEvents';
import FeaturedSkills from '@/sections/featured/FeaturedSkills';

const IlasaCampus: React.FC = () => {
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
            <h1 className={styles.heroTitle}>Ilasa Campus</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>About Ilasa Campus</h2>
            <p className={styles.description}>
              Ilasa is a community in Lagos characterized by a high population of residents living below average living conditions, with limited access to sustainable employment opportunities and skill-based education. Many individuals in the area possess great potential but lack the resources and exposure needed to build independent and productive lives.
              Pastor Chris Oyakhilome Skill Acquisition emerged in Ilasa as a timely response to these challenges, bringing hope, opportunity, and practical empowerment to the community. Since establishing our Ilasa campus in 2023, we have consistently delivered free, hands-on training programs designed to equip individuals with relevant, income-generating skills.
              To date, we have reached over 3,237 individuals, training them in practical skills such as Graphic Design, Hairdressing, Baking, Tailoring, and other vocational and digital disciplines that enable self-reliance and financial independence.
              Beyond skill acquisition, we believe in holistic transformation. Participants are taught the Word of God, introduced to the message of salvation, and warmly invited to church. A significant number have remained connected, becoming active members of the church community where they are nurtured, discipled, and guided in their spiritual growth.
              The Ilasa campus stands as a testament to what practical love can achieve, transforming lives, restoring dignity, and raising individuals who are skilled, purpose-driven, and spiritually grounded.
            </p>
          </div>
        </div>
      </section>

      <FeaturedSkills skills={featuredSkills} />

      <UpcomingEvents />
    </main>
  );
};

export default IlasaCampus;