import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

interface Testimonial {
  quote: string;
  name: string;
  skill: string;
  image?: string;
}

const Testimonials: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "I learned professional tailoring skills and now take custom orders weekly.",
      name: "Chinedu M.",
      skill: "Tailoring",
    },
    {
      quote: "The catering training helped me start cooking for events and small parties.",
      name: "Funke A.",
      skill: "Catering & Food Service",
    },
    {
      quote: "From zero experience to confidently styling clients’ hair—this program works.",
      name: "Blessing O.",
      skill: "Hair Dressing",
    },
    {
      quote: "I now offer makeup and skincare services and earn consistently every month.",
      name: "Esther K.",
      skill: "Cosmetology & Beauty",
    },
    {
      quote: "I learned how to make quality liquid soap and air fresheners for sale.",
      name: "Samuel T.",
      skill: "Soap & Air Freshener Production",
    },
    {
      quote: "The web design classes helped me build clean websites for local businesses.",
      name: "Daniel A.",
      skill: "Web Design",
    },
    {
      quote: "I now understand frontend and backend basics and take freelance jobs online.",
      name: "Grace E.",
      skill: "Web Development",
    },
    {
      quote: "The photography training taught me lighting, editing, and client handling.",
      name: "Joshua P.",
      skill: "Photography",
    },
    {
      quote: "I can now design logos and flyers confidently for churches and startups.",
      name: "Aisha O.",
      skill: "Graphics Design",
    },
    {
      quote: "This program gave me practical skills I could use immediately.",
      name: "Michael U.",
      skill: "Tailoring",
    },
    {
      quote: "I started selling homemade food packs after completing the catering class.",
      name: "Rashidat S.",
      skill: "Catering & Food Service",
    },
    {
      quote: "I opened a small salon and already have returning customers.",
      name: "Comfort N.",
      skill: "Hair Dressing",
    },
    {
      quote: "The beauty training improved my confidence and professionalism with clients.",
      name: "Peace L.",
      skill: "Cosmetology & Beauty",
    },
    {
      quote: "I now produce and brand my own cleaning products for local shops.",
      name: "Ibrahim Y.",
      skill: "Soap & Air Freshener Production",
    },
    {
      quote: "I can design responsive websites and understand user experience properly now.",
      name: "Victor D.",
      skill: "Web Design",
    },
    {
      quote: "This program introduced me to real-world web development practices.",
      name: "Sandra F.",
      skill: "Web Development",
    },
    {
      quote: "I now shoot events and edit photos professionally.",
      name: "Kelvin R.",
      skill: "Photography",
    },
    {
      quote: "Learning graphic design here opened doors to freelance opportunities.",
      name: "Mary J.",
      skill: "Graphics Design",
    },
    {
      quote: "The instructors were clear, patient, and very practical.",
      name: "Oluwaseun B.",
      skill: "Catering & Food Service",
    },
    {
      quote: "This skill acquisition program truly empowers Nigerians to be self-reliant.",
      name: "Henry C.",
      skill: "Web Development",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const container = document.getElementById('testimonials-scroll');
        if (!container) return prev;

        const maxScroll = container.scrollHeight - container.clientHeight;
        const newPosition = prev + 1;

        if (newPosition >= maxScroll) {
          return 0;
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = document.getElementById('testimonials-scroll');
    if (container) {
      container.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>What Participants Are Saying</h2>
          <p className={styles.subheading}>
            Experiences shared by individuals who participated in our programs.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.fadeTop}></div>

          <div id="testimonials-scroll" className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className={styles.testimonialItem}>
                  <div className={styles.testimonialContent}>
                    <div className={styles.quoteIcon}>"</div>
                    <p className={styles.quote}>{testimonial.quote}</p>
                  </div>

                  <div className={styles.authorSection}>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.skill}>{testimonial.skill}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.fadeBottom}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;