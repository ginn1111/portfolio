import React from 'react';
import styles from './Card.module.css';
import Theme from '../theme/Theme';

const Card = ({ emoji, title, message, position }) => {
  const positionStyles = {
    top: `${position?.top ?? 'unset'}`,
    left: `${position?.left ?? 'unset'}`,
    bottom: `${position?.bottom ?? 'unset'}`,
    right: `${position?.right ?? 'unset'}`,
  };
  return (
    <Theme>
      <div className={styles.card} style={positionStyles}>
        <img className={styles.emoji} src={emoji} alt="emoji" />
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.message}>{message}</p>
        {/* <button className={styles.button}>Learn more</button> */}
      </div>
    </Theme>
  );
};

export default Card;
