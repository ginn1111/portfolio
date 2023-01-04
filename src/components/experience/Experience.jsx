import React from 'react';
import Theme from '../ui/theme/Theme';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <Theme>
      <div id="Experience" className={styles.experience}>
        <section className={styles.experienceSection}>
          <div className={styles.circle}> +4</div>
          <div>
            <span> Year </span>
            <span> Student</span>
          </div>
        </section>
        <section className={styles.experienceSection}>
          <div className={styles.circle}>+3</div>
          <div>
            <span> Completed </span>
            <span> Project</span>
          </div>
        </section>
        <section className={styles.experienceSection}>
          <div className={styles.circle}>3.52</div>
          <div>
            <span> My </span>
            <span> GPA </span>
          </div>
        </section>
      </div>
    </Theme>
  );
};

export default Experience;
