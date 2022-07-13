import React from 'react';
import clsx from 'clsx';
import Typography from '../ui/typography/Typography';
import styles from './Works.module.css';
// import Amazon from '../../img/amazon.png';
// import Fiverr from '../../img/fiverr.png';
// import Shopify from '../../img/Shopify.png';
// import Facebook from '../../img/Facebook.png';
// import UpWork from '../../img/Upwork.png';
import { motion } from 'framer-motion';

const Works = () => {
  return (
    <div className={styles.works}>
      <section className={styles.left}>
        <Typography
          title="Work for all these"
          subTitle="Brands & Clients"
          detail="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi laudantium odio reprehenderit commodi nihil qui. Eligendi hic omnis iusto maiores id excepturi, porro explicabo facere recusandae in! Tempore, vitae.
"
        />
        <button className={clsx('button', styles.button)}>Hire me</button>
      </section>
      <section className={styles.right}>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          // viewport={{margin: '-40px'}}
          transition={{ duration: 3.5, type: 'spring' }}
          className={styles.mainCircle}
        >
          {/* <div className={styles.secCircle}>
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className={styles.secCircle}>
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className={styles.secCircle}>
            <img src={UpWork} alt="UpWork" />
          </div>
          <div className={styles.secCircle}>
            <img src={Facebook} alt="FaceBook" />
          </div>
          <div className={styles.secCircle}>
            <img src={Fiverr} alt="Fiverr" />
          </div> */}
        </motion.div>
        <div className={styles.misc1}></div>
        <div className={styles.misc2}></div>
      </section>
    </div>
  );
};

export default Works;
