import React from 'react';
import { Link } from 'react-scroll';
import useResponsive from '../../hooks/useResponsive';
import clsx from 'clsx';
import styles from './Intro.module.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../floating-div/FloatingDiv';
import Blur from '../../components/ui/blur/Blur';
import Typography from '../ui/typography/Typography';
import { motion } from 'framer-motion';

const Intro = () => {
  const motionTransition = { duration: 2, type: 'spring' };
  const responsiveStatus = useResponsive();
  const introRightSection = (
    <section className={styles.introRight}>
      <div className={styles.introImage}></div>
      <motion.img
        initial={{ left: '-50%' }}
        whileInView={
          responsiveStatus === 'MOBILE'
            ? { top: '-22rem', left: '-60%' }
            : { left: '-25%' }
        }
        transition={motionTransition}
        src={glassesimoji}
        alt="glasses emoji"
      />
      <FloatingDiv
        initial={{ left: '100%' }}
        whileInView={
          responsiveStatus === 'MOBILE'
            ? { top: '-15rem', left: '25%' }
            : responsiveStatus === 'TABLET'
            ? { left: '45%' }
            : { left: '60%' }
        }
        transition={motionTransition}
        img={Crown}
        txt1={'ReactJS'}
        txt2={'Developer'}
        position={
          responsiveStatus === 'MOBILE'
            ? { top: '-20rem', left: '25%' }
            : responsiveStatus === 'TABLET'
            ? { top: '35%', left: '100%' }
            : { top: '10%', left: '100%' }
        }
      />
      <FloatingDiv
        initial={{ left: '10%' }}
        whileInView={
          responsiveStatus === 'MOBILE'
            ? { left: '-40%' }
            : responsiveStatus === 'TABLET'
            ? { left: '-20%' }
            : { left: '-5%' }
        }
        transition={motionTransition}
        img={thumbup}
        txt1={'Spring'}
        txt2={'MVC'}
        position={
          responsiveStatus === 'TABLET'
            ? { top: '55%', left: '10%' }
            : { top: '67%', left: '10%' }
        }
      />
      <Blur
        backgroundColor="var(--purple)"
        top="20%"
        right="-10%"
        filterBlur="5rem"
      />
      <Blur
        backgroundColor="#b3caff"
        top="65%"
        left="-10%"
        filterBlur="10rem"
      />
    </section>
  );
  return (
    <div id="Home" className={styles.intro}>
      <section className={styles.introLeft}>
        <div className={styles.introName}>
          <Typography
            title="Hi! I am"
            subTitle="Phạm Văn Thuận"
            detail="Front-end developer (fresher level), who is eager with studying and persist!"
          />
        </div>
        <button className={clsx('button', styles.hireMeBtn)}>Hire me</button>
        <div className={styles.introIcons}>
          <a href="https://github.com/ginn1111">
            <img src={Github} alt="github" />
          </a>
          <img src={Linkedin} alt="linkedin" />
          <a href="https://www.facebook.com/vanthuan1309">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </section>
      {introRightSection}
    </div>
  );
};

export default Intro;
