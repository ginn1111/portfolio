import React from 'react';
import styles from './Footer.module.css';
import { UilEnvelopeAlt, UilMobileAndroid } from '@iconscout/react-unicons';
import useResponsive from '../../hooks/useResponsive';

const Footer = () => {
  const { isMobile } = useResponsive();
  const iconSize = isMobile ? '30' : '40';
  return (
    <div className={styles.footerContainer}>
      <div className={styles.information}>
        <a href="mailto:vanthuanjw@gmail.com">
          <UilEnvelopeAlt size={iconSize} />
          vanthuanjw@gmail.com
        </a>
        <a href="tel:84365338185">
          <UilMobileAndroid size={iconSize} />
          0365338185
        </a>
      </div>
    </div>
  );
};

export default Footer;
