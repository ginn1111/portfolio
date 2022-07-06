import React from 'react';
import useResponsive from '../../hooks/useResponsive';
import styles from './Portfolio.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Hoc from '../../img/hoc.png';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import MusicApp from '../../img/musicapp.png';
import Theme from '../ui/theme/Theme';

const Portfolio = () => {
  const responsiveStatus = useResponsive();
  return (
    <div id="Portfolio" className={styles.portfolio}>
      <div className={styles.headSection}>
        <Theme>
          <h3>Recent Project</h3>
        </Theme>
        <span>Portfolio</span>
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          // slidesPerView={}
          spaceBetween={30}
          grabCursor={true}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <img src={Hoc} alt="HOC" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={Ecommerce} alt="Ecommerce" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={MusicApp} alt="MusicApp" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={Sidebar} alt="Sidebar" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
