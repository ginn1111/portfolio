import React from 'react';
import styles from './Footer.module.css';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.information}>
        <span>vanthuanjw@gmail.com</span>
        <div className={styles.contacts}>
          <a href="https://github.com/ginn1111" target="blank">
            <Github color="#fff" size="6rem" />
          </a>
          <a href="https://www.facebook.com/vanthuan1309" target="blank">
            <Facebook color="#fff" size="6rem" />
          </a>
          <a>
            <Linkedin color="#fff" size="6rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
