import React from 'react';
import useResponsive from '../../hooks/useResponsive';
import styles from './Services.module.css';
import clsx from 'clsx';
import Blur from '../../components/ui/blur/Blur';
import Card from '../../components/ui/card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from '../../other/cv.pdf';
import Typography from '../ui/typography/Typography';
import { motion } from 'framer-motion';

const Services = () => {
  const responsiveStatus = useResponsive();
  const motionTransition = { duration: 1, type: 'spring' };
  return (
    <div id="Services" className={styles.services}>
      <section className={styles.servicesLeft}>
        <Typography title="My Awesome" subTitle="Services" />
        <a href={Resume} download>
          <button className={clsx('button', styles.downloadCVBtn)}>
            Download CV
          </button>
        </a>
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
          style={{
            position: responsiveStatus === 'MOBILE' ? 'static' : 'absolute',
            height: '100%',
          }}
          initial={{ left: '100%' }}
          whileInView={{ left: '50%' }}
          transition={motionTransition}
        >
          <Card
            emoji={HeartEmoji}
            title="Language"
            message="HTML5, CSS3, Javascript, Java, SQL, Typescript(basic)"
            position={{ top: '-5%' }}
          />
        </motion.div>
        <motion.div
          style={{
            position: responsiveStatus === 'MOBILE' ? 'static' : 'absolute',
            height: '100%',
          }}
          initial={{ left: '-50%' }}
          whileInView={{ left: '-20%' }}
          transition={motionTransition}
        >
          <Card
            emoji={Glasses}
            title="Framework, Library"
            message="ReactJS, Spring MVC, Tailwindcss, Redux "
            position={{ top: '40%', left: '50%' }}
          />
        </motion.div>
        <motion.div
          style={{
            position: responsiveStatus === 'MOBILE' ? 'static' : 'absolute',
            height: '100%',
          }}
          initial={{ left: '`100%' }}
          whileInView={
            responsiveStatus === 'TABLET' ? { left: '50%' } : { left: '40%' }
          }
          transition={{ type: 'spring', duration: 2 }}
        >
          <Card
            emoji={Humble}
            title="Other"
            message="ChartJS, Jquery, Github, MS SQL Server"
            position={
              responsiveStatus === 'TABLET'
                ? { top: '50%', left: '50%' }
                : { top: '55%', left: '40%' }
            }
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
