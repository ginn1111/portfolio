import React from 'react';
import styles from './Typography.module.css';
import Theme from '../theme/Theme';

const Typography = ({ title, subTitle, detail }) => {
  return (
    <Theme>
      <div className={styles.servicesAwesome}>
        <span>{title}</span>
        <span>{subTitle}</span>
        <span>{detail}</span>
      </div>
    </Theme>
  );
};

export default Typography;
