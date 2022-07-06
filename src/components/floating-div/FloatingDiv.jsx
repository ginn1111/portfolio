import styles from './FloatingDiv.module.css';
import { motion } from 'framer-motion';

const FloatingDiv = ({
  img,
  txt1,
  txt2,
  position,
  initial,
  whileInView,
  transition,
}) => {
  const classes = {
    top: `${position?.top ?? 'unset'}`,
    left: `${position?.left ?? 'unset'}`,
    boxShadow: '0 .5rem 2rem .5rem #00000016 ',
  };
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      style={classes}
      className={styles.floatingDiv}
    >
      <img src={img} alt="" />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </motion.div>
  );
};

export default FloatingDiv;
