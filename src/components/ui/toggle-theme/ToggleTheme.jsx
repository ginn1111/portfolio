import React from 'react';
import useTheme from '../../../hooks/useTheme';
import styles from './ToggleTheme.module.css';
import clsx from 'clsx';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';

const ToggleTheme = () => {
  const [isMoon, onToggleTheme] = useTheme();
  return (
    <div onClick={onToggleTheme} className={styles.toggleWrapper}>
      <div className={styles.toggle}>
        <Sun size="2rem" />
        <Moon size="2rem" />
      </div>
      <div
        className={clsx(styles.switch, {
          [styles.moon]: isMoon,
          [styles.sun]: !isMoon,
        })}
      ></div>
    </div>
  );
};

export default ToggleTheme;
