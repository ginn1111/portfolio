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
          <small>
            vanthuanjw@gmail.com
          </small>
        </a>
        <a href="tel:84365338185">
          <UilMobileAndroid size={iconSize} />
          <small>
            0365338185
          </small>
        </a>
      </div>
    </div>
  );
};

export default Footer;
