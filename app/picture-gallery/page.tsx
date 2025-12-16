'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './style.module.css';

interface GalleryImage {
  id: number;
  src: string;
  category: 'training' | 'events' | 'outreach';
  alt: string;
}

type FilterCategory = 'all' | 'training' | 'events' | 'outreach';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const images: GalleryImage[] = Array.from({ length: 67 }, (_, i) => {
    const id = i + 1;
    const categories: Array<'training' | 'events' | 'outreach'> = ['training', 'events', 'outreach'];
    const category = categories[i % 3];
    
    return {
      id,
      src: `/gallery/${id}.jpg`,
      category,
      alt: `Program image ${id}`
    };
  });

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const displayedImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const openLightbox = (image: GalleryImage): void => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = (): void => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = useCallback((direction: 'next' | 'prev'): void => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex: number;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  }, [selectedImage, filteredImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages, navigateImage]);

  const filterCategories: FilterCategory[] = ['all', 'training', 'events', 'outreach'];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Gallery</h1>
        <p className={styles.subtitle}>
          Moments from training sessions, events, and activities.
        </p>
      </header>

      {/* Filter Bar - Only shown if needed */}
      {images.length > 12 && (
        <div className={styles.filterWrapper}>
          <div className={styles.filterBar}>
            {filterCategories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setVisibleCount(12);
                }}
                className={`${styles.filterButton} ${filter === cat ? styles.filterButtonActive : ''}`}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Image Grid */}
      <main className={styles.main}>
        <div className={styles.grid}>
          {displayedImages.map((image) => (
            <button
              key={image.id}
              onClick={() => openLightbox(image)}
              className={styles.gridItem}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                loading="lazy"
                className={styles.gridImage}
              />
            </button>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className={styles.loadMoreWrapper}>
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className={styles.loadMoreButton}
            >
              Load More
            </button>
          </div>
        )}
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className={styles.closeButton}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className={styles.prevButton}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className={styles.nextButton}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className={styles.lightboxImage}
              priority
            />
            <p className={styles.lightboxCaption}>
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;