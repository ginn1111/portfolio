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
import { getAvatar } from '../services/firebase';
import ContactItem from './ContactItem';
import AvatarPlaceholder from '../../img/avatar-placeholder.png';
import LoadingSpinner from '../ui/loading/LoadingSpinner';

const Intro = () => {
  const motionTransition = { stiffness: 60, damping: 10, type: 'spring' };
  const { isTablet, isMobile } = useResponsive();
  const [loading, setLoading] = React.useState(true);

  const avatarRef = React.useRef();

  React.useEffect(() => {
    let url;
    const getAvatarSuccessHandler = (blob) => {
      setLoading(false);
      url = URL.createObjectURL(blob);
      avatarRef.current.src = url;
    }
    const getAvatarFailedHandler = () => {
      setLoading(false);
      avatarRef.current.src = AvatarPlaceholder;
    }

    getAvatar(getAvatarSuccessHandler, getAvatarFailedHandler);

    return () => URL.revokeObjectURL(url);
  }, []);

  console.log(loading)
  const introRightSection = (
    <section className={styles.introRight}>
      <div className={styles.introImage}>
        <div className={styles.imageContainer}>
          {loading && <LoadingSpinner />}
          {!loading &&
            <img
              alt="avatar"
              ref={avatarRef}
            />
          }
        </div>
        <FloatingDiv
          whileInView={{
            left: isTablet ? '28%' : isMobile ? '25%' : '60%',
          }}
          transition={motionTransition}
          img={Crown}
          txt1={'ReactJS'}
          txt2={'NextJS'}
          position={{
            top: isTablet ? '13%' : isMobile ? '5%' : '0%',
            left: '100%',
          }}
        />
        <FloatingDiv
          whileInView={{
            left: '-10%',
          }}
          transition={motionTransition}
          img={thumbup}
          txt1={'JavaScript'}
          txt2={'TypeScript'}
          position={{
            left: '-50%',
            top: isTablet ? '70%' : '75%',
          }}
        />
      </div>
      <motion.img
        initial={{ left: isMobile ? '70%' : '-50%' }}
        whileInView={{
          left: isTablet ? '-40%' : isMobile ? '45%' : '-25%',
        }}
        transition={{
          ...motionTransition,
          stiffness: 50,
          damping: 5,
        }}
        src={glassesimoji}
        alt="glasses emoji"
      />

      <Blur
        backgroundColor="var(--purple)"
        top="20%"
        right="10%"
        filterBlur="10rem"
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
            subTitle="Phạm Văn Thuận,"
            detail="Front-end developer (fresher level), who is eager with studying and persist!"
          />
        </div>
        <Link
          to="Contact"
          className={clsx('button', styles.hireMeBtn)}
          smooth={true}
        >
          Hire me
        </Link>
        <div className={styles.introIcons}>
          <ContactItem
            url="https://www.linkedin.com/in/ph%E1%BA%A1m-v%C4%83n-thu%E1%BA%ADn-47670a201/"
            icon={Linkedin}
          />
          <ContactItem url="https://github.com/ginn1111" icon={Github} />
          <ContactItem
            url="https://www.facebook.com/vanthuan1309"
            icon={Instagram}
          />
        </div>
      </section>
      {introRightSection}
    </div>
  );
};

export default Intro;
