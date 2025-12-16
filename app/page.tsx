"use client";

import styles from './homepage.module.css';
import { useEffect } from 'react';
import Hero from '@/sections/hero/hero';
import FeaturedSkills from '@/sections/featured/FeaturedSkills';
import HowItWorksSection from '@/sections/howItWorks/HowItWorksSection';
import AboutFoundation from '@/sections/about/AboutFoundation';
import Testimonials from '@/sections/testimonials/Testimonials';
import UpcomingEvents from '@/sections/upcoming/UpcomingEvents';

export default function Home() {
  useEffect(() => {
    const section = document.querySelector(`.${styles.topSection}`);
    if (section) section.classList.add(styles.fadeIn);

    const hash = window.location.hash;
    if (hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });

      const scrollToSection = () => {
        const element = document.querySelector(hash) as HTMLElement;
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      };

      requestAnimationFrame(() => {
        setTimeout(scrollToSection, 100);
      });
    }
  }, []);

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
    <main>
      <Hero />
      <FeaturedSkills skills={featuredSkills} />
      <HowItWorksSection />
      <AboutFoundation />
      <Testimonials />
      <UpcomingEvents />
    </main>
  );
}