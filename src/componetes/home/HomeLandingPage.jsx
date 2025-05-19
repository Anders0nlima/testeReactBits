import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './HomeLandingPage.module.css';

import videoHome from '../../assets/videoDesign.mp4'

export const HomeLandingPage = ({ 
  videoSrc = videoHome,
  titleText = "Torne sua imaginação real",
  descriptionText = "A nova forma de produzir conteúdo cinematográfico",
  watchButtonText = "Assistir"
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    if (showVideoModal) {
      const scrollbarWidth = window.innerWidth - html.clientWidth;
      
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;
      html.classList.add(styles.noScroll);
      
      if (modalVideoRef.current) {
        modalVideoRef.current.play();
      }
    } else {
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.paddingRight = '';
      html.classList.remove(styles.noScroll);
      window.scrollTo(0, scrollY);
      
      if (modalVideoRef.current) {
        modalVideoRef.current.pause();
      }
    }

    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.paddingRight = '';
      html.classList.remove(styles.noScroll);
      window.scrollTo(0, scrollY);
    };
  }, [showVideoModal]);

  const toggleVideoModal = () => {
    setShowVideoModal(!showVideoModal);
  };

  return (
    <div className={styles.landingPageContainer}>
      {/* Seção principal com vídeo de fundo */}
      <div className={styles.heroSection}>
        <div className={styles.videoContainer}>
          <video
            ref={videoRef}
            className={styles.backgroundVideo}
            src={videoSrc}
            loop
            muted
            autoPlay
            playsInline
          />
          <div className={styles.videoOverlay} />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{titleText}</h1>
          <p className={styles.heroDescription}>{descriptionText}</p>
          <div className={styles.arrowDownContainer}>
          <div className={styles.animatedCircle}>
          <svg className={styles.arrowDown} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
        </div>

        {/* Botão de assistir no canto inferior direito */}
        <button className={styles.watchButton} onClick={toggleVideoModal}>
          <FontAwesomeIcon icon={faPlay} className={styles.playIcon} />
          <span>{watchButtonText}</span>
        </button>
      </div>

      {/* Modal do vídeo */}
      {showVideoModal && (
        <div className={styles.videoModal}>
          <div className={styles.videoModalBackdrop} onClick={toggleVideoModal} />
          <div className={styles.videoModalContent}>
            <video
              ref={modalVideoRef}
              className={styles.modalVideo}
              src={videoHome}
              controls
              autoPlay
            />
            <button 
              className={styles.closeButton} 
              onClick={toggleVideoModal}
              aria-label="Fechar vídeo"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};