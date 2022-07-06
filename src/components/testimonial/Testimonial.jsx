import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import styles from './Testimonial.module.css';
import ProfilePic1 from '../../img/profile1.jpg';
import ProfilePic2 from '../../img/profile2.jpg';
import ProfilePic3 from '../../img/profile3.jpg';
import ProfilePic4 from '../../img/profile4.jpg';
import Blur from '../ui/blur/Blur';
import Theme from '../ui/theme/Theme';

const Testimonial = () => {
  const clients = [
    {
      img: ProfilePic1,
      review:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, est tempore porro placeat molestiae minus saepe amet quia ut, cupiditate impedit quos excepturi quo fugiat earum ducimus quisquam labore aperiam magni autem hic omnis provident quas? Et fugiat hic quo. Blanditiis quaerat veritatis natus quia inventore magni molestias molestiae impedit.  ',
    },
    {
      img: ProfilePic2,
      review:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, est tempore porro placeat molestiae minus saepe amet quia ut, cupiditate impedit quos excepturi quo fugiat earum ducimus quisquam labore aperiam magni autem hic omnis provident quas? Et fugiat hic quo. Blanditiis quaerat veritatis natus quia inventore magni molestias molestiae impedit.  ',
    },
    {
      img: ProfilePic3,
      review:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, est tempore porro placeat molestiae minus saepe amet quia ut, cupiditate impedit quos excepturi quo fugiat earum ducimus quisquam labore aperiam magni autem hic omnis provident quas? Et fugiat hic quo. Blanditiis quaerat veritatis natus quia inventore magni molestias molestiae impedit.  ',
    },
    {
      img: ProfilePic4,
      review:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, est tempore porro placeat molestiae minus saepe amet quia ut, cupiditate impedit quos excepturi quo fugiat earum ducimus quisquam labore aperiam magni autem hic omnis provident quas? Et fugiat hic quo. Blanditiis quaerat veritatis natus quia inventore magni molestias molestiae impedit.  ',
    },
  ];
  return (
    <div id="Testimonial" className={styles.testimonialWrapper}>
      <div className={styles.heading}>
        <Theme>
          <span>Clients alway get </span>
        </Theme>
        <span>Exceptional Work </span>
        <Theme>
          <span>form me...</span>
        </Theme>
      </div>
      <Blur
        top="10%"
        left="0%"
        backgroundColor={'var(--blueCard)'}
        filterBlur="5rem"
      />
      <Blur
        bottom="15%"
        right="10%"
        backgroundColor={'var(--purple)'}
        filterBlur="5rem"
      />
      <Swiper
        grabCursor={true}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={styles.testimonialCard}>
                <img src={client.img} alt={`client${index}`} />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default Testimonial;
