import React from 'react';
import clsx from 'clsx';
import Typography from '../ui/typography/Typography';
import styles from './Works.module.css';
import GeekupLogo from '../../img/geekup-logo.svg'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Works = () => {
  return (
    <div id="Works" className={styles.works}>
      <section className={styles.left}>
        <Typography
          title="Work for all these"
          subTitle="Brands & Clients"
          detail="Join Geek Internship (GI Winter 2022) \n Build branding website depend on eCommerce platform for Geek up"
        />
        <Link to="Contact" smooth className={clsx('button', styles.button)}>Hire me</Link>
      </section>
      <section className={styles.right}>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 3.5, type: 'spring' }}
          className={styles.mainCircle}
        >
          <a href="https://geekup.vn/" target="blank">
            <div className={styles.secCircle}>
              <img src={GeekupLogo} alt="Geekup" />
            </div>
          </a>
        </motion.div>
        <div className={styles.misc1}></div>
        <div className={styles.misc2}></div>
      </section>
    </div>
  );
};

export default Works;
