import React from 'react';
import useResponsive from '../../hooks/useResponsive';
import styles from './Services.module.css';
import clsx from 'clsx';
import Blur from '../../components/ui/blur/Blur';
import Card from '../../components/ui/card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Typography from '../ui/typography/Typography';
import { motion } from 'framer-motion';
import { getCV } from './firebase';

const Services = () => {
  const { isTablet } = useResponsive();

  function downloadHandler() {
    getCV((blob) => {
      const anchor = document.createElement('a');
      const url = URL.createObjectURL(blob);
      anchor.setAttribute('href', url);
      anchor.setAttribute('download', 'Intern_FE_PhamVanThuan.pdf');
      anchor.click();
      URL.revokeObjectURL(url);
    });
  }

  const motionTransition = { stiffness: 40, damping: 7, type: 'spring' };

  return (
    <div id="Services" className={styles.services}>
      <section className={styles.servicesLeft}>
        <Typography
          title="My Awesome"
          subTitle="Services"
          detail="Now, I am a 4th student at Post and Telecommunications Institute of Technology, my major is software engineering."
        />
        <button
          onClick={downloadHandler}
          className={clsx('button', styles.downloadCVBtn)}
        >
          Download CV
        </button>
        <Blur
          backgroundColor="#abf1ff94"
          top="70%"
          left="-20%"
          filterBlur="7rem"
        />
      </section>
      <section className={styles.servicesRight}>
        <Blur
          backgroundColor="var(--blueCard)"
          top="10%"
          left="-10%"
          filterBlur="7rem"
        />
        <Blur
          backgroundColor="var(--purple)"
          top="30%"
          right="15%"
          filterBlur="7rem"
        />
        <motion.div
          initial={{ left: '100%' }}
          whileInView={{ left: isTablet ? '20%' : '30%' }}
          transition={motionTransition}
          className={styles.serviceCard}
        >
          <Card
            emoji={HeartEmoji}
            title="Language"
            message="HTML, CSS, JavaScript, Java, SQL, TypeScript"
            position={{ top: '5rem' }}
          />
        </motion.div>
        <motion.div
          className={styles.serviceCard}
          initial={{ left: '-100%' }}
          whileInView={{ left: isTablet ? '-90%' : '-30%' }}
          transition={motionTransition}
        >
          <Card
            emoji={Glasses}
            title="Framework, Library"
            message="ReactJS, Spring MVC, TailwindCSS, Redux, React Hook Form, React Query"
            position={{ top: isTablet ? '35rem' : '25rem' }}
          />
        </motion.div>
        <motion.div
          className={styles.serviceCard}
          initial={{ left: '100%' }}
          whileInView={{
            left: isTablet ? '20%' : '35%',
          }}
          transition={{ ...motionTransition, stiffness: 60 }}
        >
          <Card
            emoji={Humble}
            title="Other"
            message="ChartJS, Jquery, Github, MS SQL Server"
            position={{ top: isTablet ? '40rem' : '40rem' }}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
