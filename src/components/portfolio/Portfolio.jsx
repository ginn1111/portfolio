import React from 'react';
import useResponsive from '../../hooks/useResponsive';
import styles from './Portfolio.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PortfolioProject from '../../img/portfolio.jpg';
import ChatApp from '../../img/chat-app.jpg';
import EmployeeManager from '../../img/employee-manager.jpg';
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
            <img src={ChatApp} alt="chat-app" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={PortfolioProject} alt="portfolio-project" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={EmployeeManager} alt="employee-manager" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
