import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './styles.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Contatos</h2>

        <div className={styles.infoItem}>
          <LocationOnIcon className={styles.icon} />
          <div>
            <h3 className={styles.subtitle}>Localização</h3>
            <p className={styles.text}>
              São José dos Campos - SP              
            </p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <WhatsAppIcon className={styles.icon} />
          <div>
            <h3 className={styles.subtitle}>WhatsApp:</h3>
            <p className={styles.text}><a href="https://wa.me/5512992436823" target="_blank">(12) 9 9243-6823</a></p>
          </div>
        </div>

        <div className={styles.socialContainer}>
          <h3 className={styles.socialTitle}>Nossas Redes Sociais:</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/jhonatas-oliveira-andrade-/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <LinkedInIcon className={styles.socialIcon} />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/jhonatas.dev/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <InstagramIcon className={styles.socialIcon} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;