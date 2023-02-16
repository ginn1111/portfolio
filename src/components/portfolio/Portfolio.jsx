import React from 'react';
import styles from './Portfolio.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PortfolioProject from '../../img/portfolio.png';
import ChatApp from '../../img/web-chat.png';
import EmployeeManager from '../../img/employee-manager.png';
import Theme from '../ui/theme/Theme';
import { Autoplay, Pagination } from 'swiper';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  return (
    <div id="Portfolio" className={styles.portfolio}>
      <div className={styles.headSection}>
        <Theme>
          <h3>Recent Projects</h3>
        </Theme>
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <PortfolioItem
              link="https://github.com/ginn1111/chat-app"
              title="Web chat"
              picture={ChatApp}
              demoLink="https://real-time-chat-peach.vercel.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioItem
              link="https://github.com/ginn1111/portfolio"
              title="Portfolio"
              picture={PortfolioProject}
              demoLink="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioItem
              link="https://github.com/ginn1111/employee-manage"
              title="Employee management"
              picture={EmployeeManager}
              demoLink="https://www.youtube.com/watch?v=JQLCQvBjVck"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
