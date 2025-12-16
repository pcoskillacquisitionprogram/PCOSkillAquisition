import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import styles from './UpcomingEvents.module.css';

interface Event {
  title: string;
  date: string;
  location: string;
  description?: string;
  link: string;
}

const UpcomingEvents: React.FC = () => {
  const events: Event[] = [
    {
      title: "Digital Skills Orientation",
      date: "June 15, 2025",
      location: "Lagos",
      description: "Introductory session for new applicants",
      link: "#"
    },
    {
      title: "Fashion Design Workshop",
      date: "June 22, 2025",
      location: "Abuja",
      description: "Hands-on training session for fashion design participants",
      link: "#"
    },
    {
      title: "Web Development Bootcamp",
      date: "July 5, 2025",
      location: "Port Harcourt",
      description: "Intensive coding session for web development learners",
      link: "#"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Upcoming Events</h2>
          <p className={styles.subheading}>
            Scheduled activities and sessions from the foundation.
          </p>
        </div>

        <div className={styles.eventsList}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventItem}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              
              <div className={styles.eventMeta}>
                <span className={styles.metaItem}>
                  <Calendar className={styles.metaIcon} />
                  {event.date}
                </span>
                <span className={styles.metaDivider}>·</span>
                <span className={styles.metaItem}>
                  <MapPin className={styles.metaIcon} />
                  {event.location}
                </span>
              </div>

              {event.description && (
                <p className={styles.eventDescription}>{event.description}</p>
              )}

              <a href={event.link} className={styles.eventLink}>
                View details
              </a>
            </div>
          ))}
        </div>

        {/* <div className={styles.viewAllContainer}>
          <a href="#" className={styles.viewAllLink}>View all events</a>
        </div> */}
      </div>
    </section>
  );
};

export default UpcomingEvents;