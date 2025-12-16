'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useApplyModal } from '../context/ApplyModalContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useApplyModal();
  const pathname = usePathname();

  const darkNavPages = ['/picture-gallery'];
  const isDarkNav = pathname ? darkNavPages.includes(pathname) : false;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside the dropdown and not on the dropdown button
      if (!target.closest('[data-dropdown]')) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isDarkNav ? styles.darkNav : ''}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/logo.png"
              alt="PCO Skills Logo"
              width={30}
              height={30}
              className={styles.logo}
            />
            <span className={styles.logoText}>PCO Skill Acquisition</span>
          </div>
        </Link>
        
        <button
          className={styles.toggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        
        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <li>
            <Link href="/" className={styles.link} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className={styles.link} onClick={handleLinkClick}>
              Our Vision
            </Link>
          </li>
          <li>
            <Link href="/picture-gallery" className={styles.link} onClick={handleLinkClick}>
              Picture Gallery
            </Link>
          </li>
          <li className={styles.dropdown} data-dropdown>
            <button
              className={styles.dropdownButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              data-dropdown
            >
              Campus
              <svg
                className={`${styles.chevron} ${isDropdownOpen ? styles.chevronOpen : ''}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ul className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownMenuOpen : ''}`} data-dropdown>
              <li>
                <Link href="/campus/apapa" className={styles.dropdownLink} onClick={handleLinkClick}>
                  Apapa Campus
                </Link>
              </li>
              <li>
                <Link href="/campus/ilasa" className={styles.dropdownLink} onClick={handleLinkClick}>
                  Ilasa Campus
                </Link>
              </li>
              <li>
                <Link href="/campus/kano" className={styles.dropdownLink} onClick={handleLinkClick}>
                  Kano Campus
                </Link>
              </li>
              <li>
                <Link href="/campus/warri" className={styles.dropdownLink} onClick={handleLinkClick}>
                  Warri Campus
                </Link>
              </li>
              <li>
                <Link href="/campus/oyo" className={styles.dropdownLink} onClick={handleLinkClick}>
                  Oyo Campus
                </Link>
              </li>
              <li>
                <Link href="/campus/secondary-school" className={styles.dropdownLink} onClick={handleLinkClick}>
                  Secondary School Campuses
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact-us" className={styles.link} onClick={handleLinkClick}>
              Contact Us
            </Link>
          </li>
          <li className={styles.ctaItem}>
            <button
              onClick={() => {
                openModal();
                handleLinkClick();
              }}
              className={styles.ctaButton}
            >
              Apply Now
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}